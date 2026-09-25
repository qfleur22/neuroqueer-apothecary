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
      {
        source: '/library/so-you-think-youre-trans',
        destination: '/library/transition-guide-now-what',
        permanent: true,
      },
      {
        source: '/store/so-you-think-youre-trans',
        destination: '/transition',
        permanent: true,
      },
      {
        source: '/library/how-to-create-a-medical-binder',
        destination: '/library/medical-binder-guide',
        permanent: true,
      },
      {
        source: '/library/custom-medical-binder-creation',
        destination: '/library/custom-medical-binder',
        permanent: true,
      },
      {
        source: '/library/how-to-make-a-care-plan',
        destination: '/library/care-plan-guide',
        permanent: true,
      },
      {
        source: '/library/care-plan-creation-workshop-kit',
        destination: '/library/care-plan-workshop-kit',
        permanent: true,
      },
      {
        source: '/library/know-your-rights-bodily-autonomy-boundaries-consent',
        destination: '/library/know-your-rights',
        permanent: true,
      },
      {
        source: '/library/know-your-rights-workshop-presentation-kit',
        destination: '/library/know-your-rights-workshop',
        permanent: true,
      },
    ]
  },
}

export default nextConfig
