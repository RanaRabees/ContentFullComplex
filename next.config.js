/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  env: {
    CONTENTFUL_SPACE_ID: "3n6jevk7b4fh",
    CONTENTFUL_ACCESS_KEY: "BjkgNMEXO27cipdpAVcQcUc6Rs4LsvGfULATZ_cix10"
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.ctfassets.net',
        port: '',
      },
    ],
  },
}

module.exports = nextConfig