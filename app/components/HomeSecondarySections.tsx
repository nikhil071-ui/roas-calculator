"use client";

import Link from "next/link";
import TrackedLink from "@/app/components/TrackedLink";
import DeferredAdBanner from "@/app/components/DeferredAdBanner";

export default function HomeSecondarySections() {
  return (
    <>
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

      <div className="mt-10 mb-10">
        <DeferredAdBanner />
      </div>

      <details className="mt-4 mb-12 bg-white border border-slate-200 rounded-2xl p-6">
        <summary className="text-xl font-bold text-slate-900 cursor-pointer focus-visible:outline focus-visible:outline-2 focus-visible:outline-blue-600 rounded-sm">
          Resources and Help
        </summary>
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
          <Link href="/about" className="group block bg-white p-5 rounded-xl shadow-sm border border-gray-200 hover:border-teal-500 hover:shadow-lg transition text-center">
            <h3 className="font-bold text-slate-800 group-hover:text-teal-600">About Us</h3>
            <p className="text-xs text-gray-500 mt-2">Meet our team and editorial standards.</p>
          </Link>
        </div>
      </details>

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
            <summary className="font-semibold text-slate-900 cursor-pointer focus-visible:outline focus-visible:outline-2 focus-visible:outline-blue-600 rounded-sm">What is a good ROAS?</summary>
            <p className="text-sm text-slate-700 mt-2">A good ROAS depends on contribution margin and payback targets. Many teams use 3.0x to 5.0x as a working range, but break-even ROAS is the real baseline.</p>
          </details>
          <details className="rounded-lg border border-slate-200 p-4 bg-slate-50">
            <summary className="font-semibold text-slate-900 cursor-pointer focus-visible:outline focus-visible:outline-2 focus-visible:outline-blue-600 rounded-sm">Is high ROAS always profitable?</summary>
            <p className="text-sm text-slate-700 mt-2">No. You still need to include COGS, shipping, platform fees, and overhead. Pair ROAS with CAC, LTV, and MER before increasing budget.</p>
          </details>
          <details className="rounded-lg border border-slate-200 p-4 bg-slate-50">
            <summary className="font-semibold text-slate-900 cursor-pointer focus-visible:outline focus-visible:outline-2 focus-visible:outline-blue-600 rounded-sm">When should I scale ad spend?</summary>
            <p className="text-sm text-slate-700 mt-2">Scale when ROAS stays above break-even and conversion quality remains stable across multiple days, with healthy CAC payback.</p>
          </details>
        </div>
      </section>
    </>
  );
}
