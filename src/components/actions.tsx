"use server";

import { accounts, db, links, sessions, SiteLink, sites, users } from "@/db/schema";
import { eq } from "drizzle-orm";
import { v4 as uuidv4 } from "uuid";

export async function getUserByEmail(email: string) {
  return await db.select().from(users).where(eq(users.email, email)).execute();
}

export async function createUserSession(sessionToken: string, userId: string, expires: Date) {
  return await db.insert(sessions).values([{ sessionToken, userId, expires }]).execute();
}

export async function createUser(user: any) {
  return await db.insert(users).values([user]).execute();
}

export async function createAccount(user: any) {
  return await db.insert(accounts).values(user).execute();
}

export async function getUser(id: string) {
  const result = await db.select().from(users).where(eq(users.id, id)).execute();
  if (result.length > 0 && result[0].image && !result[0].image.startsWith("http")) {
    const base64String = result[0].image as string;
    const imageType = base64String.startsWith("data:image/png;base64,") ? "png" : "jpeg";
    result[0].image = `data:image/${imageType};base64,${base64String}`;
  }
  return result.length > 0 ? result[0] : null;
}

export async function getSiteByName(name: string) {
  return await db.select().from(sites).where(eq(sites.name, name)).execute();
}

export async function updateLinkById(id: string, name: string, url: string) {
  const link = await db.select().from(links).where(eq(links.id, id)).execute();
  if (link.length > 0) {
    console.log("Updating link", id, name, url);
    await db.update(links).set({ name, url }).where(eq(links.id, id)).execute();
  } else {
    await db.insert(links).values([{ id, name, url }]).execute();
  }
}

export async function getLinks(userId: string) {
  return await db.select().from(links).where(eq(links.userId, userId)).execute();
}

export async function saveOrUpdateLink(link: SiteLink) {
  const existingLinks = await getLinks(link.userId || "");
  const existingLinkIds = existingLinks.map((existingLink) => existingLink.id);
  if (existingLinkIds.includes(link.id || "")) {
    await updateLinkById(link.id || "", link.name || "", link.url || "");
  } else {
    link.id = uuidv4();
    await db.insert(links).values(link).execute();
  }
}

export async function deleteLinkById(id: string) {
  await db.delete(links).where(eq(links.id, id)).execute();
}

export async function saveImage(imageBlob: Blob, userId: string) {
  const arrayBuffer = await imageBlob.arrayBuffer();
  const base64Image = Buffer.from(arrayBuffer).toString("base64");
  await db.update(users).set({ image: base64Image }).where(eq(users.id, userId)).execute();
}

export async function deleteAllLinks(userId: string) {
  await db.delete(links).where(eq(links.userId, userId)).execute();
}

export async function removeAndUpdateLinks(userId: string, links: SiteLink[]) {
  await deleteAllLinks(userId);
  links.forEach((link) => (link.id = uuidv4()));
  links.forEach((link) => saveOrUpdateLink(link));
}
