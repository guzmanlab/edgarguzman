const packages = [
  'eslint',
  'next',
  'tailwind',
  'typescript'
];

/** @type {import("next").NextConfig[]} * */
export const nextJsConfig = {
  reactStrictMode: true,
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  transpilePackages: packages.map(module => `@edgarguzman/${module}`)
};
