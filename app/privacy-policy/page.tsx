import type { Metadata } from "next";
import Link from "next/link";
import { Shield, ArrowLeft, Lock, Eye, Server, Mail } from "lucide-react";

export const metadata: Metadata = {
  title: "Privacy Policy | ROAS Tools",
  description: "Learn how ROAS Tools protects your data and handles cookies, analytics, and ads.",
  alternates: {
    canonical: "https://roas-calculator.tech/privacy-policy",
  },
  openGraph: {
    title: "Privacy Policy | ROAS Tools",
    description: "Learn how ROAS Tools protects your data and handles cookies, analytics, and ads.",
    url: "https://roas-calculator.tech/privacy-policy",
  },
  twitter: {
    card: "summary_large_image",
    title: "Privacy Policy | ROAS Tools",
    description: "Learn how ROAS Tools protects your data and handles cookies, analytics, and ads.",
  },
};

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
                Last Updated: January 2026
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
                        Welcome to <strong>ROAS Tools</strong> ("we," "our," or "us"). We operate this website to provide profitability calculators and planning resources for marketers. We respect your privacy and are committed to protecting it through our compliance with this policy.
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
                        <strong>Note:</strong> You can use all core calculators without creating an account or logging in.
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
                        We use third-party vendors, including <strong>Google AdSense</strong>, to serve ads. Google uses cookies (including the DoubleClick cookie) to serve ads based on your prior visits to our website or other websites on the Internet.
                    </p>
                    <p className="text-slate-600 leading-relaxed mb-4">
                        Third-party vendors may place and read cookies on your browser and may use web beacons or IP addresses to collect information as a result of ad serving on this website.
                    </p>
                    <p className="text-slate-600 leading-relaxed mb-4">
                        We also use first-party cookies to remember email subscription access and preferences (for example: lead magnet access and subscriber status).
                    </p>
                    <ul className="list-disc pl-5 space-y-2 text-slate-600">
                        <li>Google's advertising requirements can be summed up by <a href="https://support.google.com/adwordspolicy/answer/1316548" target="_blank" className="text-blue-600 underline hover:text-blue-800">Google's Advertising Principles</a>.</li>
                        <li>Read how Google uses data when you use our partners' sites or apps: <a href="https://policies.google.com/technologies/partner-sites" target="_blank" className="text-blue-600 underline hover:text-blue-800">Google Partner Sites Policy</a>.</li>
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
                        The financial data (Ad Spend, Revenue) you process on our tools is <strong>processed locally on your device</strong> via JavaScript. 
                    </p>
                    <p className="text-slate-600 mt-2">
                        We do not upload your financial inputs to any server. Your data never leaves your browser.
                    </p>
                </div>
            </section>

            <hr className="border-slate-100" />

            {/* Section 5 */}
            <section className="flex gap-4 md:gap-6">
                <div className="flex-shrink-0 mt-1">
                    <div className="w-8 h-8 bg-blue-50 rounded-full flex items-center justify-center text-blue-600">
                        <span className="font-bold text-sm">5</span>
                    </div>
                </div>
                <div>
                    <h2 className="text-xl font-bold text-slate-900 mb-3">Third-Party Services & Analytics</h2>
                    <p className="text-slate-600 leading-relaxed mb-4">
                        In addition to Google AdSense, we use the following third-party services to improve our website experience:
                    </p>
                    <ul className="list-disc pl-5 space-y-3 text-slate-600">
                        <li>
                            <strong>Google Analytics:</strong> Collects anonymous usage statistics (page views, device types, geographic regions) to help us understand traffic patterns. You can opt out using browser settings or Google tools.
                        </li>
                        <li>
                            <strong>Vercel Analytics:</strong> Collects anonymous usage statistics to help us understand performance and page usage. No personal identifiers are collected.
                        </li>
                        <li>
                            <strong>Google Fonts:</strong> We load web fonts from Google's CDN. Google may collect technical information when fonts are requested.
                        </li>
                    </ul>
                    <p className="text-slate-600 mt-4 text-sm">
                        Each third-party service operates under its own privacy policy. We recommend reviewing their respective policies for complete transparency.
                    </p>
                </div>
            </section>

            <hr className="border-slate-100" />

            {/* Section 6 */}
            <section className="flex gap-4 md:gap-6">
                <div className="flex-shrink-0 mt-1">
                    <div className="w-8 h-8 bg-blue-50 rounded-full flex items-center justify-center text-blue-600">
                        <span className="font-bold text-sm">6</span>
                    </div>
                </div>
                <div>
                    <h2 className="text-xl font-bold text-slate-900 mb-3">Data Retention Policy</h2>
                    <p className="text-slate-600 leading-relaxed mb-4">
                        Since we do not collect or store personal data on our servers, there is no data retention period. Any data you input into our tools:
                    </p>
                    <ul className="list-disc pl-5 space-y-2 text-slate-600">
                        <li>Is processed temporarily in your browser's memory while the tool is active</li>
                        <li>Is automatically cleared when you close the browser tab or refresh the page</li>
                        <li>Is never transmitted to our servers or third parties (except anonymized analytics)</li>
                        <li>Cannot be recovered or accessed by us after you leave the site</li>
                    </ul>
                    <div className="bg-green-50 border border-green-200 p-4 rounded-lg mt-4 text-green-800 text-sm">
                        <strong>OK Privacy Guarantee:</strong> We cannot access your financial calculations because they exist only in your browser's local memory.
                    </div>
                </div>
            </section>

            <hr className="border-slate-100" />

            {/* Section 7 */}
            <section className="flex gap-4 md:gap-6">
                <div className="flex-shrink-0 mt-1">
                    <div className="w-8 h-8 bg-blue-50 rounded-full flex items-center justify-center text-blue-600">
                        <span className="font-bold text-sm">7</span>
                    </div>
                </div>
                <div>
                    <h2 className="text-xl font-bold text-slate-900 mb-3">Your Rights Under GDPR & CCPA</h2>
                    <p className="text-slate-600 leading-relaxed mb-4">
                        If you are a resident of the European Union (GDPR) or California (CCPA), you have certain data protection rights:
                    </p>
                    <div className="space-y-4">
                        <div className="bg-slate-50 p-4 rounded-lg">
                            <h4 className="font-bold text-slate-900 mb-2">Right to Access</h4>
                            <p className="text-slate-600 text-sm">
                                You have the right to request copies of your personal data. Since we do not store personal data, there is nothing to access. However, Google AdSense may have data about your ad interactions-refer to Google's privacy policy.
                            </p>
                        </div>
                        <div className="bg-slate-50 p-4 rounded-lg">
                            <h4 className="font-bold text-slate-900 mb-2">Right to Deletion</h4>
                            <p className="text-slate-600 text-sm">
                                You can request deletion of any data we hold. Again, we do not store personal data. To remove cookies set by Google AdSense, clear your browser cookies or visit <a href="https://www.google.com/settings/ads" className="text-blue-600 underline">Google Ads Settings</a>.
                            </p>
                        </div>
                        <div className="bg-slate-50 p-4 rounded-lg">
                            <h4 className="font-bold text-slate-900 mb-2">Right to Object</h4>
                            <p className="text-slate-600 text-sm">
                                You have the right to object to our processing of your data. For analytics, you can use browser extensions like uBlock Origin or Ghostery to block tracking scripts.
                            </p>
                        </div>
                        <div className="bg-slate-50 p-4 rounded-lg">
                            <h4 className="font-bold text-slate-900 mb-2">Right to Data Portability</h4>
                            <p className="text-slate-600 text-sm">
                                Since no data is stored on our servers, there is no data to export. All calculations and file processing happen locally in your browser.
                            </p>
                        </div>
                    </div>
                    <p className="text-slate-600 mt-4 text-sm">
                        To exercise any of these rights or if you have concerns, please email us at <strong>luckmatters199@gmail.com</strong>.
                    </p>
                </div>
            </section>

            <hr className="border-slate-100" />

            {/* Section 8 */}
            <section className="flex gap-4 md:gap-6">
                <div className="flex-shrink-0 mt-1">
                    <div className="w-8 h-8 bg-blue-50 rounded-full flex items-center justify-center text-blue-600">
                        <span className="font-bold text-sm">8</span>
                    </div>
                </div>
                <div>
                    <h2 className="text-xl font-bold text-slate-900 mb-3">Children's Privacy (COPPA Compliance)</h2>
                    <p className="text-slate-600 leading-relaxed mb-4">
                        Our website and tools are intended for general audiences and are not directed at children under the age of 13. We do not knowingly collect personal information from children under 13.
                    </p>
                    <p className="text-slate-600 leading-relaxed">
                        If you are a parent or guardian and believe that your child has provided us with personal information, please contact us immediately at <strong>luckmatters199@gmail.com</strong>. Although we do not collect personal data through our tools, if we discover that a child under 13 has submitted personal information to us by email, we will take steps to delete such information promptly.
                    </p>
                    <div className="bg-amber-50 border border-amber-200 p-4 rounded-lg mt-4 text-amber-900 text-sm">
                        <strong>Note for Students:</strong> If you are under 18, please seek parental permission before using online tools and sharing personal information.
                    </div>
                </div>
            </section>

            <hr className="border-slate-100" />

            {/* Section 9 */}
            <section className="flex gap-4 md:gap-6">
                <div className="flex-shrink-0 mt-1">
                    <div className="w-8 h-8 bg-blue-50 rounded-full flex items-center justify-center text-blue-600">
                        <span className="font-bold text-sm">9</span>
                    </div>
                </div>
                <div>
                    <h2 className="text-xl font-bold text-slate-900 mb-3">International Data Transfers</h2>
                    <p className="text-slate-600 leading-relaxed mb-4">
                        Our website is hosted on Vercel's infrastructure, which may involve data being transferred to and processed in countries outside your country of residence, including the United States.
                    </p>
                    <p className="text-slate-600 leading-relaxed">
                        While we do not collect or store your personal data on our servers, third-party services like Google AdSense and Vercel Analytics may process data internationally. These services comply with applicable data protection laws, including Standard Contractual Clauses (SCCs) for EU data transfers.
                    </p>
                    <p className="text-slate-600 leading-relaxed mt-4">
                        By using our website, you acknowledge and consent to such international data transfers as necessary for the operation of third-party analytics and advertising services.
                    </p>
                </div>
            </section>

            <hr className="border-slate-100" />

            {/* Section 10 */}
            <section className="flex gap-4 md:gap-6">
                <div className="flex-shrink-0 mt-1">
                    <div className="w-8 h-8 bg-blue-50 rounded-full flex items-center justify-center text-blue-600">
                        <span className="font-bold text-sm">10</span>
                    </div>
                </div>
                <div>
                    <h2 className="text-xl font-bold text-slate-900 mb-3">Security Measures</h2>
                    <p className="text-slate-600 leading-relaxed mb-4">
                        We take the security of your data seriously. Our website is served over HTTPS (SSL/TLS encryption), ensuring that data transmitted between your browser and our servers is encrypted and protected from interception.
                    </p>
                    <p className="text-slate-600 leading-relaxed">
                        Since all tool processing happens client-side (in your browser), your sensitive data never travels across the internet to our servers. This architecture provides an additional layer of security compared to traditional server-based processing tools.
                    </p>
                    <div className="bg-blue-50 border border-blue-200 p-4 rounded-lg mt-4 text-blue-900 text-sm">
                        <strong>Security Best Practices:</strong> We recommend keeping your browser updated to the latest version to benefit from the latest security patches and improvements.
                    </div>
                </div>
            </section>

            <hr className="border-slate-100" />

            {/* Section 11 */}
            <section className="flex gap-4 md:gap-6">
                <div className="flex-shrink-0 mt-1">
                    <div className="w-8 h-8 bg-blue-50 rounded-full flex items-center justify-center text-blue-600">
                        <span className="font-bold text-sm">11</span>
                    </div>
                </div>
                <div>
                    <h2 className="text-xl font-bold text-slate-900 mb-3">Changes to This Privacy Policy</h2>
                    <p className="text-slate-600 leading-relaxed mb-4">
                        We may update our Privacy Policy from time to time to reflect changes in our practices, technology, legal requirements, or other operational reasons. We will notify you of any material changes by:
                    </p>
                    <ul className="list-disc pl-5 space-y-2 text-slate-600">
                        <li>Posting the new Privacy Policy on this page</li>
                        <li>Updating the "Last Updated" date at the top of this document</li>
                        <li>If changes are significant, displaying a prominent notice on our homepage for 30 days</li>
                    </ul>
                    <p className="text-slate-600 mt-4">
                        We encourage you to review this Privacy Policy periodically for any changes. Your continued use of our website after any modifications indicates your acceptance of the updated Privacy Policy.
                    </p>
                </div>
            </section>

            <hr className="border-slate-100" />

            {/* Section 12 */}
            <section className="flex gap-4 md:gap-6">
                <div className="flex-shrink-0 mt-1">
                    <div className="w-8 h-8 bg-blue-50 rounded-full flex items-center justify-center text-blue-600">
                        <Mail size={16} />
                    </div>
                </div>
                <div>
                    <h2 className="text-xl font-bold text-slate-900 mb-3">Contact Us</h2>
                    <p className="text-slate-600 leading-relaxed mb-4">
                        If you have any questions, concerns, or requests regarding this Privacy Policy or our data practices, you may contact us using the information below:
                    </p>
                    <div className="bg-slate-50 p-6 rounded-lg border border-slate-200">
                        <p className="font-bold text-slate-900 text-lg mb-2">ROAS Tools Privacy Team</p>
                        <p className="text-slate-600 mb-1">Email: <a href="mailto:luckmatters199@gmail.com" className="text-blue-600 underline hover:text-blue-800">luckmatters199@gmail.com</a></p>
                        <p className="text-slate-600 mb-1">Website: <a href="https://roas-calculator.tech" className="text-blue-600 underline hover:text-blue-800">roas-calculator.tech</a></p>
                        <p className="text-slate-500 text-sm mt-3">We aim to respond to all privacy inquiries within 48 hours during business days.</p>
                    </div>
                    <p className="text-slate-600 mt-6 leading-relaxed">
                        For general support questions about our calculators and resources, please visit our <Link href="/contact" className="text-blue-600 underline hover:text-blue-800">Contact Page</Link> or <Link href="/faq" className="text-blue-600 underline hover:text-blue-800">FAQ Section</Link>.
                    </p>
                </div>
            </section>

        </div>
      </main>
      
      {/* Footer Note */}
      <p className="text-center text-slate-400 text-sm mt-8">
        (c) 2026 ROAS Tools. All rights reserved.
      </p>
    </div>
  );
}
