import { defineConfig } from "drizzle-kit";

export default defineConfig({
  strict: true,
  verbose: true,
  out: "src/migration",
  schema: "src/schema/*",
  dialect: "postgresql",
  // casing: "snake_case",
  dbCredentials: {
    url: process.env.DATABASE_URL!,
  },
  casing: "snake_case",
});
