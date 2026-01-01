import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import PdfClient from "./PdfClient"; 

export const metadata: Metadata = {
  title: "Free JPG to PDF Converter - Create PDFs Under 2MB / 500KB",
  description: "Convert photos to PDF online. Set exact file size limits (e.g., under 2MB) for free. Auto-rotate and compress JPG to PDF instantly.",
  keywords: ["jpg to pdf", "image to pdf converter", "create pdf under 2mb", "compress pdf online", "photo to pdf"],
  alternates: {
    canonical: "https://roas-calculator-brown.vercel.app/pdf-converter",
  },
};

export default function PdfConverterPage() {
  return (
    <main className="min-h-screen bg-gray-50 font-sans relative pb-12">
      
      {/* Header / Navbar */}
      <div className="bg-slate-900 text-white py-8 px-4">
        <div className="max-w-6xl mx-auto">
             <Link href="/" className="inline-flex items-center text-slate-400 hover:text-white mb-4 transition">
                <ArrowLeft size={16} className="mr-2" /> Back to Home
            </Link>
            <h1 className="text-2xl md:text-4xl font-bold">Free JPG to PDF Converter</h1>
            <p className="text-slate-400 mt-2">Merge photos into a single PDF & Compress to under 2MB.</p>
        </div>
      </div>

      {/* --- AD SLOT 1: TOP (Empty container for Auto Ads) --- */}
      <div className="max-w-6xl mx-auto mt-6 min-h-[90px] bg-gray-100 border border-gray-200 rounded-lg flex items-center justify-center overflow-hidden">
           <span className="text-xs text-gray-400">Advertisement</span>
      </div>

      {/* --- THE INTERACTIVE TOOL --- */}
      <div className="max-w-6xl mx-auto mt-8 px-4">
        <PdfClient />
      </div>
      
      {/* --- AD SLOT 2: MIDDLE --- */}
      <div className="max-w-6xl mx-auto mt-8 min-h-[250px] bg-gray-100 border border-gray-200 rounded-lg flex items-center justify-center overflow-hidden">
           <span className="text-xs text-gray-400">Advertisement</span>
      </div>

      {/* --- SEO CONTENT (High Value Publisher Content) --- */}
      <article className="max-w-4xl mx-auto mt-12 bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-gray-200 prose lg:prose-lg text-gray-700">
        <h2 className="text-3xl font-bold text-slate-900">Free JPG to PDF Converter: Merge & Compress for Exams</h2>
        <p>
          Are you struggling to upload your documents for <strong>UPSC, SSC, NEET, JEE, or Banking exams</strong>? 
          Most portals like Ojas, MahaDBT, and IBPS require you to upload a single PDF file containing your ID proof, marksheets, and certificates, often with a strict size limit (e.g., <strong>under 2MB or 500KB</strong>).
        </p>
        <p>
          Standard scanner apps create huge files (10MB+) that get rejected instantly. 
          Our <strong>Pro PDF Maker</strong> is built for Indian students. It lets you combine multiple JPG photos into one PDF and automatically shrinks the file size to fit the exam requirements.
        </p>

        <h3 className="text-2xl font-bold text-slate-900 mt-8">How to Create a PDF Under 2MB on Mobile</h3>
        <ol className="list-decimal pl-5 space-y-2">
            <li><strong>Select Images:</strong> Tap the "Upload" box and select your photos (Aadhar, Pan Card, Marksheets) from your gallery. You can select multiple at once.</li>
            <li><strong>Arrange & Rotate:</strong> Use the rotate button 🔄 to fix any upside-down scans.</li>
            <li><strong>Set Target Size:</strong> This is the magic part. Type <strong>2</strong> in the box if the form asks for "Under 2 MB". Type <strong>0.5</strong> for "Under 500 KB".</li>
            <li><strong>Download PDF:</strong> Click the download button. We merge and compress everything instantly.</li>
        </ol>

        <h3 className="text-2xl font-bold text-slate-900 mt-8">Why use this tool instead of CamScanner or Adobe?</h3>
        <ul>
            <li><strong>No Watermarks:</strong> We don't ruin your official documents with "Scanned by..." logos. Your PDF is clean and professional.</li>
            <li><strong>100% Safe & Private:</strong> Other apps upload your Aadhar card to their servers. We don't. <strong>All processing happens inside your phone browser.</strong> Your data never leaves your device.</li>
            <li><strong>Auto-Orientation:</strong> We detect if a document is horizontal (landscape) or vertical (portrait) and adjust the PDF page automatically.</li>
        </ul>

        <h3 className="text-2xl font-bold text-slate-900 mt-8">Document Size Rules for 2025 Exams</h3>
        <div className="overflow-x-auto my-6">
            <table className="min-w-full bg-white border border-gray-300 text-sm">
                <thead>
                    <tr className="bg-slate-100">
                        <th className="py-3 px-4 border-b text-left font-bold text-slate-800">Exam / Portal</th>
                        <th className="py-3 px-4 border-b text-left font-bold text-slate-800">Document Type</th>
                        <th className="py-3 px-4 border-b text-left font-bold text-slate-800">Max Size Limit</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className="py-2 px-4 border-b">UPSC Civil Services</td>
                        <td className="py-2 px-4 border-b">Scanned Certificates</td>
                        <td className="py-2 px-4 border-b">Under 2 MB (PDF Only)</td>
                    </tr>
                    <tr>
                        <td className="py-2 px-4 border-b">SSC CGL / CHSL</td>
                        <td className="py-2 px-4 border-b">ID Proofs</td>
                        <td className="py-2 px-4 border-b">Under 500 KB</td>
                    </tr>
                    <tr>
                        <td className="py-2 px-4 border-b">NEET / JEE Main</td>
                        <td className="py-2 px-4 border-b">Category Certificate</td>
                        <td className="py-2 px-4 border-b">50 KB – 300 KB</td>
                    </tr>
                    <tr>
                        <td className="py-2 px-4 border-b">SBI / IBPS PO</td>
                        <td className="py-2 px-4 border-b">Handwritten Declaration</td>
                        <td className="py-2 px-4 border-b">50 KB – 100 KB</td>
                    </tr>
                </tbody>
            </table>
        </div>

        <h3 className="text-2xl font-bold text-slate-900 mt-8">Frequently Asked Questions (FAQ)</h3>
        <details className="group border-b pb-4 mb-4 cursor-pointer">
            <summary className="font-bold text-lg list-none flex justify-between items-center text-slate-800">
                <span>Can I merge 10+ photos into one PDF?</span>
                <span className="transition group-open:rotate-180">⬇️</span>
            </summary>
            <p className="mt-2 text-gray-600">Yes! There is no limit. You can upload 10, 20, or even 50 pages.</p>
        </details>
        <details className="group border-b pb-4 mb-4 cursor-pointer">
            <summary className="font-bold text-lg list-none flex justify-between items-center text-slate-800">
                <span>How do I reduce PDF size to 100KB?</span>
                <span className="transition group-open:rotate-180">⬇️</span>
            </summary>
            <p className="mt-2 text-gray-600">Simply type <strong>0.1</strong> in the "Target Size" box.</p>
        </details>
        <details className="group border-b pb-4 mb-4 cursor-pointer">
            <summary className="font-bold text-lg list-none flex justify-between items-center text-slate-800">
                <span>Is this tool free?</span>
                <span className="transition group-open:rotate-180">⬇️</span>
            </summary>
            <p className="mt-2 text-gray-600">Yes, it is 100% free forever. No sign-up, no credit card, and no hidden fees.</p>
        </details>
      </article>

    </main>
  );
}