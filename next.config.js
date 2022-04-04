/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: '/admin',
        destination: 'https://nameless-basin-96566.herokuapp.com/',
      }
    ]
  }
}

module.exports = nextConfig
