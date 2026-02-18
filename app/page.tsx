import type { Metadata } from "next";
import Link from "next/link";
import RoasClient from "./RoasClient";
import AdBanner from "./AdBanner"; // <--- LINE 1: IMPORT ADDED
import { SITE_URL } from "./seo";

export const metadata: Metadata = {
  title: "Free ROAS Calculator | Calculate Profit & Break-Even 2026",
  description: "Calculate your Return on Ad Spend (ROAS), Break-Even Point, and Net Profit instantly. The best free tool for Facebook Ads, Google Ads, and dropshipping.",
  keywords: ["roas calculator", "facebook ads profit calculator", "break even roas formula", "dropshipping calculator", "marketing roi tool"],
  alternates: {
    canonical: SITE_URL,
  },
  openGraph: {
    title: "Free ROAS Calculator | Calculate Profit & Break-Even 2026",
    description: "Calculate your Return on Ad Spend (ROAS), Break-Even Point, and Net Profit instantly. The best free tool for Facebook Ads, Google Ads, and dropshipping.",
    url: SITE_URL,
  },
  twitter: {
    card: "summary_large_image",
    title: "Free ROAS Calculator | Calculate Profit & Break-Even 2026",
    description: "Calculate your Return on Ad Spend (ROAS), Break-Even Point, and Net Profit instantly. The best free tool for Facebook Ads, Google Ads, and dropshipping.",
  },
};

export default function Home() {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": "ROAS Calculator - Free Tool for Digital Marketing",
    "description": "Calculate your Return on Ad Spend (ROAS), Break-Even Point, and Net Profit instantly. The best free tool for Facebook Ads, Google Ads, and dropshipping.",
    "url": "https://roas-calculator.tech/",
    "applicationCategory": "FinanceApplication",
    "author": {
      "@type": "Organization",
      "name": "ROAS Tools",
      "url": "https://roas-calculator.tech/",
      "sameAs": [
        "https://roas-calculator.tech/about",
        "https://roas-calculator.tech/contact"
      ]
    },
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD",
      "availability": "https://schema.org/InStock"
    }
  };

  return (
    <main className="min-h-screen bg-gray-50 font-sans pb-12">
      {/* JSON-LD SCHEMA FOR SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
      
      
      {/* --- HERO SECTION --- */}
      <header className="bg-blue-900 text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">
            Free ROAS Calculator & Profit Estimator
          </h1>
          <p className="text-lg text-blue-100 max-w-2xl mx-auto">
            Instantly calculate your Return on Ad Spend (ROAS), Break-Even Point, 
            and Net Profit for Facebook Ads and Google Ads.
          </p>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8 flex flex-col lg:flex-row gap-8">
        
        {/* --- MAIN CONTENT AREA --- */}
        <div className="flex-1 order-2 lg:order-1">
            
            {/* THE CALCULATOR TOOL */}
            <RoasClient />

            {/* --- AD SPACE --- */}
{/* Google Policy: Keep 20px+ distance from buttons to avoid bans */}
<div className="mt-8 mb-8">
  <AdBanner />
</div>
{/* ---------------- */}

            {/* --- MORE TOOLS SECTION --- */}
            <section className="mt-12 mb-12">
              <h2 className="text-2xl font-bold text-slate-900 mb-6 text-center">More Free Tools</h2>
              <div className="flex justify-center gap-6 flex-wrap">
                
                {/* Link to Image Compressor */}
                <Link href="/image-compressor" className="group block bg-white p-6 rounded-xl shadow-sm border border-gray-200 hover:border-blue-500 hover:shadow-lg transition w-full md:w-64 text-center">
                  <div className="text-4xl mb-3 group-hover:scale-110 transition duration-300"></div>
                  <h3 className="font-bold text-xl mb-2 text-slate-800 group-hover:text-blue-600">Image Compressor</h3>
                  <p className="text-sm text-gray-500">Reduce image size by up to 80% without losing quality.</p>
                </Link>

                {/* Link to PDF Converter */}
                <Link href="/pdf-converter" className="group block bg-white p-6 rounded-xl shadow-sm border border-gray-200 hover:border-red-500 hover:shadow-lg transition w-full md:w-64 text-center">
                  <div className="text-4xl mb-3 group-hover:scale-110 transition duration-300"></div>
                  <h3 className="font-bold text-xl mb-2 text-slate-800 group-hover:text-red-600">JPG to PDF</h3>
                  <p className="text-sm text-gray-500">Combine multiple images into a single professional PDF document.</p>
                </Link>
                
                {/* Currency Converter Card */}
                <Link href="/currency-converter" className="group block bg-white p-6 rounded-xl shadow-sm border border-gray-200 hover:border-emerald-500 hover:shadow-lg transition w-full md:w-64 text-center">
                  <div className="text-4xl mb-3 group-hover:scale-110 transition duration-300"></div>
                  <h3 className="font-bold text-xl mb-2 text-slate-800 group-hover:text-emerald-600">Currency Converter</h3>
                  <p className="text-sm text-gray-500">Live exchange rates for USD, INR, EUR, and 10+ global currencies.</p>
                </Link>

              </div>
            </section>

            {/* --- FEATURED PAGES (BOOST INDEXING) --- */}
            <section className="mt-4 mb-12">
              <h2 className="text-xl font-bold text-slate-900 mb-4 text-center">Featured Pages</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                <Link href="/roas/facebook-ads" className="group block bg-white p-6 rounded-xl shadow-sm border border-gray-200 hover:border-blue-500 hover:shadow-lg transition">
                  <h3 className="font-bold text-lg text-slate-800 group-hover:text-blue-600">Facebook Ads ROAS Calculator</h3>
                  <p className="text-sm text-gray-500 mt-2">Calculate break-even ROAS and profitability for Meta campaigns.</p>
                </Link>
                <Link href="/pdf/jpg-to-pdf" className="group block bg-white p-6 rounded-xl shadow-sm border border-gray-200 hover:border-red-500 hover:shadow-lg transition">
                  <h3 className="font-bold text-lg text-slate-800 group-hover:text-red-600">JPG to PDF Converter (Direct)</h3>
                  <p className="text-sm text-gray-500 mt-2">Convert photos to a clean PDF instantly - no watermark, no signup.</p>
                </Link>
                <Link href="/ppc-toolkit" className="group block bg-white p-6 rounded-xl shadow-sm border border-gray-200 hover:border-indigo-500 hover:shadow-lg transition">
                  <h3 className="font-bold text-lg text-slate-800 group-hover:text-indigo-600">PPC Toolkit</h3>
                  <p className="text-sm text-gray-500 mt-2">ROAS, CAC, LTV, MER, and target CPA in one practical planning hub.</p>
                </Link>
                <Link href="/comparisons/roas-vs-roi-vs-mer-vs-acos" className="group block bg-white p-6 rounded-xl shadow-sm border border-gray-200 hover:border-purple-500 hover:shadow-lg transition">
                  <h3 className="font-bold text-lg text-slate-800 group-hover:text-purple-600">ROAS vs ROI vs MER vs ACoS</h3>
                  <p className="text-sm text-gray-500 mt-2">Choose the right metric for campaign and budget decisions.</p>
                </Link>
              </div>
            </section>

            {/* --- RESOURCES & SUPPORT --- */}
            <section className="mt-4 mb-12">
              <h2 className="text-xl font-bold text-slate-900 mb-4 text-center">Resources and Help</h2>
              <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-4">
                <Link href="/blog" className="group block bg-white p-5 rounded-xl shadow-sm border border-gray-200 hover:border-blue-500 hover:shadow-lg transition text-center">
                  <h3 className="font-bold text-slate-800 group-hover:text-blue-600"> Expert Blog</h3>
                  <p className="text-xs text-gray-500 mt-2">Guides, case studies, and benchmarks.</p>
                </Link>
                <Link href="/roas/faq" className="group block bg-white p-5 rounded-xl shadow-sm border border-gray-200 hover:border-slate-700 hover:shadow-lg transition text-center">
                  <h3 className="font-bold text-slate-800 group-hover:text-slate-900">? FAQs</h3>
                  <p className="text-xs text-gray-500 mt-2">Quick answers for each tool.</p>
                </Link>
                <Link href="/resources" className="group block bg-white p-5 rounded-xl shadow-sm border border-gray-200 hover:border-emerald-500 hover:shadow-lg transition text-center">
                  <h3 className="font-bold text-slate-800 group-hover:text-emerald-600"> Free Downloads</h3>
                  <p className="text-xs text-gray-500 mt-2">Templates and checklists.</p>
                </Link>
                <Link href="/comparisons" className="group block bg-white p-5 rounded-xl shadow-sm border border-gray-200 hover:border-purple-500 hover:shadow-lg transition text-center">
                  <h3 className="font-bold text-slate-800 group-hover:text-purple-600"> Tool Comparisons</h3>
                  <p className="text-xs text-gray-500 mt-2">Transparent feature comparisons.</p>
                </Link>
                <Link href="/testimonials" className="group block bg-white p-5 rounded-xl shadow-sm border border-gray-200 hover:border-yellow-500 hover:shadow-lg transition text-center">
                  <h3 className="font-bold text-slate-800 group-hover:text-yellow-600">star Testimonials</h3>
                  <p className="text-xs text-gray-500 mt-2">What users say about us.</p>
                </Link>
                <Link href="/case-studies" className="group block bg-white p-5 rounded-xl shadow-sm border border-gray-200 hover:border-indigo-500 hover:shadow-lg transition text-center">
                  <h3 className="font-bold text-slate-800 group-hover:text-indigo-600"> Case Studies</h3>
                  <p className="text-xs text-gray-500 mt-2">Real success stories from users.</p>
                </Link>
                <Link href="/glossary" className="group block bg-white p-5 rounded-xl shadow-sm border border-gray-200 hover:border-orange-500 hover:shadow-lg transition text-center">
                  <h3 className="font-bold text-slate-800 group-hover:text-orange-600"> Glossary</h3>
                  <p className="text-xs text-gray-500 mt-2">Marketing terms explained.</p>
                </Link>
                <Link href="/about" className="group block bg-white p-5 rounded-xl shadow-sm border border-gray-200 hover:border-teal-500 hover:shadow-lg transition text-center">
                  <h3 className="font-bold text-slate-800 group-hover:text-teal-600"> About Us</h3>
                  <p className="text-xs text-gray-500 mt-2">Meet our expert team.</p>
                </Link>
                <Link href="/ppc-toolkit" className="group block bg-white p-5 rounded-xl shadow-sm border border-gray-200 hover:border-indigo-500 hover:shadow-lg transition text-center">
                  <h3 className="font-bold text-slate-800 group-hover:text-indigo-600"> PPC Toolkit</h3>
                  <p className="text-xs text-gray-500 mt-2">ROAS, CAC, LTV, MER and target CPA formulas.</p>
                </Link>
                <Link href="/cac-calculator" className="group block bg-white p-5 rounded-xl shadow-sm border border-gray-200 hover:border-blue-500 hover:shadow-lg transition text-center">
                  <h3 className="font-bold text-slate-800 group-hover:text-blue-600"> CAC Calculator</h3>
                  <p className="text-xs text-gray-500 mt-2">Track customer acquisition cost and decision thresholds.</p>
                </Link>
                <Link href="/ltv-calculator" className="group block bg-white p-5 rounded-xl shadow-sm border border-gray-200 hover:border-cyan-500 hover:shadow-lg transition text-center">
                  <h3 className="font-bold text-slate-800 group-hover:text-cyan-600"> LTV Calculator</h3>
                  <p className="text-xs text-gray-500 mt-2">Estimate customer lifetime value for paid growth planning.</p>
                </Link>
                <Link href="/mer-calculator" className="group block bg-white p-5 rounded-xl shadow-sm border border-gray-200 hover:border-violet-500 hover:shadow-lg transition text-center">
                  <h3 className="font-bold text-slate-800 group-hover:text-violet-600"> MER Calculator</h3>
                  <p className="text-xs text-gray-500 mt-2">Measure blended marketing efficiency across channels.</p>
                </Link>
                <Link href="/payback-period-calculator" className="group block bg-white p-5 rounded-xl shadow-sm border border-gray-200 hover:border-fuchsia-500 hover:shadow-lg transition text-center">
                  <h3 className="font-bold text-slate-800 group-hover:text-fuchsia-600"> Payback Calculator</h3>
                  <p className="text-xs text-gray-500 mt-2">Calculate CAC payback period in months.</p>
                </Link>
                <Link href="/resources" className="group block bg-white p-5 rounded-xl shadow-sm border border-gray-200 hover:border-sky-500 hover:shadow-lg transition text-center">
                  <h3 className="font-bold text-slate-800 group-hover:text-sky-600"> Scenario Templates</h3>
                  <p className="text-xs text-gray-500 mt-2">Download planning sheets for budgets and benchmarks.</p>
                </Link>
              </div>
            </section>

            {/* --- SEO SUMMARY (SHORTER FOR CORE WEB VITALS) --- */}
            <section className="bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-gray-100 text-gray-700 mt-12">
              <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
                ROAS Basics, Benchmarks, and Strategy
              </h2>
              <p className="text-slate-700 mb-6">
                ROAS tells you how much revenue you generate for every dollar spent on ads. Use the
                calculator above to find break-even ROAS, compare channels, and decide when to scale.
              </p>
              <div className="grid md:grid-cols-3 gap-4 mb-8">
                <div className="bg-slate-50 p-4 rounded-lg border border-slate-200">
                  <p className="text-sm text-slate-500">Formula</p>
                  <p className="font-mono text-lg font-bold text-slate-900">ROAS = Revenue / Ad Spend</p>
                </div>
                <div className="bg-slate-50 p-4 rounded-lg border border-slate-200">
                  <p className="text-sm text-slate-500">Break-even</p>
                  <p className="font-mono text-lg font-bold text-slate-900">1 / Profit Margin</p>
                </div>
                <div className="bg-slate-50 p-4 rounded-lg border border-slate-200">
                  <p className="text-sm text-slate-500">Healthy Range</p>
                  <p className="font-mono text-lg font-bold text-slate-900">3.0x - 5.0x</p>
                </div>
              </div>
              <p className="text-slate-700 mb-6">
                Want the full guide, benchmarks, and case studies? Read the detailed articles below.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link href="/blog/roas-benchmarks-2026" className="inline-flex items-center px-4 py-2 rounded-lg bg-indigo-600 text-white font-semibold hover:bg-indigo-700 transition">
                  ROAS Benchmarks 2026
                </Link>
                <Link href="/blog/facebook-ads-case-study" className="inline-flex items-center px-4 py-2 rounded-lg bg-slate-900 text-white font-semibold hover:bg-slate-800 transition">
                  Facebook Ads Case Study
                </Link>
                <Link href="/blog" className="inline-flex items-center px-4 py-2 rounded-lg bg-white text-slate-900 border border-slate-300 font-semibold hover:bg-slate-50 transition">
                  All Marketing Guides
                </Link>
              </div>
            </section>
        </div>

      </div>
    </main>
  );
}
