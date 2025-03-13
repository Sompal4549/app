/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "image.tmdb.org",
      },
    ],
  },
};
const withPWA = require("next-pwa")({
  dest: "public",
});
module.exports = withPWA({ nextConfig });
