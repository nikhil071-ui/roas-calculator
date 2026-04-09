import Link from "next/link";
import { ArrowLeft, Award } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Complete Guide to Image Compression | JPEG Algorithms & Government Forms",
  description: "Expert guide to image compression. Learn JPEG technology, compression algorithms, lossless vs lossy, and step-by-step instructions for reducing photos to 50KB for exams.",
  keywords: [
    "image compression guide",
    "how to compress images",
    "JPEG compression",
    "image compression algorithm",
    "lossless vs lossy compression",
    "reduce photo 50kb",
    "government form requirements",
  ],
  openGraph: {
    title: "Complete Guide to Image Compression | JPEG Algorithms & Government Forms",
    description: "Expert guide to image compression. Learn JPEG technology, compression algorithms, lossless vs lossy, and step-by-step instructions for reducing photos to 50KB for exams.",
    url: "https://roas-calculator.tech/image-compressor/guide",
  },
      twitter: {
    card: "summary_large_image",
    title: "Complete Guide to Image Compression | JPEG Algorithms & Government Forms",
    description: "Expert guide to image compression. Learn JPEG technology, compression algorithms, lossless vs lossy, and step-by-step instructions for reducing photos to 50KB for exams.",
  },
  alternates: {
    canonical: "https://roas-calculator.tech/image-compressor/guide",
  },
  robots: {
    index: false,
    follow: false,
    nocache: true,
  },
};

export default function ImageCompressionGuide() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 py-12 px-4 md:px-6">
      {/* BACK BUTTON */}
      <div className="max-w-4xl mx-auto mb-8">
        <Link
          href="/image-compressor"
          className="inline-flex items-center text-slate-500 hover:text-blue-600 transition font-medium"
        >
          <ArrowLeft size={18} className="mr-2" /> Back to Image Compressor
        </Link>
      </div>

      {/* MAIN CONTENT */}
      <main className="max-w-4xl mx-auto bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden mb-12">
        {/* HEADER */}
        <div className="bg-gradient-to-r from-slate-900 to-slate-800 p-8 md:p-12 text-white">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center">
              <Award size={28} />
            </div>
            <span className="text-sm font-bold uppercase tracking-wider text-blue-300">Expert Guide</span>
          </div>
          <h1 className="text-3xl md:text-5xl font-bold mb-4">
            The Complete Guide to Image Compression (2026)
          </h1>
          <p className="text-slate-300 text-lg max-w-2xl">
            Master image compression technology, understand JPEG algorithms, and learn how to optimize images for government forms.
          </p>
          <p className="text-slate-400 text-sm mt-6">
             15-Minute Read |  12 Detailed Sections | OK Expert Verified
          </p>
        </div>

        {/* ARTICLE CONTENT */}
        <article className="p-8 md:p-12 prose lg:prose-lg max-w-none text-slate-700 space-y-8">
          
          {/* TABLE OF CONTENTS */}
          <nav className="bg-blue-50 rounded-xl p-6 border border-blue-200">
            <h2 className="text-lg font-bold text-slate-900 mb-4"> Quick Navigation</h2>
            <div className="grid md:grid-cols-2 gap-3 text-sm">
              <a href="#what-is" className="text-blue-600 hover:underline">1. What Is Image Compression?</a>
              <a href="#formats" className="text-blue-600 hover:underline">2. JPEG vs PNG vs WebP</a>
              <a href="#algorithms" className="text-blue-600 hover:underline">3. How Compression Works</a>
              <a href="#storage" className="text-blue-600 hover:underline">4. File Size vs Resolution</a>
              <a href="#exam-requirements" className="text-blue-600 hover:underline">5. Exam Requirements 2026</a>
              <a href="#step-by-step" className="text-blue-600 hover:underline">6. Compression Tutorial</a>
              <a href="#quality" className="text-blue-600 hover:underline">7. Quality Best Practices</a>
              <a href="#troubleshooting" className="text-blue-600 hover:underline">8. Troubleshooting Guide</a>
            </div>
          </nav>

          {/* SECTION 1 */}
          <section id="what-is">
            <h2 className="text-3xl font-bold text-slate-900">What Is Image Compression?</h2>
            
            <p>
              <strong>Image compression</strong> is the process of reducing file size while maintaining (or sacrificing) visual quality. 
              It works by analyzing image data and removing redundant information before storing it.
            </p>

            <div className="bg-green-50 border-l-4 border-green-600 p-6 rounded my-4">
              <p className="font-bold text-green-900"> Key Point:</p>
              <p className="text-green-800 text-sm mt-2">
                Compression reduces FILE SIZE (storage space) but keeps dimensions (pixels) identical. A 4000x3000 image stays 4000x3000 whether it's 10MB or 50KB.
              </p>
            </div>

            <h3 className="text-xl font-bold text-slate-900 mt-6">Why Compression Matters</h3>
            
            <ul className="space-y-3 mt-4">
              <li>
                <strong>Government Forms:</strong> Portals reject uploads exceeding size limits (50KB photo, 20KB signature)
              </li>
              <li>
                <strong>Email Sharing:</strong> Most providers limit attachments to 25MB total
              </li>
              <li>
                <strong>Web Performance:</strong> Large images slow websites; Google penalizes slow sites in search rankings
              </li>
              <li>
                <strong>Mobile Data:</strong> Compressed images load faster on 4G/slower connections
              </li>
            </ul>
          </section>

          {/* SECTION 2 */}
          <section id="formats">
            <h2 className="text-3xl font-bold text-slate-900 mt-12">JPEG vs PNG vs WebP: Which Format?</h2>
            
            <h3 className="text-xl font-bold text-slate-900 mt-6"> JPEG (Joint Photographic Experts Group)</h3>
            
            <div className="grid md:grid-cols-2 gap-4 bg-slate-50 p-6 rounded-lg my-4">
              <div>
                <p className="font-bold text-green-600">OK Best for:</p>
                <ul className="text-sm space-y-1 text-slate-700 mt-2">
                  <li>- Photographs & portraits</li>
                  <li>- Government forms</li>
                  <li>- 50-500KB typical size</li>
                  <li>- 80-90% compression possible</li>
                </ul>
              </div>
              <div>
                <p className="font-bold text-red-600">X Problems:</p>
                <ul className="text-sm space-y-1 text-slate-700 mt-2">
                  <li>- Lossy (loses detail)</li>
                  <li>- Bad for text/logos</li>
                  <li>- No transparency</li>
                  <li>- Quality degrades with edits</li>
                </ul>
              </div>
            </div>

            <h3 className="text-xl font-bold text-slate-900 mt-6"> PNG (Portable Network Graphics)</h3>
            
            <div className="grid md:grid-cols-2 gap-4 bg-slate-50 p-6 rounded-lg my-4">
              <div>
                <p className="font-bold text-green-600">OK Best for:</p>
                <ul className="text-sm space-y-1 text-slate-700 mt-2">
                  <li>- Screenshots</li>
                  <li>- Logos & graphics</li>
                  <li>- Transparency needed</li>
                  <li>- Lossless (no quality loss)</li>
                </ul>
              </div>
              <div>
                <p className="font-bold text-red-600">X Problems:</p>
                <ul className="text-sm space-y-1 text-slate-700 mt-2">
                  <li>- 5-10x larger than JPEG</li>
                  <li>- Slow to load</li>
                  <li>- Rejected by govt forms</li>
                  <li>- Not ideal for photos</li>
                </ul>
              </div>
            </div>

            <p className="text-sm text-slate-600 italic mt-4">
              <strong>! Government Forms:</strong> Always use JPEG. Many portals reject PNG despite saying "JPG or PNG accepted."
            </p>
          </section>

          {/* SECTION 3 */}
          <section id="algorithms">
            <h2 className="text-3xl font-bold text-slate-900 mt-12">How Image Compression Actually Works</h2>
            
            <h3 className="text-xl font-bold text-slate-900 mt-6">Lossless vs Lossy Compression</h3>
            
            <p className="mt-4">
              <strong>Lossless:</strong> No data is removed. File can be perfectly reconstructed. (PNG, GIF)
              <br />
              <strong>Lossy:</strong> Some data is discarded that human eyes won't notice. Much better compression. (JPEG)
            </p>

            <h3 className="text-xl font-bold text-slate-900 mt-6">JPEG Compression: The Technical Deep Dive</h3>
            
            <p className="mt-4">
              JPEG uses a technique called <strong>Discrete Cosine Transform (DCT)</strong> to convert pixel data into "frequencies."
            </p>

            <ol className="list-decimal pl-5 space-y-3 mt-4">
              <li>
                <strong>Divide:</strong> Image split into 8x8 pixel blocks
              </li>
              <li>
                <strong>Transform:</strong> Each block converted from color data to frequency patterns using math
              </li>
              <li>
                <strong>Quantize:</strong> High frequencies (fine details, noise) are discarded. Low frequencies (shapes, colors) kept.
              </li>
              <li>
                <strong>Encode:</strong> Remaining data compressed using Huffman coding
              </li>
            </ol>

            <p className="text-sm text-slate-600 italic mt-4">
              Result: Can achieve 80-90% file reduction with minimal visible quality loss for portraits.
            </p>

            <h3 className="text-xl font-bold text-slate-900 mt-6">Chroma Subsampling Bonus</h3>
            
            <p className="mt-4">
              Human eyes are more sensitive to brightness than color. JPEG exploits this:
            </p>
            
            <ul className="space-y-2 mt-4">
              <li>
                <strong>4:4:4</strong> - Full color (no reduction) - 100% quality
              </li>
              <li>
                <strong>4:2:2</strong> - 50% color reduction - looks identical
              </li>
              <li>
                <strong>4:2:0</strong> - 75% color reduction - invisible to eyes, saves ~3% more
              </li>
            </ul>

            <p className="text-sm text-slate-600 italic mt-3">
              Government forms and web use 4:2:0 subsampling by default.
            </p>
          </section>

          {/* SECTION 4 */}
          <section id="storage">
            <h2 className="text-3xl font-bold text-slate-900 mt-12">File Size vs Resolution: What's the Difference?</h2>
            
            <p className="mt-4">
              Common confusion point: These are NOT the same!
            </p>

            <div className="grid md:grid-cols-2 gap-6 my-6">
              <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
                <h4 className="font-bold text-blue-900 mb-3"> Resolution (Dimensions)</h4>
                <ul className="text-sm space-y-2 text-blue-800">
                  <li>- Width x Height in pixels</li>
                  <li>- Example: 4000x3000 pixels (12MP)</li>
                  <li>- Determines visual size on screen</li>
                  <li>- Changing requires resizing tool</li>
                </ul>
              </div>
              <div className="bg-orange-50 p-6 rounded-lg border border-orange-200">
                <h4 className="font-bold text-orange-900 mb-3"> File Size (Storage)</h4>
                <ul className="text-sm space-y-2 text-orange-800">
                  <li>- Measured in KB, MB, GB</li>
                  <li>- Example: 5 MB, 50 KB, 500 B</li>
                  <li>- How much disk space it uses</li>
                  <li>- Changed via compression</li>
                </ul>
              </div>
            </div>

            <h3 className="text-xl font-bold text-slate-900 mt-6">Real Example: iPhone Photo</h3>
            
            <div className="bg-slate-50 p-6 rounded-lg border border-slate-200">
              <ul className="space-y-2">
                <li>- <strong>Dimensions:</strong> 4032 x 3024 pixels (12.2 MP)</li>
                <li>- <strong>Quality 100 JPEG:</strong> ~3 MB</li>
                <li>- <strong>Quality 65 JPEG:</strong> ~500 KB</li>
                <li>- <strong>Quality 40 JPEG:</strong> ~150 KB</li>
                <li>- <strong>Quality 20 JPEG:</strong> ~50 KB (for government forms)</li>
              </ul>
              <p className="text-sm text-slate-600 italic mt-4">
                Notice: Dimensions stay the same (4032x3024) but file size changes 60x!
              </p>
            </div>
          </section>

          {/* SECTION 5 */}
          <section id="exam-requirements">
            <h2 className="text-3xl font-bold text-slate-900 mt-12">Government Exam Requirements (2026)</h2>
            
            <p className="mt-4">
              Different exams have different specifications. Here's the master list:
            </p>

            <div className="overflow-x-auto my-6 text-xs">
              <table className="w-full border border-slate-300">
                <thead className="bg-slate-100">
                  <tr>
                    <th className="border border-slate-300 px-3 py-2 text-left font-bold">Exam</th>
                    <th className="border border-slate-300 px-3 py-2 text-left font-bold">Photo</th>
                    <th className="border border-slate-300 px-3 py-2 text-left font-bold">Signature</th>
                    <th className="border border-slate-300 px-3 py-2 text-left font-bold">Format</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-slate-300 px-3 py-2 font-semibold">SSC CGL</td>
                    <td className="border border-slate-300 px-3 py-2">20-50 KB</td>
                    <td className="border border-slate-300 px-3 py-2">10-20 KB</td>
                    <td className="border border-slate-300 px-3 py-2">JPG</td>
                  </tr>
                  <tr className="bg-slate-50">
                    <td className="border border-slate-300 px-3 py-2 font-semibold">UPSC</td>
                    <td className="border border-slate-300 px-3 py-2">20-300 KB</td>
                    <td className="border border-slate-300 px-3 py-2">20-300 KB</td>
                    <td className="border border-slate-300 px-3 py-2">JPG/PNG</td>
                  </tr>
                  <tr>
                    <td className="border border-slate-300 px-3 py-2 font-semibold">IBPS</td>
                    <td className="border border-slate-300 px-3 py-2">20-50 KB</td>
                    <td className="border border-slate-300 px-3 py-2">10-20 KB</td>
                    <td className="border border-slate-300 px-3 py-2">JPG</td>
                  </tr>
                  <tr className="bg-slate-50">
                    <td className="border border-slate-300 px-3 py-2 font-semibold">SBI</td>
                    <td className="border border-slate-300 px-3 py-2">20-50 KB</td>
                    <td className="border border-slate-300 px-3 py-2">10-20 KB</td>
                    <td className="border border-slate-300 px-3 py-2">JPG</td>
                  </tr>
                  <tr>
                    <td className="border border-slate-300 px-3 py-2 font-semibold">Railways (RRB)</td>
                    <td className="border border-slate-300 px-3 py-2">10-40 KB</td>
                    <td className="border border-slate-300 px-3 py-2">5-20 KB</td>
                    <td className="border border-slate-300 px-3 py-2">JPG</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="bg-red-50 border-l-4 border-red-600 p-6 rounded mt-6">
              <p className="font-bold text-red-900">! Critical Warning:</p>
              <ul className="text-red-800 text-sm space-y-2 mt-2">
                <li>- SSC, IBPS, Railways are STRICT about size limits</li>
                <li>- Even 1 KB over = automatic rejection</li>
                <li>- Convert PNG to JPG (many portals reject PNG despite claims)</li>
                <li>- Test upload 24 hours before deadline</li>
              </ul>
            </div>
          </section>

          {/* SECTION 6 */}
          <section id="step-by-step">
            <h2 className="text-3xl font-bold text-slate-900 mt-12">Step-by-Step: Compress Your Image</h2>
            
            <h3 className="text-xl font-bold text-slate-900 mt-6">Step 1: Take a Good Photo</h3>
            <ul className="list-disc pl-5 space-y-2 mt-3">
              <li>Natural lighting (outdoor or bright indoors)</li>
              <li>Plain background (white or light color)</li>
              <li>Face directly to camera</li>
              <li>Sharp focus on your face</li>
            </ul>

            <h3 className="text-xl font-bold text-slate-900 mt-6">Step 2: Upload to Our Tool</h3>
            <ol className="list-decimal pl-5 space-y-2 mt-3">
              <li>Go to <Link href="/image-compressor" className="text-blue-600 hover:underline">/image-compressor</Link></li>
              <li>Click upload or drag your photo</li>
              <li>Tool auto-starts compressing</li>
            </ol>

            <h3 className="text-xl font-bold text-slate-900 mt-6">Step 3: Set Target Size</h3>
            <div className="bg-blue-50 p-4 rounded mt-3">
              <p className="text-sm font-mono">
                - 50 KB limit? Enter: <strong>0.05</strong><br />
                - 20 KB limit? Enter: <strong>0.02</strong><br />
                - 100 KB limit? Enter: <strong>0.1</strong>
              </p>
            </div>

            <h3 className="text-xl font-bold text-slate-900 mt-6">Step 4: Preview & Download</h3>
            <ol className="list-decimal pl-5 space-y-2 mt-3">
              <li>Click the Eye icon to preview</li>
              <li>Check if face is clear and natural</li>
              <li>If too blurry, increase target size slightly</li>
              <li>Click Download to save compressed image</li>
            </ol>

            <h3 className="text-xl font-bold text-slate-900 mt-6">Step 5: Verify Size & Test Upload</h3>
            <ol className="list-decimal pl-5 space-y-2 mt-3">
              <li>Right-click downloaded file &rarr; Properties</li>
              <li>Confirm file size is below exam limit</li>
              <li>Test upload to portal 24 hours before deadline</li>
              <li>If rejected, re-compress with lower target size</li>
            </ol>
          </section>

          {/* SECTION 7 */}
          <section id="quality">
            <h2 className="text-3xl font-bold text-slate-900 mt-12">Maintaining Quality While Compressing</h2>
            
            <h3 className="text-xl font-bold text-slate-900 mt-6">Quality Tiers</h3>
            
            <div className="space-y-4 mt-6">
              <div className="border-l-4 border-green-600 bg-green-50 p-4 rounded">
                <h4 className="font-bold text-green-900">OK Excellent (50-100 KB)</h4>
                <p className="text-green-800 text-sm mt-1">Barely noticeable compression. Perfect for HD photos. Facial features remain sharp.</p>
              </div>

              <div className="border-l-4 border-blue-600 bg-blue-50 p-4 rounded">
                <h4 className="font-bold text-blue-900">OK Good (20-50 KB)</h4>
                <p className="text-blue-800 text-sm mt-1">Slight blockiness when zoomed in, but acceptable for government forms. Features remain clear.</p>
              </div>

              <div className="border-l-4 border-orange-600 bg-orange-50 p-4 rounded">
                <h4 className="font-bold text-orange-900">! Fair (10-20 KB)</h4>
                <p className="text-orange-800 text-sm mt-1">Visible compression artifacts. Only use for strict size limits. Face still recognizable.</p>
              </div>

              <div className="border-l-4 border-red-600 bg-red-50 p-4 rounded">
                <h4 className="font-bold text-red-900">X Poor (1-10 KB)</h4>
                <p className="text-red-800 text-sm mt-1">Extreme pixelation. Avoid unless absolutely required. Risk of rejection.</p>
              </div>
            </div>

            <h3 className="text-xl font-bold text-slate-900 mt-8">Pro Tips for Better Quality</h3>
            
            <ol className="list-decimal pl-5 space-y-3 mt-4">
              <li><strong>High-quality source:</strong> Well-lit, sharp original photo compresses better</li>
              <li><strong>Solid backgrounds:</strong> White/light backgrounds compress 10x better than textured ones</li>
              <li><strong>Increase target size slightly:</strong> If blurry, try 0.025 instead of 0.02</li>
              <li><strong>Never re-compress:</strong> Use original photo, not previously compressed JPEG</li>
              <li><strong>Tight crops:</strong> Remove extra background to improve compression ratio</li>
            </ol>
          </section>

          {/* SECTION 8 */}
          <section id="troubleshooting">
            <h2 className="text-3xl font-bold text-slate-900 mt-12">Troubleshooting Common Issues</h2>
            
            <details className="group border border-slate-200 rounded-lg p-4 mb-4 cursor-pointer bg-white hover:bg-slate-50">
              <summary className="font-bold text-slate-900 list-none flex justify-between items-center">
                <span>? Compressed image is still too large</span>
                <span className="transition-transform duration-300 group-open:rotate-180">v</span>
              </summary>
              <div className="mt-3 text-slate-700 space-y-2 text-sm">
                <p><strong>Solution 1:</strong> Lower target size further (e.g., from 0.02 to 0.018)</p>
                <p><strong>Solution 2:</strong> Original image has extreme detail (busy background). Crop or blur background first.</p>
                <p><strong>Solution 3:</strong> If PNG, convert to JPG first. PNG files are 3-5x larger.</p>
              </div>
            </details>

            <details className="group border border-slate-200 rounded-lg p-4 mb-4 cursor-pointer bg-white hover:bg-slate-50">
              <summary className="font-bold text-slate-900 list-none flex justify-between items-center">
                <span>? Image looks too blurry after compression</span>
                <span className="transition-transform duration-300 group-open:rotate-180">v</span>
              </summary>
              <div className="mt-3 text-slate-700 space-y-2 text-sm">
                <p><strong>Cause:</strong> Target size is too aggressive</p>
                <p><strong>Solution:</strong> Increase target size. If 20 KB looks bad, try 30 KB. Forms specify maximum, not exact size.</p>
                <p><strong>Prevention:</strong> Take cleaner photos with plain backgrounds and good lighting.</p>
              </div>
            </details>

            <details className="group border border-slate-200 rounded-lg p-4 mb-4 cursor-pointer bg-white hover:bg-slate-50">
              <summary className="font-bold text-slate-900 list-none flex justify-between items-center">
                <span>? Tool doesn't work / download button broken</span>
                <span className="transition-transform duration-300 group-open:rotate-180">v</span>
              </summary>
              <div className="mt-3 text-slate-700 space-y-2 text-sm">
                <p><strong>Check 1:</strong> Use modern browser (Chrome 90+, Safari 14+)</p>
                <p><strong>Check 2:</strong> Disable pop-up blockers and download blockers</p>
                <p><strong>Check 3:</strong> Try Incognito/Private mode to bypass extensions</p>
                <p><strong>Check 4:</strong> Refresh page and clear browser cache</p>
              </div>
            </details>

            <details className="group border border-slate-200 rounded-lg p-4 mb-4 cursor-pointer bg-white hover:bg-slate-50">
              <summary className="font-bold text-slate-900 list-none flex justify-between items-center">
                <span>? Portal rejects compressed photo despite meeting size requirement</span>
                <span className="transition-transform duration-300 group-open:rotate-180">v</span>
              </summary>
              <div className="mt-3 text-slate-700 space-y-2 text-sm">
                <p><strong>Issue:</strong> File size is OK, but other requirements aren't met</p>
                <p><strong>Check dimensions:</strong> Some forms require 200x250 or 3.5x4.5 cm. Use a photo editor to resize.</p>
                <p><strong>Check format:</strong> Some portals reject PNG. Convert to JPG.</p>
                <p><strong>Check background:</strong> Some exams require white background. Take a new photo or edit background.</p>
                <p><strong>Check filename:</strong> Avoid special characters. Use "photo.jpg", not "my@photo(1).jpg"</p>
              </div>
            </details>
          </section>

          {/* FINAL CTA */}
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-8 border border-blue-200 mt-12">
            <h3 className="text-xl font-bold text-slate-900 mb-3">Ready to compress your image?</h3>
            <p className="text-slate-700 mb-4">
              Use our free image compressor tool to reduce your photo to any size you need-instantly, offline, and 100% private.
            </p>
            <Link 
              href="/image-compressor"
              className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
            >
              Go to Image Compressor Tool
            </Link>
          </div>
        </article>
      </main>
    </div>
  );
}
