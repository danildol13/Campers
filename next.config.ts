import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  

  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'ftp.goit.study',
        pathname: '/img/campers-test-task/**',
      },
      {
        protocol: 'https',
        hostname: 'ac.goit.global',
        pathname: '/fullstack/career/campers/**',
      },
    ],
  },
};

export default nextConfig;