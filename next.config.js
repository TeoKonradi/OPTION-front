/** @type {import('next').NextConfig} */

const destinationHost = "https://";
const nextConfig = {
  images: {
    domains: ["*"],
    remotePatterns: [
      {
        hostname: "**",
        protocol: "https",
      },
    ],
  },
  output: "standalone",
  async rewrites() {
    return [
      // All routes from the LP
      {
        destination: "/:path*",
        source: "/:path*",
      },

      // Static files of the App
      {
        destination: `${destinationHost}/favicon.ico`,
        source: "/favicon.ico",
      },
      {
        destination: `${destinationHost}/icon.png`,
        source: "/icon.png",
      },
      {
        destination: `${destinationHost}/static/:path*`,
        source: "/static/:path*",
      },
    ];
  },
};

module.exports = nextConfig;
