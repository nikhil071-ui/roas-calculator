import Link from "next/link";
import { ArrowLeft, Globe, CheckCircle, ExternalLink } from "lucide-react";

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
                        <span>Click <strong>Request Indexing</strong>.</span>
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
                    <li className="flex items-center justify-between gap-4">
                        <span className="text-slate-700">/</span>
                        <Link href="/" className="text-blue-600 underline inline-flex items-center gap-2">
                            Open <ExternalLink size={14} />
                        </Link>
                    </li>
                    <li className="flex items-center justify-between gap-4">
                        <span className="text-slate-700">/about</span>
                        <Link href="/about" className="text-blue-600 underline inline-flex items-center gap-2">
                            Open <ExternalLink size={14} />
                        </Link>
                    </li>
                    <li className="flex items-center justify-between gap-4">
                        <span className="text-slate-700">/team</span>
                        <Link href="/team" className="text-blue-600 underline inline-flex items-center gap-2">
                            Open <ExternalLink size={14} />
                        </Link>
                    </li>
                    <li className="flex items-center justify-between gap-4">
                        <span className="text-slate-700">/editorial-policy</span>
                        <Link href="/editorial-policy" className="text-blue-600 underline inline-flex items-center gap-2">
                            Open <ExternalLink size={14} />
                        </Link>
                    </li>
                    <li className="flex items-center justify-between gap-4">
                        <span className="text-slate-700">/case-studies</span>
                        <Link href="/case-studies" className="text-blue-600 underline inline-flex items-center gap-2">
                            Open <ExternalLink size={14} />
                        </Link>
                    </li>
                    <li className="flex items-center justify-between gap-4">
                        <span className="text-slate-700">/testimonials</span>
                        <Link href="/testimonials" className="text-blue-600 underline inline-flex items-center gap-2">
                            Open <ExternalLink size={14} />
                        </Link>
                    </li>
                    <li className="flex items-center justify-between gap-4">
                        <span className="text-slate-700">/glossary</span>
                        <Link href="/glossary" className="text-blue-600 underline inline-flex items-center gap-2">
                            Open <ExternalLink size={14} />
                        </Link>
                    </li>
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
                    <span className="text-slate-700">Sitemap URL: <strong>/sitemap.xml</strong></span>
                </div>
            </section>
        </div>

      </main>
    </div>
  );
}
