import type { Metadata } from "next";
import Link from "next/link";
import { Mail, ArrowLeft, MessageSquare, Clock, Send } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact | ROAS Tools",
  description: "Contact ROAS Tools for calculator support, benchmark feedback, and publisher strategy questions.",
  alternates: {
    canonical: "https://roas-calculator.tech/contact",
  },
  openGraph: {
    title: "Contact | ROAS Tools",
    description: "Contact ROAS Tools for calculator support, benchmark feedback, and publisher strategy questions.",
    url: "https://roas-calculator.tech/contact",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact | ROAS Tools",
    description: "Contact ROAS Tools for calculator support, benchmark feedback, and publisher strategy questions.",
  },
};

export default function Contact() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 py-12 px-4 md:px-6">
      <div className="max-w-3xl mx-auto mb-8">
        <Link href="/" className="inline-flex items-center text-slate-500 hover:text-blue-600 transition font-medium">
          <ArrowLeft size={18} className="mr-2" /> Back to Calculator
        </Link>
      </div>

      <main className="max-w-3xl mx-auto bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
        <div className="bg-slate-900 p-8 md:p-12 text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 p-4 opacity-10">
            <Mail size={120} />
          </div>
          <div className="relative z-10">
            <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-6 shadow-lg shadow-blue-900/50">
              <MessageSquare className="text-white" size={28} />
            </div>
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Contact ROAS Tools</h1>
            <p className="text-slate-300 text-lg max-w-xl">
              Need help with ROAS interpretation, benchmark feedback, or calculator behavior? Send us details and we will review.
            </p>
          </div>
        </div>

        <div className="p-8 md:p-12 grid md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div>
              <h2 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                <Send size={20} className="text-blue-600" /> Email Support
              </h2>
              <div className="bg-blue-50 p-6 rounded-xl border border-blue-100">
                <p className="text-xs font-bold text-blue-500 uppercase tracking-wider mb-2">Primary Email</p>
                <a href="mailto:luckmatters199@gmail.com" className="text-xl md:text-2xl font-bold text-slate-900 hover:text-blue-600 transition break-all">
                  luckmatters199@gmail.com
                </a>
              </div>
            </div>

            <div>
              <h3 className="text-sm font-bold text-slate-900 mb-3 flex items-center gap-2">
                <Clock size={16} className="text-slate-400" /> Response Time
              </h3>
              <p className="text-slate-500 text-sm">
                Typical response time is <strong>24-48 hours</strong>.
              </p>
            </div>
          </div>

          <div className="bg-slate-50 rounded-xl p-8 border border-slate-100">
            <h3 className="font-bold text-slate-900 mb-6">Best Topics to Include</h3>
            <ul className="space-y-4">
              <li className="flex gap-3 text-sm text-slate-600">
                <span className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center text-green-600 flex-shrink-0 font-bold">1</span>
                <span><strong>Calculator Issue:</strong> Include input values and expected output.</span>
              </li>
              <li className="flex gap-3 text-sm text-slate-600">
                <span className="w-6 h-6 bg-orange-100 rounded-full flex items-center justify-center text-orange-600 flex-shrink-0 font-bold">2</span>
                <span><strong>Benchmark Feedback:</strong> Share channel, geo, and timeframe context.</span>
              </li>
              <li className="flex gap-3 text-sm text-slate-600">
                <span className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 flex-shrink-0 font-bold">3</span>
                <span><strong>Partnerships:</strong> Publisher collaborations and data partnerships.</span>
              </li>
            </ul>
          </div>
        </div>
      </main>
    </div>
  );
}
