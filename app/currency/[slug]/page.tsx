import { notFound } from "next/navigation";
import Link from "next/link";
// Go up two levels to 'app', then into 'currency-converter' to find the tool
import CurrencyClient from "../../currency-converter/CurrencyClient"; 
import AdBanner from "../../AdBanner"; 

// --- STATIC PARAMS FOR FAST INDEXING ---
export async function generateStaticParams() {
  return [
    { slug: 'usd-to-inr' },
    { slug: 'eur-to-usd' },
    { slug: 'gbp-to-inr' },
    { slug: 'aed-to-inr' },
    { slug: 'cad-to-inr' },
    { slug: 'aud-to-usd' },
    { slug: 'usd-to-pkr' },
    { slug: 'jpy-to-usd' },
    { slug: 'usd-to-php' },
    { slug: 'crypto-converter' }
  ];
}

// --- 1. SEO DATA LOOKUP TABLE ---
const SEO_DATA: Record<string, { title: string; desc: string; h1: string; subtext: string; from: string; to: string; keywords: string[] }> = {
  "usd-to-inr": {
    title: "USD to INR - US Dollar to Indian Rupee Live Rate",
    desc: "Convert USD to INR instantly. Check today's live US Dollar to Indian Rupee exchange rate. Accurate market mid-market rates.",
    h1: "Convert USD to INR",
    subtext: "Live US Dollar to Indian Rupee Exchange Rate.",
    from: "USD",
    to: "INR",
    keywords: ["1 usd to inr", "dollar to rupee", "usd vs inr today", "forex rate india"]
  },
  "eur-to-usd": {
    title: "EUR to USD - Euro to US Dollar Converter",
    desc: "Live Euro to US Dollar exchange rate. Convert EUR to USD with real-time market accuracy. Best tool for forex traders.",
    h1: "Convert Euro to USD",
    subtext: "Real-time EUR/USD Market Rates.",
    from: "EUR",
    to: "USD",
    keywords: ["eur to usd", "euro to dollar", "1 euro in usd", "forex eur usd"]
  },
  "gbp-to-inr": {
    title: "GBP to INR - British Pound to Indian Rupee",
    desc: "Convert British Pound Sterling (GBP) to Indian Rupee (INR). Live rates for students and travelers.",
    h1: "Convert GBP to INR",
    subtext: "British Pound to Indian Rupee Conversion.",
    from: "GBP",
    to: "INR",
    keywords: ["pound to rupee", "gbp to inr today", "uk currency to inr", "british pound rate"]
  },
  "aed-to-inr": {
    title: "AED to INR - Dubai Dirham to Indian Rupee",
    desc: "Today's AED to INR exchange rate. Convert UAE Dirham to Indian Rupee instantly. Check remittance rates.",
    h1: "Convert AED to INR",
    subtext: "UAE Dirham to Indian Rupee Rate.",
    from: "AED",
    to: "INR",
    keywords: ["dirham to rupee", "dubai currency to inr", "1 aed to inr", "uae exchange rate"]
  },
  "cad-to-inr": {
    title: "CAD to INR - Canadian Dollar to Indian Rupee",
    desc: "Live Canadian Dollar to Indian Rupee rate. Convert CAD to INR for student fees and remittances.",
    h1: "Convert CAD to INR",
    subtext: "Canadian Dollar vs Indian Rupee.",
    from: "CAD",
    to: "INR",
    keywords: ["canadian dollar to rupee", "1 cad to inr", "canada currency rate", "cad vs inr"]
  },
  "aud-to-usd": {
    title: "AUD to USD - Australian Dollar to US Dollar",
    desc: "Convert Australian Dollar (AUD) to US Dollar (USD). Live forex rates for traders and travelers.",
    h1: "Convert AUD to USD",
    subtext: "Australian Dollar to US Dollar Exchange.",
    from: "AUD",
    to: "USD",
    keywords: ["aud to usd", "aussie dollar to us dollar", "1 aud in usd", "forex aud usd"]
  },
  "usd-to-pkr": {
    title: "USD to PKR - US Dollar to Pakistani Rupee",
    desc: "Today's US Dollar to Pakistani Rupee exchange rate. Convert USD to PKR instantly.",
    h1: "Convert USD to PKR",
    subtext: "Live Dollar to Pakistani Rupee Rate.",
    from: "USD",
    to: "PKR",
    keywords: ["dollar to pkr", "1 usd to pkr today", "pakistan currency rate", "usd pkr open market"]
  },
  "jpy-to-usd": {
    title: "JPY to USD - Japanese Yen to US Dollar",
    desc: "Convert Japanese Yen (JPY) to US Dollar (USD). Accurate live exchange rates for Japan travel.",
    h1: "Convert JPY to USD",
    subtext: "Japanese Yen to US Dollar Conversion.",
    from: "JPY",
    to: "USD",
    keywords: ["yen to dollar", "jpy to usd", "1000 yen to usd", "japan currency to usd"]
  },
  "usd-to-php": {
    title: "USD to PHP - US Dollar to Philippine Peso",
    desc: "Convert USD to PHP instantly. Live market rates for the Philippines. Check remittance value.",
    h1: "Convert USD to PHP",
    subtext: "US Dollar to Philippine Peso Rate.",
    from: "USD",
    to: "PHP",
    keywords: ["dollar to peso", "usd to php today", "1 usd to php", "philippine exchange rate"]
  },
  "crypto-converter": {
    title: "Crypto to Fiat Currency Converter (Live)",
    desc: "Estimate the value of Bitcoin and Ethereum in USD, INR, and EUR. Live crypto exchange rates.",
    h1: "Crypto to Fiat Converter",
    subtext: "Convert Cryptocurrency to Real Money.",
    from: "BTC",
    to: "USD",
    keywords: ["crypto converter", "btc to usd", "eth to inr", "bitcoin price calculator"]
  }
};

// --- 2. GENERATE DYNAMIC METADATA ---
export async function generateMetadata({ params }: { params: { slug: string } }) {
  const data = SEO_DATA[params.slug];
  
  if (!data) {
    return {
      title: "Currency Converter | Page Not Found",
    };
  }

  return {
    title: data.title,
    description: data.desc,
    keywords: data.keywords,
    robots: {
      index: true,
      follow: true,
      nocache: false,
    },
    alternates: {
      canonical: `https://roas-calculator.tech/currency/${params.slug}`,
    },
    openGraph: {
      title: data.title,
      description: data.desc,
      type: "website",
    }
  };
}

// --- 3. THE PAGE COMPONENT ---
export default async function DynamicCurrencyPage({ params }: { params: { slug: string } }) {
  const data = SEO_DATA[params.slug];

  if (!data) {
    notFound();
  }

  const breadcrumbData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://roas-calculator.tech/",
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": data.h1,
        "item": `https://roas-calculator.tech/currency/${params.slug}`,
      },
    ],
  };

  const currentDate = new Date().toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });

  return (
    <main className="min-h-screen bg-white p-4 py-12 font-sans text-gray-900">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbData) }}
      />
      <div className="max-w-5xl mx-auto space-y-12">
        
        {/* DYNAMIC HEADER */}
        <div className="text-center space-y-6">
          <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 tracking-tight leading-tight">
            {data.h1}
          </h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto font-medium">
            {data.subtext} <span className="text-blue-600 font-bold">Updated: {currentDate}</span>
          </p>
        </div>

        {/* --- AD SLOT 1: TOP --- */}
        <div className="w-full flex justify-center bg-gray-50 rounded-lg p-2">
          <AdBanner />
        </div>

        {/* THE TOOL ITSELF */}
        <div className="bg-white rounded-3xl shadow-xl border border-gray-200 overflow-hidden">
             {/* Note: The client tool defaults to USD/INR. Users can switch manually. */}
             <CurrencyClient />
        </div>

        {/* --- AD SLOT 2: BOTTOM --- */}
        <div className="w-full flex justify-center bg-gray-50 rounded-lg p-2">
           <AdBanner />
        </div>

        {/* --- LONG FORM SEO CONTENT --- */}
        <article className="prose prose-lg max-w-none text-gray-800">
          
          <h2 className="text-3xl font-bold text-gray-900 border-b border-gray-200 pb-4">
            Understanding the {data.from} to {data.to} Exchange Rate
          </h2>
          
          <p className="lead text-xl text-gray-700">
            Looking for the best time to convert <strong>{data.from} (source currency)</strong> to 
            <strong> {data.to} (target currency)</strong>? Whether you are a student paying fees abroad, 
            a traveler planning a trip, or a business handling international payments, knowing the live rate is crucial.
          </p>

          <h3 className="text-2xl font-bold text-gray-900 mt-8">How to use this {data.from}/{data.to} Converter</h3>
          <ol className="list-decimal pl-5 space-y-4 text-gray-800">
            <li>
              <strong>Enter Amount:</strong> Type the amount of {data.from} you want to convert in the box above.
            </li>
            <li>
              <strong>Select Currencies:</strong> Ensure the dropdowns are set to <strong>{data.from}</strong> and <strong>{data.to}</strong>.
            </li>
            <li>
              <strong>View Result:</strong> The tool instantly calculates the value based on the live mid-market exchange rate.
            </li>
          </ol>

          <div className="bg-emerald-50 border-l-4 border-emerald-600 p-6 my-8 rounded-r-lg">
            <h4 className="text-xl font-bold text-emerald-900 mb-2"> Pro Tip for Money Transfer:</h4>
            <p className="text-emerald-800">
              Banks often charge hidden fees by giving you a "bad" exchange rate. Always check the 
              <strong> Mid-Market Rate</strong> (what you see here) before using services like PayPal or Western Union.
            </p>
          </div>

          <h3 className="text-2xl font-bold text-gray-900 mt-8">Factors Affecting {data.from} vs {data.to}</h3>
          <p>
            Exchange rates fluctuate every second due to global economic factors:
          </p>
          <ul className="list-disc pl-5 space-y-2 text-gray-700">
            <li><strong>Interest Rates:</strong> Higher interest rates in a country usually strengthen its currency.</li>
            <li><strong>Inflation:</strong> Lower inflation typically means a stronger currency value.</li>
            <li><strong>Geopolitics:</strong> Political stability attracts foreign investors, boosting demand for the currency.</li>
          </ul>

          <h3 className="text-2xl font-bold text-gray-900 mt-8">Common Questions</h3>
          
          <div className="space-y-4 mt-6">
             <details className="group bg-gray-50 p-6 rounded-xl cursor-pointer border border-gray-200">
                <summary className="font-bold text-gray-900">How often is the rate updated?</summary>
                <p className="text-gray-700 mt-2">Our rates are updated continuously to reflect the live global market.</p>
             </details>
             <details className="group bg-gray-50 p-6 rounded-xl cursor-pointer border border-gray-200">
                <summary className="font-bold text-gray-900">Is this the "Bank Rate"?</summary>
                <p className="text-gray-700 mt-2">This is the "Mid-Market Rate" - the fairest rate derived from the midpoint between buy and sell prices in global markets.</p>
             </details>
             <details className="group bg-gray-50 p-6 rounded-xl cursor-pointer border border-gray-200">
                <summary className="font-bold text-gray-900">Can I convert crypto assets?</summary>
                <p className="text-gray-700 mt-2">Yes, our tool supports major cryptocurrencies. Just select BTC or ETH from the dropdown menu.</p>
             </details>
          </div>

          <div className="mt-12 p-8 bg-slate-900 text-white rounded-2xl text-center">
            <h3 className="text-2xl font-bold mb-4">Shopping internationally?</h3>
            <p className="mb-6 text-slate-300">
              If you are buying products for a business, check your profit margins with our ROAS calculator.
            </p>
            <Link 
              href="/" 
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full transition-transform hover:scale-105"
            >
              Go to ROAS Calculator &rarr;
            </Link>
          </div>

        </article>

      </div>
    </main>
  );
}
