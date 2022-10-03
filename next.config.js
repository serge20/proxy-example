/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  async rewrites() {
    return {
      beforeFiles: [
        // These rewrites are checked after headers/redirects
        // and before all files including _next/public files which
        // allows overriding page files
        {
          source: "/jbn/:path*",
          destination: "https://jellybabiesnft.com/:path*",
        },
      ],
    };
  },
};

module.exports = nextConfig;
