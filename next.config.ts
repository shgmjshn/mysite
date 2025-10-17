import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  turbopack: {
    // 開発/起動時に上位ディレクトリの lockfile を誤検出しないようにルートを固定
    root: __dirname,
  },
  images: {
    // 環境が image/svg+xml を返す場合に最適化を回避して警告を抑止
    unoptimized: true,
  },
  // 開発時に LAN アクセス (例: 192.168.x.x) を許可して警告を抑止
  allowedDevOrigins: [
    'http://192.168.3.20:3000',
  ],
};

export default nextConfig;
