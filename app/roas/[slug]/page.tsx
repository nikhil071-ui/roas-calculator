import { notFound } from "next/navigation";
import Link from "next/link";
// Go up two levels to 'app' to find the RoasClient (It is in the root app folder)
import RoasClient from "../../RoasClient"; 
import AdBanner from "../../AdBanner"; 

export const dynamic = "force-static";
export const revalidate = 86400;

// --- STATIC PARAMS FOR FAST INDEXING ---
export async function generateStaticParams() {
  return [
    { slug: 'facebook-ads' },
    { slug: 'tiktok-ads' },
    { slug: 'google-ads' },
    { slug: 'google-shopping-roas' },
    { slug: 'meta-dtc-roas' },
    { slug: 'lead-gen-cpl-roas' },
    { slug: 'dropshipping-profit' },
    { slug: 'break-even-roas' },
    { slug: 'marketing-roi' },
    { slug: 'amazon-ppc-acos' },
    { slug: 'influencer-roi' },
    { slug: 'target-cpa' },
    { slug: 'pinterest-ads' }
  ];
}

// --- 1. SEO DATA LOOKUP TABLE ---
const SEO_DATA: Record<string, { title: string; desc: string; h1: string; subtext: string; platform: string; keywords: string[] }> = {
  "facebook-ads": {
    title: "Facebook Ads ROAS Calculator & Profit Tool (2026)",
    desc: "Calculate your Break-Even ROAS for Facebook Ads instantly. Stop losing money on dropshipping. Accurate profit margin estimator for Meta Advertisers.",
    h1: "Facebook Ads ROAS Calculator",
    subtext: "Calculate Profit & Break-Even for Meta Campaigns.",
    platform: "Facebook & Instagram",
    keywords: ["facebook ads roas", "meta ads profit", "break even roas facebook", "dropshipping calculator"]
  },
  "tiktok-ads": {
    title: "TikTok Ads ROAS Calculator - Dropshipping Profit Tool",
    desc: "Estimate your TikTok Spark Ads profit. Input your ad spend and revenue to see your true Return on Ad Spend (ROAS).",
    h1: "TikTok Ads ROAS Calculator",
    subtext: "Analyze profitability for TikTok Spark Ads.",
    platform: "TikTok",
    keywords: ["tiktok ads roas", "tiktok profit calculator", "spark ads roi", "dropshipping tiktok"]
  },
  "google-ads": {
    title: "Google Ads ROAS & Break-Even Calculator",
    desc: "Plan your PPC budget. Calculate target ROAS for Search, Display, and Performance Max campaigns. accurate ROI estimation.",
    h1: "Google Ads ROAS Calculator",
    subtext: "Optimize your Google Performance Max budget.",
    platform: "Google Ads (PPC)",
    keywords: ["google ads roas", "ppc calculator", "performance max roas", "target roas bidding"]
  },
  "google-shopping-roas": {
    title: "Google Shopping ROAS Calculator (2026)",
    desc: "Calculate Google Shopping campaign ROAS, break-even points, and profit thresholds for product feed ads.",
    h1: "Google Shopping ROAS Calculator",
    subtext: "Model product-feed profitability before scaling spend.",
    platform: "Google Shopping",
    keywords: ["google shopping roas", "shopping ads benchmark", "product feed profitability", "target roas shopping"]
  },
  "meta-dtc-roas": {
    title: "Meta DTC ROAS Calculator for Shopify Brands",
    desc: "Track Meta ROAS for direct-to-consumer brands and estimate break-even performance by margin and AOV.",
    h1: "Meta DTC ROAS Calculator",
    subtext: "Built for direct-to-consumer growth teams on Meta.",
    platform: "Meta Ads for DTC",
    keywords: ["meta dtc roas", "shopify meta ads", "facebook roas benchmark", "dtc ad profitability"]
  },
  "lead-gen-cpl-roas": {
    title: "Lead Gen ROAS Calculator (CPL Model)",
    desc: "Estimate ROAS for lead generation campaigns using CPL, close rate, and customer value assumptions.",
    h1: "Lead Gen ROAS Calculator",
    subtext: "Translate CPL and close-rate into revenue return.",
    platform: "Lead Generation Campaigns",
    keywords: ["lead gen roas", "cpl to roas", "lead quality profitability", "b2b lead generation roi"]
  },
  "dropshipping-profit": {
    title: "Dropshipping Profit Margin Calculator (Shopify)",
    desc: "Calculate net profit for your Shopify store. Factor in COGS, shipping, and ad spend instantly to find your real earnings.",
    h1: "Dropshipping Profit Calculator",
    subtext: "Know your true margins before you scale.",
    platform: "Shopify / WooCommerce",
    keywords: ["dropshipping profit", "shopify margin calc", "net profit estimator", "e-commerce cogs"]
  },
  "break-even-roas": {
    title: "Break-Even ROAS Calculator (Formula & Tool)",
    desc: "What is your Break-Even ROAS? Use our formula and calculator to find the exact metric you need to be profitable.",
    h1: "Break-Even ROAS Calculator",
    subtext: "Find the exact point where you start making money.",
    platform: "General Marketing",
    keywords: ["break even roas", "roas formula", "profitability threshold", "marketing math"]
  },
  "marketing-roi": {
    title: "Marketing ROI Calculator - Return on Investment",
    desc: "Measure the efficiency of your marketing campaigns. Calculate ROI percentage and total value generated.",
    h1: "Marketing ROI Calculator",
    subtext: "Measure the efficiency of your total spend.",
    platform: "Business Strategy",
    keywords: ["marketing roi", "return on investment", "campaign efficiency", "ad spend return"]
  },
  "amazon-ppc-acos": {
    title: "Amazon PPC ACoS vs ROAS Calculator",
    desc: "Convert ACoS to ROAS. Optimize your Amazon Sponsored Products campaigns for profitability. Essential for FBA sellers.",
    h1: "Amazon ACoS / ROAS Calculator",
    subtext: "Optimize Amazon Sponsored Products campaigns.",
    platform: "Amazon FBA",
    keywords: ["amazon acos", "amazon ppc calculator", "fba profit tool", "acos vs roas"]
  },
  "influencer-roi": {
    title: "Influencer Marketing ROI Estimator",
    desc: "Estimate the potential return from influencer collaborations. Input fees and expected sales to calculate campaign ROAS.",
    h1: "Influencer ROI Calculator",
    subtext: "Track returns from creator partnerships.",
    platform: "Influencer Marketing",
    keywords: ["influencer roi", "creator economy calculator", "sponsorship return", "brand deal value"]
  },
  "target-cpa": {
    title: "Target CPA Calculator (Cost Per Acquisition)",
    desc: "Determine your maximum profitable Cost Per Acquisition (CPA) based on your product margins and conversion rate.",
    h1: "Target CPA Calculator",
    subtext: "Find your maximum profitable Cost Per Acquisition.",
    platform: "Performance Marketing",
    keywords: ["target cpa", "cost per acquisition", "max cpa formula", "ad budget planner"]
  },
  "pinterest-ads": {
    title: "Pinterest Ads ROAS Calculator",
    desc: "Calculate returns for your Pinterest shopping ads. Essential for e-commerce brands targeting visual searchers.",
    h1: "Pinterest Ads ROAS Calculator",
    subtext: "Measure visual search ad performance.",
    platform: "Pinterest",
    keywords: ["pinterest ads roas", "shopping ads calculator", "visual search roi", "social commerce"]
  },
};

// --- 2. GENERATE DYNAMIC METADATA ---
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const data = SEO_DATA[slug];
  
  if (!data) {
    return {
      title: "ROAS Calculator | Page Not Found",
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
      canonical: `https://roas-calculator.tech/roas/${slug}`,
    },
    openGraph: {
      title: data.title,
      description: data.desc,
      type: "website",
      url: `https://roas-calculator.tech/roas/${slug}`,
    }
  };
}

// --- 3. THE PAGE COMPONENT ---
export default async function DynamicRoasPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const data = SEO_DATA[slug];

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
        "item": `https://roas-calculator.tech/roas/${slug}`,
      },
    ],
  };

  const currentDate = new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric' });

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
            {data.subtext} <span className="text-blue-600 font-bold">100% Free.</span>
          </p>
        </div>

        {/* --- AD SLOT 1: TOP --- */}
        <div className="w-full flex justify-center bg-gray-50 rounded-lg p-2">
          <AdBanner />
        </div>

        {/* THE TOOL ITSELF */}
        {/* We wrap the existing tool in a nice container */}
        <div className="bg-white rounded-3xl shadow-xl border border-gray-200 overflow-hidden p-1">
             <RoasClient />
        </div>

        {/* --- AD SLOT 2: BOTTOM --- */}
        <div className="w-full flex justify-center bg-gray-50 rounded-lg p-2">
           <AdBanner />
        </div>

        {/* --- LONG FORM SEO CONTENT --- */}
        <article className="prose prose-lg max-w-none text-gray-800">
          
          <h2 className="text-3xl font-bold text-gray-900 border-b border-gray-200 pb-4">
            How to Calculate {data.platform} ROAS in {currentDate}
          </h2>
          
          <p className="lead text-xl text-gray-700">
            If you are running campaigns on <strong>{data.platform}</strong>, tracking your Return on Ad Spend (ROAS) is the difference 
            between scaling a profitable business and burning cash. Our <strong>{data.h1}</strong> helps you instantly determine 
            if your ads are actually making money.
          </p>

          <h3 className="text-2xl font-bold text-gray-900 mt-8">Why ROAS Matters for {data.platform}</h3>
          <p>
            Unlike vanity metrics like "Clicks" or "Impressions", ROAS tells you the financial truth.
            It answers the simple question: <em>"For every $1 I put into {data.platform}, how many dollars came back?"</em>
          </p>
          <p>
            For <strong>{data.keywords[3]}</strong>, understanding your Break-Even ROAS is critical. If your product margin is 30%, 
            you generally need a ROAS of 3.33 just to break even. Anything below that, and you are losing money on every sale.
          </p>

          <div className="bg-blue-50 border-l-4 border-blue-600 p-6 my-8 rounded-r-lg">
            <h4 className="text-xl font-bold text-blue-900 mb-2"> The Formula:</h4>
            <p className="font-mono text-lg text-blue-800 bg-white inline-block px-3 py-1 rounded border border-blue-200">
              ROAS = Total Revenue / Total Ad Spend
            </p>
            <p className="mt-3 text-blue-800">
              Example: You spent $500 on {data.platform} ads and made $2,500 in sales. <br/>
              <strong>$2,500 / $500 = 5.0 ROAS</strong> (or 500% return).
            </p>
          </div>

          <h3 className="text-2xl font-bold text-gray-900 mt-8">How to use this Calculator</h3>
          <ol className="list-decimal pl-5 space-y-4 text-gray-800">
            <li>
              <strong>Input Ad Spend:</strong> Enter the total amount you spent on {data.platform} for the selected period.
            </li>
            <li>
              <strong>Input Revenue:</strong> Enter the total sales generated from those specific ads.
            </li>
            <li>
              <strong>Product Costs (Optional but Recommended):</strong> To see your <em>True Profit</em>, enter the Cost of Goods Sold (COGS). 
              This converts a simple ROAS calculation into a detailed Profit/Loss analysis.
            </li>
          </ol>

          <h3 className="text-2xl font-bold text-gray-900 mt-8">What is a "Good" ROAS for {data.platform}?</h3>
          <p>
            Benchmarks vary by industry, but here are the general standards for 2026:
          </p>
          <ul className="list-disc pl-5 space-y-2 text-gray-700">
            <li><strong>Below 2.0x:</strong> Often unprofitable for low-margin items. Needs optimization.</li>
            <li><strong>3.0x - 4.0x:</strong> Healthy. This is the goal for most dropshipping and e-commerce stores.</li>
            <li><strong>Above 5.0x:</strong> Excellent. You should consider scaling your budget immediately.</li>
          </ul>

          <h3 className="text-2xl font-bold text-gray-900 mt-10">What to Do Next: Scale, Hold, or Pause?</h3>
          <p>
            Use this decision logic after calculating your result. It keeps budget decisions tied to break-even math rather than guesswork.
          </p>
          <div className="overflow-x-auto my-6">
            <table className="w-full text-sm border border-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="text-left px-4 py-3">ROAS vs Break-Even</th>
                  <th className="text-left px-4 py-3">Recommended Action</th>
                  <th className="text-left px-4 py-3">Priority Fix</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border-t px-4 py-3">20%+ above break-even</td>
                  <td className="border-t px-4 py-3">Scale budget by 10-20% weekly</td>
                  <td className="border-t px-4 py-3">Protect winning creative and audience</td>
                </tr>
                <tr>
                  <td className="border-t px-4 py-3">At break-even (+/-10%)</td>
                  <td className="border-t px-4 py-3">Hold spend, optimize funnel</td>
                  <td className="border-t px-4 py-3">Improve conversion rate and AOV</td>
                </tr>
                <tr>
                  <td className="border-t px-4 py-3">Below break-even by 10%+</td>
                  <td className="border-t px-4 py-3">Pause or cap spend</td>
                  <td className="border-t px-4 py-3">Rework offer, targeting, or CPA limits</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 mt-6">
            <p className="font-semibold text-gray-900 mb-2">Build a full profitability model</p>
            <p className="text-gray-700 mb-4">
              For deeper planning, combine ROAS with CAC, LTV, MER, and target CPA in our toolkit and downloadable planning sheets.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link href="/ppc-toolkit" className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold px-4 py-2 rounded-lg">
                Open PPC Toolkit
              </Link>
              <Link href="/resources" className="inline-block bg-white hover:bg-gray-100 text-gray-900 font-semibold px-4 py-2 rounded-lg border border-gray-300">
                Download Planning Templates
              </Link>
            </div>
          </div>

          <div className="mt-12 p-8 bg-slate-900 text-white rounded-2xl text-center">
            <h3 className="text-2xl font-bold mb-4">Are you spending internationally?</h3>
            <p className="mb-6 text-slate-300">
              If you pay for ads in USD but sell in INR (or vice versa), check the real exchange rates first.
            </p>
            <Link 
              href="/currency-converter" 
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full transition-transform hover:scale-105"
            >
              Check Currency Rates &rarr;
            </Link>
          </div>

        </article>

      </div>
    </main>
  );
}
