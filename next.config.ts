import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    localPatterns: [
      {
        pathname: "/images/**",
        // Cho phép ?v=... khi đổi ảnh cùng tên file (cache bust)
      },
    ],
  },
};

export default nextConfig;
