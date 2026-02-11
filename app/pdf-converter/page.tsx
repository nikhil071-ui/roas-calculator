import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import PdfClient from "./PdfClient"; 
import AdBanner from "../AdBanner"; // Import the Ad Component

export const dynamic = "force-static";
export const revalidate = 86400;

export const metadata: Metadata = {
  title: "Free JPG to PDF Converter - Create PDFs Under 2MB / 500KB",
  description: "Convert photos to PDF online. Set exact file size limits (e.g., under 2MB) for free. Auto-rotate and compress JPG to PDF instantly.",
  keywords: ["jpg to pdf", "image to pdf converter", "create pdf under 2mb", "compress pdf online", "photo to pdf"],
  robots: {
    index: true,
    follow: true,
    nocache: false,
  },
  alternates: {
    canonical: "https://roas-calculator.tech/pdf-converter",
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

      {/* --- AD SLOT 1: TOP --- */}
      <div className="max-w-6xl mx-auto mt-6">
           <AdBanner />
      </div>

      {/* --- THE INTERACTIVE TOOL --- */}
      <div className="max-w-6xl mx-auto mt-8 px-4">
        <PdfClient />
      </div>
      
      {/* --- AD SLOT 2: MIDDLE --- */}
      <div className="max-w-6xl mx-auto mt-8">
           <AdBanner />
      </div>

      {/* EXPERT GUIDE CTA */}
      <div className="max-w-6xl mx-auto mt-8 px-4">
        <div className="bg-gradient-to-r from-red-50 to-orange-50 rounded-xl border-2 border-red-300 p-8">
          <h3 className="text-2xl font-bold text-slate-900 mb-2">📚 Master PDF Creation & Compression</h3>
          <p className="text-slate-700 mb-4">
            Read our comprehensive guide covering PDF file formats, compression techniques, government exam requirements, and troubleshooting.
          </p>
          <Link 
            href="/pdf-converter/guide"
            className="inline-block bg-red-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-700 transition"
          >
            Read Complete PDF Guide →
          </Link>
        </div>
      </div>

      {/* QUICK HELP */}
      <div className="max-w-6xl mx-auto mt-6 px-4">
        <div className="bg-white rounded-xl border border-slate-200 p-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <h3 className="text-lg font-bold text-slate-900">Need quick answers?</h3>
            <p className="text-slate-600">Check size limits, DPI guidance, and file tips.</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link href="/pdf-converter/faq" className="bg-slate-900 text-white px-4 py-2 rounded-lg font-semibold hover:bg-slate-800 transition">PDF FAQ</Link>
            <Link href="/resources" className="bg-blue-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-blue-700 transition">Free Resources</Link>
            <Link href="/comparisons" className="bg-emerald-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-emerald-700 transition">Tool Comparisons</Link>
          </div>
        </div>
      </div>

      {/* --- POPULAR PDF PAGES (BOOST INDEXING) --- */}
      <section className="max-w-6xl mx-auto mt-8 px-4">
        <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6">
          <h2 className="text-xl font-bold text-slate-900 mb-4">Popular PDF Pages</h2>
          <div className="flex flex-col md:flex-row gap-4">
            <Link href="/pdf/jpg-to-pdf" className="flex-1 block bg-slate-50 border border-slate-200 rounded-xl p-4 hover:border-red-400 hover:shadow-md transition">
              <h3 className="font-bold text-slate-900">JPG to PDF (Direct)</h3>
              <p className="text-sm text-slate-600 mt-1">Fast conversion optimized for exam uploads and job portals.</p>
            </Link>
            <Link href="/pdf/png-to-pdf" className="flex-1 block bg-slate-50 border border-slate-200 rounded-xl p-4 hover:border-blue-400 hover:shadow-md transition">
              <h3 className="font-bold text-slate-900">PNG to PDF</h3>
              <p className="text-sm text-slate-600 mt-1">Best for screenshots and images with transparency.</p>
            </Link>
          </div>
        </div>
      </section>

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

        <h3 className="text-2xl font-bold text-slate-900 mt-8">Document Size Rules for 2026 Exams</h3>
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
            <p className="mt-2 text-gray-600">
              Yes! There is no limit. You can upload 10, 20, or even 50 pages. The tool will combine all of them into a single PDF file 
              in the order you selected them.
            </p>
        </details>
        <details className="group border-b pb-4 mb-4 cursor-pointer">
            <summary className="font-bold text-lg list-none flex justify-between items-center text-slate-800">
                <span>How do I reduce PDF size to 100KB?</span>
                <span className="transition group-open:rotate-180">⬇️</span>
            </summary>
            <p className="mt-2 text-gray-600">
              Simply type <strong>0.1</strong> in the "Target Size" box (0.1 MB = 100 KB). The tool will automatically compress 
              each image before creating the PDF to meet your size requirement.
            </p>
        </details>
        <details className="group border-b pb-4 mb-4 cursor-pointer">
            <summary className="font-bold text-lg list-none flex justify-between items-center text-slate-800">
                <span>Is this tool free?</span>
                <span className="transition group-open:rotate-180">⬇️</span>
            </summary>
            <p className="mt-2 text-gray-600">Yes, it is 100% free forever. No sign-up, no credit card, and no hidden fees.</p>
        </details>
        <details className="group border-b pb-4 mb-4 cursor-pointer">
            <summary className="font-bold text-lg list-none flex justify-between items-center text-slate-800">
                <span>What's the difference between JPG to PDF and merging PDF files?</span>
                <span className="transition group-open:rotate-180">⬇️</span>
            </summary>
            <p className="mt-2 text-gray-600">
              JPG to PDF (our tool) takes image files (photos, scanned documents) and converts them into a PDF document. 
              Merging PDFs takes multiple existing PDF files and combines them. We specialize in the former—perfect for 
              creating application documents from phone photos.
            </p>
        </details>
        <details className="group border-b pb-4 mb-4 cursor-pointer">
            <summary className="font-bold text-lg list-none flex justify-between items-center text-slate-800">
                <span>Can I password-protect the PDF?</span>
                <span className="transition group-open:rotate-180">⬇️</span>
            </summary>
            <p className="mt-2 text-gray-600">
              Not currently. Most government portals don't require password-protected PDFs. If you need encryption, 
              use Adobe Acrobat or Smallpdf after downloading your PDF from our tool.
            </p>
        </details>
        <details className="group border-b pb-4 mb-4 cursor-pointer">
            <summary className="font-bold text-lg list-none flex justify-between items-center text-slate-800">
                <span>Will the PDF work on all devices?</span>
                <span className="transition group-open:rotate-180">⬇️</span>
            </summary>
            <p className="mt-2 text-gray-600">
              Yes! We create standard PDF 1.4 format files that open on any device—Windows, Mac, iPhone, Android, or Linux. 
              They're also compatible with all PDF readers (Adobe, Chrome, Safari).
            </p>
        </details>

        <h3 className="text-2xl font-bold text-slate-900 mt-10">Understanding PDF Standards & Formats</h3>
        <p>
          PDF (Portable Document Format) was created by Adobe in 1993 to ensure documents look identical on any device. 
          Here's what you need to know:
        </p>

        <h4 className="text-xl font-semibold text-slate-800 mt-6">PDF/A vs. PDF vs. PDF/X</h4>
        <div className="space-y-4 mt-4">
          <div className="bg-slate-50 p-5 rounded-lg border border-slate-200">
            <h5 className="font-bold text-slate-900 mb-2">PDF/A (Archival)</h5>
            <p className="text-sm text-slate-700">
              Designed for long-term archiving. Embeds all fonts and prohibits features like encryption or JavaScript. 
              Used by libraries, government archives, and legal systems. Most government exam portals accept standard PDF, not PDF/A.
            </p>
          </div>

          <div className="bg-slate-50 p-5 rounded-lg border border-slate-200">
            <h5 className="font-bold text-slate-900 mb-2">PDF (Standard)</h5>
            <p className="text-sm text-slate-700">
              The most common format. Supports images, text, hyperlinks, and form fields. This is what our tool creates. 
              Compatible with 99.9% of PDF readers and exam portals.
            </p>
          </div>

          <div className="bg-slate-50 p-5 rounded-lg border border-slate-200">
            <h5 className="font-bold text-slate-900 mb-2">PDF/X (Printing)</h5>
            <p className="text-sm text-slate-700">
              Optimized for professional printing presses. Requires specific color profiles (CMYK) and bleed settings. 
              Irrelevant for digital submissions.
            </p>
          </div>
        </div>

        <h3 className="text-2xl font-bold text-slate-900 mt-10">How to Scan Documents Like a Pro</h3>
        <p>
          Creating high-quality PDFs starts with good source images. Here's how to scan or photograph documents properly:
        </p>

        <h4 className="text-xl font-semibold text-slate-800 mt-6">Using Your Smartphone Camera</h4>
        <ol className="list-decimal pl-5 space-y-3 mt-4 text-slate-700">
          <li>
            <strong>Lighting:</strong> Place the document on a flat surface near a window (natural light is best). 
            Avoid overhead lights that create shadows.
          </li>
          <li>
            <strong>Angle:</strong> Hold your phone directly above the document (perpendicular, not at an angle). 
            Use a book or box to stabilize your hand.
          </li>
          <li>
            <strong>Focus:</strong> Tap the screen on the document to ensure the camera focuses on the text, not the background.
          </li>
          <li>
            <strong>No Flash:</strong> Phone flash creates glare and hot spots. Natural light produces better results.
          </li>
          <li>
            <strong>Crop Later:</strong> Capture the entire document plus some margin. You can crop excess later, 
            but you can't add missing parts.
          </li>
        </ol>

        <h4 className="text-xl font-semibold text-slate-800 mt-6">Using a Scanner</h4>
        <ul className="list-disc pl-5 space-y-2 mt-4 text-slate-700">
          <li><strong>Resolution:</strong> Set to 200-300 DPI. Higher DPI (600+) creates unnecessarily large files.</li>
          <li><strong>Color Mode:</strong> Use "Grayscale" for black-and-white documents or "Color" for photos/certificates with seals.</li>
          <li><strong>File Format:</strong> Save as JPG (not TIFF or BMP, which create huge files).</li>
          <li><strong>Clean the Glass:</strong> Dust and fingerprints on the scanner bed show up as dark spots in the PDF.</li>
        </ul>

        <h3 className="text-2xl font-bold text-slate-900 mt-10">PDF Compression: How It Works</h3>
        <p>
          When you set a target PDF size (e.g., 2 MB), our tool performs several optimizations:
        </p>

        <div className="bg-blue-50 p-6 rounded-xl border border-blue-200 my-6">
          <h5 className="font-bold text-blue-900 mb-3">Step-by-Step Compression Process:</h5>
          <ol className="space-y-2 text-sm text-blue-800">
            <li>
              <strong>1. Image Analysis:</strong> The tool calculates the total size of all uploaded images.
            </li>
            <li>
              <strong>2. Target Distribution:</strong> It divides the target size equally among all images. 
              For example, if you upload 5 images and want a 1 MB PDF, each image gets compressed to ~200 KB.
            </li>
            <li>
              <strong>3. Quality Adjustment:</strong> JPEG compression quality is iteratively adjusted (starting at 90%, then 80%, 70%...) 
              until each image fits its target.
            </li>
            <li>
              <strong>4. PDF Generation:</strong> Images are embedded into a PDF container using the jsPDF library. 
              The PDF wrapper adds minimal overhead (~2-5 KB).
            </li>
            <li>
              <strong>5. Final Check:</strong> The tool verifies the final PDF size and displays it before download.
            </li>
          </ol>
        </div>

        <h3 className="text-2xl font-bold text-slate-900 mt-10">Best Practices for Government Applications</h3>

        <div className="space-y-4 mt-6">
          <div className="flex gap-4 items-start">
            <span className="text-2xl flex-shrink-0">✅</span>
            <div>
              <h5 className="font-bold text-slate-900 mb-1">Label Your Files Correctly</h5>
              <p className="text-sm text-slate-600">
                Name your PDF logically: "RahulSharma_Certificates.pdf" not "Document1.pdf". 
                Avoid special characters (@, #, $, &) which can cause upload errors.
              </p>
            </div>
          </div>

          <div className="flex gap-4 items-start">
            <span className="text-2xl flex-shrink-0">✅</span>
            <div>
              <h5 className="font-bold text-slate-900 mb-1">Organize Pages Logically</h5>
              <p className="text-sm text-slate-600">
                Follow the portal's instructions. If they ask for "Photo, Signature, ID Proof," upload images in that exact order.
              </p>
            </div>
          </div>

          <div className="flex gap-4 items-start">
            <span className="text-2xl flex-shrink-0">✅</span>
            <div>
              <h5 className="font-bold text-slate-900 mb-1">Test Before the Deadline</h5>
              <p className="text-sm text-slate-600">
                Create the PDF and upload it to the portal a few days early. If it's rejected, you'll have time to fix issues.
              </p>
            </div>
          </div>

          <div className="flex gap-4 items-start">
            <span className="text-2xl flex-shrink-0">✅</span>
            <div>
              <h5 className="font-bold text-slate-900 mb-1">Keep Originals</h5>
              <p className="text-sm text-slate-600">
                Save the uncompressed images separately. If the portal rejects your PDF, you can recreate it without re-scanning.
              </p>
            </div>
          </div>

          <div className="flex gap-4 items-start">
            <span className="text-2xl flex-shrink-0">❌</span>
            <div>
              <h5 className="font-bold text-red-900 mb-1">Don't Include Unnecessary Pages</h5>
              <p className="text-sm text-red-600">
                If the form asks for "10th & 12th marksheets," don't add your 11th marksheet. Extra pages increase file size and confuse reviewers.
              </p>
            </div>
          </div>

          <div className="flex gap-4 items-start">
            <span className="text-2xl flex-shrink-0">❌</span>
            <div>
              <h5 className="font-bold text-red-900 mb-1">Don't Use Portrait + Landscape Mix (Unless Required)</h5>
              <p className="text-sm text-red-600">
                Mixing orientations creates a disjointed PDF. Rotate all images to the same orientation before uploading.
              </p>
            </div>
          </div>
        </div>

        <h3 className="text-2xl font-bold text-slate-900 mt-10">Privacy & Security</h3>
        <p>
          Your documents often contain highly sensitive information—Aadhar numbers, PAN cards, addresses, signatures. Here's how we protect your data:
        </p>

        <div className="bg-green-50 p-6 rounded-xl border border-green-200 my-6">
          <h5 className="font-bold text-green-900 mb-3">🔒 Our Privacy Guarantees:</h5>
          <ul className="space-y-2 text-sm text-green-800">
            <li>• <strong>No Server Uploads:</strong> All image processing and PDF creation happens in your browser using JavaScript. 
            Your files never touch our servers.</li>
            <li>• <strong>No Data Collection:</strong> We don't track what documents you upload, how many pages you merge, or any personal information.</li>
            <li>• <strong>No Analytics on Files:</strong> Unlike competitors, we don't analyze your PDFs for "AI training" or "service improvement."</li>
            <li>• <strong>Works Offline:</strong> Once the page loads, you can disconnect from the internet and the tool still works—proving no data transmission.</li>
          </ul>
        </div>

        <p className="text-sm text-slate-600 mt-4">
          <strong>Technical Verification:</strong> Open your browser's Developer Tools (F12), go to the Network tab, and watch as you use the tool. 
          You'll see zero upload requests—only local processing.
        </p>

        <h3 className="text-2xl font-bold text-slate-900 mt-10">Troubleshooting Common Issues</h3>

        <details className="bg-white border border-slate-200 rounded-lg p-4 mb-4 cursor-pointer">
          <summary className="font-bold text-slate-900 list-none flex justify-between items-center">
            <span>Issue: PDF size is still over the limit after compression</span>
            <span className="group-open:rotate-180 transition">▼</span>
          </summary>
          <div className="mt-3 text-slate-700 space-y-2">
            <p><strong>Cause:</strong> You have too many high-resolution images or the target size is unrealistic.</p>
            <p><strong>Solution 1:</strong> Lower the target size. For example, if you need under 2 MB, set the target to 1.8 MB for safety margin.</p>
            <p><strong>Solution 2:</strong> Reduce the number of pages. If you're merging 20 marksheets, consider splitting into two separate PDFs.</p>
            <p><strong>Solution 3:</strong> Pre-compress images using our Image Compressor tool before creating the PDF.</p>
          </div>
        </details>

        <details className="bg-white border border-slate-200 rounded-lg p-4 mb-4 cursor-pointer">
          <summary className="font-bold text-slate-900 list-none flex justify-between items-center">
            <span>Issue: Text in PDF is unreadable or blurry</span>
            <span className="group-open:rotate-180 transition">▼</span>
          </summary>
          <div className="mt-3 text-slate-700 space-y-2">
            <p><strong>Cause:</strong> The target size is too aggressive, forcing extreme compression.</p>
            <p><strong>Solution:</strong> Increase the target size. Government portals usually specify a maximum (e.g., "under 2 MB"), 
            not an exact size. Aim for 1.5 MB instead of pushing to 0.5 MB.</p>
            <p><strong>Prevention:</strong> Take clearer photos. Ensure good lighting, focus, and avoid shadows when scanning/photographing documents.</p>
          </div>
        </details>

        <details className="bg-white border border-slate-200 rounded-lg p-4 mb-4 cursor-pointer">
          <summary className="font-bold text-slate-900 list-none flex justify-between items-center">
            <span>Issue: Portal says "Invalid PDF" or "Corrupted File"</span>
            <span className="group-open:rotate-180 transition">▼</span>
          </summary>
          <div className="mt-3 text-slate-700 space-y-2">
            <p><strong>Solution 1:</strong> Make sure you downloaded the PDF completely. If your internet cut off mid-download, the file is incomplete.</p>
            <p><strong>Solution 2:</strong> Try a different browser. Some old government portals don't support modern PDF versions. Use Chrome or Firefox.</p>
            <p><strong>Solution 3:</strong> Open the PDF in Adobe Reader to verify it works before uploading. If it opens fine locally, the portal may have temporary issues.</p>
          </div>
        </details>

        <details className="bg-white border border-slate-200 rounded-lg p-4 mb-4 cursor-pointer">
          <summary className="font-bold text-slate-900 list-none flex justify-between items-center">
            <span>Issue: Pages are in the wrong order</span>
            <span className="group-open:rotate-180 transition">▼</span>
          </summary>
          <div className="mt-3 text-slate-700 space-y-2">
            <p><strong>Cause:</strong> Images are arranged in the order you selected them from your device.</p>
            <p><strong>Solution:</strong> When selecting files, click them in the correct order. On Windows, hold Ctrl and click each file sequentially. 
            On phones, select one at a time in order.</p>
            <p><strong>Alternative:</strong> Rename your images before uploading (e.g., "01-Photo.jpg", "02-Signature.jpg") so they auto-sort correctly.</p>
          </div>
        </details>

        <h3 className="text-2xl font-bold text-slate-900 mt-10">Related Tools & Resources</h3>
        <div className="grid md:grid-cols-2 gap-6 mt-6">
          <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
            <h4 className="font-bold text-slate-900 mb-2">Image Compressor</h4>
            <p className="text-sm text-slate-600 mb-3">
              Need to reduce individual photo sizes to 50 KB or 20 KB before creating a PDF? Use our Image Compressor first.
            </p>
            <Link href="/image-compressor" className="text-blue-600 font-semibold hover:underline text-sm">
              Go to Image Compressor →
            </Link>
          </div>

          <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
            <h4 className="font-bold text-slate-900 mb-2">PDF Editor (Coming Soon)</h4>
            <p className="text-sm text-slate-600 mb-3">
              Need to add text, signatures, or annotations to your PDF? Our PDF editor will launch in Q2 2026.
            </p>
            <p className="text-slate-400 text-sm font-semibold">
              Launching Soon
            </p>
          </div>
        </div>

        <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-xl p-8 border border-green-200 mt-12">
          <h3 className="text-xl font-bold text-slate-900 mb-3">Need Help? We're Here!</h3>
          <p className="text-slate-700 mb-4">
            If you're having trouble creating a PDF for a specific exam or portal, don't hesitate to reach out. 
            We've helped thousands of students and professionals successfully submit their applications.
          </p>
          <Link href="/contact" className="inline-block bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition">
            Get Support
          </Link>
        </div>
      </article>

    </main>
  );
}
