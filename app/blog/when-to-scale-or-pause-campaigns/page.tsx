import Link from "next/link";
import type { Metadata } from "next";
import BlogInternalLinks from "@/app/components/BlogInternalLinks";
import ArticleJsonLd from "@/app/components/ArticleJsonLd";

export const metadata: Metadata = {
  title: "When to Scale or Pause Campaigns: ROAS Decision Thresholds",
  description:
    "Use ROAS threshold bands tied to break-even math to decide when to scale, hold, or pause campaigns.",
  alternates: {
    canonical: "https://roas-calculator.tech/blog/when-to-scale-or-pause-campaigns",
  },
};

export default function ScaleOrPauseCampaignsPage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900 py-12 px-4 md:px-6">
      <ArticleJsonLd
        headline="When to Scale or Pause Campaigns: ROAS Decision Thresholds"
        description="Use ROAS threshold bands tied to break-even math to decide when to scale, hold, or pause campaigns."
        url="https://roas-calculator.tech/blog/when-to-scale-or-pause-campaigns"
      />
      <article className="max-w-4xl mx-auto bg-white border border-slate-200 rounded-2xl p-8 md:p-10 space-y-6">
        <Link href="/blog" className="text-sm text-slate-500 hover:text-blue-600 transition">Back to Blog</Link>
        <h1 className="text-3xl font-bold">When to Scale or Pause Campaigns</h1>
        <p className="text-slate-700">
          Budget decisions should follow break-even ROAS and cash flow constraints, not isolated daily spikes.
        </p>
        <h2 className="text-2xl font-bold">Decision Matrix</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm border border-slate-200">
            <thead className="bg-slate-100">
              <tr>
                <th className="text-left px-4 py-2">ROAS Condition</th>
                <th className="text-left px-4 py-2">Action</th>
                <th className="text-left px-4 py-2">Check Before Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border-t px-4 py-2">20%+ above break-even</td>
                <td className="border-t px-4 py-2">Scale in 10-20% steps</td>
                <td className="border-t px-4 py-2">Confirm stable CAC and payback</td>
              </tr>
              <tr>
                <td className="border-t px-4 py-2">Near break-even</td>
                <td className="border-t px-4 py-2">Hold and optimize funnel</td>
                <td className="border-t px-4 py-2">Improve conversion and AOV</td>
              </tr>
              <tr>
                <td className="border-t px-4 py-2">10%+ below break-even</td>
                <td className="border-t px-4 py-2">Pause or cap spend</td>
                <td className="border-t px-4 py-2">Rework offer and targeting</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="bg-slate-50 border border-slate-200 rounded-xl p-5">
          <p className="font-semibold text-slate-900 mb-2">Run the numbers first</p>
          <div className="flex flex-wrap gap-3">
            <Link href="/roas/break-even-roas" className="px-4 py-2 rounded-lg bg-blue-600 text-white font-semibold hover:bg-blue-700 transition">Break-even Calculator</Link>
            <Link href="/payback-period-calculator" className="px-4 py-2 rounded-lg bg-indigo-600 text-white font-semibold hover:bg-indigo-700 transition">Payback Calculator</Link>
          </div>
        </div>
        <BlogInternalLinks
          title="Scale/Pause Decision Links"
          description="Use break-even and payback thresholds before changing campaign budgets."
          links={[
            { href: "/roas/break-even-roas", label: "Break-even ROAS Calculator" },
            { href: "/payback-period-calculator", label: "CAC Payback Calculator" },
            { href: "/roas/facebook-ads", label: "Facebook Ads ROAS Calculator" },
            { href: "/ppc-toolkit", label: "PPC Toolkit" },
            { href: "/optimize/roas", label: "ROAS Optimization Hub" },
          ]}
        />
      </article>
    </main>
  );
}
