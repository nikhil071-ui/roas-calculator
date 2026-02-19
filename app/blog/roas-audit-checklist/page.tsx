import Link from "next/link";
import type { Metadata } from "next";
import BlogInternalLinks from "@/app/components/BlogInternalLinks";
import ArticleJsonLd from "@/app/components/ArticleJsonLd";
import { getBlogPostBySlug } from "@/app/lib/blog-posts";

const blogMeta = getBlogPostBySlug("roas-audit-checklist");

export const metadata: Metadata = {
  title: "ROAS Audit Checklist: Technical, Funnel, and Profitability",
  description:
    "Use this ROAS audit checklist to diagnose tracking errors, thin conversion funnels, and profitability leaks before scaling ad spend.",
  alternates: {
    canonical: "https://roas-calculator.tech/blog/roas-audit-checklist",
  },
  robots: { index: true, follow: true },
  other: {
    "article:read_time": `${blogMeta?.readTimeMinutes ?? 6} min`,
    "article:word_count": `${blogMeta?.wordCount ?? 860}`,
  },
};

export default function RoasAuditChecklistPage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900 py-12 px-4 md:px-6">
      <ArticleJsonLd
        headline="ROAS Audit Checklist: Technical, Funnel, and Profitability"
        description="Use this ROAS audit checklist to diagnose tracking errors, thin conversion funnels, and profitability leaks before scaling ad spend."
        url="https://roas-calculator.tech/blog/roas-audit-checklist"
        publishedDate={blogMeta?.publishedDate}
        modifiedDate={blogMeta?.modifiedDate}
        readTimeMinutes={blogMeta?.readTimeMinutes}
        wordCount={blogMeta?.wordCount}
      />
      <article className="max-w-4xl mx-auto bg-white border border-slate-200 rounded-2xl p-8 md:p-10 space-y-6">
        <Link href="/blog" className="text-sm text-slate-500 hover:text-blue-600 transition">Back to Blog</Link>
        <h1 className="text-3xl font-bold">ROAS Audit Checklist</h1>
        <p className="text-slate-700">Run this checklist weekly to keep optimization decisions grounded in trustworthy data.</p>
        <h2 className="text-2xl font-bold">Checklist</h2>
        <ul className="list-disc pl-5 space-y-2 text-slate-700">
          <li>Validate conversion tracking and attribution windows.</li>
          <li>Compare reported revenue and backend revenue for leakage.</li>
          <li>Check break-even ROAS by margin changes and discount policy.</li>
          <li>Review low-intent traffic segments and cut non-performing spend.</li>
          <li>Audit landing-page speed, form friction, and checkout abandonment.</li>
          <li>Cross-check ROAS with CAC, MER, and payback period.</li>
        </ul>
        <div className="bg-slate-50 border border-slate-200 rounded-xl p-5">
          <p className="font-semibold text-slate-900 mb-2">Related Pages</p>
          <div className="flex flex-wrap gap-3">
            <Link href="/learn/roas" className="px-4 py-2 rounded-lg bg-blue-600 text-white font-semibold hover:bg-blue-700 transition">ROAS Education Hub</Link>
            <Link href="/profitability/ads" className="px-4 py-2 rounded-lg bg-emerald-600 text-white font-semibold hover:bg-emerald-700 transition">Profitability Hub</Link>
          </div>
        </div>
        <BlogInternalLinks
          title="Audit to Calculator Path"
          description="Convert audit findings into measurable action on key calculators."
          links={[
            { href: "/", label: "ROAS Calculator" },
            { href: "/break-even-roas-by-margin", label: "Break-even ROAS by Margin" },
            { href: "/mer-calculator", label: "MER Calculator" },
            { href: "/resources/roas-planning-template", label: "ROAS Planning Template" },
            { href: "/ppc-toolkit", label: "PPC Toolkit" },
          ]}
        />
      </article>
    </main>
  );
}
