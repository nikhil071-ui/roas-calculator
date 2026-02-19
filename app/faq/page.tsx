import Link from "next/link";
import { ArrowLeft, HelpCircle } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ROAS FAQ | ROAS Tools",
  description:
    "Answers to common ROAS, break-even, CAC, LTV, and publisher ad revenue planning questions.",
  keywords: ["roas faq", "break-even roas", "publisher rpm", "cac vs roas", "ltv cac"],
  openGraph: {
    title: "ROAS FAQ | ROAS Tools",
    description:
      "Answers to common ROAS, break-even, CAC, LTV, and publisher ad revenue planning questions.",
    url: "https://roas-calculator.tech/faq",
  },
  twitter: {
    card: "summary_large_image",
    title: "ROAS FAQ | ROAS Tools",
    description:
      "Answers to common ROAS, break-even, CAC, LTV, and publisher ad revenue planning questions.",
  },
  alternates: {
    canonical: "https://roas-calculator.tech/faq",
  },
};

const faqs = [
  {
    q: "What is a good ROAS for ad-supported publishers?",
    a: "There is no universal number. Use break-even ROAS from your contribution margin first, then compare against your own weekly RPM trend and payback target.",
  },
  {
    q: "Is high ROAS always profitable?",
    a: "No. High ROAS can still lose money if margins are thin or fixed costs are ignored. Always include fulfillment, platform fees, and operating costs.",
  },
  {
    q: "How is ROAS different from CAC and MER?",
    a: "ROAS measures campaign revenue efficiency, CAC measures cost per new customer, and MER measures blended efficiency across total marketing spend.",
  },
  {
    q: "When should I scale ad spend?",
    a: "Scale when ROAS is consistently above break-even, CAC payback is stable, and conversion quality remains healthy for multiple review cycles.",
  },
  {
    q: "Do you store my calculator inputs?",
    a: "No. Inputs are processed in-browser and are not persisted to your account because calculators do not require user accounts.",
  },
  {
    q: "Where can I get benchmark updates?",
    a: "Use the benchmark email signup modules on calculator and blog pages to receive weekly RPM/ROAS updates and the 2026 benchmark sheet.",
  },
];

export default function FAQ() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.a,
      },
    })),
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 py-12 px-4 md:px-6">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="max-w-4xl mx-auto mb-8">
        <Link href="/" className="inline-flex items-center text-slate-500 hover:text-blue-600 transition font-medium">
          <ArrowLeft size={18} className="mr-2" /> Back to Home
        </Link>
      </div>

      <main className="max-w-4xl mx-auto bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
        <div className="bg-slate-900 p-8 md:p-12 text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 p-4 opacity-10">
            <HelpCircle size={120} />
          </div>
          <div className="relative z-10">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">ROAS and Publisher Profitability FAQ</h1>
            <p className="text-slate-300 text-lg max-w-2xl">
              Practical answers for ROAS, break-even planning, CAC payback, and benchmark interpretation.
            </p>
          </div>
        </div>

        <div className="p-8 md:p-12 space-y-6">
          {faqs.map((item) => (
            <details key={item.q} className="group bg-slate-50 rounded-lg p-5 cursor-pointer border border-slate-200">
              <summary className="font-bold text-slate-900 list-none flex justify-between items-center">
                <span>{item.q}</span>
                <span className="transition-transform duration-300 group-open:rotate-180">v</span>
              </summary>
              <p className="mt-4 text-slate-700 leading-relaxed">{item.a}</p>
            </details>
          ))}
        </div>
      </main>
    </div>
  );
}
