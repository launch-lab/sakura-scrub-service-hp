import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // NOTE: LAN 内の別デバイス（スマホ実機確認など）から dev サーバーにアクセスする場合に必要
  allowedDevOrigins: ["192.168.1.12", "*.local"],
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.microcms-assets.io",
      },
    ],
  },
};

export default nextConfig;
