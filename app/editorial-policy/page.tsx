import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Shield, CheckCircle, AlertTriangle, FileCheck } from "lucide-react";

export const metadata: Metadata = {
  title: "Editorial Policy | ROAS Tools",
  description: "Our standards for accuracy, transparency, and trust in every tool and guide.",
  alternates: {
    canonical: "https://roas-calculator.tech/editorial-policy",
  },
  openGraph: {
    title: "Editorial Policy | ROAS Tools",
    description: "Our standards for accuracy, transparency, and trust in every tool and guide.",
    url: "https://roas-calculator.tech/editorial-policy",
  },
  twitter: {
    card: "summary_large_image",
    title: "Editorial Policy | ROAS Tools",
    description: "Our standards for accuracy, transparency, and trust in every tool and guide.",
  },
};

export default function EditorialPolicy() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 py-12 px-4 md:px-6">
      
      {/* --- BACK BUTTON --- */}
      <div className="max-w-4xl mx-auto mb-8">
        <Link href="/about" className="inline-flex items-center text-slate-500 hover:text-blue-600 transition font-medium">
            <ArrowLeft size={18} className="mr-2" /> Back to About
        </Link>
      </div>

      {/* --- MAIN CONTENT --- */}
      <main className="max-w-4xl mx-auto bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
        
        {/* Header Section */}
        <div className="bg-slate-900 p-8 md:p-12 text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 p-4 opacity-10">
                <Shield size={120} />
            </div>
            
            <div className="relative z-10">
                <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-6 shadow-lg shadow-blue-900/50">
                    <FileCheck className="text-white" size={28} />
                </div>
                <h1 className="text-3xl md:text-4xl font-bold mb-4">Editorial Policy</h1>
                <p className="text-slate-300 text-lg max-w-2xl">
                    Our commitment to accuracy, transparency, and trustworthiness in every tool, guide, and resource we publish.
                </p>
            </div>
        </div>

        {/* Content Section */}
        <div className="p-8 md:p-12 space-y-12">
            
            {/* Last Updated */}
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                <p className="text-sm text-yellow-800">
                    <strong>Last Updated:</strong> February 10, 2026 | <strong>Next Review:</strong> August 10, 2026
                </p>
            </div>

            {/* 1. Our Mission */}
            <section>
                <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                    <Shield size={24} className="text-blue-600" /> Our Editorial Mission
                </h2>
                <p className="text-slate-600 leading-relaxed mb-4">
                    ROAS Tools is committed to providing accurate, unbiased, and actionable financial tools and educational content 
                    to digital marketers, entrepreneurs, and business owners worldwide. Our editorial policy ensures that every piece 
                    of content we publish meets the highest standards of quality, accuracy, and integrity.
                </p>
                <p className="text-slate-600 leading-relaxed">
                    We do not accept payments for reviews, rankings, or recommendations. All content is created independently by our 
                    team based on research, industry best practices, and verified data sources.
                </p>
            </section>

            {/* 2. Content Standards */}
            <section className="bg-slate-50 rounded-xl p-6 border border-slate-100">
                <h3 className="text-xl font-bold text-slate-900 mb-4">Content Creation Standards</h3>
                <div className="space-y-4">
                    <div className="flex gap-3">
                        <CheckCircle size={20} className="text-green-500 shrink-0 mt-1" />
                        <div>
                            <h4 className="font-bold text-slate-800 mb-1">Accuracy First</h4>
                            <p className="text-sm text-slate-600">
                                Every calculator formula is verified against official documentation from Google Ads, Meta Business Help Center, 
                                and accounting standards (GAAP). All numerical examples are tested with real data before publication.
                            </p>
                        </div>
                    </div>

                    <div className="flex gap-3">
                        <CheckCircle size={20} className="text-green-500 shrink-0 mt-1" />
                        <div>
                            <h4 className="font-bold text-slate-800 mb-1">Source Citation</h4>
                            <p className="text-sm text-slate-600">
                                All factual claims, statistics, and industry benchmarks are cited with links to original sources. 
                                We prioritize primary sources (official platform documentation, academic research, government data) over secondary sources.
                            </p>
                        </div>
                    </div>

                    <div className="flex gap-3">
                        <CheckCircle size={20} className="text-green-500 shrink-0 mt-1" />
                        <div>
                            <h4 className="font-bold text-slate-800 mb-1">Expert Review</h4>
                            <p className="text-sm text-slate-600">
                                All financial content is reviewed by team members with industry certifications (Google Ads Certified, 
                                Meta Blueprint Certified) and 10+ years of professional experience managing six-figure advertising budgets.
                            </p>
                        </div>
                    </div>

                    <div className="flex gap-3">
                        <CheckCircle size={20} className="text-green-500 shrink-0 mt-1" />
                        <div>
                            <h4 className="font-bold text-slate-800 mb-1">Regular Updates</h4>
                            <p className="text-sm text-slate-600">
                                We monitor for changes in advertising platforms, privacy laws, and industry standards. Content is reviewed 
                                and updated at least every 6 months, or immediately when significant platform changes occur.
                            </p>
                        </div>
                    </div>

                    <div className="flex gap-3">
                        <CheckCircle size={20} className="text-green-500 shrink-0 mt-1" />
                        <div>
                            <h4 className="font-bold text-slate-800 mb-1">User-Centric Language</h4>
                            <p className="text-sm text-slate-600">
                                We write in clear, accessible English without unnecessary jargon. Technical terms are explained in context. 
                                Our target reader is a small business owner or marketer without a finance background.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. What We Don't Do */}
            <section>
                <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                    <AlertTriangle size={24} className="text-red-600" /> What We Don't Do
                </h2>
                <ul className="space-y-3">
                    <li className="flex gap-3 text-slate-600">
                        <span className="text-red-600 font-bold text-xl">x</span>
                        <span><strong>No Paid Placements:</strong> We do not accept money from companies to promote their tools, services, or courses.</span>
                    </li>
                    <li className="flex gap-3 text-slate-600">
                        <span className="text-red-600 font-bold text-xl">x</span>
                        <span><strong>No Affiliate Bias:</strong> While we may include affiliate links for relevant products (e.g., accounting software), 
                        these do not influence our recommendations or editorial content.</span>
                    </li>
                    <li className="flex gap-3 text-slate-600">
                        <span className="text-red-600 font-bold text-xl">x</span>
                        <span><strong>No Clickbait:</strong> We don't use sensationalized headlines, fake urgency, or misleading thumbnails to drive traffic.</span>
                    </li>
                    <li className="flex gap-3 text-slate-600">
                        <span className="text-red-600 font-bold text-xl">x</span>
                        <span><strong>No AI-Generated Content Without Review:</strong> While we may use AI tools for research assistance, 
                        all published content is written, fact-checked, and approved by human experts.</span>
                    </li>
                    <li className="flex gap-3 text-slate-600">
                        <span className="text-red-600 font-bold text-xl">x</span>
                        <span><strong>No Personal Data Collection:</strong> Our calculators never send your financial data to our servers. 
                        All processing happens client-side in your browser.</span>
                    </li>
                </ul>
            </section>

            {/* 4. Correction Policy */}
            <section className="bg-blue-50 rounded-xl p-6 border border-blue-100">
                <h3 className="text-xl font-bold text-slate-900 mb-4">Corrections & Updates Policy</h3>
                <p className="text-slate-700 mb-4">
                    We take accuracy seriously. If you identify an error in any of our tools, guides, or content:
                </p>
                <ol className="space-y-3 text-slate-700">
                    <li className="flex gap-3">
                        <span className="font-bold text-blue-600">1.</span>
                        <span><strong>Report It:</strong> Email us at <a href="mailto:luckmatters199@gmail.com" className="text-blue-600 underline">luckmatters199@gmail.com</a> with 
                        details of the error, including the page URL and description of the mistake.</span>
                    </li>
                    <li className="flex gap-3">
                        <span className="font-bold text-blue-600">2.</span>
                        <span><strong>We Verify:</strong> Our team will investigate the issue within 48 hours and cross-check against our original sources.</span>
                    </li>
                    <li className="flex gap-3">
                        <span className="font-bold text-blue-600">3.</span>
                        <span><strong>We Correct:</strong> If the error is confirmed, we'll update the content immediately and add a "Correction Notice" 
                        at the top of the page explaining what was changed and when.</span>
                    </li>
                    <li className="flex gap-3">
                        <span className="font-bold text-blue-600">4.</span>
                        <span><strong>We Thank You:</strong> We'll credit the person who reported the error (if they wish) and send a personal thank-you email.</span>
                    </li>
                </ol>
            </section>

            {/* 5. Sources We Trust */}
            <section>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">Trusted Sources</h2>
                <p className="text-slate-600 mb-4">
                    We rely on authoritative, verifiable sources for all factual claims. Our primary sources include:
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-white p-4 rounded-lg border border-slate-200">
                        <h4 className="font-bold text-slate-800 mb-2">Official Platform Documentation</h4>
                        <ul className="text-sm text-slate-600 space-y-1">
                            <li>- Google Ads Help Center</li>
                            <li>- Meta Business Help Center</li>
                            <li>- TikTok Ads Learning Center</li>
                            <li>- LinkedIn Marketing Solutions</li>
                        </ul>
                    </div>
                    <div className="bg-white p-4 rounded-lg border border-slate-200">
                        <h4 className="font-bold text-slate-800 mb-2">Industry Standards</h4>
                        <ul className="text-sm text-slate-600 space-y-1">
                            <li>- GAAP (Generally Accepted Accounting Principles)</li>
                            <li>- IAB (Interactive Advertising Bureau)</li>
                            <li>- ISO Standards (ISO 4217 for currencies)</li>
                            <li>- W3C Web Standards</li>
                        </ul>
                    </div>
                    <div className="bg-white p-4 rounded-lg border border-slate-200">
                        <h4 className="font-bold text-slate-800 mb-2">Government & Financial Data</h4>
                        <ul className="text-sm text-slate-600 space-y-1">
                            <li>- Federal Reserve Economic Data (FRED)</li>
                            <li>- European Central Bank (ECB)</li>
                            <li>- Bank for International Settlements (BIS)</li>
                            <li>- U.S. Bureau of Labor Statistics</li>
                        </ul>
                    </div>
                    <div className="bg-white p-4 rounded-lg border border-slate-200">
                        <h4 className="font-bold text-slate-800 mb-2">Academic Research</h4>
                        <ul className="text-sm text-slate-600 space-y-1">
                            <li>- Peer-reviewed marketing journals</li>
                            <li>- University research papers</li>
                            <li>- Industry whitepapers from Nielsen, Forrester</li>
                            <li>- Think with Google (Google research arm)</li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* 6. Advertising Transparency */}
            <section className="bg-slate-50 rounded-xl p-6 border border-slate-100">
                <h3 className="text-xl font-bold text-slate-900 mb-4">Advertising & Monetization</h3>
                <p className="text-slate-700 mb-4">
                    ROAS Tools uses Google AdSense to display advertisements. This allows us to keep all core features 100% free for users. 
                    Here's our advertising policy:
                </p>
                <ul className="space-y-3 text-slate-700">
                    <li className="flex gap-3">
                        <CheckCircle size={18} className="text-green-500 shrink-0 mt-1" />
                        <span><strong>Clear Ad Labeling:</strong> All advertisements are clearly labeled and distinguished from editorial content.</span>
                    </li>
                    <li className="flex gap-3">
                        <CheckCircle size={18} className="text-green-500 shrink-0 mt-1" />
                        <span><strong>No Disruptive Ads:</strong> We do not use pop-ups, auto-playing video ads, or full-page interstitials that interfere with tool usage.</span>
                    </li>
                    <li className="flex gap-3">
                        <CheckCircle size={18} className="text-green-500 shrink-0 mt-1" />
                        <span><strong>Editorial Independence:</strong> Advertisers have no influence over our content, tool development, or recommendations.</span>
                    </li>
                    <li className="flex gap-3">
                        <CheckCircle size={18} className="text-green-500 shrink-0 mt-1" />
                        <span><strong>Privacy First:</strong> We do not sell user data. Ads are served by Google AdSense based on your browser's anonymous preferences.</span>
                    </li>
                </ul>
            </section>

            {/* 7. User Feedback */}
            <section>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">Your Voice Matters</h2>
                <p className="text-slate-600 leading-relaxed mb-4">
                    We actively encourage user feedback to improve our tools and content. If you have suggestions, corrections, or questions:
                </p>
                <div className="bg-white p-6 rounded-lg border border-slate-200">
                    <ul className="space-y-2 text-slate-600">
                        <li> <strong>Email:</strong> <a href="mailto:luckmatters199@gmail.com" className="text-blue-600 underline">luckmatters199@gmail.com</a></li>
                        <li>time <strong>Response Time:</strong> We respond to all legitimate inquiries within 48 hours</li>
                        <li> <strong>Updates:</strong> If your feedback leads to changes, we'll notify you personally</li>
                    </ul>
                </div>
            </section>

            <section className="bg-slate-50 rounded-xl p-6 border border-slate-200">
                <h3 className="text-xl font-bold text-slate-900 mb-3">Related Trust Pages</h3>
                <div className="flex flex-wrap gap-3">
                    <Link href="/authors" className="text-blue-700 hover:underline">Authors and Reviewers</Link>
                    <Link href="/methodology" className="text-blue-700 hover:underline">Methodology</Link>
                    <Link href="/data-sources" className="text-blue-700 hover:underline">Data Sources</Link>
                </div>
            </section>

        </div>

        {/* Footer */}
        <div className="bg-slate-900 p-8 text-center text-slate-400 text-sm">
            <p>
                This editorial policy is a living document. We review and update it as our standards evolve. 
                <br />Questions about our editorial practices? <Link href="/contact" className="text-blue-400 underline">Contact us</Link>.
            </p>
        </div>

      </main>
    </div>
  );
}
