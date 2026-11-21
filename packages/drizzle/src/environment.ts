import { loadEnvConfig } from "@next/env";
import path from "node:path";

loadEnvConfig(
    path.resolve(process.cwd(), "../.env")
);

export const dburl: string = process.env.DATABASE_URL!;

if (!dburl) throw new Error("DATABASE_URL is not set");
