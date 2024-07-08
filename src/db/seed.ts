import { db, links, sites } from "@/db/schema";
import { v4 as uuidv4 } from "uuid";

async function deleteLinks() {
  const result = await db.delete(links).execute();
}

async function deleteSites() {
  const result = await db.delete(sites).execute();
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

async function addSites() {
  const uploadSites = await db
    .insert(sites)
    .values([
      { name: "GitHub", backgroundColor: "1a1a1a", imageLocation: "/images/icon-github.svg" },
      { name: "Twitter", backgroundColor: "43b7e9", imageLocation: "/images/icon-twitter.svg" },
      { name: "LinkedIn", backgroundColor: "2d68ff", imageLocation: "/images/icon-linkedin.svg" },
      { name: "Codepen", backgroundColor: "black", imageLocation: "/images/icon-codepen.svg" },
      { name: "Codewars", backgroundColor: "8a1a50", imageLocation: "/images/icon-codewars.svg" },
      { name: "Dev.to", backgroundColor: "333333", imageLocation: "/images/icon-devto.svg" },
      { name: "Email", backgroundColor: "black", imageLocation: "/images/icon-email.svg" },
      { name: "Facebook", backgroundColor: "2442ac", imageLocation: "/images/icon-facebook.svg" },
      { name: "FreeCodeCamp", backgroundColor: "302267", imageLocation: "/images/icon-freecodecamp.svg" },
      { name: "Frontend Mentor", backgroundColor: "ffffff", imageLocation: "/images/icon-frontend-mentor.svg" },
      { name: "GitLab", backgroundColor: "eb4a25", imageLocation: "/images/icon-gitlab.svg" },
      { name: "Hashnode", backgroundColor: "0330d1", imageLocation: "/images/icon-hashnode.svg" },
      { name: "Twitch", backgroundColor: "ed3fc8", imageLocation: "/images/icon-twitch.svg" },
      { name: "YouTube", backgroundColor: "ee3939", imageLocation: "/images/icon-youtube.svg" },
    ])
    .execute();
}

async function main() {
  await deleteLinks();
  await deleteSites();
  // await addLinks();
  await addSites();
}

main().then(() => console.log("Seed complete!"));
