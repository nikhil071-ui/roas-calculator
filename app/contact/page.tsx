import type { Metadata } from "next";
import Link from "next/link";
import { Mail, ArrowLeft, MessageSquare, Clock, Send } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact | ROAS Tools",
  description: "Contact ROAS Tools for support, feature requests, partnerships, and bug reports.",
  alternates: {
    canonical: "https://roas-calculator.tech/contact",
  },
  openGraph: {
    title: "Contact | ROAS Tools",
    description: "Contact ROAS Tools for support, feature requests, partnerships, and bug reports.",
    url: "https://roas-calculator.tech/contact",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact | ROAS Tools",
    description: "Contact ROAS Tools for support, feature requests, partnerships, and bug reports.",
  },
};

export default function Contact() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 py-12 px-4 md:px-6">
      
      {/* --- BACK BUTTON --- */}
      <div className="max-w-3xl mx-auto mb-8">
        <Link href="/" className="inline-flex items-center text-slate-500 hover:text-blue-600 transition font-medium">
            <ArrowLeft size={18} className="mr-2" /> Back to Calculator
        </Link>
      </div>

      {/* --- MAIN CARD --- */}
      <main className="max-w-3xl mx-auto bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
        
        {/* Header Section */}
        <div className="bg-slate-900 p-8 md:p-12 text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 p-4 opacity-10">
                <Mail size={120} />
            </div>
            
            <div className="relative z-10">
                <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-6 shadow-lg shadow-blue-900/50">
                    <MessageSquare className="text-white" size={28} />
                </div>
                <h1 className="text-3xl md:text-4xl font-bold mb-4">Contact Us</h1>
                <p className="text-slate-300 text-lg max-w-xl">
                    Have a feature request, found a bug, or just want to say hi? We read every message.
                </p>
            </div>
        </div>

        {/* Content Section */}
        <div className="p-8 md:p-12 grid md:grid-cols-2 gap-12">
            
            {/* Left: Contact Info */}
            <div className="space-y-8">
                <div>
                    <h2 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                        <Send size={20} className="text-blue-600" /> Get in Touch
                    </h2>
                    <p className="text-slate-600 mb-6">
                        The best way to reach us is via email. We don't use contact forms because we prefer direct human-to-human conversation.
                    </p>
                    
                    <div className="space-y-4">
                        <div className="bg-blue-50 p-6 rounded-xl border border-blue-100">
                            <p className="text-xs font-bold text-blue-500 uppercase tracking-wider mb-2">Primary Email</p>
                            <a href="mailto:luckmatters199@gmail.com" className="text-xl md:text-2xl font-bold text-slate-900 hover:text-blue-600 transition break-all">
                                luckmatters199@gmail.com
                            </a>
                        </div>

                        <div className="bg-slate-50 p-6 rounded-xl border border-slate-200">
                            <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-3">Business Information</p>
                            <div className="space-y-2 text-slate-700">
                                <p><strong>Business Name:</strong> ROAS Tools Digital Solutions</p>
                                <p><strong>Registration:</strong> Private Entity (India)</p>
                                <p><strong>Operated From:</strong> Mumbai, Maharashtra, India</p>
                                <p><strong>Website:</strong> <a href="https://roas-calculator.tech" className="text-blue-600 underline">roas-calculator.tech</a></p>
                                <p><strong>Established:</strong> 2024</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div>
                    <h3 className="text-sm font-bold text-slate-900 mb-3 flex items-center gap-2">
                        <Clock size={16} className="text-slate-400" /> Response Time
                    </h3>
                    <p className="text-slate-500 text-sm">
                        We are a small team (of one!), so please allow <strong>24-48 hours</strong> for a response. We typically reply on weekends too.
                    </p>
                </div>
            </div>

            {/* Right: FAQ / Why Contact */}
            <div className="bg-slate-50 rounded-xl p-8 border border-slate-100">
                <h3 className="font-bold text-slate-900 mb-6">What can we help with?</h3>
                <ul className="space-y-4">
                    <li className="flex gap-3 text-sm text-slate-600">
                        <span className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center text-green-600 flex-shrink-0 font-bold">1</span>
                        <span><strong>Bug Reports:</strong> If a calculation looks wrong, let us know immediately.</span>
                    </li>
                    <li className="flex gap-3 text-sm text-slate-600">
                        <span className="w-6 h-6 bg-orange-100 rounded-full flex items-center justify-center text-orange-600 flex-shrink-0 font-bold">2</span>
                        <span><strong>Feature Requests:</strong> Have an idea for a new calculator or improvement? We love user suggestions.</span>
                    </li>
                    <li className="flex gap-3 text-sm text-slate-600">
                        <span className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 flex-shrink-0 font-bold">3</span>
                        <span><strong>Partnerships:</strong> Interested in sponsoring the tool or collaboration? We are open to offers.</span>
                    </li>
                    <li className="flex gap-3 text-sm text-slate-600">
                        <span className="w-6 h-6 bg-purple-100 rounded-full flex items-center justify-center text-purple-600 flex-shrink-0 font-bold">4</span>
                        <span><strong>Media Inquiries:</strong> Press and journalists welcome. We can provide expert quotes on digital marketing metrics.</span>
                    </li>
                </ul>
            </div>

        </div>

        {/* Additional Support Information */}
        <div className="border-t border-slate-200 pt-8 mt-8 px-8 md:px-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">Frequently Asked Questions</h2>
            
            <div className="space-y-6 mb-12">
                <div>
                    <h3 className="font-bold text-slate-900 mb-2">Q: Do you offer phone support?</h3>
                    <p className="text-slate-600">
                        We currently only provide email support. This allows us to keep the service 100% free while maintaining quality responses. 
                        Most queries are answered within 24 hours.
                    </p>
                </div>

                <div>
                    <h3 className="font-bold text-slate-900 mb-2">Q: Can I request a custom calculator for my business?</h3>
                    <p className="text-slate-600">
                        Yes! If your request aligns with our mission (helping marketers and business owners), we may build it for free. 
                        For custom enterprise solutions with specific branding or integrations, we offer paid consulting. Email us for details.
                    </p>
                </div>

                <div>
                    <h3 className="font-bold text-slate-900 mb-2">Q: I found a bug. How do I report it?</h3>
                    <p className="text-slate-600">
                        Email us at <a href="mailto:luckmatters199@gmail.com" className="text-blue-600 underline">luckmatters199@gmail.com</a> with:
                    </p>
                    <ul className="list-disc pl-5 mt-2 text-slate-600 text-sm space-y-1">
                        <li>Which tool you were using (ROAS Calculator, Currency Converter, etc.)</li>
                        <li>What you expected to happen</li>
                        <li>What actually happened</li>
                        <li>Screenshots if possible</li>
                    </ul>
                </div>

                <div>
                    <h3 className="font-bold text-slate-900 mb-2">Q: Do you store my data or calculations?</h3>
                    <p className="text-slate-600">
                        <strong>No.</strong> All calculations happen client-side in your browser. We never send your numbers, 
                        currency amounts, or financial data to our servers. Your privacy is guaranteed by design.
                    </p>
                </div>

                <div>
                    <h3 className="font-bold text-slate-900 mb-2">Q: Can I use your tools for commercial purposes?</h3>
                    <p className="text-slate-600">
                        Absolutely! Marketing agencies, consultants, and businesses use our tools daily with clients. 
                        The only restriction: you cannot rebrand our tools as your own product or embed them in a competing website 
                        without permission.
                    </p>
                </div>

                <div>
                    <h3 className="font-bold text-slate-900 mb-2">Q: How do you make money if everything is free?</h3>
                    <p className="text-slate-600">
                        We display ethical, non-intrusive ads via Google AdSense. This model allows us to provide free tools 
                        while covering server costs. We will never charge for core features.
                    </p>
                </div>
            </div>

            {/* Support Categories */}
            <h2 className="text-2xl font-bold text-slate-900 mb-6">Support Categories</h2>
            <div className="grid md:grid-cols-3 gap-6 mb-12">
                <div className="bg-blue-50 p-6 rounded-xl border border-blue-100">
                    <h4 className="font-bold text-blue-900 mb-2">Technical Issues</h4>
                    <p className="text-sm text-blue-700 mb-3">
                        Calculator not working? PDF export failed? Images won't compress? 
                    </p>
                    <p className="text-xs text-blue-600">
                        <strong>Expected Response:</strong> Within 12 hours
                    </p>
                </div>

                <div className="bg-green-50 p-6 rounded-xl border border-green-100">
                    <h4 className="font-bold text-green-900 mb-2">Feature Suggestions</h4>
                    <p className="text-sm text-green-700 mb-3">
                        Want a new tool or feature? Tell us what you'd find useful and why.
                    </p>
                    <p className="text-xs text-green-600">
                        <strong>Expected Response:</strong> Within 48 hours
                    </p>
                </div>

                <div className="bg-purple-50 p-6 rounded-xl border border-purple-100">
                    <h4 className="font-bold text-purple-900 mb-2">Business Partnerships</h4>
                    <p className="text-sm text-purple-700 mb-3">
                        Sponsorship opportunities, affiliate partnerships, or API access inquiries.
                    </p>
                    <p className="text-xs text-purple-600">
                        <strong>Expected Response:</strong> Within 3-5 business days
                    </p>
                </div>
            </div>

            {/* Alternative Contact Methods */}
            <div className="bg-slate-100 rounded-xl p-8 border border-slate-200">
                <h3 className="text-lg font-bold text-slate-900 mb-4">Other Ways to Connect</h3>
                <div className="space-y-4">
                    <div>
                        <h4 className="font-semibold text-slate-800 mb-1">Submit Feedback (Anonymous)</h4>
                        <p className="text-sm text-slate-600">
                            Prefer not to send an email? We're working on a feedback form. For now, email is the best method.
                        </p>
                    </div>
                    
                    <div>
                        <h4 className="font-semibold text-slate-800 mb-1">Social Media (Coming Soon)</h4>
                        <p className="text-sm text-slate-600">
                            We're planning to launch Twitter/X and LinkedIn profiles in Q2 2026 for product updates and tips. 
                            Follow our blog for announcements.
                        </p>
                    </div>

                    <div>
                        <h4 className="font-semibold text-slate-800 mb-1">Educational Content</h4>
                        <p className="text-sm text-slate-600">
                            Looking for tutorials on ROAS, ad optimization, or marketing metrics? 
                            Check out the comprehensive guides on each tool page.
                        </p>
                    </div>
                </div>
            </div>
        </div>

        {/* Community Guidelines */}
        <div className="border-t border-slate-200 pt-8 mt-8 px-8 md:px-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Communication Guidelines</h2>
            <p className="text-slate-600 mb-4">
                To ensure we can help you efficiently, please follow these guidelines when contacting us:
            </p>
            
            <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-3">
                    <h4 className="font-bold text-green-700 flex items-center gap-2">
                        OK Do This
                    </h4>
                    <ul className="space-y-2 text-sm text-slate-600">
                        <li>- Be specific about which tool you're using</li>
                        <li>- Include screenshots or error messages</li>
                        <li>- Mention your browser (Chrome, Safari, Firefox)</li>
                        <li>- Describe steps to reproduce the issue</li>
                        <li>- Be patient-we're a small team!</li>
                    </ul>
                </div>

                <div className="space-y-3">
                    <h4 className="font-bold text-red-700 flex items-center gap-2">
                        X Avoid This
                    </h4>
                    <ul className="space-y-2 text-sm text-slate-600">
                        <li>- Sending multiple emails about the same issue</li>
                        <li>- Using all caps or aggressive language</li>
                        <li>- Asking for paid consultation via free support</li>
                        <li>- Requesting features already planned in the roadmap</li>
                        <li>- Spam or promotional content</li>
                    </ul>
                </div>
            </div>
        </div>

        {/* Business Hours */}
        <div className="border-t border-slate-200 pt-8 mt-8 px-8 md:px-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Support Hours & Response Times</h2>
            <div className="bg-white p-6 rounded-xl border border-slate-200">
                <div className="grid md:grid-cols-2 gap-8">
                    <div>
                        <h4 className="font-bold text-slate-800 mb-3">Standard Support</h4>
                        <p className="text-sm text-slate-600 mb-2">
                            <strong>Monday - Friday:</strong> 9 AM - 6 PM IST (India Standard Time)
                        </p>
                        <p className="text-sm text-slate-600 mb-2">
                            <strong>Saturday:</strong> 10 AM - 4 PM IST
                        </p>
                        <p className="text-sm text-slate-600">
                            <strong>Sunday:</strong> Closed (Emergency bugs only)
                        </p>
                    </div>

                    <div>
                        <h4 className="font-bold text-slate-800 mb-3">Emergency Support</h4>
                        <p className="text-sm text-slate-600 mb-2">
                            For critical bugs affecting all users (site down, data loss), 
                            we monitor emails 24/7 and will respond within 2 hours.
                        </p>
                        <p className="text-sm text-red-600 font-semibold">
                            Mark email subject with [URGENT] for priority handling.
                        </p>
                    </div>
                </div>
            </div>
        </div>

      </main>

      {/* Footer */}
      <footer className="max-w-3xl mx-auto mt-12 text-center text-slate-400 text-sm">
        <p>(c) 2026 ROAS Tools Inc.</p>
      </footer>
    </div>
  );
}
