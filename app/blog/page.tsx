import Link from "next/link";
import { BookOpen, TrendingUp, BarChart3, DollarSign, Zap } from "lucide-react";
import type { Metadata } from "next";
import EmailCaptureCard from "@/app/components/EmailCaptureCard";

export const metadata: Metadata = {
  title: "ROAS Blog 2026: Benchmarks, Case Studies, and Calculator Guides",
  description: "Read practical 2026 guides on ROAS, CAC, LTV, MER, and paid media benchmarks with real examples and linked calculators.",
  keywords: [
    "facebook ads",
    "roas calculator",
    "cac calculator",
    "ltv calculator",
    "mer calculator",
    "marketing guides",
  ],
  openGraph: {
    title: "ROAS Blog 2026: Benchmarks, Case Studies, and Calculator Guides",
    description: "Read practical 2026 guides on ROAS, CAC, LTV, MER, and paid media benchmarks with real examples and linked calculators.",
    url: "https://roas-calculator.tech/blog",
  },
  twitter: {
    card: "summary_large_image",
    title: "ROAS Blog 2026: Benchmarks, Case Studies, and Calculator Guides",
    description: "Read practical 2026 guides on ROAS, CAC, LTV, MER, and paid media benchmarks with real examples and linked calculators.",
  },
  alternates: {
    canonical: "https://roas-calculator.tech/blog",
  },
  robots: {
    index: true,
    follow: true,
  },
};

interface BlogPost {
  title: string;
  description: string;
  category: string;
  categoryColor: string;
  icon: React.ReactNode;
  href: string;
  date: string;
  readTime: string;
  wordCount: number;
  featured?: boolean;
}

const blogPosts: BlogPost[] = [
  {
    title: "Facebook Ads ROAS Case Study: 1.8x -> 5.2x in 90 Days",
    description:
      "Real case study with data: Fashion e-commerce store increased ROAS from 1.8x to 5.2x in 90 days. See exact strategies, budget allocation, and monthly results.",
    category: "Case Study",
    categoryColor: "bg-blue-100 text-blue-900",
    icon: <TrendingUp size={24} className="text-blue-600" />,
    href: "/blog/facebook-ads-case-study",
    date: "2024",
    readTime: "12 min",
    wordCount: 1850,
    featured: true,
  },
  {
    title: "ROAS Benchmarks 2026: Updated Channel and Industry Ranges",
    description:
      "Updated benchmark reference for 2026 with practical interpretation for Meta DTC, Google Shopping, and lead-gen CPL models.",
    category: "Benchmark Update",
    categoryColor: "bg-sky-100 text-sky-900",
    icon: <BarChart3 size={24} className="text-sky-600" />,
    href: "/blog/roas-benchmarks-2026",
    date: "2026",
    readTime: "8 min",
    wordCount: 1220,
  },
  {
    title: "SaaS CAC Payback Period and Cash Flow Planning",
    description:
      "How CAC payback controls cash flow risk, hiring velocity, and sustainable paid acquisition scaling in SaaS.",
    category: "SaaS Finance",
    categoryColor: "bg-indigo-100 text-indigo-900",
    icon: <BarChart3 size={24} className="text-indigo-600" />,
    href: "/blog/payback-period-cash-flow-saas",
    date: "2026",
    readTime: "9 min",
    wordCount: 1330,
  },
  {
    title: "Attribution Impact on ROAS: Last-Click vs Data-Driven",
    description:
      "How attribution model choice changes ROAS interpretation, reporting, and budget decisions across channels.",
    category: "Measurement",
    categoryColor: "bg-amber-100 text-amber-900",
    icon: <TrendingUp size={24} className="text-amber-600" />,
    href: "/blog/attribution-impact-on-roas",
    date: "2026",
    readTime: "8 min",
    wordCount: 1180,
  },
  {
    title: "How to Improve ROAS Without Raising Budget",
    description:
      "Practical workflow to improve ROAS through conversion rate, AOV, and traffic quality before increasing spend.",
    category: "Optimization",
    categoryColor: "bg-emerald-100 text-emerald-900",
    icon: <TrendingUp size={24} className="text-emerald-600" />,
    href: "/blog/how-to-improve-roas-without-raising-budget",
    date: "2026",
    readTime: "7 min",
    wordCount: 980,
  },
  {
    title: "ROAS Audit Checklist: Technical, Funnel, and Profitability",
    description:
      "Checklist for tracking validity, funnel diagnostics, and profitability guardrails before scaling ad spend.",
    category: "Audit",
    categoryColor: "bg-amber-100 text-amber-900",
    icon: <BarChart3 size={24} className="text-amber-600" />,
    href: "/blog/roas-audit-checklist",
    date: "2026",
    readTime: "6 min",
    wordCount: 860,
  },
  {
    title: "When to Scale or Pause Campaigns",
    description:
      "Threshold-based decision matrix using break-even ROAS, CAC, and payback constraints.",
    category: "Decision Guide",
    categoryColor: "bg-indigo-100 text-indigo-900",
    icon: <DollarSign size={24} className="text-indigo-600" />,
    href: "/blog/when-to-scale-or-pause-campaigns",
    date: "2026",
    readTime: "7 min",
    wordCount: 940,
  },
  {
    title: "Creative Testing Framework for ROAS",
    description:
      "Hypothesis-driven ad creative testing process to improve return quality and scale winners with confidence.",
    category: "Creative Strategy",
    categoryColor: "bg-purple-100 text-purple-900",
    icon: <Zap size={24} className="text-purple-600" />,
    href: "/blog/creative-testing-framework-for-roas",
    date: "2026",
    readTime: "7 min",
    wordCount: 1010,
  },
  {
    title: "Image Compression Technical Guide: Quality vs File Size",
    description:
      "Detailed guide on reducing image size to specific KB limits while preserving readability and clarity.",
    category: "Technical Guide",
    categoryColor: "bg-slate-100 text-slate-900",
    icon: <BookOpen size={24} className="text-slate-600" />,
    href: "/blog/image-compression-technical",
    date: "2026",
    readTime: "10 min",
    wordCount: 1600,
  },
  {
    title: "PDF Compression Guide: Keep Files Under Upload Limits",
    description:
      "Step-by-step process to create and compress PDFs for strict upload portals and exam forms.",
    category: "Technical Guide",
    categoryColor: "bg-slate-100 text-slate-900",
    icon: <BookOpen size={24} className="text-slate-600" />,
    href: "/blog/pdf-compression-guide",
    date: "2026",
    readTime: "9 min",
    wordCount: 1450,
  },
  {
    title: "Currency Exchange Guide: Rates, Spreads, and Transfer Fees",
    description:
      "Learn how live exchange rates work, where hidden spread costs appear, and how to reduce transfer loss.",
    category: "Finance Guide",
    categoryColor: "bg-green-100 text-green-900",
    icon: <DollarSign size={24} className="text-green-600" />,
    href: "/blog/currency-exchange-guide",
    date: "2026",
    readTime: "8 min",
    wordCount: 1320,
  },
];

export default function BlogIndex() {
  const featuredPosts = blogPosts.filter((p) => p.featured);
  const regularPosts = blogPosts.filter((p) => !p.featured);

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 py-12 px-4 md:px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <BookOpen size={32} className="text-blue-600" />
            <h1 className="text-4xl md:text-5xl font-bold">ROAS Tools Blog</h1>
          </div>

          <p className="text-lg text-slate-600 max-w-2xl">
            Expert guides, case studies, and technical deep dives on ROAS, CAC, LTV, MER, and profitability execution.
            Real data from our testing and client work.
          </p>
        </div>

        <section className="mb-10 bg-white border border-slate-200 rounded-2xl p-6">
          <h2 className="text-2xl font-bold text-slate-900 mb-2">ROAS Content Hubs</h2>
          <p className="text-slate-600 mb-4">Follow these pillar hubs to move from basic ROAS learning to profitable scaling decisions.</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-3">
            <Link href="/learn/roas" className="rounded-lg border border-slate-200 p-3 hover:border-blue-500 transition">
              <p className="font-semibold text-slate-900">ROAS Education</p>
            </Link>
            <Link href="/benchmarks/roas" className="rounded-lg border border-slate-200 p-3 hover:border-blue-500 transition">
              <p className="font-semibold text-slate-900">ROAS Benchmarks</p>
            </Link>
            <Link href="/optimize/roas" className="rounded-lg border border-slate-200 p-3 hover:border-blue-500 transition">
              <p className="font-semibold text-slate-900">Ad Optimization</p>
            </Link>
            <Link href="/profitability/ads" className="rounded-lg border border-slate-200 p-3 hover:border-blue-500 transition">
              <p className="font-semibold text-slate-900">Profitability</p>
            </Link>
          </div>
        </section>

        <div className="grid lg:grid-cols-[minmax(0,1fr)_320px] gap-8 items-start">
          <div>
            {/* Featured Posts */}
            {featuredPosts.length > 0 && (
              <section className="mb-16">
                <h2 className="text-2xl font-bold mb-6 text-slate-900">Featured</h2>

                <div className="grid gap-6">
                  {featuredPosts.map((post) => (
                    <Link key={post.href} href={post.href}>
                      <div className="group bg-white rounded-2xl shadow-md hover:shadow-xl transition-all overflow-hidden cursor-pointer border border-slate-200 hover:border-slate-300">
                        <div className="p-8 md:p-10">
                          <div className="flex items-start justify-between mb-4">
                            <div className="flex items-center gap-3">
                              {post.icon}
                              <span className={`text-xs font-bold px-3 py-1 rounded-full ${post.categoryColor}`}>
                                {post.category}
                              </span>
                            </div>
                            <div className="text-sm text-slate-500">
                              <p className="font-semibold">{post.readTime}</p>
                              <p>{post.wordCount.toLocaleString()} words</p>
                            </div>
                          </div>

                          <h3 className="text-2xl md:text-3xl font-bold mb-3 text-slate-900 group-hover:text-blue-600 transition">
                            {post.title}
                          </h3>

                          <p className="text-slate-600 mb-4 text-lg">
                            {post.description}
                          </p>

                          <div className="flex items-center text-blue-600 font-semibold">
                            Read Article &rarr;
                          </div>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </section>
            )}

            {/* Regular Posts Grid */}
            {regularPosts.length > 0 && (
              <section>
                <h2 className="text-2xl font-bold mb-6 text-slate-900">All Articles</h2>

                <div className="grid md:grid-cols-2 gap-6 mb-12">
                  {regularPosts.map((post) => (
                    <Link key={post.href} href={post.href}>
                      <div className="group h-full bg-white rounded-xl shadow-sm hover:shadow-lg transition-all overflow-hidden cursor-pointer border border-slate-200 hover:border-slate-300">
                        <div className="p-6">
                          <div className="flex items-start justify-between mb-3">
                            <div className="flex items-center gap-2">
                              {post.icon}
                              <span className={`text-xs font-bold px-2 py-1 rounded-full ${post.categoryColor}`}>
                                {post.category}
                              </span>
                            </div>
                            <p className="text-xs text-slate-500">{post.readTime} | {post.wordCount.toLocaleString()} words</p>
                          </div>

                          <h3 className="text-lg font-bold mb-2 text-slate-900 group-hover:text-blue-600 transition line-clamp-2">
                            {post.title}
                          </h3>

                          <p className="text-slate-600 text-sm mb-4 line-clamp-2">
                            {post.description}
                          </p>

                          <div className="flex items-center text-blue-600 font-semibold text-sm">
                            Read Article &rarr;
                          </div>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </section>
            )}
          </div>
          <aside className="lg:sticky lg:top-20 space-y-4">
            <EmailCaptureCard
              source="blog_sidebar"
              variant="compact"
              title="Get Weekly RPM/ROAS Benchmarks"
              description="Use this during weekly campaign reviews to decide scale, hold, or pause."
              buttonLabel="Get Benchmark Updates"
              helperText="Includes break-even guardrails and scenario prompts."
            />
            <div className="bg-white border border-slate-200 rounded-xl p-4">
              <p className="text-sm text-slate-600">
                Want the decision matrix version?{" "}
                <Link href="/lead-magnet/roas-decision-matrix" className="text-blue-700 hover:underline">
                  Open lead magnet page
                </Link>
                .
              </p>
            </div>
          </aside>
        </div>

        {/* CTA Section */}
        <div className="bg-linear-to-r from-blue-50 to-indigo-50 rounded-2xl p-8 md:p-12 border border-blue-200 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
            Ready to Optimize Your Campaigns?
          </h2>

          <p className="text-slate-600 mb-6 max-w-2xl mx-auto">
            Use our free tools to calculate ROAS, CAC, LTV, MER, payback period, and break-even thresholds.
            No signup required for calculator access.
          </p>

          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              href="/"
              className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
            >
              ROAS Calculator
            </Link>
            <Link
              href="/cac-calculator"
              className="bg-slate-900 text-white px-6 py-3 rounded-lg font-semibold hover:bg-slate-800 transition"
            >
              CAC Calculator
            </Link>
            <Link
              href="/ppc-toolkit"
              className="bg-indigo-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-indigo-700 transition"
            >
              PPC Toolkit
            </Link>
            <Link
              href="/resources"
              className="bg-white text-slate-900 border border-slate-300 px-6 py-3 rounded-lg font-semibold hover:bg-slate-100 transition"
            >
              Templates
            </Link>
          </div>
        </div>

        {/* Info Section */}
        <div className="mt-16 grid md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg border border-slate-200">
            <BarChart3 size={28} className="text-blue-600 mb-3" />
            <h3 className="font-bold text-lg mb-2">Data-Driven</h3>
            <p className="text-slate-600 text-sm">
              Every guide includes real test results, numbers, and statistics from actual campaigns and testing.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg border border-slate-200">
            <BookOpen size={28} className="text-purple-600 mb-3" />
            <h3 className="font-bold text-lg mb-2">Expert Written</h3>
            <p className="text-slate-600 text-sm">
              Written by marketing professionals focused on digital advertising and optimization.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg border border-slate-200">
            <Zap size={28} className="text-orange-600 mb-3" />
            <h3 className="font-bold text-lg mb-2">Actionable</h3>
            <p className="text-slate-600 text-sm">
              Every article includes specific strategies you can use immediately to optimize your own campaigns.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
