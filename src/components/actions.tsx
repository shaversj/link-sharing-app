"use server";
import { db, links, sites, users } from "@/db/schema";
import { eq } from "drizzle-orm";

export async function getUserFromDb(email: string) {
  return await db.select().from(users).where(eq(users.email, email)).execute();
}

export async function getLinksById(id: string) {
  return await db.select().from(links).where(eq(links.id, id)).execute();
}

export async function getSiteByName(name: string) {
  return await db.select().from(sites).where(eq(sites.name, name)).execute();
}
