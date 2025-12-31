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
  verification: {
    google: "mtHJ8Sobw1wDN",
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
        {/* --- GOOGLE ADSENSE SCRIPT START --- */}
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4649521973867824"
          crossOrigin="anonymous"
          strategy="afterInteractive"
        />
        {/* --- GOOGLE ADSENSE SCRIPT END --- */}
      </head>
      <body className={`${inter.className} bg-gray-50 text-gray-900`}>
        
        {/* --- GLOBAL NAVBAR (Appears on every page) --- */}
        <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">
          <div className="container mx-auto px-4 h-16 flex items-center justify-between">
            <Link href="/" className="font-bold text-xl text-blue-900 flex items-center gap-2">
              🚀 ROAS Tools
            </Link>
            <div className="hidden md:flex gap-6 text-sm font-medium text-gray-600">
              <Link href="/" className="hover:text-blue-600 transition">Home</Link>
              <Link href="/image-compressor" className="hover:text-blue-600 transition">Image Compressor</Link>
              <Link href="/pdf-converter" className="hover:text-blue-600 transition">PDF Maker</Link>
            </div>
          </div>
        </nav>

        {/* --- MAIN CONTENT --- */}
        {children}

        {/* --- GLOBAL FOOTER --- */}
        <footer className="bg-slate-900 text-slate-400 py-10 mt-12 text-center text-sm border-t border-slate-800">
          <div className="container mx-auto px-4">
            
            <div className="flex flex-col md:flex-row justify-center gap-6 mb-6 font-medium">
              <Link href="/about" className="hover:text-white transition">About Us</Link>
              <Link href="/contact" className="hover:text-white transition">Contact</Link>
              <Link href="/privacy-policy" className="hover:text-white transition">Privacy Policy</Link>
            </div>

            <div className="max-w-2xl mx-auto mb-6 text-xs text-slate-500 leading-relaxed">
              <p>
                <strong>Disclaimer:</strong> This toolkit is for educational and informational purposes only. 
                Files are processed locally in your browser for privacy. We do not store your images or PDFs.
              </p>
            </div>

            <p className="opacity-50">© 2025 ROAS Tools. All rights reserved.</p>
          </div>
        </footer>

      </body>
    </html>
  );
}