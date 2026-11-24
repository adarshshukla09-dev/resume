import { posts } from "@/db/schema";
import { db } from "@/db";

import { education, workExperience, projects, hackathons } from "@/db/schema";

import { asc, desc, eq } from "drizzle-orm";

export async function getEducation() {
  return db.select().from(education).orderBy(asc(education.sortOrder));
}

export async function getWorkExperience() {
  return db
    .select()
    .from(workExperience)
    .orderBy(desc(workExperience.startDate));
}

export async function getProjects() {
  return db.select().from(projects).orderBy(asc(projects.sortOrder));
}

export async function getHackathons() {
  return db.select().from(hackathons).orderBy(desc(hackathons.date));
}

export async function getAllPosts() {
  return db
    .select()
    .from(posts)
    .where(eq(posts.published, true))
    .orderBy(desc(posts.publishedAt));
}

export async function getPostBySlug(slug: string) {
  const result = await db
    .select()
    .from(posts)
    .where(eq(posts.slug, slug))
    .limit(1);

  const post = result[0];

  if (!post || !post.published) {
    return null;
  }

  return post;
}
