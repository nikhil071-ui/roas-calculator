import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

// --- SEO METADATA ---
export const metadata: Metadata = {
  title: "Free ROAS Calculator | Calculate Profit & Break-Even 2025",
  description: "Calculate your Return on Ad Spend (ROAS), Break-Even Point, and Net Profit instantly. The best free tool for Facebook Ads, Google Ads, and dropshipping.",
  keywords: "ROAS calculator, Facebook ads profit calculator, break even roas formula, ad spend calculator",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}