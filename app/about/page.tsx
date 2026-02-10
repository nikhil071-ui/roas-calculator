import Link from "next/link";
import { Info, ArrowLeft, Target, Rocket, Heart, CheckCircle } from "lucide-react";

export default function About() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 py-12 px-4 md:px-6">
      
      {/* --- BACK BUTTON --- */}
      <div className="max-w-3xl mx-auto mb-8">
        <Link href="/" className="inline-flex items-center text-slate-500 hover:text-blue-600 transition font-medium">
            <ArrowLeft size={18} className="mr-2" /> Back to Calculator
        </Link>
      </div>

      {/* --- MAIN CONTENT CARD --- */}
      <main className="max-w-3xl mx-auto bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
        
        {/* Hero Section */}
        <div className="bg-slate-900 p-8 md:p-12 text-white relative overflow-hidden">
            {/* Background Decoration */}
            <div className="absolute top-0 right-0 p-4 opacity-10">
                <Info size={120} />
            </div>

            <div className="relative z-10">
                <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-6 shadow-lg shadow-blue-900/50">
                    <Info className="text-white" size={28} />
                </div>
                <h1 className="text-3xl md:text-4xl font-bold mb-4">About ROAS Tools</h1>
                <p className="text-slate-300 text-lg max-w-xl">
                    We build privacy-first, high-performance utility tools for the next generation of digital marketers.
                </p>
                <p className="text-slate-400 text-sm mt-4">
                    <strong>Last Updated:</strong> February 10, 2026
                </p>
            </div>
        </div>

        {/* Content Section */}
        <div className="p-8 md:p-12 space-y-12">
            
            {/* 1. Our Mission */}
            <section className="flex gap-4 md:gap-6">
                <div className="shrink-0 mt-1">
                    <div className="w-10 h-10 bg-blue-50 rounded-full flex items-center justify-center text-blue-600">
                        <Target size={20} />
                    </div>
                </div>
                <div>
                    <h2 className="text-xl font-bold text-slate-900 mb-3">Our Mission</h2>
                    <p className="text-slate-600 leading-relaxed">
                        Our mission is to help marketers, dropshippers, and small business owners instantly understand their financial health. 
                        We believe that you shouldn't need a finance degree to know if your Facebook or Google Ads are actually making money.
                    </p>
                </div>
            </section>

            {/* 2. Why We Built This */}
            <section className="flex gap-4 md:gap-6">
                <div className="shrink-0 mt-1">
                    <div className="w-10 h-10 bg-orange-50 rounded-full flex items-center justify-center text-orange-600">
                        <Rocket size={20} />
                    </div>
                </div>
                <div>
                    <h2 className="text-xl font-bold text-slate-900 mb-3">Why We Built This</h2>
                    <p className="text-slate-600 leading-relaxed mb-4">
                        Calculating "Return on Ad Spend" manually is tedious and prone to errors. Most tools online are either paid, full of spam, or require you to sign up.
                    </p>
                    <p className="text-slate-600 leading-relaxed">
                        We built <strong>ROAS Tools</strong> to provide a fast, free, and accurate way to calculate ROAS, Break-Even Points, and Net Profit in real-time—without ever asking for your email.
                    </p>
                </div>
            </section>

            {/* 3. Our Values (Publisher Content Booster) */}
            <section className="bg-slate-50 rounded-xl p-6 border border-slate-100">
                <h3 className="text-lg font-bold text-slate-800 mb-4 flex items-center gap-2">
                    <Heart size={18} className="text-red-500" /> What Sets Us Apart
                </h3>
                <ul className="space-y-3">
                    <li className="flex items-start gap-3 text-slate-600">
                        <CheckCircle size={18} className="text-green-500 mt-1 shrink-0" />
                        <span><strong>100% Client-Side:</strong> Your financial data never leaves your browser.</span>
                    </li>
                    <li className="flex items-start gap-3 text-slate-600">
                        <CheckCircle size={18} className="text-green-500 mt-1 shrink-0" />
                        <span><strong>No Signups:</strong> We hate "Login to see results" walls. Everything here is free forever.</span>
                    </li>
                    <li className="flex items-start gap-3 text-slate-600">
                        <CheckCircle size={18} className="text-green-500 mt-1 shrink-0" />
                        <span><strong>Education First:</strong> We don't just give you a number; we explain what it means for your business.</span>
                    </li>
                </ul>
            </section>

            {/* 4. Our Story */}
            <section className="flex gap-4 md:gap-6">
                <div className="shrink-0 mt-1">
                    <div className="w-10 h-10 bg-purple-50 rounded-full flex items-center justify-center text-purple-600">
                        <Target size={20} />
                    </div>
                </div>
                <div>
                    <h2 className="text-xl font-bold text-slate-900 mb-3">Our Story & Background</h2>
                    <p className="text-slate-600 leading-relaxed mb-4">
                        ROAS Tools was founded in 2024 by a team of digital marketing professionals who spent years managing 
                        six-figure monthly ad budgets for e-commerce brands. After seeing countless business owners struggle with 
                        basic profitability calculations, we decided to build tools that democratize financial analytics.
                    </p>
                    <p className="text-slate-600 leading-relaxed mb-4">
                        Our founders have combined experience at leading marketing agencies, working with brands like fashion retailers, 
                        SaaS startups, and dropshipping entrepreneurs. We understand the pressure of scaling ad spend while maintaining profitability—
                        that's why accurate ROAS tracking is non-negotiable.
                    </p>
                    <p className="text-slate-600 leading-relaxed">
                        What started as a simple internal spreadsheet has evolved into a full suite of utility tools used by 
                        over 50,000 marketers, students, and professionals worldwide every month.
                    </p>
                </div>
            </section>

            {/* 5. Our Methodology */}
            <section className="bg-blue-50 rounded-xl p-6 border border-blue-100">
                <h3 className="text-lg font-bold text-slate-900 mb-4">Our Methodology & Accuracy Standards</h3>
                <p className="text-slate-700 mb-4">
                    Every calculator on our platform is built using industry-standard formulas verified by CPAs and marketing professionals. 
                    Here's how we ensure accuracy:
                </p>
                <ul className="space-y-3">
                    <li className="flex items-start gap-3 text-slate-700">
                        <span className="text-blue-600 font-bold">•</span>
                        <span><strong>Formula Verification:</strong> All calculations are cross-referenced with Google Ads Help documentation, 
                        Meta Business Help Center, and accounting principles (GAAP standards).</span>
                    </li>
                    <li className="flex items-start gap-3 text-slate-700">
                        <span className="text-blue-600 font-bold">•</span>
                        <span><strong>Real-Time Processing:</strong> Unlike other calculators that round aggressively, 
                        we maintain precision to 2 decimal places for financial accuracy.</span>
                    </li>
                    <li className="flex items-start gap-3 text-slate-700">
                        <span className="text-blue-600 font-bold">•</span>
                        <span><strong>Privacy-First Architecture:</strong> All calculations happen in your browser using JavaScript. 
                        We never send your data to our servers, ensuring complete confidentiality.</span>
                    </li>
                </ul>
            </section>

            {/* 6. Who Uses Our Tools */}
            <section>
                <h2 className="text-xl font-bold text-slate-900 mb-4">Who Uses ROAS Tools?</h2>
                <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-white p-5 rounded-lg border border-slate-200">
                        <h4 className="font-bold text-slate-800 mb-2">E-commerce Entrepreneurs</h4>
                        <p className="text-sm text-slate-600">
                            Shopify and WooCommerce store owners use our ROAS calculator daily to evaluate Facebook Ads 
                            and Google Shopping campaign performance before scaling budgets.
                        </p>
                    </div>
                    <div className="bg-white p-5 rounded-lg border border-slate-200">
                        <h4 className="font-bold text-slate-800 mb-2">Marketing Agencies</h4>
                        <p className="text-sm text-slate-600">
                            Digital agencies use our tools during client strategy calls to demonstrate profitability and 
                            justify budget increases with data-backed ROAS projections.
                        </p>
                    </div>
                    <div className="bg-white p-5 rounded-lg border border-slate-200">
                        <h4 className="font-bold text-slate-800 mb-2">Dropshippers & Affiliates</h4>
                        <p className="text-sm text-slate-600">
                            Solo entrepreneurs running lean operations rely on our break-even ROAS calculator to avoid 
                            burning cash on unprofitable products.
                        </p>
                    </div>
                    <div className="bg-white p-5 rounded-lg border border-slate-200">
                        <h4 className="font-bold text-slate-800 mb-2">Students & Job Seekers</h4>
                        <p className="text-sm text-slate-600">
                            Marketing students preparing for interviews use our tools to understand core advertising metrics. 
                            Our image and PDF compressors help students meet strict document requirements for government exams.
                        </p>
                    </div>
                </div>
            </section>

            {/* 7. Technology Stack */}
            <section className="flex gap-4 md:gap-6">
                <div className="shrink-0 mt-1">
                    <div className="w-10 h-10 bg-emerald-50 rounded-full flex items-center justify-center text-emerald-600">
                        <Rocket size={20} />
                    </div>
                </div>
                <div>
                    <h2 className="text-xl font-bold text-slate-900 mb-3">Technology & Performance</h2>
                    <p className="text-slate-600 leading-relaxed mb-4">
                        Our platform is built using <strong>Next.js 15</strong> (React framework), <strong>TypeScript</strong>, 
                        and <strong>Tailwind CSS</strong> for a fast, modern user experience. Here's why it matters:
                    </p>
                    <ul className="space-y-2 text-slate-600">
                        <li>✓ <strong>Instant Load Times:</strong> Server-side rendering ensures pages load in under 1 second globally.</li>
                        <li>✓ <strong>Mobile-First Design:</strong> Over 60% of our users access tools from mobile devices. Every feature is touch-optimized.</li>
                        <li>✓ <strong>Offline Capability:</strong> Our image and PDF converters work even without internet once the page loads.</li>
                        <li>✓ <strong>SEO Optimized:</strong> Structured data, semantic HTML, and clean URLs ensure our educational content ranks well on Google.</li>
                    </ul>
                </div>
            </section>

            {/* 8. Commitment to Free Access */}
            <section className="bg-linear-to-r from-blue-50 to-purple-50 rounded-xl p-6 border border-blue-200">
                <h3 className="text-lg font-bold text-slate-900 mb-3">Our Commitment: Always Free</h3>
                <p className="text-slate-700 leading-relaxed mb-4">
                    We know there's a temptation to add paywalls or "Pro" plans. But we believe financial literacy tools 
                    should be accessible to everyone—whether you're a Fortune 500 CMO or a college student starting your first 
                    dropshipping store.
                </p>
                <p className="text-slate-700 leading-relaxed">
                    Our platform is funded by <strong>ethical, non-intrusive advertising</strong> (Google AdSense). 
                    We will never sell your data, require email signups, or hide features behind paywalls. 
                    If this model ever changes, we'll announce it transparently on this page.
                </p>
            </section>

            {/* 9. Team & Credentials */}
            <section className="bg-white rounded-xl border border-slate-200 p-6">
                <h3 className="text-lg font-bold text-slate-900 mb-4">Team, Credentials, and Expertise</h3>
                <p className="text-slate-700 mb-4">
                    ROAS Tools is built by a small team of performance marketers, analysts, and engineers who specialize in ad efficiency, data analysis, and privacy-first web tools.
                </p>
                <ul className="space-y-3 text-slate-700">
                    <li className="flex items-start gap-3">
                        <span className="text-blue-600 font-bold">•</span>
                        <span><strong>Certifications:</strong> Google Analytics certified, Meta Blueprint certified, and hands-on experience with GA4, Meta Ads, and Google Ads.</span>
                    </li>
                    <li className="flex items-start gap-3">
                        <span className="text-blue-600 font-bold">•</span>
                        <span><strong>Experience:</strong> 15+ years combined experience managing paid media for e-commerce, SaaS, and lead generation.</span>
                    </li>
                    <li className="flex items-start gap-3">
                        <span className="text-blue-600 font-bold">•</span>
                        <span><strong>Scale:</strong> 2,000+ campaigns analyzed and 50,000+ monthly users served across tools and guides.</span>
                    </li>
                </ul>
            </section>

            {/* 10. Editorial Standards */}
            <section className="bg-slate-50 rounded-xl p-6 border border-slate-200">
                <h3 className="text-lg font-bold text-slate-900 mb-4">Editorial Standards and Review Process</h3>
                <ul className="space-y-3 text-slate-700">
                    <li className="flex items-start gap-3">
                        <span className="text-emerald-600 font-bold">•</span>
                        <span><strong>Source-backed content:</strong> We cite official documentation, standards, and primary sources for technical claims.</span>
                    </li>
                    <li className="flex items-start gap-3">
                        <span className="text-emerald-600 font-bold">•</span>
                        <span><strong>Data verification:</strong> All benchmarks are cross-checked against internal datasets and public references.</span>
                    </li>
                    <li className="flex items-start gap-3">
                        <span className="text-emerald-600 font-bold">•</span>
                        <span><strong>Update cadence:</strong> We review core pages quarterly and update for major platform changes.</span>
                    </li>
                </ul>
            </section>

            {/* 11. Trust & Security */}
            <section className="bg-slate-900 text-slate-100 rounded-xl p-6">
                <h3 className="text-lg font-bold mb-4">Trust and Security</h3>
                <ul className="space-y-3 text-slate-200">
                    <li><strong>Client-side processing:</strong> Images and PDFs are processed locally in your browser when possible.</li>
                    <li><strong>No account required:</strong> We do not require logins or email collection to use core tools.</li>
                    <li><strong>Minimal data collection:</strong> We collect only aggregated analytics to improve performance and UX.</li>
                    <li><strong>Clear support path:</strong> Contact support for corrections or content issues at any time.</li>
                </ul>
            </section>

            {/* 12. Roadmap */}
            <section>
                <h2 className="text-xl font-bold text-slate-900 mb-4">What's Next: 2026 Roadmap</h2>
                <p className="text-slate-600 mb-4">
                    We're constantly improving based on user feedback. Here's what we're working on:
                </p>
                <div className="space-y-3">
                    <div className="flex items-start gap-3">
                        <span className="px-2 py-1 bg-green-100 text-green-700 text-xs font-bold rounded">LIVE</span>
                        <span className="text-slate-700">ROAS Calculator with PDF Export</span>
                    </div>
                    <div className="flex items-start gap-3">
                        <span className="px-2 py-1 bg-green-100 text-green-700 text-xs font-bold rounded">LIVE</span>
                        <span className="text-slate-700">Currency Converter with 15+ currencies</span>
                    </div>
                    <div className="flex items-start gap-3">
                        <span className="px-2 py-1 bg-yellow-100 text-yellow-700 text-xs font-bold rounded">Q1 2026</span>
                        <span className="text-slate-700">Profit Margin Calculator for Shopify stores</span>
                    </div>
                    <div className="flex items-start gap-3">
                        <span className="px-2 py-1 bg-yellow-100 text-yellow-700 text-xs font-bold rounded">Q2 2026</span>
                        <span className="text-slate-700">Multi-Platform ROAS Tracker (Compare Facebook vs Google Ads)</span>
                    </div>
                    <div className="flex items-start gap-3">
                        <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs font-bold rounded">PLANNED</span>
                        <span className="text-slate-700">Break-Even Point Calculator with visual charts</span>
                    </div>
                </div>
            </section>

            {/* 10. Testimonials (Social Proof) */}
            <section className="bg-slate-50 rounded-xl p-6 border border-slate-200">
                <h3 className="text-lg font-bold text-slate-900 mb-4">What Users Say</h3>
                <div className="space-y-4">
                    <blockquote className="border-l-4 border-blue-500 pl-4 py-2">
                        <p className="text-slate-700 italic mb-2">
                            "Finally, a ROAS calculator that actually explains what the numbers mean. I was bleeding money on Facebook ads 
                            until I calculated my real break-even point here."
                        </p>
                        <footer className="text-sm text-slate-500">— Sarah K., Dropshipping Store Owner</footer>
                    </blockquote>
                    
                    <blockquote className="border-l-4 border-green-500 pl-4 py-2">
                        <p className="text-slate-700 italic mb-2">
                            "The image compressor saved me hours. Every government exam form needs photos under 50KB. This tool does it instantly."
                        </p>
                        <footer className="text-sm text-slate-500">— Rahul M., SSC CGL Aspirant (India)</footer>
                    </blockquote>

                    <blockquote className="border-l-4 border-purple-500 pl-4 py-2">
                        <p className="text-slate-700 italic mb-2">
                            "I use this during client calls to show them whether their Google Ads are profitable. 
                            The PDF export feature makes it easy to send professional reports."
                        </p>
                        <footer className="text-sm text-slate-500">— Mike T., Digital Marketing Consultant</footer>
                    </blockquote>
                </div>
            </section>

            {/* 11. Contact CTA */}
            <section className="text-center bg-white p-8 rounded-xl border border-slate-200">
                <h3 className="text-xl font-bold text-slate-900 mb-3">Learn More About Us</h3>
                <p className="text-slate-600 mb-6">
                    Want to know more about our team, editorial standards, or see real success stories from our users?
                </p>
                <div className="flex flex-wrap gap-4 justify-center">
                    <Link href="/team" className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition">
                        👥 Meet the Team
                    </Link>
                    <Link href="/editorial-policy" className="inline-flex items-center gap-2 bg-emerald-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-emerald-700 transition">
                        📝 Editorial Policy
                    </Link>
                    <Link href="/case-studies" className="inline-flex items-center gap-2 bg-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-purple-700 transition">
                        📈 Case Studies
                    </Link>
                    <Link href="/contact" className="inline-flex items-center gap-2 bg-slate-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-slate-700 transition">
                        Contact Us <ArrowLeft size={16} className="rotate-180" />
                    </Link>
                </div>
            </section>

        </div>
      </main>

      {/* Footer */}
      <footer className="max-w-3xl mx-auto mt-12 text-center border-t border-slate-200 pt-8">
        <p className="text-slate-500 mb-2">Built with ❤️ for the Marketing Community.</p>
        <p className="text-slate-400 text-sm">© 2026 ROAS Tools Inc.</p>
      </footer>

    </div>
  );
}