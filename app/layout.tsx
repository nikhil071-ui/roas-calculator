import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Link from "next/link";
import Script from "next/script"; // <--- WE NEED THIS FOR ADS
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
      <head>
        {/* --- GOOGLE ADSENSE SCRIPT START --- */}
        {/* REPLACE XXXXXXXXXXXXXXXX WITH YOUR REAL ID BELOW */}
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4649521973867824"
          crossOrigin="anonymous"
          strategy="afterInteractive"
        />
        {/* --- GOOGLE ADSENSE SCRIPT END --- */}
      </head>
      <body className={inter.className}>
        {children}

        {/* --- FOOTER START --- */}
        <footer className="bg-slate-900 text-slate-400 py-10 mt-12 text-center text-sm border-t border-slate-800">
          <div className="container mx-auto px-4">
            
            <div className="flex flex-col md:flex-row justify-center gap-6 mb-6 font-medium">
              <Link href="/about" className="hover:text-white transition">About Us</Link>
              <Link href="/contact" className="hover:text-white transition">Contact</Link>
              <Link href="/privacy-policy" className="hover:text-white transition">Privacy Policy</Link>
            </div>

            <div className="max-w-2xl mx-auto mb-6 text-xs text-slate-500 leading-relaxed">
              <p>
                <strong>Disclaimer:</strong> This calculator is for educational and informational purposes only. 
                The results provided are estimates based on your inputs. We are not financial advisors, and 
                this tool does not guarantee future profits. Please consult a professional for financial advice.
              </p>
            </div>

            <p className="opacity-50">© 2025 ROAS Calculator. All rights reserved.</p>
          </div>
        </footer>
        {/* --- FOOTER END --- */}
      </body>
    </html>
  );
}