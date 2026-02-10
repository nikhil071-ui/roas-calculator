import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Currency Converter FAQ | ROAS Tools",
  description: "Answers to common questions about exchange rates, spreads, and international transfer costs.",
  keywords: [
    "currency converter faq",
    "exchange rate",
    "forex rates",
    "currency transfer fees",
    "mid-market rate",
  ],
};

const faqs = [
  {
    q: "What is the mid-market exchange rate?",
    a: "It is the rate banks use when trading with each other. It is the fairest reference point for currency conversions.",
  },
  {
    q: "Why do bank rates look worse than online rates?",
    a: "Banks often add a markup to the mid-market rate. That markup is their profit margin.",
  },
  {
    q: "How often do exchange rates change?",
    a: "Rates change continuously during market hours and are updated frequently throughout the day.",
  },
  {
    q: "Do rates change on weekends?",
    a: "Forex markets are closed on weekends, but some providers apply wider spreads during that time.",
  },
  {
    q: "What is a spread?",
    a: "The spread is the difference between the buy and sell rates. It represents the provider's profit.",
  },
  {
    q: "Why is my transfer fee higher than expected?",
    a: "Some providers add hidden exchange rate markups in addition to visible fees.",
  },
  {
    q: "Can I lock an exchange rate?",
    a: "Some providers offer rate alerts or limit orders, but availability varies.",
  },
  {
    q: "Is it better to transfer in local or foreign currency?",
    a: "Often, sending in the destination currency reduces surprises because the recipient gets a guaranteed amount.",
  },
  {
    q: "Are airport exchange kiosks good value?",
    a: "They typically have the highest spreads and fees. Online transfers are usually cheaper.",
  },
  {
    q: "Do transfer fees vary by country?",
    a: "Yes. Fees depend on corridors, payment method, and local regulations.",
  },
  {
    q: "Is there a best time to transfer money?",
    a: "There is no perfect time, but avoiding weekends and major news releases can reduce volatility.",
  },
  {
    q: "Does this tool include fees?",
    a: "The converter shows exchange rates. Fees depend on your provider and should be checked separately.",
  },
];

export default function CurrencyFaqPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map((item) => ({
      "@type": "Question",
      "name": item.q,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": item.a,
      },
    })),
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 py-12 px-4 md:px-6">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <div className="max-w-4xl mx-auto">
        <Link href="/currency-converter" className="text-slate-500 hover:text-blue-600 transition text-sm">
          Back to Currency Converter
        </Link>
        <h1 className="text-3xl md:text-4xl font-bold mt-2">Currency Converter FAQ</h1>
        <p className="text-slate-600 mt-2">
          Common questions about exchange rates and transfer costs.
        </p>

        <div className="mt-8 space-y-4">
          {faqs.map((item) => (
            <details key={item.q} className="bg-white border border-slate-200 rounded-lg p-4">
              <summary className="cursor-pointer font-semibold text-slate-900">
                {item.q}
              </summary>
              <p className="mt-2 text-slate-600">{item.a}</p>
            </details>
          ))}
        </div>

        <div className="mt-10 bg-white border border-slate-200 rounded-xl p-6">
          <h2 className="text-lg font-bold text-slate-900">Compare rates instantly</h2>
          <p className="text-slate-600 mt-2">
            Use the converter for quick checks, then compare provider fees for the final transfer.
          </p>
          <Link href="/currency-converter" className="inline-block mt-4 text-blue-700 font-semibold hover:underline">
            Open Currency Converter
          </Link>
        </div>
      </div>
    </div>
  );
}
