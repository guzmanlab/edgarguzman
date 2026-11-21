import { config } from "dotenv";
import { defineConfig } from "drizzle-kit";
import path from "node:path";

import { dburl } from "./src/environment";

config({
    path: path.resolve(__dirname, ".env"),
});

export default defineConfig({
  strict: true,
  verbose: true,
  out: "src/migration",
  schema: "src/schema/*",
  dialect: "postgresql",
  casing: "snake_case",
  dbCredentials: {
    url: dburl,
  },
});
