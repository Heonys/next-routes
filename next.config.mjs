/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: false,
    images: {
      remotePatterns: [
        {
          protocol: "https",
          hostname: "cdn-dantats.stunning.kr",
        },
      ],
    },
    webpack: (config) => {
      config.module.rules.push({
        test: /\.svg$/i,
        use: ["@svgr/webpack"],
      });
  
      return config;
    },
  };
  
  export default nextConfig;
  