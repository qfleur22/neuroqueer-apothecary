/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
  },
  async redirects() {
    return [
      {
        source: '/binder',
        destination: '/diy-binder',
        permanent: true,
      },
    ]
  },
}

export default nextConfig
