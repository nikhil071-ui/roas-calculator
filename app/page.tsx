import type { Metadata } from "next";
import Link from "next/link";
import { SITE_URL } from "./seo";
import TrackedLink from "@/app/components/TrackedLink";
import RoasClient from "./RoasClient";
import AdBanner from "./AdBanner";

export const metadata: Metadata = {
  title: "ROAS Calculator: Break-Even and Profit Estimator",
  description:
    "Calculate ROAS, break-even thresholds, and campaign profit in one free calculator for marketers and eCommerce teams.",
  keywords: [
    "roas calculator",
    "return on ad spend calculator",
    "break even roas calculator",
    "google ads roas calculator",
    "facebook ads roas calculator",
    "ecommerce profitability calculator",
    "ppc profit calculator",
    "marketing roi tool",
  ],
  alternates: {
    canonical: SITE_URL,
  },
  openGraph: {
    title: "ROAS Calculator: Break-Even and Profit Estimator",
    description:
      "Calculate ROAS, break-even thresholds, and campaign profit in one free calculator for marketers and eCommerce teams.",
    url: SITE_URL,
  },
  twitter: {
    card: "summary_large_image",
    title: "ROAS Calculator: Break-Even and Profit Estimator",
    description:
      "Calculate ROAS, break-even thresholds, and campaign profit in one free calculator for marketers and eCommerce teams.",
  },
};

export default function Home() {
  const webApplicationData = {
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
  const websiteData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "ROAS Tools",
    "url": SITE_URL
  };
  const organizationData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "ROAS Tools",
    "url": SITE_URL,
    "logo": `${SITE_URL}/favicon.ico`,
    "sameAs": [
      `${SITE_URL}/about`,
      `${SITE_URL}/authors`,
      `${SITE_URL}/editorial-policy`
    ],
    "publishingPrinciples": `${SITE_URL}/editorial-policy`
  };
  const faqData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is a good ROAS?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "A good ROAS depends on contribution margin and payback targets. Many teams use 3.0x to 5.0x as a working range, but break-even ROAS is the real baseline."
        }
      },
      {
        "@type": "Question",
        "name": "Is high ROAS always profitable?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "No. You still need to include COGS, shipping, platform fees, and overhead. Pair ROAS with CAC, LTV, and MER before increasing budget."
        }
      },
      {
        "@type": "Question",
        "name": "When should I scale ad spend?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Scale when ROAS stays above break-even and conversion quality remains stable across multiple days, with healthy CAC payback."
        }
      }
    ]
  };

  return (
    <main className="min-h-screen bg-gray-50 font-sans pb-12">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webApplicationData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqData) }}
      />
      
      {/* --- HERO SECTION --- */}
      <header className="bg-blue-900 text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">
            ROAS Calculator (Return on Ad Spend) and Break-Even Profit Estimator
          </h1>
          <p className="text-lg text-blue-100 max-w-2xl mx-auto">
            Instantly calculate return on ad spend, break-even ROAS, and net profit for Google Ads, Facebook Ads, and eCommerce campaigns.
          </p>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8 flex flex-col lg:flex-row gap-8">
        
        {/* --- MAIN CONTENT AREA --- */}
        <div className="flex-1 order-2 lg:order-1">
            <section className="mb-6 bg-white border border-slate-200 rounded-2xl p-4">
              <h2 className="text-sm font-semibold uppercase tracking-wide text-slate-500 mb-3">Quick Jump</h2>
              <div className="flex flex-wrap gap-2">
                <a href="#calculator" className="px-3 py-1.5 rounded-full bg-slate-100 text-slate-700 text-sm hover:bg-slate-200 transition">Calculator</a>
                <a href="#optimization-guide" className="px-3 py-1.5 rounded-full bg-slate-100 text-slate-700 text-sm hover:bg-slate-200 transition">Optimization Guide</a>
                <a href="#content-cluster" className="px-3 py-1.5 rounded-full bg-slate-100 text-slate-700 text-sm hover:bg-slate-200 transition">Content Cluster</a>
                <a href="#faq" className="px-3 py-1.5 rounded-full bg-slate-100 text-slate-700 text-sm hover:bg-slate-200 transition">FAQ</a>
              </div>
            </section>

            <section className="mb-6 bg-emerald-50 border border-emerald-200 rounded-2xl p-4">
              <h2 className="text-base font-bold text-emerald-900 mb-2">Trusted by performance teams</h2>
              <p className="text-sm text-emerald-800 mb-3">
                Use this calculator for campaign audits, break-even checks, and scale/hold decisions before changing budget.
              </p>
              <div className="flex flex-wrap gap-2">
                <TrackedLink
                  href="/ppc-toolkit"
                  eventName="cta_click_ppc_toolkit"
                  eventParams={{ source_page: "/", cta_module: "trust_strip", position: "above_fold" }}
                  className="inline-flex items-center px-3 py-2 rounded-lg bg-emerald-700 text-white font-semibold hover:bg-emerald-800 transition"
                >
                  Open Toolkit
                </TrackedLink>
                <Link href="/methodology" className="inline-flex items-center px-3 py-2 rounded-lg bg-white border border-emerald-300 text-emerald-900 font-semibold hover:bg-emerald-100 transition">
                  Review Methodology
                </Link>
              </div>
            </section>

            {/* THE CALCULATOR TOOL */}
            <section id="calculator">
              <RoasClient />
            </section>

            <section className="mt-8 mb-6 bg-white border border-slate-200 rounded-2xl p-6">
              <h2 className="text-2xl font-bold text-slate-900 mb-2">How this ROAS calculator helps ad optimization</h2>
              <p className="text-slate-600 mb-4">
                Use this calculator to connect campaign ROAS with contribution margin, customer acquisition cost (CAC), lifetime value (LTV), and media efficiency ratio (MER).
              </p>
              <div className="grid md:grid-cols-3 gap-3">
                <div className="rounded-lg border border-slate-200 p-4 bg-slate-50">
                  <h3 className="font-semibold text-slate-900">Revenue efficiency</h3>
                  <p className="text-sm text-slate-600 mt-1">Measure how much revenue each ad dollar generates.</p>
                </div>
                <div className="rounded-lg border border-slate-200 p-4 bg-slate-50">
                  <h3 className="font-semibold text-slate-900">Break-even guardrail</h3>
                  <p className="text-sm text-slate-600 mt-1">Find your minimum ROAS target from margin assumptions.</p>
                </div>
                <div className="rounded-lg border border-slate-200 p-4 bg-slate-50">
                  <h3 className="font-semibold text-slate-900">Scale decisions</h3>
                  <p className="text-sm text-slate-600 mt-1">Decide when to scale, hold, or pause campaigns with confidence.</p>
                </div>
              </div>
            </section>

            <section className="mt-8 mb-6 bg-white border border-slate-200 rounded-2xl p-6">
              <h2 className="text-xl font-bold text-slate-900 mb-2">Next Step After Calculation</h2>
              <p className="text-slate-600 mb-4">
                Use these follow-up tools before changing budget so decisions are tied to CAC, LTV, and blended efficiency.
              </p>
              <div className="flex flex-wrap gap-3">
                <TrackedLink
                  href="/ppc-toolkit"
                  eventName="cta_click_ppc_toolkit"
                  eventParams={{ source_page: "/", cta_module: "next_step_after_calculation", position: "above_fold" }}
                  className="inline-flex items-center px-4 py-2 rounded-lg bg-indigo-600 text-white font-semibold hover:bg-indigo-700 transition"
                  aria-label="Open PPC toolkit for ROAS CAC LTV and MER planning"
                >
                  Open PPC Toolkit
                </TrackedLink>
                <Link href="/resources" className="inline-flex items-center px-4 py-2 rounded-lg bg-white border border-slate-300 text-slate-900 font-semibold hover:bg-slate-50 transition" aria-label="Download ROAS planning templates and checklists">
                  Download Templates
                </Link>
                <Link href="/comparisons/mer-vs-roas" className="inline-flex items-center px-4 py-2 rounded-lg bg-emerald-600 text-white font-semibold hover:bg-emerald-700 transition" aria-label="Read the MER versus ROAS comparison guide">
                  Read MER vs ROAS
                </Link>
              </div>
            </section>

            <section className="mt-4 mb-8 bg-white border border-slate-200 rounded-2xl p-6">
              <h2 className="text-xl font-bold text-slate-900 mb-2">Why marketers trust these analytics tools</h2>
              <p className="text-slate-600 mb-4">
                We publish named authors, review dates, and methodology pages so calculator outputs can be validated and audited.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link href="/authors" className="inline-flex items-center px-4 py-2 rounded-lg bg-white border border-slate-300 text-slate-900 font-semibold hover:bg-slate-50 transition">
                  Authors and Reviewers
                </Link>
                <Link href="/methodology" className="inline-flex items-center px-4 py-2 rounded-lg bg-white border border-slate-300 text-slate-900 font-semibold hover:bg-slate-50 transition">
                  Methodology
                </Link>
                <Link href="/data-sources" className="inline-flex items-center px-4 py-2 rounded-lg bg-white border border-slate-300 text-slate-900 font-semibold hover:bg-slate-50 transition">
                  Data Sources
                </Link>
                <Link href="/editorial-policy" className="inline-flex items-center px-4 py-2 rounded-lg bg-white border border-slate-300 text-slate-900 font-semibold hover:bg-slate-50 transition">
                  Editorial Policy
                </Link>
              </div>
            </section>

            {/* --- AD SPACE --- */}
{/* Google Policy: Keep 20px+ distance from buttons to avoid bans */}
<div className="mt-10 mb-10">
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
            <details className="mt-4 mb-12 bg-white border border-slate-200 rounded-2xl p-6">
              <summary className="text-xl font-bold text-slate-900 cursor-pointer">Featured Pages</summary>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-4">
                <Link href="/roas/facebook-ads" className="group block bg-white p-6 rounded-xl shadow-sm border border-gray-200 hover:border-blue-500 hover:shadow-lg transition">
                  <h3 className="font-bold text-lg text-slate-800 group-hover:text-blue-600">Facebook Ads ROAS Calculator</h3>
                  <p className="text-sm text-gray-500 mt-2">Calculate break-even ROAS and profitability for Meta campaigns.</p>
                </Link>
                <Link href="/pdf/jpg-to-pdf" className="group block bg-white p-6 rounded-xl shadow-sm border border-gray-200 hover:border-red-500 hover:shadow-lg transition">
                  <h3 className="font-bold text-lg text-slate-800 group-hover:text-red-600">JPG to PDF Converter (Direct)</h3>
                  <p className="text-sm text-gray-500 mt-2">Convert photos to a clean PDF instantly - no watermark, no signup.</p>
                </Link>
                <TrackedLink
                  href="/ppc-toolkit"
                  eventName="cta_click_ppc_toolkit"
                  eventParams={{ source_page: "/", cta_module: "featured_pages", position: "mid_content" }}
                  className="group block bg-white p-6 rounded-xl shadow-sm border border-gray-200 hover:border-indigo-500 hover:shadow-lg transition"
                  aria-label="Open PPC toolkit hub for ROAS CAC LTV and MER"
                >
                  <h3 className="font-bold text-lg text-slate-800 group-hover:text-indigo-600">PPC Toolkit</h3>
                  <p className="text-sm text-gray-500 mt-2">ROAS, CAC, LTV, MER, and target CPA in one practical planning hub.</p>
                </TrackedLink>
                <Link href="/comparisons/roas-vs-roi-vs-mer-vs-acos" className="group block bg-white p-6 rounded-xl shadow-sm border border-gray-200 hover:border-purple-500 hover:shadow-lg transition">
                  <h3 className="font-bold text-lg text-slate-800 group-hover:text-purple-600">ROAS vs ROI vs MER vs ACoS</h3>
                  <p className="text-sm text-gray-500 mt-2">Choose the right metric for campaign and budget decisions.</p>
                </Link>
              </div>
            </details>

            <section id="optimization-guide" className="mt-4 mb-12 bg-white border border-slate-200 rounded-2xl p-6 md:p-8">
              <h2 className="text-2xl font-bold text-slate-900 mb-2">What should you do next?</h2>
              <p className="text-slate-600 mb-5">
                Pick the path that matches your goal, then use the right calculator and framework.
              </p>
              <div className="grid md:grid-cols-3 gap-4">
                <TrackedLink
                  href="/ppc-toolkit"
                  eventName="cta_click_ppc_toolkit"
                  eventParams={{ source_page: "/", cta_module: "what_should_you_do_next", position: "mid_content" }}
                  className="block rounded-xl border border-indigo-200 bg-indigo-50 p-4 hover:border-indigo-400 transition"
                  aria-label="Plan full funnel economics in PPC toolkit"
                >
                  <h3 className="font-bold text-slate-900">Plan full funnel economics</h3>
                  <p className="text-sm text-slate-600 mt-1">Use ROAS, CAC, LTV, MER, and target CPA together.</p>
                </TrackedLink>
                <Link href="/comparisons/roas-vs-roi-vs-mer-vs-acos" className="block rounded-xl border border-blue-200 bg-blue-50 p-4 hover:border-blue-400 transition">
                  <h3 className="font-bold text-slate-900">Choose the right metric</h3>
                  <p className="text-sm text-slate-600 mt-1">Compare ROAS, ROI, MER, and ACoS by decision type.</p>
                </Link>
                <Link href="/comparisons/cac-vs-cpa-vs-roas" className="block rounded-xl border border-emerald-200 bg-emerald-50 p-4 hover:border-emerald-400 transition">
                  <h3 className="font-bold text-slate-900">Fix acquisition efficiency</h3>
                  <p className="text-sm text-slate-600 mt-1">Decide when to optimize for CAC, CPA, or ROAS.</p>
                </Link>
              </div>
            </section>

            <section id="content-cluster" className="mt-4 mb-12 bg-white border border-slate-200 rounded-2xl p-6 md:p-8">
              <h2 className="text-2xl font-bold text-slate-900 mb-2">ROAS Content Cluster</h2>
              <p className="text-slate-600 mb-5">
                Follow this internal path: learn definitions, compare benchmarks, optimize campaigns, then validate full profitability.
              </p>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                <Link href="/learn/roas" className="block rounded-xl border border-blue-200 bg-blue-50 p-4 hover:border-blue-400 transition">
                  <h3 className="font-bold text-slate-900">ROAS Education</h3>
                  <p className="text-sm text-slate-600 mt-1">Formula, break-even math, and interpretation basics.</p>
                </Link>
                <Link href="/benchmarks/roas" className="block rounded-xl border border-indigo-200 bg-indigo-50 p-4 hover:border-indigo-400 transition">
                  <h3 className="font-bold text-slate-900">ROAS Benchmarks</h3>
                  <p className="text-sm text-slate-600 mt-1">Channel ranges and practical interpretation.</p>
                </Link>
                <Link href="/optimize/roas" className="block rounded-xl border border-emerald-200 bg-emerald-50 p-4 hover:border-emerald-400 transition">
                  <h3 className="font-bold text-slate-900">Ad Optimization</h3>
                  <p className="text-sm text-slate-600 mt-1">Scale, hold, or pause frameworks.</p>
                </Link>
                <Link href="/profitability/ads" className="block rounded-xl border border-purple-200 bg-purple-50 p-4 hover:border-purple-400 transition">
                  <h3 className="font-bold text-slate-900">Profitability</h3>
                  <p className="text-sm text-slate-600 mt-1">Tie ROAS to CAC, LTV, MER, and payback.</p>
                </Link>
              </div>
            </section>

            {/* --- RESOURCES & SUPPORT --- */}
            <details className="mt-4 mb-12 bg-white border border-slate-200 rounded-2xl p-6">
              <summary className="text-xl font-bold text-slate-900 cursor-pointer">Resources and Help</summary>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mt-4">
                <Link href="/blog" className="group block bg-white p-5 rounded-xl shadow-sm border border-gray-200 hover:border-blue-500 hover:shadow-lg transition text-center">
                  <h3 className="font-bold text-slate-800 group-hover:text-blue-600">Blog Guides</h3>
                  <p className="text-xs text-gray-500 mt-2">Guides, case studies, and benchmarks.</p>
                </Link>
                <Link href="/roas/faq" className="group block bg-white p-5 rounded-xl shadow-sm border border-gray-200 hover:border-slate-700 hover:shadow-lg transition text-center">
                  <h3 className="font-bold text-slate-800 group-hover:text-slate-900">ROAS FAQs</h3>
                  <p className="text-xs text-gray-500 mt-2">Quick answers for each tool.</p>
                </Link>
                <Link href="/resources" className="group block bg-white p-5 rounded-xl shadow-sm border border-gray-200 hover:border-emerald-500 hover:shadow-lg transition text-center">
                  <h3 className="font-bold text-slate-800 group-hover:text-emerald-600">Free Downloads</h3>
                  <p className="text-xs text-gray-500 mt-2">Templates and checklists.</p>
                </Link>
                <Link href="/comparisons" className="group block bg-white p-5 rounded-xl shadow-sm border border-gray-200 hover:border-purple-500 hover:shadow-lg transition text-center">
                  <h3 className="font-bold text-slate-800 group-hover:text-purple-600">Tool Comparisons</h3>
                  <p className="text-xs text-gray-500 mt-2">Transparent feature comparisons.</p>
                </Link>
                <Link href="/testimonials" className="group block bg-white p-5 rounded-xl shadow-sm border border-gray-200 hover:border-yellow-500 hover:shadow-lg transition text-center">
                  <h3 className="font-bold text-slate-800 group-hover:text-yellow-600">Testimonials</h3>
                  <p className="text-xs text-gray-500 mt-2">What users say about us.</p>
                </Link>
                <Link href="/case-studies" className="group block bg-white p-5 rounded-xl shadow-sm border border-gray-200 hover:border-indigo-500 hover:shadow-lg transition text-center">
                  <h3 className="font-bold text-slate-800 group-hover:text-indigo-600">Case Studies</h3>
                  <p className="text-xs text-gray-500 mt-2">Real success stories from users.</p>
                </Link>
                <Link href="/glossary" className="group block bg-white p-5 rounded-xl shadow-sm border border-gray-200 hover:border-orange-500 hover:shadow-lg transition text-center">
                  <h3 className="font-bold text-slate-800 group-hover:text-orange-600">Glossary</h3>
                  <p className="text-xs text-gray-500 mt-2">Marketing terms explained.</p>
                </Link>
                <TrackedLink
                  href="/ppc-toolkit"
                  eventName="cta_click_ppc_toolkit"
                  eventParams={{ source_page: "/", cta_module: "resources_help_grid", position: "mid_content" }}
                  className="group block bg-white p-5 rounded-xl shadow-sm border border-gray-200 hover:border-indigo-500 hover:shadow-lg transition text-center"
                  aria-label="Open PPC toolkit from resources section"
                >
                  <h3 className="font-bold text-slate-800 group-hover:text-indigo-600">PPC Toolkit</h3>
                  <p className="text-xs text-gray-500 mt-2">ROAS, CAC, LTV, MER and target CPA formulas.</p>
                </TrackedLink>
                <Link href="/about" className="group block bg-white p-5 rounded-xl shadow-sm border border-gray-200 hover:border-teal-500 hover:shadow-lg transition text-center">
                  <h3 className="font-bold text-slate-800 group-hover:text-teal-600">About Us</h3>
                  <p className="text-xs text-gray-500 mt-2">Meet our team and editorial standards.</p>
                </Link>
              </div>
            </details>

            {/* --- SEO SUMMARY (SHORTER FOR CORE WEB VITALS) --- */}
            <section className="bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-gray-100 text-gray-700 mt-12">
              <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
                ROAS Calculator Guide: Formula, Benchmarks, and Profitability Strategy
              </h2>
              <p className="text-slate-700 mb-6">
                Return on ad spend (ROAS) tells you how much revenue you generate for each ad dollar. Use
                the calculator above to find break-even ROAS, compare channels, and plan budget changes.
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

            <section id="faq" className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 text-gray-700 mt-8">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">ROAS FAQ for Google Ads and Facebook Ads teams</h2>
              <div className="space-y-3">
                <details className="rounded-lg border border-slate-200 p-4 bg-slate-50">
                  <summary className="font-semibold text-slate-900 cursor-pointer">What is a good ROAS?</summary>
                  <p className="text-sm text-slate-700 mt-2">A good ROAS depends on contribution margin and payback targets. Many teams use 3.0x to 5.0x as a working range, but break-even ROAS is the real baseline.</p>
                </details>
                <details className="rounded-lg border border-slate-200 p-4 bg-slate-50">
                  <summary className="font-semibold text-slate-900 cursor-pointer">Is high ROAS always profitable?</summary>
                  <p className="text-sm text-slate-700 mt-2">No. You still need to include COGS, shipping, platform fees, and overhead. Pair ROAS with CAC, LTV, and MER before increasing budget.</p>
                </details>
                <details className="rounded-lg border border-slate-200 p-4 bg-slate-50">
                  <summary className="font-semibold text-slate-900 cursor-pointer">When should I scale ad spend?</summary>
                  <p className="text-sm text-slate-700 mt-2">Scale when ROAS stays above break-even and conversion quality remains stable across multiple days, with healthy CAC payback.</p>
                </details>
              </div>
            </section>
        </div>

      </div>
    </main>
  );
}
