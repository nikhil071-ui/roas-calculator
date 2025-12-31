import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Link from "next/link"; // <--- IMPORT THIS
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

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
      <body className={inter.className}>
        {children}

        {/* --- FOOTER START --- */}
        <footer className="bg-slate-900 text-slate-400 py-8 mt-12 text-center text-sm">
          <div className="container mx-auto px-4 flex flex-col md:flex-row justify-center gap-6">
            <Link href="/about" className="hover:text-white transition">About Us</Link>
            <Link href="/contact" className="hover:text-white transition">Contact</Link>
            <Link href="/privacy-policy" className="hover:text-white transition">Privacy Policy</Link>
          </div>
          <p className="mt-6 opacity-50">© 2025 ROAS Calculator. All rights reserved.</p>
        </footer>
        {/* --- FOOTER END --- */}

      </body>
    </html>
  );
}