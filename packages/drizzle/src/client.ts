import { neon } from "@neondatabase/serverless";
import { config } from "dotenv";
import { drizzle as neonDrizzle } from "drizzle-orm/neon-http";

import * as schema from "@drizzle/schema";

config();

const sql = neon(process.env.DATABASE_URL!);

export const drizzle = neonDrizzle(sql, {
  schema,
  casing: "snake_case",
});
