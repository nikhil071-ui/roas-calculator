import Link from "next/link";
import { Shield, ArrowLeft, Lock, Eye, Server, Mail } from "lucide-react";

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 py-12 px-4 md:px-6">
      
      {/* --- BACK BUTTON --- */}
      <div className="max-w-3xl mx-auto mb-8">
        <Link href="/" className="inline-flex items-center text-slate-500 hover:text-blue-600 transition font-medium">
            <ArrowLeft size={18} className="mr-2" /> Back to Calculator
        </Link>
      </div>

      {/* --- MAIN LEGAL DOCUMENT --- */}
      <main className="max-w-3xl mx-auto bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
        
        {/* Header Section */}
        <div className="bg-slate-900 p-8 md:p-12 text-white">
            <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-6 shadow-lg shadow-blue-900/50">
                <Shield className="text-white" size={28} />
            </div>
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Privacy Policy</h1>
            <p className="text-slate-400 text-lg">
                Your privacy is non-negotiable. Here is how we protect your data.
            </p>
            <p className="text-slate-500 text-sm mt-4 uppercase tracking-wider font-bold">
                Last Updated: December 2025
            </p>
        </div>

        {/* Content Section */}
        <div className="p-8 md:p-12 space-y-10">
            
            {/* Section 1 */}
            <section className="flex gap-4 md:gap-6">
                <div className="flex-shrink-0 mt-1">
                    <div className="w-8 h-8 bg-blue-50 rounded-full flex items-center justify-center text-blue-600">
                        <span className="font-bold text-sm">1</span>
                    </div>
                </div>
                <div>
                    <h2 className="text-xl font-bold text-slate-900 mb-3">Introduction</h2>
                    <p className="text-slate-600 leading-relaxed">
                        Welcome to <strong>ROAS Calculator</strong> ("we," "our," or "us"). We operate this website to provide free utility tools for students and marketers. We respect your privacy and are committed to protecting it through our compliance with this policy.
                    </p>
                </div>
            </section>

            <hr className="border-slate-100" />

            {/* Section 2 */}
            <section className="flex gap-4 md:gap-6">
                <div className="flex-shrink-0 mt-1">
                    <div className="w-8 h-8 bg-blue-50 rounded-full flex items-center justify-center text-blue-600">
                        <Lock size={16} />
                    </div>
                </div>
                <div>
                    <h2 className="text-xl font-bold text-slate-900 mb-3">Information We Collect</h2>
                    <p className="text-slate-600 leading-relaxed mb-4">
                        We believe in data minimization. We do <strong>not</strong> collect personal information like your name, email, or phone number unless you voluntarily contact us directly.
                    </p>
                    <div className="bg-blue-50 p-4 rounded-lg border border-blue-100 text-blue-800 text-sm">
                        <strong>Note:</strong> You can use all our tools (Calculator, Image Compressor, PDF Maker) without creating an account or logging in.
                    </div>
                </div>
            </section>

            <hr className="border-slate-100" />

            {/* Section 3 */}
            <section className="flex gap-4 md:gap-6">
                <div className="flex-shrink-0 mt-1">
                    <div className="w-8 h-8 bg-blue-50 rounded-full flex items-center justify-center text-blue-600">
                        <Eye size={16} />
                    </div>
                </div>
                <div>
                    <h2 className="text-xl font-bold text-slate-900 mb-3">Cookies & Google AdSense</h2>
                    <p className="text-slate-600 leading-relaxed mb-4">
                        We use third-party vendors, specifically **Google AdSense**, to serve ads. Google uses cookies (including the DoubleClick cookie) to serve ads based on your prior visits to our website or other websites on the Internet.
                    </p>
                    <ul className="list-disc pl-5 space-y-2 text-slate-600">
                        <li>Google's advertising requirements can be summed up by <a href="https://support.google.com/adwordspolicy/answer/1316548" target="_blank" className="text-blue-600 underline hover:text-blue-800">Google's Advertising Principles</a>.</li>
                        <li>You can opt-out of personalized advertising by visiting <a href="https://www.google.com/settings/ads" target="_blank" className="text-blue-600 underline hover:text-blue-800">Google Ads Settings</a>.</li>
                    </ul>
                </div>
            </section>

            <hr className="border-slate-100" />

            {/* Section 4 */}
            <section className="flex gap-4 md:gap-6">
                <div className="flex-shrink-0 mt-1">
                    <div className="w-8 h-8 bg-blue-50 rounded-full flex items-center justify-center text-blue-600">
                        <Server size={16} />
                    </div>
                </div>
                <div>
                    <h2 className="text-xl font-bold text-slate-900 mb-3">How We Handle Your Data</h2>
                    <p className="text-slate-600 leading-relaxed">
                        The financial data (Ad Spend, Revenue) and images you process on our tools are <strong>processed locally on your device</strong> via JavaScript. 
                    </p>
                    <p className="text-slate-600 mt-2">
                        We do not upload your images or financial inputs to any server. Your data never leaves your browser.
                    </p>
                </div>
            </section>

            <hr className="border-slate-100" />

            {/* Section 5 */}
            <section className="flex gap-4 md:gap-6">
                <div className="flex-shrink-0 mt-1">
                    <div className="w-8 h-8 bg-blue-50 rounded-full flex items-center justify-center text-blue-600">
                        <Mail size={16} />
                    </div>
                </div>
                <div>
                    <h2 className="text-xl font-bold text-slate-900 mb-3">Contact Us</h2>
                    <p className="text-slate-600 leading-relaxed">
                        If you have any questions regarding this privacy policy, you may contact us using the information below:
                    </p>
                    <p className="mt-4 font-bold text-slate-900">luckmatters199@gmail.com</p>
                </div>
            </section>

        </div>
      </main>
      
      {/* Footer Note */}
      <p className="text-center text-slate-400 text-sm mt-8">
        © 2026 ROAS Tools. All rights reserved.
      </p>
    </div>
  );
}