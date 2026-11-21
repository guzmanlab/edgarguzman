import { nextJsConfig } from "@edgarguzman/next";
import { loadEnvConfig } from "@next/env";
import type { NextConfig } from "next";
import path from "node:path";

loadEnvConfig(
    path.resolve(process.cwd(), "../../packages/drizzle"),
);

const nextConfig: NextConfig = {
  ...nextJsConfig,
};

export default nextConfig;
