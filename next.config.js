/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            
            protocol: 'https',
            hostname: 'images-na.ssl-images-amazon.com',
            
          },
        ],
      },
}
module.exports = {
  async rewrites() {
      return [
        {
          source: '/:path*',
          destination: 'http://15.165.74.54:3000/?page=1/:path*',
        },
      ]
    },
};
module.exports = nextConfig
