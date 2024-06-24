"use server";
import { db, links, sites, users } from "@/db/schema";
import { eq } from "drizzle-orm";
import { LinkProps } from "@/app/links/[userid]/page";

export async function getUser(id: string) {
  return await db.select().from(users).where(eq(users.id, id)).execute();
}

export async function getSiteByName(name: string) {
  return await db.select().from(sites).where(eq(sites.name, name)).execute();
}

export async function updateLinkById(id: number, name: string, url: string) {
  const link = await db.select().from(links).where(eq(links.id, id)).execute();
  if (link.length > 0) {
    await db.update(links).set({ name, url }).where(eq(links.id, id)).execute();
  } else {
    await db.insert(links).values([{ id, name, url }]).execute();
  }
}

export async function getLinks(id: string) {
  return await db.select().from(links).where(eq(links.userId, id)).execute();
}

export async function saveOrUpdateLinks(userId: string, userDefinedLinks: LinkProps[]) {
  const existingLinks = await getLinks(userId);
  const existingLinkIds = existingLinks.map((link) => link.id);
  const newLinks = userDefinedLinks.filter((link) => !existingLinkIds.includes(link.id));
  const updatedLinks = userDefinedLinks.filter((link) => existingLinkIds.includes(link.id || 0));

  await db
    .insert(links)
    .values(newLinks.map((link) => ({ id: link.id?.toString(), userId: userId, name: link.name, url: link.url })))
    .execute();
  await Promise.all(updatedLinks.map((link) => updateLinkById(link.id || 0, link.name, link.url)));
}

export async function deleteLinkById(id: number) {
  await db.delete(links).where(eq(links.id, id)).execute();
}
