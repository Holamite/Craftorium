// next.config.mjs
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
        pathname: "/dxswouxj5/**", // Adjust this based on your actual Cloudinary path
      },
    ],
  },
};

export default nextConfig;
