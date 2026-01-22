import Link from "next/link";
import { ArrowLeft, HelpCircle, Search } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Frequently Asked Questions (FAQ) | ROAS Tools",
  description: "Find answers to common questions about ROAS Calculator, Currency Converter, Image Compressor, and PDF tools.",
  keywords: ["FAQ", "help", "support", "ROAS calculator questions", "how to use"],
};

export default function FAQ() {
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
                <HelpCircle size={120} />
            </div>
            
            <div className="relative z-10">
                <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-6 shadow-lg shadow-blue-900/50">
                    <HelpCircle className="text-white" size={28} />
                </div>
                <h1 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h1>
                <p className="text-slate-300 text-lg max-w-2xl">
                    Everything you need to know about using ROAS Tools. Can't find your answer? Contact us.
                </p>
            </div>
        </div>

        {/* Quick Links */}
        <div className="p-8 md:p-12 border-b border-slate-200">
            <h2 className="text-xl font-bold text-slate-900 mb-4">Jump to Section</h2>
            <div className="grid md:grid-cols-2 gap-4">
                <a href="#general" className="p-4 bg-blue-50 rounded-lg border border-blue-100 hover:bg-blue-100 transition">
                    <span className="font-semibold text-blue-900">General Questions</span>
                </a>
                <a href="#roas" className="p-4 bg-green-50 rounded-lg border border-green-100 hover:bg-green-100 transition">
                    <span className="font-semibold text-green-900">ROAS Calculator</span>
                </a>
                <a href="#currency" className="p-4 bg-purple-50 rounded-lg border border-purple-100 hover:bg-purple-100 transition">
                    <span className="font-semibold text-purple-900">Currency Converter</span>
                </a>
                <a href="#image" className="p-4 bg-orange-50 rounded-lg border border-orange-100 hover:bg-orange-100 transition">
                    <span className="font-semibold text-orange-900">Image Compressor</span>
                </a>
                <a href="#pdf" className="p-4 bg-red-50 rounded-lg border border-red-100 hover:bg-red-100 transition">
                    <span className="font-semibold text-red-900">PDF Converter</span>
                </a>
                <a href="#technical" className="p-4 bg-slate-50 rounded-lg border border-slate-100 hover:bg-slate-100 transition">
                    <span className="font-semibold text-slate-900">Technical Issues</span>
                </a>
            </div>
        </div>

        {/* Content Section */}
        <div className="p-8 md:p-12 space-y-12">
            
            {/* GENERAL QUESTIONS */}
            <section id="general">
                <h2 className="text-2xl font-bold text-slate-900 mb-6 pb-3 border-b-2 border-blue-600">General Questions</h2>
                
                <div className="space-y-6">
                    <details className="group bg-slate-50 rounded-lg p-5 cursor-pointer border border-slate-200">
                        <summary className="font-bold text-slate-900 list-none flex justify-between items-center">
                            <span>Is ROAS Tools really free? Are there any hidden costs?</span>
                            <span className="transition-transform duration-300 group-open:rotate-180">▼</span>
                        </summary>
                        <p className="mt-4 text-slate-700 leading-relaxed">
                            Yes, 100% free. No trials, no "freemium" tiers, no paywalls. We monetize through ethical, non-intrusive Google AdSense ads. 
                            You will never be asked for a credit card or subscription. All core features are and will always remain free.
                        </p>
                    </details>

                    <details className="group bg-slate-50 rounded-lg p-5 cursor-pointer border border-slate-200">
                        <summary className="font-bold text-slate-900 list-none flex justify-between items-center">
                            <span>Do I need to create an account to use the tools?</span>
                            <span className="transition-transform duration-300 group-open:rotate-180">▼</span>
                        </summary>
                        <p className="mt-4 text-slate-700 leading-relaxed">
                            No! We deliberately avoid forcing signups. All tools are accessible instantly without any login, email, or personal information. 
                            Your privacy is our priority.
                        </p>
                    </details>

                    <details className="group bg-slate-50 rounded-lg p-5 cursor-pointer border border-slate-200">
                        <summary className="font-bold text-slate-900 list-none flex justify-between items-center">
                            <span>Is my data safe? Do you store my information?</span>
                            <span className="transition-transform duration-300 group-open:rotate-180">▼</span>
                        </summary>
                        <p className="mt-4 text-slate-700 leading-relaxed">
                            <strong>Your data never leaves your device.</strong> All calculations and file processing happen client-side in your browser using JavaScript. 
                            We cannot see, access, or store your financial data, images, or PDFs. You can verify this by opening your browser's Developer Tools 
                            and checking the Network tab—there are no upload requests.
                        </p>
                    </details>

                    <details className="group bg-slate-50 rounded-lg p-5 cursor-pointer border border-slate-200">
                        <summary className="font-bold text-slate-900 list-none flex justify-between items-center">
                            <span>Can I use these tools on my phone?</span>
                            <span className="transition-transform duration-300 group-open:rotate-180">▼</span>
                        </summary>
                        <p className="mt-4 text-slate-700 leading-relaxed">
                            Absolutely! All our tools are fully mobile-optimized and work seamlessly on iOS (iPhone/iPad) and Android devices. 
                            No app installation needed—just open the website in your mobile browser (Chrome, Safari, Firefox).
                        </p>
                    </details>

                    <details className="group bg-slate-50 rounded-lg p-5 cursor-pointer border border-slate-200">
                        <summary className="font-bold text-slate-900 list-none flex justify-between items-center">
                            <span>Can I use these tools for commercial/business purposes?</span>
                            <span className="transition-transform duration-300 group-open:rotate-180">▼</span>
                        </summary>
                        <p className="mt-4 text-slate-700 leading-relaxed">
                            Yes! Marketing agencies, consultants, and businesses use our tools daily with clients. The only restriction: 
                            you cannot rebrand our tools as your own product or embed them in a competing website without permission.
                        </p>
                    </details>
                </div>
            </section>

            {/* ROAS CALCULATOR */}
            <section id="roas">
                <h2 className="text-2xl font-bold text-slate-900 mb-6 pb-3 border-b-2 border-green-600">ROAS Calculator Questions</h2>
                
                <div className="space-y-6">
                    <details className="group bg-slate-50 rounded-lg p-5 cursor-pointer border border-slate-200">
                        <summary className="font-bold text-slate-900 list-none flex justify-between items-center">
                            <span>What is a "good" ROAS score?</span>
                            <span className="transition-transform duration-300 group-open:rotate-180">▼</span>
                        </summary>
                        <div className="mt-4 text-slate-700 space-y-3">
                            <p>It depends on your profit margins. General benchmarks:</p>
                            <ul className="list-disc pl-5 space-y-1">
                                <li><strong>Under 3.0x:</strong> Likely losing money (unless you have 80%+ margins like SaaS)</li>
                                <li><strong>3.0x - 5.0x:</strong> Healthy for most e-commerce businesses</li>
                                <li><strong>Over 5.0x:</strong> Excellent—scale aggressively</li>
                            </ul>
                            <p className="text-sm">Always calculate your break-even ROAS using the formula: 1 ÷ Profit Margin %</p>
                        </div>
                    </details>

                    <details className="group bg-slate-50 rounded-lg p-5 cursor-pointer border border-slate-200">
                        <summary className="font-bold text-slate-900 list-none flex justify-between items-center">
                            <span>How is ROAS different from ROI?</span>
                            <span className="transition-transform duration-300 group-open:rotate-180">▼</span>
                        </summary>
                        <p className="mt-4 text-slate-700 leading-relaxed">
                            <strong>ROAS</strong> measures ad efficiency: Revenue ÷ Ad Spend. It ignores other costs. 
                            <strong>ROI</strong> measures overall profitability: (Revenue - All Costs) ÷ All Costs. 
                            ROAS is for marketing optimization; ROI is for business decisions.
                        </p>
                    </details>

                    <details className="group bg-slate-50 rounded-lg p-5 cursor-pointer border border-slate-200">
                        <summary className="font-bold text-slate-900 list-none flex justify-between items-center">
                            <span>Can ROAS be negative?</span>
                            <span className="transition-transform duration-300 group-open:rotate-180">▼</span>
                        </summary>
                        <p className="mt-4 text-slate-700 leading-relaxed">
                            No. ROAS is a ratio that cannot be negative. If you spend $1,000 and make $0 revenue, your ROAS is 0. 
                            If you make $200, your ROAS is 0.2x (20%), meaning you lost $800. Anything below 1.0x means you're losing money.
                        </p>
                    </details>

                    <details className="group bg-slate-50 rounded-lg p-5 cursor-pointer border border-slate-200">
                        <summary className="font-bold text-slate-900 list-none flex justify-between items-center">
                            <span>How do I export my ROAS report?</span>
                            <span className="transition-transform duration-300 group-open:rotate-180">▼</span>
                        </summary>
                        <p className="mt-4 text-slate-700 leading-relaxed">
                            After calculating your results, click the "Download Report" button. This generates a professional PDF report 
                            with your ROAS score, profit metrics, and breakdown—perfect for sharing with team members or clients.
                        </p>
                    </details>

                    <details className="group bg-slate-50 rounded-lg p-5 cursor-pointer border border-slate-200">
                        <summary className="font-bold text-slate-900 list-none flex justify-between items-center">
                            <span>Should I include shipping costs in product costs?</span>
                            <span className="transition-transform duration-300 group-open:rotate-180">▼</span>
                        </summary>
                        <p className="mt-4 text-slate-700 leading-relaxed">
                            Yes! The "Product Cost" field should include everything you pay per sale: product cost, shipping to customer, 
                            packaging materials, transaction fees (Stripe/PayPal), and any other variable costs. This gives you accurate profit calculations.
                        </p>
                    </details>
                </div>
            </section>

            {/* CURRENCY CONVERTER */}
            <section id="currency">
                <h2 className="text-2xl font-bold text-slate-900 mb-6 pb-3 border-b-2 border-purple-600">Currency Converter Questions</h2>
                
                <div className="space-y-6">
                    <details className="group bg-slate-50 rounded-lg p-5 cursor-pointer border border-slate-200">
                        <summary className="font-bold text-slate-900 list-none flex justify-between items-center">
                            <span>Are the exchange rates real-time?</span>
                            <span className="transition-transform duration-300 group-open:rotate-180">▼</span>
                        </summary>
                        <p className="mt-4 text-slate-700 leading-relaxed">
                            Yes, we use live data from financial institutions updated every few minutes. However, the rate you actually receive 
                            from your bank or transfer service may differ slightly due to their markup (typically 1-5% above the mid-market rate we show).
                        </p>
                    </details>

                    <details className="group bg-slate-50 rounded-lg p-5 cursor-pointer border border-slate-200">
                        <summary className="font-bold text-slate-900 list-none flex justify-between items-center">
                            <span>Why is the rate different from Google or my bank?</span>
                            <span className="transition-transform duration-300 group-open:rotate-180">▼</span>
                        </summary>
                        <p className="mt-4 text-slate-700 leading-relaxed">
                            We show the "mid-market rate"—the real exchange rate banks use between themselves. Your bank adds a markup (profit) on top of this. 
                            Google's rates update less frequently. Minor differences (0.1-0.5%) are normal. Always confirm with your bank before large transfers.
                        </p>
                    </details>

                    <details className="group bg-slate-50 rounded-lg p-5 cursor-pointer border border-slate-200">
                        <summary className="font-bold text-slate-900 list-none flex justify-between items-center">
                            <span>What's the best way to send money internationally?</span>
                            <span className="transition-transform duration-300 group-open:rotate-180">▼</span>
                        </summary>
                        <div className="mt-4 text-slate-700 space-y-3">
                            <p>Best options (ranked by cost-effectiveness):</p>
                            <ol className="list-decimal pl-5 space-y-1">
                                <li><strong>Wise (TransferWise):</strong> Uses mid-market rate with low fees (0.5-1%)</li>
                                <li><strong>Remitly:</strong> Competitive rates, fast transfers</li>
                                <li><strong>Traditional Banks:</strong> Most expensive (4-6% markup + fees)</li>
                            </ol>
                            <p className="text-sm">Avoid airport exchanges (10-15% markup) and PayPal (3-4% markup) when possible.</p>
                        </div>
                    </details>

                    <details className="group bg-slate-50 rounded-lg p-5 cursor-pointer border border-slate-200">
                        <summary className="font-bold text-slate-900 list-none flex justify-between items-center">
                            <span>Can I see historical exchange rates?</span>
                            <span className="transition-transform duration-300 group-open:rotate-180">▼</span>
                        </summary>
                        <p className="mt-4 text-slate-700 leading-relaxed">
                            Not currently. Our tool shows real-time rates only. For historical data, check XE.com or OANDA. 
                            We're considering adding this feature in Q3 2026.
                        </p>
                    </details>
                </div>
            </section>

            {/* IMAGE COMPRESSOR */}
            <section id="image">
                <h2 className="text-2xl font-bold text-slate-900 mb-6 pb-3 border-b-2 border-orange-600">Image Compressor Questions</h2>
                
                <div className="space-y-6">
                    <details className="group bg-slate-50 rounded-lg p-5 cursor-pointer border border-slate-200">
                        <summary className="font-bold text-slate-900 list-none flex justify-between items-center">
                            <span>How do I compress an image to exactly 50KB?</span>
                            <span className="transition-transform duration-300 group-open:rotate-180">▼</span>
                        </summary>
                        <p className="mt-4 text-slate-700 leading-relaxed">
                            In the "Target Max Size" field, type <strong>0.05</strong> (because 50 KB = 0.05 MB). 
                            The tool will automatically compress the image to meet this target. Always preview before downloading 
                            to ensure quality is acceptable.
                        </p>
                    </details>

                    <details className="group bg-slate-50 rounded-lg p-5 cursor-pointer border border-slate-200">
                        <summary className="font-bold text-slate-900 list-none flex justify-between items-center">
                            <span>Will my photo become blurry after compression?</span>
                            <span className="transition-transform duration-300 group-open:rotate-180">▼</span>
                        </summary>
                        <p className="mt-4 text-slate-700 leading-relaxed">
                            It depends on the target size. For passport photos compressed to 50KB, facial features remain sharp. 
                            Below 20KB, some blur is inevitable. If quality is poor, increase the target size slightly. 
                            Most exam portals specify a maximum (e.g., "under 50KB"), not an exact size.
                        </p>
                    </details>

                    <details className="group bg-slate-50 rounded-lg p-5 cursor-pointer border border-slate-200">
                        <summary className="font-bold text-slate-900 list-none flex justify-between items-center">
                            <span>Can I compress PNG images?</span>
                            <span className="transition-transform duration-300 group-open:rotate-180">▼</span>
                        </summary>
                        <p className="mt-4 text-slate-700 leading-relaxed">
                            Yes! We support JPG, JPEG, PNG, and WEBP formats. However, PNG files (especially with transparency) compress less efficiently. 
                            For photos, we recommend converting to JPG first for better size reduction.
                        </p>
                    </details>

                    <details className="group bg-slate-50 rounded-lg p-5 cursor-pointer border border-slate-200">
                        <summary className="font-bold text-slate-900 list-none flex justify-between items-center">
                            <span>Why does the portal reject my photo even after compression?</span>
                            <span className="transition-transform duration-300 group-open:rotate-180">▼</span>
                        </summary>
                        <div className="mt-4 text-slate-700 space-y-2">
                            <p>Common rejection reasons:</p>
                            <ul className="list-disc pl-5 space-y-1">
                                <li><strong>Wrong dimensions:</strong> Some forms require 200x200 pixels or 3.5x4.5 cm (our tool handles size, not dimensions)</li>
                                <li><strong>Wrong format:</strong> Must be JPG, not PNG</li>
                                <li><strong>File name:</strong> Use simple names like "photo.jpg" (no special characters)</li>
                                <li><strong>Background color:</strong> Some exams require white background</li>
                            </ul>
                        </div>
                    </details>

                    <details className="group bg-slate-50 rounded-lg p-5 cursor-pointer border border-slate-200">
                        <summary className="font-bold text-slate-900 list-none flex justify-between items-center">
                            <span>Is there a limit to how many images I can compress?</span>
                            <span className="transition-transform duration-300 group-open:rotate-180">▼</span>
                        </summary>
                        <p className="mt-4 text-slate-700 leading-relaxed">
                            No limits! Compress as many photos as you need. Since processing happens locally in your browser, 
                            there's no server queue or usage caps.
                        </p>
                    </details>
                </div>
            </section>

            {/* PDF CONVERTER */}
            <section id="pdf">
                <h2 className="text-2xl font-bold text-slate-900 mb-6 pb-3 border-b-2 border-red-600">PDF Converter Questions</h2>
                
                <div className="space-y-6">
                    <details className="group bg-slate-50 rounded-lg p-5 cursor-pointer border border-slate-200">
                        <summary className="font-bold text-slate-900 list-none flex justify-between items-center">
                            <span>How do I create a PDF under 2MB?</span>
                            <span className="transition-transform duration-300 group-open:rotate-180">▼</span>
                        </summary>
                        <p className="mt-4 text-slate-700 leading-relaxed">
                            Upload all your images (certificates, ID proofs, etc.), then set the "Target Size" to <strong>2</strong> (meaning 2 MB). 
                            The tool will automatically compress each image before creating the PDF to meet your size requirement. 
                            For safety, aim for 1.8 MB if the portal says "under 2 MB."
                        </p>
                    </details>

                    <details className="group bg-slate-50 rounded-lg p-5 cursor-pointer border border-slate-200">
                        <summary className="font-bold text-slate-900 list-none flex justify-between items-center">
                            <span>Can I merge 50+ images into one PDF?</span>
                            <span className="transition-transform duration-300 group-open:rotate-180">▼</span>
                        </summary>
                        <p className="mt-4 text-slate-700 leading-relaxed">
                            Yes! There's no page limit. However, keep in mind that more images = larger file size. 
                            If you need to stay under a specific size limit (e.g., 2 MB), you may need to split into multiple PDFs 
                            or reduce image quality more aggressively.
                        </p>
                    </details>

                    <details className="group bg-slate-50 rounded-lg p-5 cursor-pointer border border-slate-200">
                        <summary className="font-bold text-slate-900 list-none flex justify-between items-center">
                            <span>Pages are in the wrong order. How do I fix this?</span>
                            <span className="transition-transform duration-300 group-open:rotate-180">▼</span>
                        </summary>
                        <p className="mt-4 text-slate-700 leading-relaxed">
                            Images are arranged in the order you select them. When choosing files, click them in the correct sequence. 
                            On Windows/Mac, hold Ctrl/Cmd and click each file one by one in order. On phones, select one at a time. 
                            Alternatively, rename your files (01-Photo.jpg, 02-Signature.jpg) so they auto-sort correctly.
                        </p>
                    </details>

                    <details className="group bg-slate-50 rounded-lg p-5 cursor-pointer border border-slate-200">
                        <summary className="font-bold text-slate-900 list-none flex justify-between items-center">
                            <span>Can I password-protect the PDF?</span>
                            <span className="transition-transform duration-300 group-open:rotate-180">▼</span>
                        </summary>
                        <p className="mt-4 text-slate-700 leading-relaxed">
                            Not currently. Most government portals don't require password-protected PDFs (in fact, they often reject them). 
                            If you need encryption for business purposes, use Adobe Acrobat or Smallpdf after downloading your PDF from our tool.
                        </p>
                    </details>

                    <details className="group bg-slate-50 rounded-lg p-5 cursor-pointer border border-slate-200">
                        <summary className="font-bold text-slate-900 list-none flex justify-between items-center">
                            <span>Portal says "Invalid PDF" or "Corrupted File." What now?</span>
                            <span className="transition-transform duration-300 group-open:rotate-180">▼</span>
                        </summary>
                        <div className="mt-4 text-slate-700 space-y-2">
                            <p>Try these solutions:</p>
                            <ol className="list-decimal pl-5 space-y-1">
                                <li>Ensure the PDF downloaded completely (check file size isn't 0 KB)</li>
                                <li>Open the PDF in Adobe Reader to verify it works before uploading</li>
                                <li>Try a different browser (some old portals don't support modern PDFs)</li>
                                <li>Reduce the number of pages and try again</li>
                            </ol>
                        </div>
                    </details>
                </div>
            </section>

            {/* TECHNICAL ISSUES */}
            <section id="technical">
                <h2 className="text-2xl font-bold text-slate-900 mb-6 pb-3 border-b-2 border-slate-600">Technical Issues</h2>
                
                <div className="space-y-6">
                    <details className="group bg-slate-50 rounded-lg p-5 cursor-pointer border border-slate-200">
                        <summary className="font-bold text-slate-900 list-none flex justify-between items-center">
                            <span>The tool isn't working on my phone. What should I do?</span>
                            <span className="transition-transform duration-300 group-open:rotate-180">▼</span>
                        </summary>
                        <div className="mt-4 text-slate-700 space-y-2">
                            <p>Troubleshooting steps:</p>
                            <ol className="list-decimal pl-5 space-y-1">
                                <li>Make sure you're using a modern browser (Chrome 90+, Safari 14+, Firefox 85+)</li>
                                <li>Clear browser cache and cookies, then refresh the page</li>
                                <li>Try opening in Incognito/Private mode</li>
                                <li>If on iPhone, use Safari or Chrome (not Facebook in-app browser)</li>
                                <li>Check if your browser is up to date</li>
                            </ol>
                            <p className="text-sm mt-3">Still not working? Email us at luckmatters199@gmail.com with your device model and browser version.</p>
                        </div>
                    </details>

                    <details className="group bg-slate-50 rounded-lg p-5 cursor-pointer border border-slate-200">
                        <summary className="font-bold text-slate-900 list-none flex justify-between items-center">
                            <span>Download button doesn't work. Help!</span>
                            <span className="transition-transform duration-300 group-open:rotate-180">▼</span>
                        </summary>
                        <div className="mt-4 text-slate-700 space-y-2">
                            <p>Try these fixes:</p>
                            <ul className="list-disc pl-5 space-y-1">
                                <li>Check if your browser is blocking pop-ups or downloads (look for an icon in the address bar)</li>
                                <li>Enable downloads in browser settings</li>
                                <li>On mobile, long-press the preview image and select "Save Image"</li>
                                <li>Try a different browser or use Incognito mode to bypass extension interference</li>
                            </ul>
                        </div>
                    </details>

                    <details className="group bg-slate-50 rounded-lg p-5 cursor-pointer border border-slate-200">
                        <summary className="font-bold text-slate-900 list-none flex justify-between items-center">
                            <span>Does this work offline?</span>
                            <span className="transition-transform duration-300 group-open:rotate-180">▼</span>
                        </summary>
                        <p className="mt-4 text-slate-700 leading-relaxed">
                            Partially. The Image Compressor and PDF Converter work offline once the page loads (because they process locally). 
                            However, the Currency Converter requires internet to fetch live exchange rates. The ROAS Calculator works fully offline.
                        </p>
                    </details>

                    <details className="group bg-slate-50 rounded-lg p-5 cursor-pointer border border-slate-200">
                        <summary className="font-bold text-slate-900 list-none flex justify-between items-center">
                            <span>I found a bug. How do I report it?</span>
                            <span className="transition-transform duration-300 group-open:rotate-180">▼</span>
                        </summary>
                        <p className="mt-4 text-slate-700 leading-relaxed">
                            Thank you for helping us improve! Email <a href="mailto:luckmatters199@gmail.com" className="text-blue-600 underline">luckmatters199@gmail.com</a> with:
                            <br />• Which tool you were using<br />
                            • What you expected to happen<br />
                            • What actually happened<br />
                            • Screenshots if possible<br />
                            • Your browser and device (e.g., "Chrome 120 on Windows 11")
                        </p>
                    </details>

                    <details className="group bg-slate-50 rounded-lg p-5 cursor-pointer border border-slate-200">
                        <summary className="font-bold text-slate-900 list-none flex justify-between items-center">
                            <span>Can I suggest a new feature?</span>
                            <span className="transition-transform duration-300 group-open:rotate-180">▼</span>
                        </summary>
                        <p className="mt-4 text-slate-700 leading-relaxed">
                            Absolutely! We love user feedback. Email us at <a href="mailto:luckmatters199@gmail.com" className="text-blue-600 underline">luckmatters199@gmail.com</a> with your idea 
                            and explain why it would be useful. If it aligns with our mission, we'll consider it for the roadmap.
                        </p>
                    </details>
                </div>
            </section>

        </div>

        {/* Still Need Help CTA */}
        <div className="p-8 md:p-12 bg-gradient-to-r from-blue-50 to-purple-50 border-t border-slate-200">
            <div className="text-center max-w-2xl mx-auto">
                <h2 className="text-2xl font-bold text-slate-900 mb-4">Still Have Questions?</h2>
                <p className="text-slate-700 mb-6">
                    Can't find your answer? We're here to help. Our support team typically responds within 24 hours.
                </p>
                <Link href="/contact" className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition">
                    Contact Support
                </Link>
            </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="max-w-4xl mx-auto mt-12 text-center text-slate-400 text-sm">
        <p>© 2026 ROAS Tools Inc.</p>
      </footer>
    </div>
  );
}
