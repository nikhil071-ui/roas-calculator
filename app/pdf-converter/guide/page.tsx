import Link from "next/link";
import { ArrowLeft, FileText } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Complete Guide to PDF Creation & Compression | JPG to PDF for Government Forms",
  description: "Expert guide to creating PDFs from images. Learn PDF compression, file size optimization, and step-by-step instructions for exam portals and government applications.",
  keywords: [
    "pdf creation guide",
    "jpg to pdf",
    "image to pdf",
    "pdf compression",
    "reduce pdf size",
    "create pdf under 2mb",
    "government exam requirements",
  ],
};

export default function PDFConverterGuide() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 py-12 px-4 md:px-6">
      <div className="max-w-4xl mx-auto mb-8">
        <Link
          href="/pdf-converter"
          className="inline-flex items-center text-slate-500 hover:text-blue-600 transition font-medium"
        >
          <ArrowLeft size={18} className="mr-2" /> Back to PDF Converter Tool
        </Link>
      </div>

      <main className="max-w-4xl mx-auto bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden mb-12">
        <div className="bg-gradient-to-r from-red-900 to-red-800 p-8 md:p-12 text-white">
          <div className="flex items-center gap-3 mb-4">
            <FileText size={28} />
            <span className="text-sm font-bold uppercase tracking-wider text-red-200">Complete Guide</span>
          </div>
          <h1 className="text-3xl md:text-5xl font-bold mb-4">
            The Complete Guide to PDF Creation & Compression (2026)
          </h1>
          <p className="text-red-100 text-lg max-w-2xl">
            Master PDF creation, learn compression techniques, and understand how to prepare documents for government exams and official applications.
          </p>
        </div>

        <article className="p-8 md:p-12 prose lg:prose-lg max-w-none text-slate-700 space-y-8">
          
          <nav className="bg-red-50 rounded-xl p-6 border border-red-200">
            <h2 className="text-lg font-bold text-slate-900 mb-4">📋 Quick Navigation</h2>
            <div className="grid md:grid-cols-2 gap-3 text-sm">
              <a href="#what-is-pdf" className="text-red-600 hover:underline">1. What is a PDF?</a>
              <a href="#why-pdf" className="text-red-600 hover:underline">2. Why PDFs for Government Forms</a>
              <a href="#creating-pdf" className="text-red-600 hover:underline">3. How to Create PDFs</a>
              <a href="#compression" className="text-red-600 hover:underline">4. PDF Compression Techniques</a>
              <a href="#govt-requirements" className="text-red-600 hover:underline">5. Exam Portal Requirements</a>
              <a href="#step-by-step" className="text-red-600 hover:underline">6. Step-by-Step Tutorial</a>
              <a href="#troubleshooting" className="text-red-600 hover:underline">7. Troubleshooting</a>
              <a href="#tools-comparison" className="text-red-600 hover:underline">8. Tools Comparison</a>
            </div>
          </nav>

          <section id="what-is-pdf">
            <h2 className="text-3xl font-bold text-slate-900">1. What is a PDF?</h2>
            
            <p>
              <strong>PDF (Portable Document Format)</strong> is a file format that captures a document's appearance exactly as intended, 
              regardless of what device, browser, or operating system opens it.
            </p>

            <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded my-4">
              <p className="font-bold text-blue-900">🎯 Key Benefit for Government Forms:</p>
              <p className="text-blue-800 text-sm mt-2">
                A PDF created on your iPhone looks identical when opened on a Windows PC or Android tablet. 
                This standardization is why government portals specifically ask for PDFs—they know exactly how your document will appear.
              </p>
            </div>

            <h3 className="text-xl font-bold text-slate-900 mt-6">PDF vs Image File: What's the Difference?</h3>
            
            <ul className="space-y-3 mt-4">
              <li>
                <strong>JPG/PNG Image:</strong> Single photo. Can only display one picture per file.
              </li>
              <li>
                <strong>PDF:</strong> Document container. Can hold multiple images, text, forms, signatures, bookmarks, etc. on multiple pages.
              </li>
            </ul>

            <p className="text-sm text-slate-600 italic mt-4">
              For exam portals asking you to upload "Marksheet, ID proof, and signature in a single file," PDF is perfect. JPG can't do multiple pages.
            </p>
          </section>

          <section id="why-pdf">
            <h2 className="text-3xl font-bold text-slate-900 mt-12">2. Why Government Forms Require PDFs</h2>
            
            <ul className="space-y-4">
              <li>
                <strong>Multi-page support:</strong> Upload 3-4 documents (certificates, ID, marksheets) as a single file
              </li>
              <li>
                <strong>Standardized appearance:</strong> PDF renders identically across all devices and operating systems
              </li>
              <li>
                <strong>Compression support:</strong> PDFs compress better than image formats, reducing file sizes
              </li>
              <li>
                <strong>Archive quality:</strong> PDFs maintain quality without degradation even after storage
              </li>
              <li>
                <strong>Security features:</strong> PDFs support encryption, digital signatures, and read-only restrictions
              </li>
            </ul>
          </section>

          <section id="creating-pdf">
            <h2 className="text-3xl font-bold text-slate-900 mt-12">3. How to Create PDFs from Images</h2>
            
            <h3 className="text-xl font-bold text-slate-900 mt-6">Method 1: JPG/PNG to PDF (Recommended for Government Forms)</h3>
            
            <p className="mt-4">
              The most common scenario: You have scanned images or photos (JPG/PNG files) and need to combine them into a single PDF.
            </p>

            <p className="font-bold text-slate-900 mt-4">Steps:</p>
            <ol className="list-decimal pl-5 space-y-2 mt-2">
              <li>Open our PDF Converter tool</li>
              <li>Select multiple images: Aadhar.jpg, PanCard.jpg, Marksheet.jpg</li>
              <li>Tool automatically arranges them in order</li>
              <li>Set target file size (e.g., "Under 2MB" = enter 2)</li>
              <li>Download as single PDF file</li>
            </ol>

            <h3 className="text-xl font-bold text-slate-900 mt-6">Method 2: Using Desktop Software</h3>
            
            <p className="mt-4">
              For bulk document preparation or professional use:
            </p>

            <ul className="space-y-2 mt-3">
              <li><strong>Adobe Acrobat:</strong> Industry standard, $20/month. Perfect but expensive.</li>
              <li><strong>ILovePDF (online):</strong> Free, web-based. Supports batch processing.</li>
              <li><strong>LibreOffice (free):</strong> Open-source. Can convert images to PDF.</li>
              <li><strong>Microsoft Word:</strong> Insert images, save as PDF (works but quality varies)</li>
            </ul>
          </section>

          <section id="compression">
            <h2 className="text-3xl font-bold text-slate-900 mt-12">4. PDF Compression Techniques</h2>
            
            <p>
              PDFs are already compressed, but you can reduce size further. Here's how:
            </p>

            <h3 className="text-xl font-bold text-slate-900 mt-6">Image Quality Reduction</h3>
            
            <p className="mt-4">
              PDFs store images inside them. Reducing image quality reduces overall PDF size:
            </p>

            <div className="overflow-x-auto my-6">
              <table className="w-full border border-slate-300 text-sm">
                <thead className="bg-slate-100">
                  <tr>
                    <th className="border border-slate-300 px-4 py-2 text-left font-bold">Quality Level</th>
                    <th className="border border-slate-300 px-4 py-2 text-left font-bold">Impact</th>
                    <th className="border border-slate-300 px-4 py-2 text-left font-bold">Best For</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-slate-300 px-4 py-2 font-semibold">High (85%)</td>
                    <td className="border border-slate-300 px-4 py-2">2-3 MB typical</td>
                    <td className="border border-slate-300 px-4 py-2">Professional documents, archives</td>
                  </tr>
                  <tr className="bg-slate-50">
                    <td className="border border-slate-300 px-4 py-2 font-semibold">Medium (60%)</td>
                    <td className="border border-slate-300 px-4 py-2">500KB - 1.5 MB</td>
                    <td className="border border-slate-300 px-4 py-2">Government exams (recommended)</td>
                  </tr>
                  <tr>
                    <td className="border border-slate-300 px-4 py-2 font-semibold">Low (30%)</td>
                    <td className="border border-slate-300 px-4 py-2">100-300 KB</td>
                    <td className="border border-slate-300 px-4 py-2">Strict size limits (e.g., 500KB)</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h3 className="text-xl font-bold text-slate-900 mt-6">Resolution Reduction</h3>
            
            <p className="mt-4">
              Scanning at 600 DPI creates unnecessarily large PDFs. Most government forms only need 150-300 DPI:
            </p>

            <ul className="space-y-2 mt-3">
              <li><strong>150 DPI:</strong> Web viewing, email. Suitable for most government portals. (300KB per page)</li>
              <li><strong>300 DPI:</strong> Good balance. Standard for exams. (600KB per page)</li>
              <li><strong>600 DPI:</strong> Professional/archive quality. Too large for most portals. (2-3 MB per page)</li>
            </ul>

            <p className="text-sm text-slate-600 italic mt-3">
              Pro tip: Scan at 300 DPI for government forms. This is sufficient for ID verification while keeping file size reasonable.
            </p>
          </section>

          <section id="govt-requirements">
            <h2 className="text-3xl font-bold text-slate-900 mt-12">5. Government Exam Portal Requirements (2026)</h2>
            
            <div className="overflow-x-auto my-6 text-xs md:text-sm">
              <table className="w-full border border-slate-300">
                <thead className="bg-slate-100">
                  <tr>
                    <th className="border border-slate-300 px-3 py-2 text-left font-bold">Portal</th>
                    <th className="border border-slate-300 px-3 py-2 text-left font-bold">Max Size</th>
                    <th className="border border-slate-300 px-3 py-2 text-left font-bold">File Type</th>
                    <th className="border border-slate-300 px-3 py-2 text-left font-bold">Notes</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-slate-300 px-3 py-2 font-semibold">UPSC (Ojas)</td>
                    <td className="border border-slate-300 px-3 py-2">5 MB per doc</td>
                    <td className="border border-slate-300 px-3 py-2">PDF Only</td>
                    <td className="border border-slate-300 px-3 py-2">Very lenient on size</td>
                  </tr>
                  <tr className="bg-slate-50">
                    <td className="border border-slate-300 px-3 py-2 font-semibold">SSC (SSCONLINE)</td>
                    <td className="border border-slate-300 px-3 py-2">1 MB</td>
                    <td className="border border-slate-300 px-3 py-2">PDF/JPG</td>
                    <td className="border border-slate-300 px-3 py-2">Strict limit. Test upload 24 hrs before</td>
                  </tr>
                  <tr>
                    <td className="border border-slate-300 px-3 py-2 font-semibold">IBPS (IBPS.in)</td>
                    <td className="border border-slate-300 px-3 py-2">500 KB</td>
                    <td className="border border-slate-300 px-3 py-2">PDF</td>
                    <td className="border border-slate-300 px-3 py-2">Very strict. Compress aggressively</td>
                  </tr>
                  <tr className="bg-slate-50">
                    <td className="border border-slate-300 px-3 py-2 font-semibold">JEE Main (NTA)</td>
                    <td className="border border-slate-300 px-3 py-2">2 MB</td>
                    <td className="border border-slate-300 px-3 py-2">PDF/JPG</td>
                    <td className="border border-slate-300 px-3 py-2">Moderate limit</td>
                  </tr>
                  <tr>
                    <td className="border border-slate-300 px-3 py-2 font-semibold">Aadhar Updates (UIDAI)</td>
                    <td className="border border-slate-300 px-3 py-2">3 MB</td>
                    <td className="border border-slate-300 px-3 py-2">PDF/JPG</td>
                    <td className="border border-slate-300 px-3 py-2">Flexible</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section id="step-by-step">
            <h2 className="text-3xl font-bold text-slate-900 mt-12">6. Step-by-Step: Create PDF Under 2MB</h2>
            
            <h3 className="text-xl font-bold text-slate-900 mt-6">For Exam Application</h3>
            
            <ol className="list-decimal pl-5 space-y-4 mt-4">
              <li>
                <strong>Scan/Photo Capture:</strong> Take photos of each document (Aadhar, PAN, Marksheets, Certificates)
                <p className="text-sm text-slate-600 mt-1">Tip: Scan at 300 DPI, good lighting, plain background</p>
              </li>
              <li>
                <strong>Organize Files:</strong> Name clearly: "aadhar.jpg", "marksheet.jpg", "certificate.jpg"
                <p className="text-sm text-slate-600 mt-1">Tip: Arrange in logical order (ID first, then marksheets)</p>
              </li>
              <li>
                <strong>Upload to our PDF Converter:</strong> Select all files at once
                <p className="text-sm text-slate-600 mt-1">Tip: The tool automatically detects landscape/portrait orientation</p>
              </li>
              <li>
                <strong>Set Size Limit:</strong> Type "2" for 2MB, "0.5" for 500KB, "1" for 1MB
                <p className="text-sm text-slate-600 mt-1">Tip: Be conservative—set 100KB below the actual limit</p>
              </li>
              <li>
                <strong>Download & Test:</strong> Check file size. Right-click → Properties
                <p className="text-sm text-slate-600 mt-1">Tip: Test upload to portal 24 hours before deadline</p>
              </li>
            </ol>
          </section>

          <section id="troubleshooting">
            <h2 className="text-3xl font-bold text-slate-900 mt-12">7. Troubleshooting PDF Issues</h2>
            
            <details className="group border border-slate-200 rounded-lg p-4 mb-4 cursor-pointer bg-white">
              <summary className="font-bold text-slate-900 list-none flex justify-between">
                <span>❓ PDF is still larger than limit</span>
                <span className="transition group-open:rotate-180">▼</span>
              </summary>
              <div className="mt-3 text-slate-700 space-y-2 text-sm">
                <p><strong>Solution 1:</strong> Lower compression target (e.g., from 2.0 to 1.5)</p>
                <p><strong>Solution 2:</strong> Remove unnecessary documents. Only include what's required.</p>
                <p><strong>Solution 3:</strong> Reduce image quality before creating PDF (use photo editor)</p>
              </div>
            </details>

            <details className="group border border-slate-200 rounded-lg p-4 mb-4 cursor-pointer bg-white">
              <summary className="font-bold text-slate-900 list-none flex justify-between">
                <span>❓ PDF pages are blurry or hard to read</span>
                <span className="transition group-open:rotate-180">▼</span>
              </summary>
              <div className="mt-3 text-slate-700 space-y-2 text-sm">
                <p><strong>Cause:</strong> Compression too aggressive or original images poor quality</p>
                <p><strong>Solution:</strong> Increase compression target size. If 1MB is too blurry, try 1.5MB.</p>
                <p><strong>Prevention:</strong> Scan documents with good lighting at 300 DPI minimum</p>
              </div>
            </details>

            <details className="group border border-slate-200 rounded-lg p-4 mb-4 cursor-pointer bg-white">
              <summary className="font-bold text-slate-900 list-none flex justify-between">
                <span>❓ Portal rejects my PDF despite meeting size requirement</span>
                <span className="transition group-open:rotate-180">▼</span>
              </summary>
              <div className="mt-3 text-slate-700 space-y-2 text-sm">
                <p><strong>Check 1:</strong> File extension. Must be .pdf (not .jpeg converted to PDF)</p>
                <p><strong>Check 2:</strong> Page count. Some portals have maximum pages (e.g., 10 pages max)</p>
                <p><strong>Check 3:</strong> Color mode. Some government portals require black & white scans for documents</p>
                <p><strong>Check 4:</strong> Encryption. PDFs with passwords might be rejected</p>
              </div>
            </details>
          </section>

          <section id="tools-comparison">
            <h2 className="text-3xl font-bold text-slate-900 mt-12">8. PDF Tools Comparison</h2>
            
            <div className="overflow-x-auto my-6 text-xs">
              <table className="w-full border border-slate-300">
                <thead className="bg-slate-100">
                  <tr>
                    <th className="border border-slate-300 px-3 py-2 text-left font-bold">Tool</th>
                    <th className="border border-slate-300 px-3 py-2 text-left font-bold">Free?</th>
                    <th className="border border-slate-300 px-3 py-2 text-left font-bold">Privacy</th>
                    <th className="border border-slate-300 px-3 py-2 text-left font-bold">Speed</th>
                    <th className="border border-slate-300 px-3 py-2 text-left font-bold">Best For</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-slate-300 px-3 py-2 font-semibold">ROAS PDF Converter</td>
                    <td className="border border-slate-300 px-3 py-2">✅ 100% Free</td>
                    <td className="border border-slate-300 px-3 py-2">✅ Offline</td>
                    <td className="border border-slate-300 px-3 py-2">⚡ Instant</td>
                    <td className="border border-slate-300 px-3 py-2">Exams (Recommended)</td>
                  </tr>
                  <tr className="bg-slate-50">
                    <td className="border border-slate-300 px-3 py-2 font-semibold">ILovePDF</td>
                    <td className="border border-slate-300 px-3 py-2">⚠️ Limited free</td>
                    <td className="border border-slate-300 px-3 py-2">❌ Uploads server</td>
                    <td className="border border-slate-300 px-3 py-2">🐢 Slow</td>
                    <td className="border border-slate-300 px-3 py-2">Batch processing</td>
                  </tr>
                  <tr>
                    <td className="border border-slate-300 px-3 py-2 font-semibold">Adobe Acrobat</td>
                    <td className="border border-slate-300 px-3 py-2">❌ Paid ($20/mo)</td>
                    <td className="border border-slate-300 px-3 py-2">✅ Internal</td>
                    <td className="border border-slate-300 px-3 py-2">⚡ Fast</td>
                    <td className="border border-slate-300 px-3 py-2">Professional use</td>
                  </tr>
                  <tr className="bg-slate-50">
                    <td className="border border-slate-300 px-3 py-2 font-semibold">Smallpdf</td>
                    <td className="border border-slate-300 px-3 py-2">⚠️ 2 free/month</td>
                    <td className="border border-slate-300 px-3 py-2">❌ Cloud-based</td>
                    <td className="border border-slate-300 px-3 py-2">🐢 Slow</td>
                    <td className="border border-slate-300 px-3 py-2">Occasional use</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <div className="bg-gradient-to-r from-red-50 to-orange-50 rounded-xl p-8 border border-red-200 mt-12">
            <h3 className="text-xl font-bold text-slate-900 mb-3">Ready to create your PDF?</h3>
            <p className="text-slate-700 mb-4">
              Use our free PDF converter to combine and compress your documents instantly. Perfect for government exams and official applications.
            </p>
            <Link 
              href="/pdf-converter"
              className="inline-block bg-red-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-700 transition"
            >
              Go to PDF Converter Tool
            </Link>
          </div>
        </article>
      </main>
    </div>
  );
}
