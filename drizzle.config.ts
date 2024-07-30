import { defineConfig } from "drizzle-kit";

export default defineConfig({
  dialect: "sqlite",
  driver: "turso",
  schema: "./src/db/schema.ts",
  out: "./drizzle",
  dbCredentials: {
    url: process.env.NEXT_TURSO_DB_URL,
    authToken: process.env.NEXT_TURSO_DB_AUTH_TOKEN,
  },
});
