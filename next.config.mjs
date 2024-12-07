/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'readymadeui.com',
        },
        {
            protocol: 'https',
            hostname: 'kitwind.io',
          },
        {
          protocol: 'https',
          hostname: 'images.pexels.com',
        },
        {
          protocol: 'https',
          hostname: 'www.alrahaprint.com',
        },
        {
          protocol: 'https',
          hostname: 'www.google.com',
        },
        {
          protocol: 'https',  // Ensure to include HTTP for localhost
          hostname: 'pagedone.io',
        },
      ],
    },
  };
  
  export default nextConfig;
  