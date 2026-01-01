import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Link from "next/link";
import Script from "next/script";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

// --- GLOBAL SEO CONFIGURATION ---
export const metadata: Metadata = {
  metadataBase: new URL("https://roas-calculator-brown.vercel.app"),
  title: {
    default: "Free Online Tools | ROAS Calc, Image Compressor & PDF Maker",
    template: "%s | ROAS Tools",
  },
  description: "Free all-in-one toolkit: Calculate ROAS, Compress Images to 50KB, and Convert JPG to PDF under 2MB. Fast, private, and works offline.",
  keywords: ["roas calculator", "image compressor 50kb", "jpg to pdf under 2mb", "online tools india", "free pdf maker", "reduce image size kb"],
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* --- GOOGLE ADSENSE SCRIPT --- */}
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4649521973867824"
          crossOrigin="anonymous"
          strategy="afterInteractive"
        />
      </head>
      <body className={`${inter.className} bg-gray-50 text-gray-900 flex flex-col min-h-screen`}>
        
        {/* --- GLOBAL NAVBAR --- */}
        <nav className="bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm">
          <div className="container mx-auto px-4 h-16 flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="font-bold text-xl text-blue-900 flex items-center gap-2 flex-shrink-0">
              🚀 ROAS Tools
            </Link>
            
            {/* Navigation Links - SCROLLABLE ON MOBILE (Fixed the 'Hidden' Error) */}
            <div className="flex gap-4 md:gap-8 text-sm font-medium text-gray-600 overflow-x-auto ml-4 whitespace-nowrap scrollbar-hide">
              <Link href="/" className="hover:text-blue-600 transition">Home</Link>
              <Link href="/image-compressor" className="hover:text-blue-600 transition">Image Compressor</Link>
              <Link href="/pdf-converter" className="hover:text-blue-600 transition">PDF Maker</Link>
            </div>
          </div>
        </nav>

        {/* --- MAIN CONTENT --- */}
        <div className="flex-grow">
            {children}
        </div>

        {/* --- GLOBAL PRO FOOTER (High Value Content) --- */}
        <footer className="bg-slate-900 text-slate-400 py-12 mt-auto border-t border-slate-800 font-sans">
          <div className="container mx-auto px-6 grid md:grid-cols-4 gap-8 text-sm">
            
            {/* Column 1: Brand Info */}
            <div>
              <h3 className="text-white font-bold text-lg mb-4 flex items-center gap-2">🚀 ROAS Tools</h3>
              <p className="leading-relaxed mb-4">
                Privacy-first utility tools for digital marketers and students. 
                Built to be fast, free, and secure.
              </p>
              <p className="text-xs text-slate-500">
                Data processed locally. No uploads.
              </p>
            </div>

            {/* Column 2: Quick Links */}
            <div>
              <h4 className="text-white font-bold mb-4 uppercase tracking-wider text-xs">Our Tools</h4>
              <ul className="space-y-3">
                <li><Link href="/" className="hover:text-white transition flex items-center gap-2">📊 ROAS Calculator</Link></li>
                <li><Link href="/image-compressor" className="hover:text-white transition flex items-center gap-2">🖼️ Image Compressor</Link></li>
                <li><Link href="/pdf-converter" className="hover:text-white transition flex items-center gap-2">📄 JPG to PDF</Link></li>
              </ul>
            </div>

            {/* Column 3: Company */}
            <div>
              <h4 className="text-white font-bold mb-4 uppercase tracking-wider text-xs">Company</h4>
              <ul className="space-y-3">
                <li><Link href="/about" className="hover:text-white transition">About Us</Link></li>
                <li><Link href="/contact" className="hover:text-white transition">Contact Support</Link></li>
                <li><Link href="/contact" className="hover:text-white transition">Report a Bug</Link></li>
              </ul>
            </div>

            {/* Column 4: Legal & Trust */}
            <div>
              <h4 className="text-white font-bold mb-4 uppercase tracking-wider text-xs">Legal</h4>
              <ul className="space-y-3">
                <li><Link href="/privacy-policy" className="hover:text-white transition">Privacy Policy</Link></li>
                <li><Link href="/privacy-policy" className="hover:text-white transition">Cookie Policy</Link></li>
                <li><Link href="/privacy-policy" className="hover:text-white transition">Terms of Use</Link></li>
              </ul>
            </div>
          </div>

          <div className="container mx-auto px-6 mt-12 pt-8 border-t border-slate-800 text-center">
            <p>© 2026 ROAS Tools Inc. All rights reserved.</p>
          </div>
        </footer>

      </body>
    </html>
  );
}