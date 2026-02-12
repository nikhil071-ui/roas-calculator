import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tool Comparisons | ROAS Tools",
  description: "Compare ROAS Tools with popular alternatives for image compression, PDF conversion, currency exchange, and ROAS tracking.",
  keywords: [
    "tool comparisons",
    "roas calculator comparison",
    "image compressor comparison",
    "pdf converter comparison",
    "currency converter comparison",
  ],
  openGraph: {
    title: "Tool Comparisons | ROAS Tools",
    description: "Compare ROAS Tools with popular alternatives for image compression, PDF conversion, currency exchange, and ROAS tracking.",
    url: "https://roas-calculator.tech/comparisons",
  },
      twitter: {
    card: "summary_large_image",
    title: "Tool Comparisons | ROAS Tools",
    description: "Compare ROAS Tools with popular alternatives for image compression, PDF conversion, currency exchange, and ROAS tracking.",
  },
  alternates: {
    canonical: "https://roas-calculator.tech/comparisons",
  },
};

export default function ComparisonsPage() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 py-12 px-4 md:px-6">
      <div className="max-w-5xl mx-auto">
        <div className="mb-10">
          <Link href="/" className="text-slate-500 hover:text-blue-600 transition text-sm">
            Back to Home
          </Link>
          <h1 className="text-3xl md:text-4xl font-bold mt-2">Tool Comparisons</h1>
          <p className="text-slate-600 mt-2 max-w-2xl">
            Honest comparisons that highlight speed, privacy, accuracy, and ease of use.
          </p>
        </div>

        <div className="space-y-8">
          <section className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
            <h2 className="text-xl font-bold text-slate-900">Image Compressor: ROAS Tools vs Alternatives</h2>
            <div className="overflow-x-auto mt-4">
              <table className="w-full text-sm border border-slate-200">
                <thead className="bg-slate-100">
                  <tr>
                    <th className="text-left px-3 py-2">Feature</th>
                    <th className="text-left px-3 py-2">ROAS Tools</th>
                    <th className="text-left px-3 py-2">Typical Online Compressors</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="px-3 py-2 border-t">Privacy</td>
                    <td className="px-3 py-2 border-t">Client-side (no uploads)</td>
                    <td className="px-3 py-2 border-t">Uploads to server</td>
                  </tr>
                  <tr>
                    <td className="px-3 py-2 border-t">Exact size targeting</td>
                    <td className="px-3 py-2 border-t">Yes (KB/MB precision)</td>
                    <td className="px-3 py-2 border-t">Often preset only</td>
                  </tr>
                  <tr>
                    <td className="px-3 py-2 border-t">Exam portal support</td>
                    <td className="px-3 py-2 border-t">Yes</td>
                    <td className="px-3 py-2 border-t">Not tailored</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
            <h2 className="text-xl font-bold text-slate-900">PDF Converter: ROAS Tools vs Alternatives</h2>
            <div className="overflow-x-auto mt-4">
              <table className="w-full text-sm border border-slate-200">
                <thead className="bg-slate-100">
                  <tr>
                    <th className="text-left px-3 py-2">Feature</th>
                    <th className="text-left px-3 py-2">ROAS Tools</th>
                    <th className="text-left px-3 py-2">Typical Online Converters</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="px-3 py-2 border-t">File size limits</td>
                    <td className="px-3 py-2 border-t">Exact target (e.g., 0.5 MB)</td>
                    <td className="px-3 py-2 border-t">Often coarse presets</td>
                  </tr>
                  <tr>
                    <td className="px-3 py-2 border-t">Watermarks</td>
                    <td className="px-3 py-2 border-t">None</td>
                    <td className="px-3 py-2 border-t">Common on free tiers</td>
                  </tr>
                  <tr>
                    <td className="px-3 py-2 border-t">Privacy</td>
                    <td className="px-3 py-2 border-t">Client-side where possible</td>
                    <td className="px-3 py-2 border-t">Uploads to server</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
            <h2 className="text-xl font-bold text-slate-900">Currency Converter: ROAS Tools vs Alternatives</h2>
            <div className="overflow-x-auto mt-4">
              <table className="w-full text-sm border border-slate-200">
                <thead className="bg-slate-100">
                  <tr>
                    <th className="text-left px-3 py-2">Feature</th>
                    <th className="text-left px-3 py-2">ROAS Tools</th>
                    <th className="text-left px-3 py-2">Typical Converters</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="px-3 py-2 border-t">Rate clarity</td>
                    <td className="px-3 py-2 border-t">Mid-market explanation</td>
                    <td className="px-3 py-2 border-t">Rate type often unclear</td>
                  </tr>
                  <tr>
                    <td className="px-3 py-2 border-t">Educational content</td>
                    <td className="px-3 py-2 border-t">Detailed guide</td>
                    <td className="px-3 py-2 border-t">Limited context</td>
                  </tr>
                  <tr>
                    <td className="px-3 py-2 border-t">Privacy</td>
                    <td className="px-3 py-2 border-t">No account required</td>
                    <td className="px-3 py-2 border-t">Often gated</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
            <h2 className="text-xl font-bold text-slate-900">ROAS Calculator: ROAS Tools vs Alternatives</h2>
            <div className="overflow-x-auto mt-4">
              <table className="w-full text-sm border border-slate-200">
                <thead className="bg-slate-100">
                  <tr>
                    <th className="text-left px-3 py-2">Feature</th>
                    <th className="text-left px-3 py-2">ROAS Tools</th>
                    <th className="text-left px-3 py-2">Typical Calculators</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="px-3 py-2 border-t">Break-even ROAS</td>
                    <td className="px-3 py-2 border-t">Included</td>
                    <td className="px-3 py-2 border-t">Often missing</td>
                  </tr>
                  <tr>
                    <td className="px-3 py-2 border-t">Profit modeling</td>
                    <td className="px-3 py-2 border-t">Included</td>
                    <td className="px-3 py-2 border-t">Basic ROAS only</td>
                  </tr>
                  <tr>
                    <td className="px-3 py-2 border-t">Privacy</td>
                    <td className="px-3 py-2 border-t">No account required</td>
                    <td className="px-3 py-2 border-t">Often email gated</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>
        </div>

        <div className="mt-12 bg-white border border-slate-200 rounded-xl p-6">
          <h3 className="text-lg font-bold text-slate-900 mb-2">Want a Head-to-Head Feature?</h3>
          <p className="text-slate-600">
            Tell us which tool you want compared and we will add it with transparent criteria and testing.
          </p>
          <Link href="/contact" className="inline-block mt-4 text-blue-700 font-semibold hover:underline">
            Request a comparison
          </Link>
        </div>
      </div>
    </div>
  );
}
