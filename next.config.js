/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
    domains: ['image.tmdb.org', 'lh3.googleusercontent.com']
  }
}

module.exports = nextConfig
