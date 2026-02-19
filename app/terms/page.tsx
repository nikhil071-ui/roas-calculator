import Link from "next/link";
import { ArrowLeft, FileText, Scale, Shield } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service | ROAS Tools",
  description: "Terms of Service, acceptable use policy, and legal information for ROAS Tools platform.",
  robots: "index, follow",
  openGraph: {
    title: "Terms of Service | ROAS Tools",
    description: "Terms of Service, acceptable use policy, and legal information for ROAS Tools platform.",
    url: "https://roas-calculator.tech/terms",
  },
      twitter: {
    card: "summary_large_image",
    title: "Terms of Service | ROAS Tools",
    description: "Terms of Service, acceptable use policy, and legal information for ROAS Tools platform.",
  },
  alternates: {
    canonical: "https://roas-calculator.tech/terms",
  },
};

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 py-12 px-4 md:px-6">
      
      {/* --- BACK BUTTON --- */}
      <div className="max-w-4xl mx-auto mb-8">
        <Link href="/" className="inline-flex items-center text-slate-500 hover:text-blue-600 transition font-medium">
            <ArrowLeft size={18} className="mr-2" /> Back to Home
        </Link>
      </div>

      {/* --- MAIN CONTENT CARD --- */}
      <main className="max-w-4xl mx-auto bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
        
        {/* Header Section */}
        <div className="bg-slate-900 p-8 md:p-12 text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 p-4 opacity-10">
                <Scale size={120} />
            </div>
            
            <div className="relative z-10">
                <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-6 shadow-lg shadow-blue-900/50">
                    <FileText className="text-white" size={28} />
                </div>
                <h1 className="text-3xl md:text-4xl font-bold mb-4">Terms of Service</h1>
                <p className="text-slate-300 text-lg max-w-2xl">
                    Last Updated: January 22, 2026
                </p>
            </div>
        </div>

        {/* Content Section */}
        <div className="p-8 md:p-12 space-y-8">
            
            {/* Introduction */}
            <section>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">1. Acceptance of Terms</h2>
                <p className="text-slate-700 leading-relaxed mb-4">
                    By accessing or using ROAS Tools (the "Service"), including all calculators and planning resources 
                    available at roas-calculator.tech (the "Website"), you agree to be bound by these Terms of Service 
                    ("Terms"). If you do not agree to these Terms, you must not use the Service.
                </p>
                <p className="text-slate-700 leading-relaxed">
                    These Terms constitute a legally binding agreement between you ("User," "you," or "your") and ROAS Tools Inc. 
                    ("we," "us," or "our"). We reserve the right to update these Terms at any time without prior notice. 
                    Continued use of the Service after changes constitutes acceptance of the modified Terms.
                </p>
            </section>

            {/* Service Description */}
            <section>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">2. Service Description</h2>
                <p className="text-slate-700 leading-relaxed mb-4">
                    ROAS Tools provides free online calculators and planning resources, including but not limited to:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-slate-700">
                    <li><strong>ROAS Calculator:</strong> For calculating Return on Ad Spend, break-even points, and profit margins.</li>
                    <li><strong>CAC, LTV, MER, and Payback Calculators:</strong> For validating acquisition efficiency and cash recovery.</li>
                    <li><strong>Planning Templates:</strong> For scenario modeling, benchmark tracking, and budget pacing workflows.</li>
                </ul>
                <p className="text-slate-700 leading-relaxed mt-4">
                    All tools are provided free of charge and operate entirely within your web browser (client-side processing). 
                    We do not store, transmit, or access any data you input into our tools.
                </p>
            </section>

            {/* Use Restrictions */}
            <section>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">3. Acceptable Use Policy</h2>
                <p className="text-slate-700 leading-relaxed mb-4">
                    You agree to use the Service only for lawful purposes and in accordance with these Terms. You agree NOT to:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-slate-700">
                    <li>Use the Service for any illegal, fraudulent, or unauthorized purpose.</li>
                    <li>Attempt to reverse engineer, decompile, or extract the source code of the Service (except where permitted by open-source licenses).</li>
                    <li>Use automated scripts, bots, or scrapers to access the Service in a manner that disrupts server performance.</li>
                    <li>Reproduce, duplicate, copy, or resell any portion of the Service for commercial purposes without written permission.</li>
                    <li>Transmit viruses, malware, or any malicious code through the Service.</li>
                    <li>Violate any applicable local, state, national, or international law.</li>
                    <li>Attempt to gain unauthorized access to other users' data, our servers, or connected networks.</li>
                </ul>
            </section>

            {/* Intellectual Property */}
            <section>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">4. Intellectual Property Rights</h2>
                <p className="text-slate-700 leading-relaxed mb-4">
                    The Service and its original content (excluding user-generated content), features, and functionality are and will remain 
                    the exclusive property of ROAS Tools Inc. and its licensors. The Service is protected by copyright, trademark, 
                    and other laws of both the United States and foreign countries.
                </p>
                <p className="text-slate-700 leading-relaxed mb-4">
                    Our trademarks and trade dress may not be used in connection with any product or service without the prior written 
                    consent of ROAS Tools Inc.
                </p>
                <p className="text-slate-700 leading-relaxed">
                    <strong>Open Source Components:</strong> Certain components of the Service may be licensed under open-source licenses 
                    (e.g., React, Next.js, jsPDF). Such components are governed by their respective licenses, which take precedence 
                    over these Terms for those specific components.
                </p>
            </section>

            {/* Privacy & Data */}
            <section>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">5. Privacy & Data Processing</h2>
                <div className="bg-green-50 p-6 rounded-xl border border-green-200 mb-4">
                    <div className="flex items-start gap-3">
                        <Shield size={24} className="text-green-600 flex-shrink-0 mt-1" />
                        <div>
                            <h3 className="font-bold text-green-900 mb-2">Your Data Stays Local</h3>
                            <p className="text-green-800 text-sm">
                                Unlike most online tools, we do NOT upload your data to our servers. All calculations and file processing 
                                happen entirely within your web browser using JavaScript. This means:
                            </p>
                        </div>
                    </div>
                    <ul className="list-disc pl-10 mt-3 space-y-1 text-sm text-green-800">
                        <li>Financial data entered into the ROAS Calculator is never sent to us.</li>
                        <li>Inputs used in our profitability calculators never leave your device.</li>
                    </ul>
                </div>
                <p className="text-slate-700 leading-relaxed mb-4">
                    We do collect anonymous usage analytics (page views, clicks, time on site) via Google Analytics to improve the Service. 
                    This data does not include personally identifiable information (PII) or any content you input into the tools.
                </p>
                <p className="text-slate-700 leading-relaxed">
                    For more details, please read our <Link href="/privacy-policy" className="text-blue-600 underline hover:text-blue-800">Privacy Policy</Link>.
                </p>
            </section>

            {/* Disclaimer of Warranties */}
            <section>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">6. Disclaimer of Warranties</h2>
                <div className="bg-yellow-50 p-6 rounded-xl border border-yellow-200">
                    <p className="text-yellow-900 font-bold mb-3">! IMPORTANT LEGAL NOTICE</p>
                    <p className="text-yellow-800 text-sm leading-relaxed">
                        THE SERVICE IS PROVIDED ON AN "AS IS" AND "AS AVAILABLE" BASIS WITHOUT WARRANTIES OF ANY KIND, 
                        EITHER EXPRESS OR IMPLIED, INCLUDING, BUT NOT LIMITED TO, IMPLIED WARRANTIES OF MERCHANTABILITY, 
                        FITNESS FOR A PARTICULAR PURPOSE, NON-INFRINGEMENT, OR COURSE OF PERFORMANCE.
                    </p>
                </div>
                <p className="text-slate-700 leading-relaxed mt-4 mb-4">
                    We do not warrant that:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-slate-700">
                    <li>The Service will function uninterrupted, securely, or error-free.</li>
                    <li>Calculation results will be 100% accurate in all cases (though we strive for accuracy).</li>
                    <li>Defects or bugs will be corrected immediately.</li>
                    <li>The Service is free from viruses or harmful components (though we implement security measures).</li>
                </ul>
                <p className="text-slate-700 leading-relaxed mt-4">
                    <strong>Financial Advice Disclaimer:</strong> The ROAS Calculator and other financial tools are for informational purposes only. 
                    They do not constitute professional financial, tax, or investment advice. Always consult a qualified accountant or financial advisor 
                    before making business decisions based on calculations from our Service.
                </p>
            </section>

            {/* Limitation of Liability */}
            <section>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">7. Limitation of Liability</h2>
                <p className="text-slate-700 leading-relaxed mb-4">
                    TO THE MAXIMUM EXTENT PERMITTED BY LAW, IN NO EVENT SHALL ROAS TOOLS INC., ITS DIRECTORS, EMPLOYEES, PARTNERS, 
                    AGENTS, SUPPLIERS, OR AFFILIATES BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, 
                    INCLUDING WITHOUT LIMITATION, LOSS OF PROFITS, DATA, USE, GOODWILL, OR OTHER INTANGIBLE LOSSES, RESULTING FROM:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-slate-700">
                    <li>Your access to or use of (or inability to access or use) the Service.</li>
                    <li>Any conduct or content of any third party on the Service.</li>
                    <li>Any content obtained from the Service.</li>
                    <li>Unauthorized access, use, or alteration of your transmissions or content.</li>
                    <li>Errors or omissions in calculation results.</li>
                    <li>Financial losses incurred based on data or recommendations from the Service.</li>
                </ul>
                <p className="text-slate-700 leading-relaxed mt-4">
                    OUR TOTAL LIABILITY SHALL NOT EXCEED $100 USD OR THE AMOUNT YOU PAID US IN THE PAST 12 MONTHS (WHICHEVER IS GREATER). 
                    Since our Service is free, this effectively limits our liability to $100 USD.
                </p>
            </section>

            {/* Indemnification */}
            <section>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">8. Indemnification</h2>
                <p className="text-slate-700 leading-relaxed">
                    You agree to defend, indemnify, and hold harmless ROAS Tools Inc. and its licensees and licensors, and their employees, 
                    contractors, agents, officers, and directors, from and against any and all claims, damages, obligations, losses, liabilities, 
                    costs, or debt, and expenses (including but not limited to attorney's fees), resulting from or arising out of:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-slate-700 mt-4">
                    <li>Your use of and access to the Service.</li>
                    <li>Your violation of any term of these Terms.</li>
                    <li>Your violation of any third-party right, including without limitation any copyright, property, or privacy right.</li>
                    <li>Any claim that your use of the Service caused damage to a third party.</li>
                </ul>
            </section>

            {/* Governing Law */}
            <section>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">9. Governing Law & Dispute Resolution</h2>
                <p className="text-slate-700 leading-relaxed mb-4">
                    These Terms shall be governed and construed in accordance with the laws of India, without regard to its conflict of law provisions.
                </p>
                <p className="text-slate-700 leading-relaxed mb-4">
                    Any disputes arising out of or related to these Terms or the Service shall first be attempted to be resolved through good faith negotiation. 
                    If negotiation fails, disputes shall be resolved through binding arbitration in accordance with the Arbitration and Conciliation Act, 1996.
                </p>
                <p className="text-slate-700 leading-relaxed">
                    You agree to waive any right to a jury trial or to participate in a class action lawsuit or class-wide arbitration.
                </p>
            </section>

            {/* Termination */}
            <section>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">10. Termination</h2>
                <p className="text-slate-700 leading-relaxed mb-4">
                    We may terminate or suspend your access to the Service immediately, without prior notice or liability, for any reason, 
                    including without limitation if you breach these Terms.
                </p>
                <p className="text-slate-700 leading-relaxed">
                    Upon termination, your right to use the Service will immediately cease. If you wish to terminate your relationship with us, 
                    you may simply discontinue using the Service. Since we do not require account creation, there is no formal termination process.
                </p>
            </section>

            {/* Changes to Terms */}
            <section>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">11. Changes to These Terms</h2>
                <p className="text-slate-700 leading-relaxed mb-4">
                    We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material, 
                    we will provide at least 30 days' notice prior to any new terms taking effect by posting an announcement on the homepage.
                </p>
                <p className="text-slate-700 leading-relaxed">
                    What constitutes a material change will be determined at our sole discretion. By continuing to access or use the Service 
                    after revisions become effective, you agree to be bound by the revised Terms.
                </p>
            </section>

            {/* Severability */}
            <section>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">12. Severability & Waiver</h2>
                <p className="text-slate-700 leading-relaxed mb-4">
                    <strong>Severability:</strong> If any provision of these Terms is held to be unenforceable or invalid, such provision will be changed 
                    and interpreted to accomplish the objectives of such provision to the greatest extent possible under applicable law, 
                    and the remaining provisions will continue in full force and effect.
                </p>
                <p className="text-slate-700 leading-relaxed">
                    <strong>Waiver:</strong> No waiver by us of any term or condition set forth in these Terms shall be deemed a further or continuing waiver 
                    of such term or condition or a waiver of any other term or condition. Any failure to assert a right or provision under these Terms 
                    shall not constitute a waiver of such right or provision.
                </p>
            </section>

            {/* Third-Party Services */}
            <section>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">13. Third-Party Services & Links</h2>
                <p className="text-slate-700 leading-relaxed mb-4">
                    The Service may contain links to third-party websites or services that are not owned or controlled by ROAS Tools Inc. 
                    We have no control over, and assume no responsibility for, the content, privacy policies, or practices of any third-party websites or services.
                </p>
                <p className="text-slate-700 leading-relaxed">
                    We use Google AdSense for advertising, which is governed by Google's policies and terms. We are not responsible for the content 
                    of ads displayed on our Service.
                </p>
            </section>

            {/* DMCA & Copyright */}
            <section>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">14. Copyright & DMCA Compliance</h2>
                <p className="text-slate-700 leading-relaxed mb-4">
                    We respect the intellectual property rights of others. If you believe that any content on the Service infringes your copyright, 
                    please notify us via email at <a href="mailto:luckmatters199@gmail.com" className="text-blue-600 underline">luckmatters199@gmail.com</a> with:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-slate-700">
                    <li>A description of the copyrighted work you claim has been infringed.</li>
                    <li>The URL or location of the allegedly infringing content.</li>
                    <li>Your contact information (name, email, phone number).</li>
                    <li>A statement that you have a good faith belief that the use is not authorized by the copyright owner.</li>
                    <li>A statement, under penalty of perjury, that the information provided is accurate and you are authorized to act on behalf of the copyright owner.</li>
                </ul>
            </section>

            {/* Contact Information */}
            <section className="bg-blue-50 rounded-xl p-8 border border-blue-200">
                <h2 className="text-2xl font-bold text-slate-900 mb-4">15. Contact Us</h2>
                <p className="text-slate-700 leading-relaxed mb-4">
                    If you have any questions about these Terms of Service, please contact us:
                </p>
                <div className="space-y-2 text-slate-700">
                    <p><strong>Email:</strong> <a href="mailto:luckmatters199@gmail.com" className="text-blue-600 underline">luckmatters199@gmail.com</a></p>
                    <p><strong>Website:</strong> <Link href="/" className="text-blue-600 underline">roas-calculator.tech</Link></p>
                    <p><strong>Response Time:</strong> Within 24-48 hours (business days)</p>
                </div>
            </section>

            {/* Acknowledgment */}
            <section className="border-t border-slate-200 pt-8">
                <h3 className="text-lg font-bold text-slate-900 mb-4">Acknowledgment</h3>
                <p className="text-slate-700 leading-relaxed">
                    BY USING THE SERVICE, YOU ACKNOWLEDGE THAT YOU HAVE READ THESE TERMS OF SERVICE AND AGREE TO BE BOUND BY THEM. 
                    IF YOU DO NOT AGREE TO THESE TERMS, YOU MUST NOT USE THE SERVICE.
                </p>
            </section>

        </div>
      </main>

      {/* Footer */}
      <footer className="max-w-4xl mx-auto mt-12 text-center border-t border-slate-200 pt-8">
        <p className="text-slate-500 mb-4">
          <Link href="/privacy-policy" className="text-blue-600 hover:underline mr-4">Privacy Policy</Link>
          <Link href="/contact" className="text-blue-600 hover:underline">Contact Us</Link>
        </p>
        <p className="text-slate-400 text-sm">(c) 2026 ROAS Tools Inc. All rights reserved.</p>
      </footer>
    </div>
  );
}
