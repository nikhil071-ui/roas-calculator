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
            </div>
        </div>

        {/* Content Section */}
        <div className="p-8 md:p-12 space-y-12">
            
            {/* 1. Our Mission */}
            <section className="flex gap-4 md:gap-6">
                <div className="flex-shrink-0 mt-1">
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
                <div className="flex-shrink-0 mt-1">
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
                        <CheckCircle size={18} className="text-green-500 mt-1 flex-shrink-0" />
                        <span><strong>100% Client-Side:</strong> Your financial data never leaves your browser.</span>
                    </li>
                    <li className="flex items-start gap-3 text-slate-600">
                        <CheckCircle size={18} className="text-green-500 mt-1 flex-shrink-0" />
                        <span><strong>No Signups:</strong> We hate "Login to see results" walls. Everything here is free forever.</span>
                    </li>
                    <li className="flex items-start gap-3 text-slate-600">
                        <CheckCircle size={18} className="text-green-500 mt-1 flex-shrink-0" />
                        <span><strong>Education First:</strong> We don't just give you a number; we explain what it means for your business.</span>
                    </li>
                </ul>
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