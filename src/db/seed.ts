import { db, links } from "@/db/schema";
import { v4 as uuidv4 } from "uuid";

async function deleteLinks() {
  const result = await db.delete(links).execute();
}

async function addLinks() {
  const firstLinks = await db
    .insert(links)
    .values([
      { id: uuidv4(), userId: "92d0bf23-9f8b-42c8-a4e9-1767fc9ff15d", name: "GitHub", url: "https://github.com/shaversj" },
      { id: uuidv4(), userId: "92d0bf23-9f8b-42c8-a4e9-1767fc9ff15d", name: "Twitter", url: "https://twitter.com/shaversj" },
    ])
    .execute();
}

async function main() {
  await deleteLinks();
  // await addLinks();
}

main().then(() => console.log("Seed complete!"));
