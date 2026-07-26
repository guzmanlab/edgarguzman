import { neon, neonConfig } from "@neondatabase/serverless";
import { config } from "dotenv";
import { drizzle as neonDrizzle } from "drizzle-orm/neon-http";
import ws from "ws";

import { DrizzleQueryLogger } from "../../lib/src/drizzle-query-logger";
import * as schema from "./schema";

neonConfig.webSocketConstructor = ws;

config();

const sql = neon(process.env.DATABASE_URL!);

export const drizzle = neonDrizzle(sql, {
  schema,
  casing: "snake_case",
  logger: new DrizzleQueryLogger(),
});
