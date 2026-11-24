import {
  pgTable,
  serial,
  varchar,
  text,
  uuid,
  date,
  boolean,
  integer,
  timestamp,
  jsonb,
} from "drizzle-orm/pg-core";

// ==========================================
// EDUCATION
// ==========================================

export const education = pgTable("education", {
  id: serial("id").primaryKey(),

  school: varchar("school", { length: 255 }).notNull(),
  href: text("href"),
  degree: varchar("degree", { length: 255 }).notNull(),

  logoUrl: text("logo_url"),

  startDate: date("start_date").notNull(),
  endDate: date("end_date"),

  sortOrder: integer("sort_order").default(0).notNull(),

  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at")
    .defaultNow()
    .$onUpdate(() => new Date())
    .notNull(),
});

// ==========================================
// WORK EXPERIENCE
// ==========================================

export const workExperience = pgTable("work_experience", {
  id: serial("id").primaryKey(),

  company: varchar("company", { length: 255 }).notNull(),

  href: text("href"),

  location: varchar("location", { length: 255 }),

  title: varchar("title", { length: 255 }).notNull(),

  logoUrl: text("logo_url"),

  startDate: date("start_date").notNull(),
  endDate: date("end_date"),

  // Example: ["Freelance", "Remote"]
  badges: text("badges").array().default([]).notNull(),

  description: text("description").notNull(),

  sortOrder: integer("sort_order").default(0).notNull(),

  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at")
    .defaultNow()
    .$onUpdate(() => new Date())
    .notNull(),
});

// ==========================================
// PROJECTS
// ==========================================

export const projects = pgTable("projects", {
  id: serial("id").primaryKey(),

  title: varchar("title", { length: 255 }).notNull(),

  slug: varchar("slug", { length: 255 }).unique().notNull(),

  href: text("href"),

  date: date("date"),

  active: boolean("active").default(true).notNull(),

  description: text("description").notNull(),

  // Example: ["Next.js", "TypeScript", "PostgreSQL"]
  technologies: text("technologies").array().default([]).notNull(),

  // GitHub, Live Demo, etc.
  links: jsonb("links")
    .$type<
      {
        name: string;
        url: string;
        icon?: string;
      }[]
    >()
    .default([])
    .notNull(),

  image: text("image"),

  video: text("video"),

  sortOrder: integer("sort_order").default(0).notNull(),

  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at")
    .defaultNow()
    .$onUpdate(() => new Date())
    .notNull(),
});

export const hackathons = pgTable("hackathons", {
  id: serial("id").primaryKey(),

  title: varchar("title", { length: 255 }).notNull(),

  date: date("date"),

  location: varchar("location", { length: 255 }),

  description: text("description").notNull(),

  image: text("image"),

  links: jsonb("links")
    .$type<
      {
        name: string;
        url: string;
      }[]
    >()
    .default([])
    .notNull(),

  sortOrder: integer("sort_order").default(0).notNull(),

  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at")
    .defaultNow()
    .$onUpdate(() => new Date())
    .notNull(),
});

export const posts = pgTable("posts", {
  id: uuid("id").defaultRandom().primaryKey(),

  title: text("title").notNull(),

  slug: text("slug").notNull().unique(),

  publishedAt: timestamp("published_at", {
    withTimezone: true,
  }).notNull(),

  updatedAt: timestamp("updated_at", {
    withTimezone: true,
  }),

  author: text("author"),

  summary: text("summary").notNull(),

  image: text("image"),

  content: text("content").notNull(),

  published: boolean("published").default(false).notNull(),

  createdAt: timestamp("created_at", {
    withTimezone: true,
  })
    .defaultNow()
    .notNull(),
});
