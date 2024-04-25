/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "fakestoreapi.com",
        pathname: "**",
        port: "",
      },
    ],
    domains: ["lh3.googleusercontent.com"],
  },
};

export default nextConfig;
