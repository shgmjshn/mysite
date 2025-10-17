import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { CartProvider } from "@/contexts/CartContext";

// フォントをインポート
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

// モノスペースフォントをインポート
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});
// メタデータを設定
export const metadata: Metadata = {
  title: "ショッピングカート - Next.js",
  description: "Next.jsで作成されたショッピングカートアプリケーション",
};

// ルートレイアウトを設定
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <CartProvider>
          {children}
        </CartProvider>
      </body>
    </html>
  );
}
