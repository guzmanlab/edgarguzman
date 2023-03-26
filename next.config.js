// const config = require('./src/lib/config/index');

/** @type {import('next').NextConfig} */
module.exports = {
  // ...config.env.next

  reactStrictMode: true,
  swcMinify: true,
  i18n: {
    locales: ['en'],
    defaultLocale: 'en',
  },
  images: {
    domains: [
      'pbs.twimg.com',
      'github.com',
      'raw.githubusercontent.com',
      'avatars.githubusercontent.com',
      'lh3.googleusercontent.com',
      'cdn.dribbble.com',
      'images.unsplash.com',
      'cdn.shopify.com',
    ],
  },
};