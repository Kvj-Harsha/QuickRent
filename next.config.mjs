const nextConfig = {
  reactStrictMode: true, // Enables React Strict Mode
  swcMinify: true, // Enables SWC-based minification for faster builds
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '', // Empty because Unsplash doesn't use a specific port
        pathname: '/**', // Allows all paths under this hostname
      },
      {
        protocol: 'https',
        hostname: 'assets.aceternity.com',
        port: '', // Empty because the domain doesn't use a specific port
        pathname: '/**', // Allows all paths under this hostname
      },
    ],
  },
  experimental: {
    appDir: true, // Enable Next.js App Router (if you're using it)
  },
};

export default nextConfig;
