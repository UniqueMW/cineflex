/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // remotePatterns: [
    //   {
    //     protocol: 'https',
    //     hostname: 'www.thecocktaildb.com',
    //     port: ''
    //   }
    // ]
    domains: ['image.tmdb.org', 'lh3.googleusercontent.com']
  }
}

module.exports = nextConfig
