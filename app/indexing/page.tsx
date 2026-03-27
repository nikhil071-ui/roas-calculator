import Link from "next/link";
import type { Metadata } from "next";
import {
  ArrowLeft,
  CheckCircle,
  ExternalLink,
  FileSearch,
  Globe,
  Search,
  ShieldCheck,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Google Search Console Indexing Guide for ROAS Content",
  description:
    "Practical indexing workflow for ROAS Tools pages, including quality checks, crawl diagnostics, and when to request indexing in Google Search Console.",
  openGraph: {
    title: "Google Search Console Indexing Guide for ROAS Content",
    description:
      "Practical indexing workflow for ROAS Tools pages, including quality checks, crawl diagnostics, and when to request indexing in Google Search Console.",
    url: "https://roas-calculator.tech/indexing",
  },
  twitter: {
    card: "summary_large_image",
    title: "Google Search Console Indexing Guide for ROAS Content",
    description:
      "Practical indexing workflow for ROAS Tools pages, including quality checks, crawl diagnostics, and when to request indexing in Google Search Console.",
  },
  alternates: {
    canonical: "https://roas-calculator.tech/indexing",
  },
};

const qualityChecks = [
  "Confirm the page has a unique purpose, not just a thin doorway to another calculator or article.",
  "Make sure the introduction explains who the page is for, what question it answers, and how to use it.",
  "Check that headings add original analysis, examples, or methodology rather than repeating the target keyword.",
  "Verify internal links point to supporting pages such as methodology, benchmarks, glossary, and related calculators.",
  "Review author, review-date, and editorial trust elements so the page shows clear ownership and accountability.",
];

const indexingWorkflow = [
  "Publish the page with a canonical URL, stable title tag, descriptive meta description, and clean internal links.",
  "Validate the live URL for a 200 status, mobile rendering, structured data, and self-referencing canonical.",
  "Submit the sitemap in Google Search Console and wait for discovery before using manual requests excessively.",
  "Use URL Inspection only after the page is fully complete and linked from relevant hubs on the site.",
  "Re-check after updates to confirm Google selected the intended canonical and that no accidental noindex rule exists.",
];

const commonReasons = [
  {
    title: "Thin or low-differentiation content",
    body:
      "Pages that exist only to list links, restate basic definitions, or present a tool without interpretation often struggle to earn stable indexing. Search-friendly pages need unique explanation, examples, and a clear reason to exist.",
  },
  {
    title: "Weak internal context",
    body:
      "A page can be technically crawlable but still feel unimportant if nothing meaningful links to it. Important pages should be reachable from topical hubs, related articles, and the primary navigation where appropriate.",
  },
  {
    title: "Mixed signals",
    body:
      "Conflicting canonical tags, inconsistent titles, duplicate near-match pages, or accidental noindex usage can slow or block indexing. Keep the final published version clean before requesting review.",
  },
  {
    title: "Not enough evidence of trust",
    body:
      "For publisher sites, Google looks for clear ownership, editorial standards, methodology, and user-first explanations. Pages tied to financial or performance decisions need especially strong transparency.",
  },
];

const pageGroups = [
  {
    label: "Core calculators",
    examples: ["/", "/break-even-roas-by-margin", "/cac-calculator", "/ltv-calculator", "/mer-calculator"],
  },
  {
    label: "Benchmark and education hubs",
    examples: ["/benchmarks/roas", "/learn/roas", "/optimize/roas", "/comparisons/roas-vs-roi-vs-mer-vs-acos"],
  },
  {
    label: "Trust and methodology pages",
    examples: ["/about", "/authors", "/methodology", "/editorial-policy", "/data-sources"],
  },
];

const faqItems = [
  {
    question: "When should I request indexing manually?",
    answer:
      "Use manual requests after a page is complete, internally linked, and technically valid. It works best for important new pages or materially improved pages, not for every small edit.",
  },
  {
    question: "Does requesting indexing fix low-value content?",
    answer:
      "No. URL Inspection can speed up discovery, but it does not override quality evaluation. If a page lacks unique value, Google may still decline to index it consistently.",
  },
  {
    question: "What kinds of pages deserve priority on this site?",
    answer:
      "Priority should go to pages with clear user intent and strong original utility: the main ROAS calculator, break-even tools, benchmark pages, comparison guides, and the trust pages that explain methodology and editorial standards.",
  },
];

export default function IndexingPage() {
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  const howToJsonLd = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "How to request indexing for high-value ROAS content",
    description:
      "Editorial workflow for validating quality, crawl readiness, and Google Search Console submission on ROAS Tools.",
    totalTime: "PT15M",
    step: indexingWorkflow.map((step, index) => ({
      "@type": "HowToStep",
      position: index + 1,
      name: `Step ${index + 1}`,
      text: step,
    })),
  };

  return (
    <main className="min-h-screen bg-slate-50 py-12 px-4 text-slate-900 md:px-6">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToJsonLd) }} />

      <div className="mx-auto mb-8 max-w-5xl">
        <Link
          href="/"
          className="inline-flex items-center text-sm font-medium text-slate-500 transition hover:text-blue-600"
        >
          <ArrowLeft size={18} className="mr-2" /> Back to Home
        </Link>
      </div>

      <div className="mx-auto max-w-5xl overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
        <header className="bg-slate-900 px-8 py-10 text-white md:px-12 md:py-14">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-1 text-sm text-slate-200">
            <Search size={16} />
            Search Console Workflow
          </div>
          <h1 className="max-w-3xl text-3xl font-bold leading-tight md:text-5xl">
            A Better Indexing Workflow for Publisher-Quality ROAS Pages
          </h1>
          <p className="mt-4 max-w-3xl text-lg text-slate-300">
            This guide explains how ROAS Tools evaluates pages before requesting indexing in Google Search
            Console, with an emphasis on originality, internal context, and trust signals rather than
            shortcut submission tactics.
          </p>
        </header>

        <div className="space-y-10 px-8 py-10 md:px-12 md:py-12">
          <section className="grid gap-4 md:grid-cols-3">
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
              <Globe className="mb-3 text-blue-600" size={22} />
              <h2 className="text-lg font-bold text-slate-900">Crawl readiness</h2>
              <p className="mt-2 text-sm leading-6 text-slate-700">
                A page should be technically reachable, canonically clean, mobile-friendly, and linked from the
                rest of the site before submission.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
              <ShieldCheck className="mb-3 text-emerald-600" size={22} />
              <h2 className="text-lg font-bold text-slate-900">Trust signals</h2>
              <p className="mt-2 text-sm leading-6 text-slate-700">
                Methodology, review dates, authorship, and clear editorial ownership help support quality
                evaluation for finance-adjacent content.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
              <FileSearch className="mb-3 text-violet-600" size={22} />
              <h2 className="text-lg font-bold text-slate-900">Original value</h2>
              <p className="mt-2 text-sm leading-6 text-slate-700">
                Indexing requests work best when the page offers real explanation, examples, and interpretation
                beyond a basic tool shell or keyword-stuffed template.
              </p>
            </div>
          </section>

          <section className="rounded-2xl border border-blue-200 bg-blue-50 p-6">
            <h2 className="text-2xl font-bold text-slate-900">Before You Request Indexing</h2>
            <p className="mt-3 text-slate-700">
              On this site, indexing is treated as the final step, not the first one. We publish only after a
              page has enough topical depth to stand on its own, enough internal links to show context, and
              enough transparency to support user trust. That matters more than repeatedly clicking
              <strong> Request Indexing</strong> in Search Console.
            </p>
            <ul className="mt-5 space-y-3">
              {qualityChecks.map((item) => (
                <li key={item} className="flex gap-3 text-slate-700">
                  <CheckCircle size={18} className="mt-1 shrink-0 text-blue-600" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="mb-4 flex items-center gap-2 text-2xl font-bold text-slate-900">
              <Globe size={22} className="text-blue-600" /> Step-by-Step Indexing Workflow
            </h2>
            <ol className="space-y-4">
              {indexingWorkflow.map((step, index) => (
                <li key={step} className="flex gap-4 rounded-2xl border border-slate-200 p-5">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-blue-600 font-bold text-white">
                    {index + 1}
                  </div>
                  <p className="leading-7 text-slate-700">{step}</p>
                </li>
              ))}
            </ol>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-bold text-slate-900">Common Reasons Pages Stay Out of Index</h2>
            <div className="grid gap-4 md:grid-cols-2">
              {commonReasons.map((item) => (
                <article key={item.title} className="rounded-2xl border border-slate-200 p-6">
                  <h3 className="text-lg font-bold text-slate-900">{item.title}</h3>
                  <p className="mt-3 leading-7 text-slate-700">{item.body}</p>
                </article>
              ))}
            </div>
          </section>

          <section className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
            <h2 className="text-2xl font-bold text-slate-900">Priority Page Types for ROAS Tools</h2>
            <p className="mt-3 text-slate-700">
              Not every page deserves the same submission urgency. The strongest indexing candidates are the pages
              that combine clear search intent, original utility, and supporting editorial context.
            </p>
            <div className="mt-6 space-y-4">
              {pageGroups.map((group) => (
                <div key={group.label} className="rounded-2xl border border-slate-200 bg-white p-5">
                  <h3 className="text-lg font-bold capitalize text-slate-900">{group.label}</h3>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {group.examples.map((url) => (
                      <Link
                        key={url}
                        href={url}
                        className="inline-flex items-center gap-2 rounded-full border border-slate-300 px-3 py-2 text-sm font-medium text-slate-700 transition hover:border-blue-400 hover:text-blue-700"
                      >
                        {url}
                        <ExternalLink size={14} />
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="grid gap-6 md:grid-cols-2">
            <article className="rounded-2xl border border-slate-200 p-6">
              <h2 className="text-xl font-bold text-slate-900">Technical Checks</h2>
              <ul className="mt-4 list-disc space-y-2 pl-5 text-slate-700">
                <li>Confirm live URL returns 200 and does not soft-redirect.</li>
                <li>Validate canonical points to the exact final URL.</li>
                <li>Check structured data where relevant for calculators, articles, or FAQ content.</li>
                <li>Make sure robots directives and sitemap intent do not conflict.</li>
                <li>Inspect mobile rendering so key copy appears before ads or secondary modules.</li>
              </ul>
            </article>
            <article className="rounded-2xl border border-slate-200 p-6">
              <h2 className="text-xl font-bold text-slate-900">Editorial Checks</h2>
              <ul className="mt-4 list-disc space-y-2 pl-5 text-slate-700">
                <li>Lead with a real explanation, not just a tool embed or link dump.</li>
                <li>Add worked examples, interpretation, and limitations where users may misread outputs.</li>
                <li>Support claims with methodology, glossary, and benchmark pages.</li>
                <li>Show ownership through review dates, policy pages, and contact paths.</li>
                <li>Keep overlap low across similar calculators so each page earns its own role.</li>
              </ul>
            </article>
          </section>

          <section className="rounded-2xl border border-emerald-200 bg-emerald-50 p-6">
            <h2 className="text-2xl font-bold text-emerald-900">Related Quality Signals on This Site</h2>
            <p className="mt-3 text-slate-700">
              Indexing quality improves when core pages are supported by visible editorial infrastructure. These
              pages help explain who publishes the content, how formulas are reviewed, and what standards guide
              updates.
            </p>
            <div className="mt-5 flex flex-wrap gap-3">
              <Link href="/methodology" className="rounded-lg bg-emerald-700 px-4 py-2 font-semibold text-white transition hover:bg-emerald-800">
                Review Methodology
              </Link>
              <Link href="/editorial-policy" className="rounded-lg border border-emerald-300 bg-white px-4 py-2 font-semibold text-emerald-900 transition hover:bg-emerald-100">
                Editorial Policy
              </Link>
              <Link href="/authors" className="rounded-lg border border-emerald-300 bg-white px-4 py-2 font-semibold text-emerald-900 transition hover:bg-emerald-100">
                Authors and Reviewers
              </Link>
              <Link href="/data-sources" className="rounded-lg border border-emerald-300 bg-white px-4 py-2 font-semibold text-emerald-900 transition hover:bg-emerald-100">
                Data Sources
              </Link>
            </div>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-bold text-slate-900">Frequently Asked Questions</h2>
            <div className="space-y-4">
              {faqItems.map((item) => (
                <article key={item.question} className="rounded-2xl border border-slate-200 p-6">
                  <h3 className="text-lg font-bold text-slate-900">{item.question}</h3>
                  <p className="mt-3 leading-7 text-slate-700">{item.answer}</p>
                </article>
              ))}
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
