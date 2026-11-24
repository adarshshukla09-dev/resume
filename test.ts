import { db } from "@/db";
import { education } from "@/db/schema";
import { sql, asc } from "drizzle-orm";

async function testDatabase() {
  console.log("\n========== DATABASE TEST ==========\n");

  // TEST 1: Database connection
  try {
    const result = await db.execute(sql`SELECT NOW() AS current_time`);
    console.log("✅ DATABASE CONNECTION: SUCCESS");
    console.log("Result:", result);
  } catch (error) {
    console.error("❌ DATABASE CONNECTION: FAILED");
    console.error(error);
    return;
  }

  // TEST 2: Education table existence
  try {
    const result = await db.execute(sql`
      SELECT EXISTS (
        SELECT FROM information_schema.tables
        WHERE table_name = 'education'
      ) AS table_exists
    `);

    console.log("\n✅ EDUCATION TABLE CHECK:");
    console.log(result);
  } catch (error) {
    console.error("\n❌ EDUCATION TABLE CHECK FAILED:");
    console.error(error);
  }

  // TEST 3: Education table columns
  try {
    const result = await db.execute(sql`
      SELECT column_name, data_type
      FROM information_schema.columns
      WHERE table_name = 'education'
      ORDER BY ordinal_position
    `);

    console.log("\n✅ EDUCATION COLUMNS:");
    console.table(result);
  } catch (error) {
    console.error("\n❌ COLUMN CHECK FAILED:");
    console.error(error);
  }

  // TEST 4: Direct SQL query
  try {
    const result = await db.execute(sql`
      SELECT * FROM education
    `);

    console.log("\n✅ DIRECT SQL QUERY: SUCCESS");
    console.log(result);
  } catch (error) {
    console.error("\n❌ DIRECT SQL QUERY FAILED:");
    console.error(error);
  }

  // TEST 5: Drizzle ORM query
  try {
    const result = await db
      .select()
      .from(education)
      .orderBy(asc(education.sortOrder));

    console.log("\n✅ DRIZZLE ORM QUERY: SUCCESS");
    console.log(result);
  } catch (error) {
    console.error("\n❌ DRIZZLE ORM QUERY FAILED:");
    console.error("Error:", error);

    if (error instanceof Error) {
      console.error("Message:", error.message);
      console.error("Cause:", error.cause);
    }
  }

  console.log("\n========== TEST COMPLETED ==========\n");
}

testDatabase()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error("FATAL ERROR:", error);
    process.exit(1);
  });
