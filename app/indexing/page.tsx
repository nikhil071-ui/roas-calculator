import Link from "next/link";
import { ArrowLeft, Globe, CheckCircle, ExternalLink } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Indexing Checklist",
  description: "Internal checklist for submitting pages in Google Search Console.",
  robots: {
    index: false,
    follow: false,
    nocache: true,
  },
  openGraph: {
    title: "Indexing Checklist",
    description: "Internal checklist for submitting pages in Google Search Console.",
    url: "https://roas-calculator.tech/indexing",
  },
  twitter: {
    card: "summary_large_image",
    title: "Indexing Checklist",
    description: "Internal checklist for submitting pages in Google Search Console.",
  },
  alternates: {
    canonical: "https://roas-calculator.tech/indexing",
  },
};

const priorityUrls = [
  "/",
  "/blog",
  "/ppc-toolkit",
  "/resources",
  "/comparisons",
  "/benchmarks/roas",
  "/benchmarks/facebook-ads-roas",
  "/benchmarks/google-ads-roas",
  "/benchmarks/lead-gen-cpl-roas",
  "/comparisons/roas-vs-roi-vs-mer-vs-acos",
  "/comparisons/cac-vs-cpa-vs-roas",
  "/comparisons/mer-vs-roas",
  "/blog/roas-benchmarks-2026",
  "/blog/roas-audit-checklist",
  "/blog/how-to-improve-roas-without-raising-budget",
  "/blog/when-to-scale-or-pause-campaigns",
  "/break-even-roas-by-margin",
  "/cac-calculator",
  "/ltv-calculator",
  "/mer-calculator",
  "/payback-period-calculator",
  "/shopify-roas-calculator",
  "/amazon-roas",
  "/lead-generation-roas",
  "/saas-cac-payback",
  "/resources/roas-planning-template",
  "/resources/backlink-outreach-playbook",
  "/resources/seo-9of10-checklist",
  "/resources/ga4-conversion-mapping",
  "/about",
  "/team",
  "/editorial-policy",
  "/case-studies",
  "/testimonials",
  "/glossary",
  "/contact",
];

export default function Indexing() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 py-12 px-4 md:px-6">
      {/* --- BACK BUTTON --- */}
      <div className="max-w-4xl mx-auto mb-8">
        <Link href="/" className="inline-flex items-center text-slate-500 hover:text-blue-600 transition font-medium">
          <ArrowLeft size={18} className="mr-2" /> Back to Home
        </Link>
      </div>

      {/* --- MAIN CONTENT --- */}
      <main className="max-w-4xl mx-auto bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
        {/* Header Section */}
        <div className="bg-slate-900 p-8 md:p-12 text-white">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Indexing Checklist</h1>
          <p className="text-slate-300 text-lg max-w-2xl">
            Use this page to submit key URLs for indexing in Google Search Console.
          </p>
        </div>

        {/* Content Section */}
        <div className="p-8 md:p-12 space-y-10">
          {/* Steps */}
          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
              <Globe size={20} className="text-blue-600" /> How to Request Indexing
            </h2>
            <ol className="space-y-3 text-slate-700">
              <li className="flex gap-3">
                <span className="font-bold text-blue-600">1.</span>
                <span>Open Google Search Console for your site.</span>
              </li>
              <li className="flex gap-3">
                <span className="font-bold text-blue-600">2.</span>
                <span>Use the URL Inspection tool and paste a URL from the list below.</span>
              </li>
              <li className="flex gap-3">
                <span className="font-bold text-blue-600">3.</span>
                <span>
                  Click <strong>Request Indexing</strong>.
                </span>
              </li>
              <li className="flex gap-3">
                <span className="font-bold text-blue-600">4.</span>
                <span>Repeat for each priority URL.</span>
              </li>
            </ol>
          </section>

          {/* Priority URLs */}
          <section className="bg-slate-50 p-6 rounded-xl border border-slate-200">
            <h3 className="text-lg font-bold text-slate-900 mb-4">Priority URLs to Submit</h3>
            <ul className="space-y-3">
              {priorityUrls.map((url) => (
                <li key={url} className="flex items-center justify-between gap-4">
                  <span className="text-slate-700">{url}</span>
                  <Link href={url} className="text-blue-600 underline inline-flex items-center gap-2">
                    Open <ExternalLink size={14} />
                  </Link>
                </li>
              ))}
            </ul>
          </section>

          {/* Sitemap */}
          <section className="bg-blue-50 p-6 rounded-xl border border-blue-200">
            <h3 className="text-lg font-bold text-slate-900 mb-2">Submit Your Sitemap</h3>
            <p className="text-slate-700 mb-3">
              In Google Search Console, submit your sitemap to help Google discover all pages faster.
            </p>
            <div className="flex items-center gap-3">
              <CheckCircle size={18} className="text-blue-600" />
              <span className="text-slate-700">
                Sitemap URL: <strong>/sitemap.xml</strong>
              </span>
            </div>
          </section>

          <section className="bg-white p-6 rounded-xl border border-slate-200">
            <h3 className="text-lg font-bold text-slate-900 mb-2">Crawl Diagnostics Checklist</h3>
            <ul className="list-disc pl-5 space-y-2 text-slate-700">
              <li>In URL Inspection, confirm canonical is selected to non-www host.</li>
              <li>Validate mobile crawler fetch is successful for homepage and top /roas/* URLs.</li>
              <li>
                In your crawl tool, check for 200 status on priority pages and 301 from /blog/roas-benchmarks to
                /blog/roas-benchmarks-2026.
              </li>
              <li>Confirm noindex pages are intentional and removed from sitemap.</li>
              <li>Verify structured data validity for Article, FAQPage, and WebApplication where applied.</li>
            </ul>
          </section>
        </div>
      </main>
    </div>
  );
}
