import { neon, neonConfig } from "@neondatabase/serverless";
import { config } from "dotenv";
import { drizzle as neonDrizzle } from "drizzle-orm/neon-http";
import path from "node:path";
import ws from "ws";

import { DrizzleQueryLogger } from "../../lib/src/drizzle-query-logger";
import * as schema from "./schema";

neonConfig.webSocketConstructor = ws;

config({
    path: path.resolve(__dirname, "../.env"),
});

console.log("DATABASE_URL is set?", !!process.env.DATABASE_URL);

const url: string = process.env.DATABASE_URL!

if (!process.env.DATABASE_URL) throw new Error("DATABASE_URL is not set");

export const drizzle = neonDrizzle(neon(url), {
  schema,
  casing: "snake_case",
  logger: new DrizzleQueryLogger(),
});
