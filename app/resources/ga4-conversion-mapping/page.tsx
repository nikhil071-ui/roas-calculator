import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "GA4 Conversion Mapping for ROAS Tools",
  description:
    "Implementation guide for GA4 event naming and conversion mapping across calculator usage, template downloads, and CTA clicks.",
  alternates: {
    canonical: "https://roas-calculator.tech/resources/ga4-conversion-mapping",
  },
  openGraph: {
    title: "GA4 Conversion Mapping for ROAS Tools",
    description:
      "Track calculator starts, submits, template downloads, and CTA clicks with a clean GA4 conversion mapping standard.",
    url: "https://roas-calculator.tech/resources/ga4-conversion-mapping",
  },
  twitter: {
    card: "summary_large_image",
    title: "GA4 Conversion Mapping for ROAS Tools",
    description:
      "Track calculator starts, submits, template downloads, and CTA clicks with a clean GA4 conversion mapping standard.",
  },
};

export default function GA4ConversionMappingPage() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 py-12 px-4 md:px-6">
      <main className="max-w-5xl mx-auto bg-white border border-slate-200 rounded-2xl p-8 md:p-10">
        <Link href="/resources" className="text-sm text-slate-500 hover:text-blue-600 transition">
          Back to Resources
        </Link>
        <h1 className="text-3xl md:text-4xl font-bold mt-3">GA4 Conversion Mapping</h1>
        <p className="text-slate-600 mt-3">
          Use this event taxonomy for consistent funnel reporting across calculators, resource downloads, and decision CTA modules.
        </p>

        <section className="mt-8">
          <h2 className="text-2xl font-bold">Core Events</h2>
          <div className="overflow-x-auto mt-4">
            <table className="w-full text-sm border border-slate-200">
              <thead className="bg-slate-100">
                <tr>
                  <th className="text-left px-4 py-2">Event Name</th>
                  <th className="text-left px-4 py-2">When It Fires</th>
                  <th className="text-left px-4 py-2">Recommended Params</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border-t px-4 py-2 font-mono">calculator_start</td>
                  <td className="border-t px-4 py-2">First input interaction in a calculator</td>
                  <td className="border-t px-4 py-2 font-mono">page_type, calculator_type, slug</td>
                </tr>
                <tr>
                  <td className="border-t px-4 py-2 font-mono">calculator_submit</td>
                  <td className="border-t px-4 py-2">User clicks calculate button</td>
                  <td className="border-t px-4 py-2 font-mono">calculator_type, has_optional_costs, result_state</td>
                </tr>
                <tr>
                  <td className="border-t px-4 py-2 font-mono">template_download</td>
                  <td className="border-t px-4 py-2">Resource file is downloaded</td>
                  <td className="border-t px-4 py-2 font-mono">template_name, file_type, source_page</td>
                </tr>
                <tr>
                  <td className="border-t px-4 py-2 font-mono">cta_click_ppc_toolkit</td>
                  <td className="border-t px-4 py-2">Clicks to PPC Toolkit from articles/comparisons</td>
                  <td className="border-t px-4 py-2 font-mono">source_page, cta_module, position</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="mt-8">
          <h2 className="text-2xl font-bold">Page to Event Mapping</h2>
          <ul className="list-disc pl-5 mt-3 text-slate-700 space-y-2">
            <li>Homepage and `/roas/*` pages: `calculator_start`, `calculator_submit`.</li>
            <li>`/resources` and template links: `template_download`.</li>
            <li>CTA modules on blog/comparison pages: `cta_click_ppc_toolkit`.</li>
            <li>Mark `calculator_submit` and `template_download` as GA4 conversions.</li>
          </ul>
        </section>

        <section className="mt-8">
          <h2 className="text-2xl font-bold">Implementation Notes</h2>
          <ul className="list-disc pl-5 mt-3 text-slate-700 space-y-2">
            <li>Use lower_snake_case event names and stable parameter keys.</li>
            <li>Pass `slug` for dynamic pages to enable channel-level reporting.</li>
            <li>Avoid duplicate firing from both click and submit handlers.</li>
            <li>Keep event payloads lightweight and non-PII.</li>
          </ul>
        </section>
      </main>
    </div>
  );
}

