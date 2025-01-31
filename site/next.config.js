/** @type {import('next').NextConfig} */

const nextConfig = {
  env: {
    name: 'my Kasms',
    description: 'my personal kasms',
    icon: '/img/logo.svg',
    listUrl: 'https://peacetrain.github.io/kasm-registry/',
    contactUrl: 'https://peacetrain.github.io/kasm-registry/issues',
  },
  reactStrictMode: true,
  swcMinify: true,
  basePath: '/kasm-registry/1.0',
  trailingSlash: true,
  images: {
    unoptimized: true,
  }
}

module.exports = nextConfig
