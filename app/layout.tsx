import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import Link from "next/link";
import { Analytics } from "@vercel/analytics/react";
import WebVitals from "@/app/components/WebVitals";
import AnalyticsScripts from "@/app/components/AnalyticsScripts";
import "./globals.css";
import { DEFAULT_OPEN_GRAPH, SITE_URL } from "./seo";

const inter = Inter({ subsets: ["latin"], display: "swap" });

// --- GLOBAL SEO CONFIGURATION ---
export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "ROAS Tools | Profitability Calculators for Paid Media",
    template: "%s | ROAS Tools",
  },
  description: "Privacy-first calculator platform for ROAS, CAC, LTV, MER, payback period, and break-even decisions.",
  keywords: ["roas calculator", "cac calculator", "ltv calculator", "mer calculator", "payback period calculator", "break-even roas"],
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
    title: "ROAS Tools | Profitability Calculators for Paid Media",
    description: "Calculate ROAS, CAC, LTV, MER, payback period, and break-even thresholds in one workflow.",
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
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/icon.svg" />
        
        {/* --- GOOGLE SEARCH CONSOLE VERIFICATION --- */}
        <meta name="google-site-verification" content="google07479700bcc28a6c" />

      </head>
      <body className={`${inter.className} bg-gray-50 text-gray-900 flex flex-col min-h-screen`}>
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus-z-100 focus:bg-white focus:text-slate-900 focus:px-4 focus:py-2 focus:rounded-md focus:shadow-lg"
        >
          Skip to main content
        </a>
        <noscript>
          <div className="bg-amber-100 text-amber-900 text-sm text-center py-2 px-4">
            JavaScript is required for calculators. Static guides and resources remain available.
          </div>
        </noscript>
        <AnalyticsScripts />
        
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
              "logo": "https://roas-calculator.tech/icon.svg",
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
              "publishingPrinciples": "https://roas-calculator.tech/editorial-policy",
              "founder": {
                "@type": "Person",
                "name": "Sanjay Kumar",
                "jobTitle": "Founder & Lead Developer"
              },
              "knowsAbout": [
                "Digital Marketing",
                "Return on Ad Spend (ROAS)",
                "Performance Marketing",
                "Customer Acquisition Cost (CAC)",
                "Customer Lifetime Value (LTV)",
                "Marketing Efficiency Ratio (MER)"
              ]
            })
          }}
        />
        
        {/* --- WEBSITE SCHEMA --- */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "name": "ROAS Tools",
              "url": "https://roas-calculator.tech"
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
            <div className="flex gap-4 md:gap-8 text-sm font-medium text-gray-600 overflow-x-auto ml-4 whitespace-nowrap">
              <Link href="/blog" prefetch={false} className="hover:text-blue-600 transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-blue-600 focus-visible:rounded-sm">Blog</Link>
              <Link href="/" prefetch={false} className="hover:text-blue-600 transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-blue-600 focus-visible:rounded-sm">Home</Link>
              <Link href="/ppc-toolkit" prefetch={false} className="hover:text-blue-600 transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-blue-600 focus-visible:rounded-sm">Publisher Toolkit</Link>
              <Link href="/resources" prefetch={false} className="hover:text-blue-600 transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-blue-600 focus-visible:rounded-sm">Resources</Link>
              <Link href="/benchmarks/roas" prefetch={false} className="hover:text-blue-600 transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-blue-600 focus-visible:rounded-sm">Benchmarks</Link>
            </div>
          </div>
        </nav>

        {/* --- MAIN CONTENT --- */}
        <div id="main-content" className="grow" tabIndex={-1}>
            {children}
            {process.env.NODE_ENV === "production" && process.env.NEXT_PUBLIC_ENABLE_VERCEL_ANALYTICS === "true" ? (
              <Analytics />
            ) : null}
            <WebVitals />
        </div>

        {/* --- GLOBAL PRO FOOTER --- */}
        <footer className="bg-slate-900 text-slate-400 py-12 mt-auto border-t border-slate-800 font-sans">
          <div className="container mx-auto px-6 grid md:grid-cols-4 gap-8 text-sm">
            
            {/* Column 1: Brand Info */}
            <div>
              <h3 className="text-white font-bold text-lg mb-4 flex items-center gap-2"> ROAS Tools</h3>
              <p className="leading-relaxed mb-4">
                Privacy-first profitability tools for ad-supported publishers and growth teams.
                Built to be fast, free, and secure.
              </p>
              <p className="text-xs text-slate-500">
                Data processed locally. No account required for calculators.
              </p>
              <p className="text-xs text-slate-500 mt-3">
                Built by Sanjay Kumar. <Link href="/about" className="underline hover:text-white">Founder profile</Link>
              </p>
            </div>

            {/* Column 2: Quick Links (UPDATED) */}
            <div>
              <h4 className="text-white font-bold mb-4 uppercase tracking-wider text-xs">Our Tools</h4>
              <ul className="space-y-3">
                <li><Link href="/" className="hover:text-white transition flex items-center gap-2"> ROAS Calculator</Link></li>
                <li><Link href="/roas/facebook-ads" className="hover:text-white transition flex items-center gap-2"> Facebook Ads ROAS</Link></li>
                <li><Link href="/ppc-toolkit" className="hover:text-white transition flex items-center gap-2"> PPC Toolkit</Link></li>
                <li><Link href="/cac-calculator" className="hover:text-white transition flex items-center gap-2"> CAC Calculator</Link></li>
                <li><Link href="/ltv-calculator" className="hover:text-white transition flex items-center gap-2"> LTV Calculator</Link></li>
                <li><Link href="/mer-calculator" className="hover:text-white transition flex items-center gap-2"> MER Calculator</Link></li>
                <li><Link href="/payback-period-calculator" className="hover:text-white transition flex items-center gap-2"> Payback Calculator</Link></li>
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
                <li><Link href="/testimonials" className="hover:text-white transition">Testimonials</Link></li>
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
                <li><Link href="/authors" className="hover:text-white transition">Authors and Reviewers</Link></li>
                <li><Link href="/methodology" className="hover:text-white transition">Methodology</Link></li>
                <li><Link href="/data-sources" className="hover:text-white transition">Data Sources</Link></li>
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
