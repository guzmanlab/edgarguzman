import type { NextConfig } from "next";

const packages: string[] = [
  "auth",
  "drizzle",
  "lib",
  "trpc",
  "eslint",
  "next",
  "prettier",
  "tailwind",
  "typescript",
];

export const nextJsConfig: NextConfig = {
  reactStrictMode: true,
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  transpilePackages: packages.map((module) => `@edgarguzman/${module}`),
};
