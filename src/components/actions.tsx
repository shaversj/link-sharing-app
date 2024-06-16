"use server";
import { db, users } from "@/db/schema";
import { eq } from "drizzle-orm";

export async function getUserFromDb(email: string) {
  return await db.select().from(users).where(eq(users.email, email)).execute();
}
