import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import Link from "next/link";
import Script from "next/script";
import { Analytics } from "@vercel/analytics/react"; 
import "./globals.css";
import { DEFAULT_OPEN_GRAPH, SITE_URL } from "./seo";

const inter = Inter({ subsets: ["latin"] });

// --- GLOBAL SEO CONFIGURATION ---
export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Free Online Tools | ROAS Calc, Image Compressor & PDF Maker",
    template: "%s | ROAS Tools",
  },
  description: "Free all-in-one toolkit: Calculate ROAS, Compress Images to 50KB, and Convert JPG to PDF under 2MB. Fast, private, and core file tools work offline after load.",
  keywords: ["roas calculator", "image compressor 50kb", "jpg to pdf under 2mb", "online tools india", "free pdf maker", "currency converter live"],
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    languages: {
      "en": `${SITE_URL}/`,
      "x-default": `${SITE_URL}/`,
    },
  },
  openGraph: {
    ...DEFAULT_OPEN_GRAPH,
    locale: "en_US",
    url: `${SITE_URL}/`,
    title: "Free Image Compressor & PDF Maker (Privacy Focused)",
    description: "Compress images to 50KB for SSC/UPSC exams and calculate ad profits instantly. No uploads required.",
  },
  twitter: {
    card: "summary_large_image",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* --- FAVICON --- */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/favicon.ico" />
        
        {/* --- GOOGLE SEARCH CONSOLE VERIFICATION --- */}
        <meta name="google-site-verification" content="google07479700bcc28a6c" />
        
        {/* --- GOOGLE ANALYTICS 4 --- */}
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-QQF9NJDQSZ"
          strategy="afterInteractive"
        />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-QQF9NJDQSZ', {
                page_path: window.location.pathname,
              });
            `,
          }}
        />
        
        {/* --- GOOGLE ADSENSE SCRIPT --- */}
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4649521973867824"
          crossOrigin="anonymous"
          strategy="afterInteractive"
        />
      </head>
      <body className={`${inter.className} bg-gray-50 text-gray-900 flex flex-col min-h-screen`}>
        
        {/* --- JSON-LD SCHEMA --- */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebApplication",
              "name": "ROAS Tools",
              "url": "https://roas-calculator.tech",
              "applicationCategory": "BusinessApplication",
              "operatingSystem": "All",
              "browserRequirements": "Requires JavaScript. Requires HTML5.",
              "offers": {
                "@type": "Offer",
                "price": "0",
                "priceCurrency": "USD"
              },
              "featureList": "Calculate ROAS, Compress Images to 50KB, Convert JPG to PDF, Currency Converter",
              "author": {
                "@type": "Organization",
                "name": "ROAS Tools Inc."
              }
            })
          }}
        />
        
        {/* --- ORGANIZATION SCHEMA --- */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "ROAS Tools",
              "alternateName": "ROAS Tools Digital Solutions",
              "url": "https://roas-calculator.tech",
              "logo": "https://roas-calculator.tech/favicon.ico",
              "foundingDate": "2024",
              "description": "Privacy-first digital marketing tools and financial calculators for marketers, entrepreneurs, and students worldwide.",
              "email": "luckmatters199@gmail.com",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Mumbai",
                "addressRegion": "Maharashtra",
                "addressCountry": "IN"
              },
              "sameAs": [
                "https://github.com/nikhil071-ui/roas-calculator"
              ],
              "founder": {
                "@type": "Person",
                "name": "Sanjay Kumar",
                "jobTitle": "Founder & Lead Developer"
              },
              "knowsAbout": [
                "Digital Marketing",
                "Return on Ad Spend (ROAS)",
                "Performance Marketing",
                "Image Compression",
                "PDF Conversion",
                "Currency Exchange"
              ]
            })
          }}
        />

        {/* --- GLOBAL NAVBAR --- */}
        <nav className="bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm">
          <div className="container mx-auto px-4 h-16 flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="font-bold text-xl text-blue-900 flex items-center gap-2 shrink-0">
               ROAS Tools
            </Link>
            
            {/* Navigation Links - SCROLLABLE ON MOBILE */}
            <div className="flex gap-4 md:gap-8 text-sm font-medium text-gray-600 overflow-x-auto ml-4 whitespace-nowrap scrollbar-hide">
              <Link href="/blog" className="hover:text-blue-600 transition">Blog</Link>
              <Link href="/" className="hover:text-blue-600 transition">Home</Link>
              <Link href="/ppc-toolkit" className="hover:text-blue-600 transition">PPC Toolkit</Link>
              <Link href="/image-compressor" className="hover:text-blue-600 transition">Image Compressor</Link>
              <Link href="/pdf-converter" className="hover:text-blue-600 transition">PDF Maker</Link>
              <Link href="/currency-converter" className="hover:text-blue-600 transition">Currency</Link>
            </div>
          </div>
        </nav>

        {/* --- MAIN CONTENT --- */}
        <div className="grow">
            {children}
            <Analytics />
        </div>

        {/* --- GLOBAL PRO FOOTER --- */}
        <footer className="bg-slate-900 text-slate-400 py-12 mt-auto border-t border-slate-800 font-sans">
          <div className="container mx-auto px-6 grid md:grid-cols-4 gap-8 text-sm">
            
            {/* Column 1: Brand Info */}
            <div>
              <h3 className="text-white font-bold text-lg mb-4 flex items-center gap-2"> ROAS Tools</h3>
              <p className="leading-relaxed mb-4">
                Privacy-first utility tools for digital marketers and students. 
                Built to be fast, free, and secure.
              </p>
              <p className="text-xs text-slate-500">
                Data processed locally. No uploads.
              </p>
            </div>

            {/* Column 2: Quick Links (UPDATED) */}
            <div>
              <h4 className="text-white font-bold mb-4 uppercase tracking-wider text-xs">Our Tools</h4>
              <ul className="space-y-3">
                <li><Link href="/" className="hover:text-white transition flex items-center gap-2"> ROAS Calculator</Link></li>
                <li><Link href="/roas/facebook-ads" className="hover:text-white transition flex items-center gap-2"> Facebook Ads ROAS</Link></li>
                <li><Link href="/ppc-toolkit" className="hover:text-white transition flex items-center gap-2"> PPC Toolkit</Link></li>
                <li><Link href="/image-compressor" className="hover:text-white transition flex items-center gap-2"> Image Compressor</Link></li>
                <li><Link href="/pdf-converter" className="hover:text-white transition flex items-center gap-2"> JPG to PDF</Link></li>
                <li><Link href="/pdf/jpg-to-pdf" className="hover:text-white transition flex items-center gap-2"> JPG to PDF (Direct)</Link></li>
                <li><Link href="/currency-converter" className="hover:text-white transition flex items-center gap-2"> Currency Converter</Link></li>
              </ul>
            </div>

            {/* Column 3: Company */}
            <div>
              <h4 className="text-white font-bold mb-4 uppercase tracking-wider text-xs">Company</h4>
              <ul className="space-y-3">
                <li><Link href="/blog" className="hover:text-white transition"> Blog</Link></li>
                <li><Link href="/resources" className="hover:text-white transition"> Resources</Link></li>
                <li><Link href="/comparisons" className="hover:text-white transition"> Comparisons</Link></li>
                <li><Link href="/comparisons/roas-vs-roi-vs-mer-vs-acos" className="hover:text-white transition"> ROAS vs ROI vs MER vs ACoS</Link></li>
                <li><Link href="/about" className="hover:text-white transition">About Us</Link></li>
                <li><Link href="/team" className="hover:text-white transition"> Our Team</Link></li>
                <li><Link href="/case-studies" className="hover:text-white transition"> Case Studies</Link></li>
                <li><Link href="/testimonials" className="hover:text-white transition">star Testimonials</Link></li>
                <li><Link href="/glossary" className="hover:text-white transition"> Glossary</Link></li>
                <li><Link href="/contact" className="hover:text-white transition">Contact Support</Link></li>
              </ul>
            </div>

            {/* Column 4: Legal & Trust */}
            <div>
              <h4 className="text-white font-bold mb-4 uppercase tracking-wider text-xs">Legal & Trust</h4>
              <ul className="space-y-3">
                <li><Link href="/privacy-policy" className="hover:text-white transition">Privacy Policy</Link></li>
                <li><Link href="/terms" className="hover:text-white transition">Terms of Service</Link></li>
                <li><Link href="/editorial-policy" className="hover:text-white transition">Editorial Policy</Link></li>
                <li><Link href="/faq" className="hover:text-white transition">FAQ</Link></li>
                <li><Link href="/privacy-policy" className="hover:text-white transition">Cookie Policy</Link></li>
              </ul>
            </div>
          </div>

          <div className="container mx-auto px-6 mt-12 pt-8 border-t border-slate-800 text-center">
            <p>(c) 2026 ROAS Tools Inc. All rights reserved.</p>
          </div>
        </footer>

      </body>
    </html>
  );
}
