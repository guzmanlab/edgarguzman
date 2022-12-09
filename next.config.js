const config = require("./src/lib/config");

/** @type {import('next').NextConfig} */
module.exports = {
  ...config.env.next
};