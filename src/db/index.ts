import "dotenv/config";
import * as schema from "./schema/index";
import net from "node:net";
import { neon } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-http";

net.setDefaultAutoSelectFamily(false);

const sql = neon(process.env.DB_URL!);
export const db = drizzle({ client: sql });
