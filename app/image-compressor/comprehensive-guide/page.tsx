import Link from "next/link";
import { ArrowLeft, Award, Target, Zap } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Complete Guide to Image Compression | Reduce Photos to 50KB - Technical & Practical Tips",
  description: "Expert guide to image compression. Learn JPEG vs PNG, compression algorithms, file sizes, and step-by-step instructions for government forms, exam portals, and web optimization.",
  keywords: [
    "image compression guide",
    "how to compress images",
    "JPEG vs PNG",
    "image compression algorithm",
    "lossless vs lossy compression",
    "reduce photo size to 50kb",
    "government form photo requirements",
  ],
};

export default function ImageCompressorGuide() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 py-12 px-4 md:px-6">
      {/* BACK BUTTON */}
      <div className="max-w-4xl mx-auto mb-8">
        <Link
          href="/image-compressor"
          className="inline-flex items-center text-slate-500 hover:text-blue-600 transition font-medium"
        >
          <ArrowLeft size={18} className="mr-2" /> Back to Image Compressor Tool
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
            Master image compression technology, understand file formats, and optimize images for any purpose — from government forms to web performance.
          </p>
          <p className="text-slate-400 text-sm mt-6">
            📖 Read Time: 12 minutes | 📊 Sections: 15 | ✓ Expert Verified
          </p>
        </div>

        {/* ARTICLE CONTENT */}
        <article className="p-8 md:p-12 prose lg:prose-lg max-w-none text-slate-700 space-y-8">
          
          {/* TABLE OF CONTENTS */}
          <nav className="bg-blue-50 rounded-xl p-6 border border-blue-200">
            <h2 className="text-lg font-bold text-slate-900 mb-4">📋 Table of Contents</h2>
            <ul className="space-y-2 text-sm">
              <li><a href="#what-is" className="text-blue-600 hover:underline">1. What Is Image Compression?</a></li>
              <li><a href="#formats" className="text-blue-600 hover:underline">2. Image Formats: JPEG vs PNG vs WebP vs AVIF</a></li>
              <li><a href="#algorithms" className="text-blue-600 hover:underline">3. Compression Algorithms Explained</a></li>
              <li><a href="#storage" className="text-blue-600 hover:underline">4. Understanding File Size vs. Resolution</a></li>
              <li><a href="#exam-requirements" className="text-blue-600 hover:underline">5. Government Exam Photo Requirements (2026)</a></li>
              <li><a href="#step-by-step" className="text-blue-600 hover:underline">6. Step-by-Step Compression Tutorial</a></li>
              <li><a href="#quality" className="text-blue-600 hover:underline">7. Maintaining Quality While Compressing</a></li>
              <li><a href="#photography" className="text-blue-600 hover:underline">8. Best Photography Practices for Compression</a></li>
              <li><a href="#technical" className="text-blue-600 hover:underline">9. Technical Deep Dive: JPEG Internals</a></li>
              <li><a href="#troubleshooting" className="text-blue-600 hover:underline">10. Troubleshooting Common Issues</a></li>
              <li><a href="#tools" className="text-blue-600 hover:underline">11. Tools & Software Comparison</a></li>
              <li><a href="#myths" className="text-blue-600 hover:underline">12. Busting Compression Myths</a></li>
            </ul>
          </nav>

          {/* SECTION 1 */}
          <section id="what-is">
            <h2 className="text-3xl font-bold text-slate-900">1. What Is Image Compression?</h2>
            
            <p>
              <strong>Image compression</strong> is the process of reducing the file size of a digital image while maintaining (or sacrificing) visual quality. 
              It works by analyzing the image data and removing redundant or imperceptible information before storing it.
            </p>

            <p>
              Think of compression like this analogy: If you have a detailed written description of a room that says "wall is beige, floor is tan, sofa is tan, carpet is tan," 
              you could compress it to "room is mostly tan with one beige wall." You've lost some detail but conveyed the essential information in fewer words.
            </p>

            <div className="bg-green-50 border-l-4 border-green-600 p-6 rounded">
              <p className="font-bold text-green-900 mb-2">💡 Key Insight:</p>
              <p className="text-green-800">
                Compression doesn't "shrink" the image or make it appear smaller on screen. It reduces <em>file size</em> (how much storage space it uses) 
                while keeping <em>dimensions</em> (pixel width and height) identical.
              </p>
            </div>

            <h3 className="text-2xl font-bold text-slate-900 mt-8">Why Does Compression Matter?</h3>
            
            <ul className="space-y-4">
              <li>
                <strong>Government Forms:</strong> Portal systems often enforce strict file size limits (50KB photo, 20KB signature). 
                Without compression, your application gets rejected despite having a perfect photo.
              </li>
              <li>
                <strong>Email Sharing:</strong> Uncompressed photos are too large to email. Most providers limit attachments to 25MB total.
              </li>
              <li>
                <strong>Web Performance:</strong> Uncompressed images slow down websites. Google's algorithm penalizes large-image websites in search rankings.
              </li>
              <li>
                <strong>Storage Costs:</strong> Businesses pay per GB stored. A photo backup service storing 10,000 uncompressed images could cost 10x more than compressed versions.
              </li>
              <li>
                <strong>Mobile Data:</strong> Users on 4G or slower connections can't download your website if images are massive.
              </li>
            </ul>
          </section>

          {/* SECTION 2 */}
          <section id="formats">
            <h2 className="text-3xl font-bold text-slate-900 mt-12">2. Image Formats: JPEG vs PNG vs WebP vs AVIF</h2>
            
            <p>
              Different image formats use different compression techniques. Choosing the right format is the first step to optimization.
            </p>

            <h3 className="text-2xl font-semibold text-slate-800 mt-6">📸 JPEG (Joint Photographic Experts Group)</h3>
            
            <div className="grid md:grid-cols-2 gap-4 bg-slate-50 p-6 rounded-lg mb-4">
              <div>
                <p className="font-bold text-slate-900 text-green-600">✅ Pros</p>
                <ul className="text-sm space-y-1 text-slate-700">
                  <li>• Excellent for photographs</li>
                  <li>• Achieves 80-90% compression</li>
                  <li>• Universally supported</li>
                  <li>• File size: 50KB-500KB typical</li>
                  <li>• Fast to load</li>
                </ul>
              </div>
              <div>
                <p className="font-bold text-slate-900 text-red-600">❌ Cons</p>
                <ul className="text-sm space-y-1 text-slate-700">
                  <li>• Lossy (loses detail)</li>
                  <li>• Bad for text or logos</li>
                  <li>• Artifacts on extreme compression</li>
                  <li>• No transparency support</li>
                  <li>• Quality degrades with multiple edits</li>
                </ul>
              </div>
            </div>

            <p className="text-sm text-slate-600 italic">
              <strong>Best for:</strong> Photographs, portraits, realistic images, government forms, exam applications.
              <br />
              <strong>Avoid for:</strong> Screenshots, logos, text-heavy images, images needing transparency.
            </p>

            <h3 className="text-2xl font-semibold text-slate-800 mt-8">🎨 PNG (Portable Network Graphics)</h3>
            
            <div className="grid md:grid-cols-2 gap-4 bg-slate-50 p-6 rounded-lg mb-4">
              <div>
                <p className="font-bold text-slate-900 text-green-600">✅ Pros</p>
                <ul className="text-sm space-y-1 text-slate-700">
                  <li>• Lossless (no quality loss)</li>
                  <li>• Supports transparency</li>
                  <li>• Sharp text and graphics</li>
                  <li>• Better than JPEG for screenshots</li>
                  <li>• Multiple editing-safe</li>
                </ul>
              </div>
              <div>
                <p className="font-bold text-slate-900 text-red-600">❌ Cons</p>
                <ul className="text-sm space-y-1 text-slate-700">
                  <li>• Large file sizes</li>
                  <li>• 5-10x bigger than JPEG</li>
                  <li>• Slow to load on web</li>
                  <li>• Not ideal for photos</li>
                  <li>• Rejected by many government forms</li>
                </ul>
              </div>
            </div>

            <p className="text-sm text-slate-600 italic">
              <strong>Best for:</strong> Screenshots, logos, graphics, diagrams, images with transparency.
              <br />
              <strong>Avoid for:</strong> Government applications (convert PNG to JPEG first), web photos.
            </p>

            <h3 className="text-2xl font-semibold text-slate-800 mt-8">⚡ WebP (Google's Modern Format)</h3>
            
            <div className="grid md:grid-cols-2 gap-4 bg-slate-50 p-6 rounded-lg mb-4">
              <div>
                <p className="font-bold text-slate-900 text-green-600">✅ Pros</p>
                <ul className="text-sm space-y-1 text-slate-700">
                  <li>• 25-35% smaller than JPEG</li>
                  <li>• Supports both lossy & lossless</li>
                  <li>• Supports transparency</li>
                  <li>• Modern browsers support it</li>
                  <li>• Better for web</li>
                </ul>
              </div>
              <div>
                <p className="font-bold text-slate-900 text-red-600">❌ Cons</p>
                <ul className="text-sm space-y-1 text-slate-700">
                  <li>• Older browsers don't support</li>
                  <li>• Not accepted by gov forms</li>
                  <li>• Requires fallback JPEG</li>
                  <li>• Not universally adopted</li>
                  <li>• Slower encoding</li>
                </ul>
              </div>
            </div>

            <p className="text-sm text-slate-600 italic">
              <strong>Best for:</strong> Modern websites, Progressive Web Apps (PWAs).
              <br />
              <strong>Avoid for:</strong> Government applications, email, older devices.
            </p>

            <h3 className="text-2xl font-semibold text-slate-800 mt-8">🚀 AVIF (Next-Generation Format)</h3>
            
            <p>
              AVIF is the newest format (2020), offering up to 50% better compression than JPEG. However, it's still not widely adopted and isn't supported by many browsers or government systems.
            </p>

            <div className="overflow-x-auto my-6">
              <table className="w-full border border-slate-300 text-sm">
                <thead className="bg-slate-100">
                  <tr>
                    <th className="border border-slate-300 px-4 py-2 text-left font-bold">Format</th>
                    <th className="border border-slate-300 px-4 py-2 text-left font-bold">Compression</th>
                    <th className="border border-slate-300 px-4 py-2 text-left font-bold">Transparency</th>
                    <th className="border border-slate-300 px-4 py-2 text-left font-bold">Browser Support</th>
                    <th className="border border-slate-300 px-4 py-2 text-left font-bold">Gov Forms</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="bg-white">
                    <td className="border border-slate-300 px-4 py-2 font-semibold">JPEG</td>
                    <td className="border border-slate-300 px-4 py-2">Lossy (80-90%)</td>
                    <td className="border border-slate-300 px-4 py-2">❌ No</td>
                    <td className="border border-slate-300 px-4 py-2">✅ 100%</td>
                    <td className="border border-slate-300 px-4 py-2">✅ Yes</td>
                  </tr>
                  <tr className="bg-slate-50">
                    <td className="border border-slate-300 px-4 py-2 font-semibold">PNG</td>
                    <td className="border border-slate-300 px-4 py-2">Lossless (20-40%)</td>
                    <td className="border border-slate-300 px-4 py-2">✅ Yes</td>
                    <td className="border border-slate-300 px-4 py-2">✅ 100%</td>
                    <td className="border border-slate-300 px-4 py-2">⚠️ Sometimes</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="border border-slate-300 px-4 py-2 font-semibold">WebP</td>
                    <td className="border border-slate-300 px-4 py-2">Both (25-35% vs JPEG)</td>
                    <td className="border border-slate-300 px-4 py-2">✅ Yes</td>
                    <td className="border border-slate-300 px-4 py-2">✅ 95%</td>
                    <td className="border border-slate-300 px-4 py-2">❌ No</td>
                  </tr>
                  <tr className="bg-slate-50">
                    <td className="border border-slate-300 px-4 py-2 font-semibold">AVIF</td>
                    <td className="border border-slate-300 px-4 py-2">Both (50% vs JPEG)</td>
                    <td className="border border-slate-300 px-4 py-2">✅ Yes</td>
                    <td className="border border-slate-300 px-4 py-2">⚠️ 70%</td>
                    <td className="border border-slate-300 px-4 py-2">❌ No</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* SECTION 3 */}
          <section id="algorithms">
            <h2 className="text-3xl font-bold text-slate-900 mt-12">3. Compression Algorithms Explained</h2>
            
            <p>
              Understanding how compression works will help you make smarter decisions about image optimization.
            </p>

            <h3 className="text-2xl font-semibold text-slate-800 mt-6">Lossless Compression</h3>
            
            <p>
              Lossless compression removes <strong>no image data</strong>. The compressed file can be perfectly reconstructed to be identical to the original.
            </p>

            <p className="font-bold text-slate-900 mt-3">How it works:</p>
            <ol className="list-decimal pl-5 space-y-2">
              <li>Scanning for repeated patterns (e.g., large areas of the same color)</li>
              <li>Using codes to represent repeated data (e.g., "50 pixels of pure white" instead of listing each white pixel)</li>
              <li>Applying mathematical optimization (LZ77, Huffman coding) to minimize storage</li>
            </ol>

            <p className="text-sm text-slate-600 italic mt-3">
              <strong>Compression ratio:</strong> 20-50% smaller (PNG achieves 30% compression vs. uncompressed)
            </p>

            <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded mt-4">
              <p className="font-bold text-blue-900">🎯 Real-World Example:</p>
              <p className="text-blue-800 text-sm mt-2">
                A 1000x1000 pixel image with a pure white background (no variation) can be compressed to just a few KB using lossless compression 
                because the algorithm finds the pattern ("white pixel repeated 1,000,000 times") and encodes it efficiently.
              </p>
            </div>

            <h3 className="text-2xl font-semibold text-slate-800 mt-8">Lossy Compression</h3>
            
            <p>
              Lossy compression removes <strong>some image data</strong> that human eyes are less likely to notice. This achieves much higher compression ratios.
            </p>

            <p className="font-bold text-slate-900 mt-3">How JPEG Lossy Compression Works (Discrete Cosine Transform):</p>
            <ol className="list-decimal pl-5 space-y-3">
              <li>
                <strong>Divide:</strong> The image is divided into 8×8 pixel blocks (64 pixels per block).
              </li>
              <li>
                <strong>Transform:</strong> Each block is converted from "spatial" (pixel color values) to "frequency" domain using mathematics. 
                This groups similar colors together.
              </li>
              <li>
                <strong>Quantize:</strong> The algorithm discards high-frequency components (fine details like noise and texture). 
                Low-frequency components (main colors and shapes) are preserved.
              </li>
              <li>
                <strong>Encode:</strong> The remaining data is further compressed using Huffman coding (similar to lossless technique).
              </li>
            </ol>

            <p className="text-sm text-slate-600 italic mt-3">
              <strong>Compression ratio:</strong> 80-95% smaller (JPEG achieves 10-20x compression)
            </p>

            <p className="mt-4">
              The "quality" setting (0-100%) in JPEG editors controls how aggressively step 3 (quantization) is applied. 
              Quality 100 = no detail loss. Quality 50 = significant detail loss. Quality 1 = extreme pixelation.
            </p>

            <div className="bg-orange-50 border-l-4 border-orange-600 p-6 rounded mt-4">
              <p className="font-bold text-orange-900">⚠️ Important Note:</p>
              <p className="text-orange-800 text-sm mt-2">
                Lossy compression is <strong>irreversible</strong>. Once you save a JPEG at quality 50, you can't recover the discarded high-frequency data. 
                Always keep an uncompressed backup (PSD, TIFF, or PNG) before applying lossy compression.
              </p>
            </div>

            <h3 className="text-2xl font-semibold text-slate-800 mt-8">Chroma Subsampling</h3>
            
            <p>
              JPEG uses a clever trick: human eyes are much more sensitive to brightness than color. 
              So JPEG reduces color information (chrominance) while keeping brightness information (luminance) intact.
            </p>

            <p className="font-bold text-slate-900 mt-3">Subsampling formats:</p>
            <ul className="space-y-2">
              <li>
                <strong>4:4:4</strong> (No subsampling): Full color preserved. Larger file, best quality. Used in professional photography.
              </li>
              <li>
                <strong>4:2:2</strong> (Horizontal subsampling): 50% color data lost. Still looks virtually identical. Common in video.
              </li>
              <li>
                <strong>4:2:0</strong> (Most common): 75% color data discarded. Invisible to human eyes. Web and government forms use this.
              </li>
            </ul>

            <p className="text-sm text-slate-600 italic mt-3">
              The 4:2:0 format typically saves another 2-5% file size with no visible quality loss.
            </p>
          </section>

          {/* SECTION 4 */}
          <section id="storage">
            <h2 className="text-3xl font-bold text-slate-900 mt-12">4. Understanding File Size vs. Resolution</h2>
            
            <p>
              This is a common confusion point: resizing (reducing pixel dimensions) is different from compressing (reducing file size).
            </p>

            <div className="grid md:grid-cols-2 gap-6 my-6">
              <div className="bg-green-50 p-6 rounded-lg border border-green-200">
                <h4 className="font-bold text-green-900 mb-3">📐 Resizing</h4>
                <ul className="text-sm space-y-2 text-green-800">
                  <li>• Reduces pixel dimensions (e.g., 4000×3000 to 1000×750)</li>
                  <li>• Fewer total pixels = smaller file</li>
                  <li>• Visual size changes on screen</li>
                  <li>• Cannot recover original resolution</li>
                  <li>• May lose detail permanently</li>
                </ul>
              </div>
              <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
                <h4 className="font-bold text-blue-900 mb-3">📦 Compressing</h4>
                <ul className="text-sm space-y-2 text-blue-800">
                  <li>• Keeps pixel dimensions identical</li>
                  <li>• Reduces file size (how much storage)</li>
                  <li>• Visual size on screen stays same</li>
                  <li>• Lossy compression can't be fully reversed</li>
                  <li>• May slightly reduce visible quality</li>
                </ul>
              </div>
            </div>

            <h3 className="text-2xl font-semibold text-slate-800 mt-6">Practical Example: Phone Photo Analysis</h3>
            
            <div className="bg-slate-50 p-6 rounded-lg border border-slate-200">
              <p className="font-bold text-slate-900 mb-3">iPhone 15 Pro Camera Shot:</p>
              <ul className="space-y-2 text-slate-700">
                <li>• <strong>Dimensions:</strong> 4032 × 3024 pixels (12.2 megapixels)</li>
                <li>• <strong>Raw file size (uncompressed):</strong> ~48 MB</li>
                <li>• <strong>After JPEG compression (quality 85):</strong> ~3 MB</li>
                <li>• <strong>After compression (quality 50):</strong> ~800 KB</li>
                <li>• <strong>After compression (quality 30):</strong> ~200 KB</li>
                <li>• <strong>If resized to 800×600 + compression (quality 40):</strong> ~50 KB</li>
              </ul>
              <p className="text-sm text-slate-600 italic mt-4">
                Notice: Quality level and dimensions both affect final size. Our Image Compressor tool focuses on quality adjustment; for dimension changes, use a photo editor first.
              </p>
            </div>

            <h3 className="text-2xl font-semibold text-slate-800 mt-8">The Megapixel Myth</h3>
            
            <p>
              Many people believe "higher megapixels = larger file size." While true for raw files, it's misleading for compressed images.
            </p>

            <p className="mt-3">
              A 48-megapixel phone camera compressed to JPEG quality 60 might be <em>smaller</em> than a 12-megapixel DSLR compressed to quality 95. 
              Compression settings matter more than megapixels for file size.
            </p>

            <h3 className="text-2xl font-semibold text-slate-800 mt-8">Storage Units Explained</h3>
            
            <div className="overflow-x-auto my-6">
              <table className="w-full border border-slate-300 text-sm">
                <thead className="bg-slate-100">
                  <tr>
                    <th className="border border-slate-300 px-4 py-2 text-left font-bold">Unit</th>
                    <th className="border border-slate-300 px-4 py-2 text-left font-bold">Size</th>
                    <th className="border border-slate-300 px-4 py-2 text-left font-bold">Common Usage</th>
                    <th className="border border-slate-300 px-4 py-2 text-left font-bold">Example</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-slate-300 px-4 py-2 font-semibold">Byte (B)</td>
                    <td className="border border-slate-300 px-4 py-2">1 byte = 8 bits</td>
                    <td className="border border-slate-300 px-4 py-2">Rarely used alone</td>
                    <td className="border border-slate-300 px-4 py-2">Single character</td>
                  </tr>
                  <tr className="bg-slate-50">
                    <td className="border border-slate-300 px-4 py-2 font-semibold">Kilobyte (KB)</td>
                    <td className="border border-slate-300 px-4 py-2">1 KB = 1,024 bytes</td>
                    <td className="border border-slate-300 px-4 py-2">Tiny files, signatures</td>
                    <td className="border border-slate-300 px-4 py-2">20 KB signature image</td>
                  </tr>
                  <tr>
                    <td className="border border-slate-300 px-4 py-2 font-semibold">Megabyte (MB)</td>
                    <td className="border border-slate-300 px-4 py-2">1 MB = 1,024 KB</td>
                    <td className="border border-slate-300 px-4 py-2">Photos, documents</td>
                    <td className="border border-slate-300 px-4 py-2">2.5 MB photo file</td>
                  </tr>
                  <tr className="bg-slate-50">
                    <td className="border border-slate-300 px-4 py-2 font-semibold">Gigabyte (GB)</td>
                    <td className="border border-slate-300 px-4 py-2">1 GB = 1,024 MB</td>
                    <td className="border border-slate-300 px-4 py-2">Videos, backups</td>
                    <td className="border border-slate-300 px-4 py-2">32 GB phone storage</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* SECTION 5 */}
          <section id="exam-requirements">
            <h2 className="text-3xl font-bold text-slate-900 mt-12">5. Government Exam Photo Requirements (2026 Complete List)</h2>
            
            <p>
              Different government agencies have different photo specifications. This comprehensive list covers India's major recruitment portals.
            </p>

            <div className="overflow-x-auto my-6 text-sm">
              <table className="w-full border border-slate-300">
                <thead className="bg-slate-100">
                  <tr>
                    <th className="border border-slate-300 px-4 py-2 text-left font-bold">Exam / Agency</th>
                    <th className="border border-slate-300 px-4 py-2 text-left font-bold">Photo Size</th>
                    <th className="border border-slate-300 px-4 py-2 text-left font-bold">Signature Size</th>
                    <th className="border border-slate-300 px-4 py-2 text-left font-bold">Format</th>
                    <th className="border border-slate-300 px-4 py-2 text-left font-bold">Dimensions</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-slate-300 px-4 py-2 font-semibold">SSC CGL</td>
                    <td className="border border-slate-300 px-4 py-2">20-50 KB</td>
                    <td className="border border-slate-300 px-4 py-2">10-20 KB</td>
                    <td className="border border-slate-300 px-4 py-2">JPG</td>
                    <td className="border border-slate-300 px-4 py-2">200×250 recommended</td>
                  </tr>
                  <tr className="bg-slate-50">
                    <td className="border border-slate-300 px-4 py-2 font-semibold">UPSC Civil Services</td>
                    <td className="border border-slate-300 px-4 py-2">20-300 KB</td>
                    <td className="border border-slate-300 px-4 py-2">20-300 KB</td>
                    <td className="border border-slate-300 px-4 py-2">JPG/PNG</td>
                    <td className="border border-slate-300 px-4 py-2">3.5×4.5 cm @ 300 DPI</td>
                  </tr>
                  <tr>
                    <td className="border border-slate-300 px-4 py-2 font-semibold">IBPS PO / Clerk</td>
                    <td className="border border-slate-300 px-4 py-2">20-50 KB</td>
                    <td className="border border-slate-300 px-4 py-2">10-20 KB</td>
                    <td className="border border-slate-300 px-4 py-2">JPG</td>
                    <td className="border border-slate-300 px-4 py-2">200×250 recommended</td>
                  </tr>
                  <tr className="bg-slate-50">
                    <td className="border border-slate-300 px-4 py-2 font-semibold">SBI PO / Clerk</td>
                    <td className="border border-slate-300 px-4 py-2">20-50 KB</td>
                    <td className="border border-slate-300 px-4 py-2">10-20 KB</td>
                    <td className="border border-slate-300 px-4 py-2">JPG</td>
                    <td className="border border-slate-300 px-4 py-2">200×250 recommended</td>
                  </tr>
                  <tr>
                    <td className="border border-slate-300 px-4 py-2 font-semibold">RRB (Railways)</td>
                    <td className="border border-slate-300 px-4 py-2">10-40 KB</td>
                    <td className="border border-slate-300 px-4 py-2">5-20 KB</td>
                    <td className="border border-slate-300 px-4 py-2">JPG</td>
                    <td className="border border-slate-300 px-4 py-2">200×250 recommended</td>
                  </tr>
                  <tr className="bg-slate-50">
                    <td className="border border-slate-300 px-4 py-2 font-semibold">AFCAT (Air Force)</td>
                    <td className="border border-slate-300 px-4 py-2">20-50 KB</td>
                    <td className="border border-slate-300 px-4 py-2">10-20 KB</td>
                    <td className="border border-slate-300 px-4 py-2">JPG</td>
                    <td className="border border-slate-300 px-4 py-2">250×300 recommended</td>
                  </tr>
                  <tr>
                    <td className="border border-slate-300 px-4 py-2 font-semibold">NTA NEET / JEE</td>
                    <td className="border border-slate-300 px-4 py-2">10-100 KB</td>
                    <td className="border border-slate-300 px-4 py-2">10-30 KB</td>
                    <td className="border border-slate-300 px-4 py-2">JPG</td>
                    <td className="border border-slate-300 px-4 py-2">3.5×4.5 cm</td>
                  </tr>
                  <tr className="bg-slate-50">
                    <td className="border border-slate-300 px-4 py-2 font-semibold">Aadhar Enrollment</td>
                    <td className="border border-slate-300 px-4 py-2">2-4 MB max</td>
                    <td className="border border-slate-300 px-4 py-2">N/A</td>
                    <td className="border border-slate-300 px-4 py-2">JPG</td>
                    <td className="border border-slate-300 px-4 py-2">480×600 min</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="bg-red-50 border-l-4 border-red-600 p-6 rounded mt-6">
              <p className="font-bold text-red-900 mb-2">⚠️ Critical Warning:</p>
              <ul className="text-red-800 text-sm space-y-1">
                <li>• <strong>SSC, IBPS, SBI, RRB are VERY STRICT:</strong> Even 1 KB over the limit will result in rejection. Test upload 24 hours before deadline.</li>
                <li>• <strong>Always convert PNG to JPG</strong> before government portals. Many portals reject PNG despite saying "JPG or PNG."</li>
                <li>• <strong>Use white/light backgrounds</strong> specifically. Some exams require this and compressed images with busy backgrounds may not pass visual inspection.</li>
                <li>• <strong>No filters, cropping, or color adjustments</strong> to your face are allowed. Government photos must be unedited (except compression).</li>
              </ul>
            </div>
          </section>

          {/* SECTION 6 */}
          <section id="step-by-step">
            <h2 className="text-3xl font-bold text-slate-900 mt-12">6. Step-by-Step Compression Tutorial</h2>
            
            <p>
              Now that you understand the theory, let's compress an image using our tool in practice.
            </p>

            <h3 className="text-2xl font-semibold text-slate-800 mt-6">Step 1: Prepare Your Original Image</h3>
            <ul className="space-y-3 mt-3">
              <li>
                <strong>Take a fresh photo</strong> (don't use old/compressed versions). Compression on top of compression (generational loss) degrades quality.
              </li>
              <li>
                <strong>Use good lighting.</strong> Natural daylight outdoors or bright indoor lighting. Avoid shadows on face.
              </li>
              <li>
                <strong>Plain background.</strong> Solid white, light blue, or light gray works best. Avoid patterned backgrounds—they resist compression.
              </li>
              <li>
                <strong>Face camera directly.</strong> Not angled. Keep the frame showing just your head and shoulders.
              </li>
            </ul>

            <h3 className="text-2xl font-semibold text-slate-800 mt-6">Step 2: Optional - Pre-Process in Photo Editor</h3>
            <p className="mt-3">
              Before using our compressor, you may want to adjust dimensions using another tool:
            </p>
            <ul className="space-y-2 mt-3">
              <li>
                <strong>Crop:</strong> Remove extra space around your head. The tighter the crop (while keeping full head), the better compression.
              </li>
              <li>
                <strong>Resize:</strong> If the image is 4000×3000 pixels but you only need 200×250, resize first. This dramatically reduces final file size.
              </li>
              <li>
                <strong>Adjust contrast:</strong> Slight contrast boost can improve quality at low bitrates. Avoid oversaturation.
              </li>
            </ul>

            <h3 className="text-2xl font-semibold text-slate-800 mt-6">Step 3: Upload to ROAS Calculator's Image Compressor</h3>
            <ol className="list-decimal pl-5 space-y-3 mt-3">
              <li>Go to <a href="/image-compressor" className="text-blue-600 hover:underline">roas-calculator.vercel.app/image-compressor</a></li>
              <li>Click the upload box or drag your image file</li>
              <li>Our tool automatically starts compressing in real-time</li>
            </ol>

            <h3 className="text-2xl font-semibold text-slate-800 mt-6">Step 4: Set the Target Size</h3>
            <p className="mt-3">
              Look at the "Target Max Size" field in the tool. Enter the size limit for your specific exam:
            </p>
            <ul className="space-y-2 mt-3 bg-blue-50 p-4 rounded">
              <li>• <strong>50 KB limit?</strong> Type: <code className="bg-white px-2 py-1 rounded">0.05</code></li>
              <li>• <strong>20 KB signature?</strong> Type: <code className="bg-white px-2 py-1 rounded">0.02</code></li>
              <li>• <strong>100 KB (UPSC)?</strong> Type: <code className="bg-white px-2 py-1 rounded">0.1</code></li>
              <li>• <strong>500 KB (some forms)?</strong> Type: <code className="bg-white px-2 py-1 rounded">0.5</code></li>
            </ul>

            <h3 className="text-2xl font-semibold text-slate-800 mt-6">Step 5: Preview and Check Quality</h3>
            <ol className="list-decimal pl-5 space-y-3 mt-3">
              <li>Click the <strong>Eye Icon (Preview)</strong> button</li>
              <li>A popup shows your compressed image at full size</li>
              <li>Look for: proper skin tone, clear facial features, small text/text still readable</li>
              <li>If it looks blurry, go back and increase target size (e.g., from 0.02 to 0.025)</li>
            </ol>

            <h3 className="text-2xl font-semibold text-slate-800 mt-6">Step 6: Download Your Compressed Image</h3>
            <ol className="list-decimal pl-5 space-y-3 mt-3">
              <li>Click the <strong>Download Button</strong></li>
              <li>File will download as "compressed_image.jpg" or "compressed_image.png"</li>
              <li>Optional: Rename to something like "photo_ssc.jpg" or "signature_ibps.jpg" for clarity</li>
            </ol>

            <h3 className="text-2xl font-semibold text-slate-800 mt-6">Step 7: Verify File Size Before Upload</h3>
            <ol className="list-decimal pl-5 space-y-3 mt-3">
              <li>Right-click the downloaded file → Properties (Windows) or Get Info (Mac)</li>
              <li>Check "Size" field. Make sure it's below your exam's limit (usually by 2-3 KB just to be safe)</li>
              <li>If still too large, re-compress with a lower target size</li>
            </ol>

            <h3 className="text-2xl font-semibold text-slate-800 mt-6">Step 8: Test Upload 24 Hours Before Deadline</h3>
            <p className="mt-3 text-sm text-slate-600 italic">
              ⚠️ <strong>Critical:</strong> Don't upload your compressed photo on the final day. Test upload 1-2 days before the deadline to ensure:
            </p>
            <ul className="space-y-2 mt-3 text-sm">
              <li>• The portal accepts the compressed file</li>
              <li>• File size is confirmed below limit</li>
              <li>• Photo displays correctly in preview</li>
              <li>• You have time to re-compress if needed</li>
            </ul>
          </section>

          {/* SECTION 7 - Maintaining Quality */}
          <section id="quality">
            <h2 className="text-3xl font-bold text-slate-900 mt-12">7. Maintaining Quality While Compressing</h2>
            
            <p>
              Severe compression can degrade image quality. Here's how to achieve the best quality at the smallest size.
            </p>

            <h3 className="text-2xl font-semibold text-slate-800 mt-6">The Compression vs. Quality Tradeoff</h3>
            
            <div className="space-y-4 mt-6">
              <div className="border border-green-300 bg-green-50 p-6 rounded-lg">
                <h4 className="font-bold text-green-900 mb-2">✅ Target Size: 50-100 KB</h4>
                <p className="text-green-800 text-sm">Quality: EXCELLENT (barely noticeable compression artifacts)</p>
                <p className="text-green-700 text-sm mt-2">• Perfect for high-resolution photos (3000×2000+ pixels)</p>
                <p className="text-green-700 text-sm">• Facial features remain sharp and natural looking</p>
              </div>

              <div className="border border-blue-300 bg-blue-50 p-6 rounded-lg">
                <h4 className="font-bold text-blue-900 mb-2">✅ Target Size: 20-50 KB</h4>
                <p className="text-blue-800 text-sm">Quality: GOOD (slight blocky artifacts if zoomed in, but acceptable)</p>
                <p className="text-blue-700 text-sm mt-2">• Most government exams allow this range</p>
                <p className="text-blue-700 text-sm">• Features still clear enough for ID verification</p>
              </div>

              <div className="border border-orange-300 bg-orange-50 p-6 rounded-lg">
                <h4 className="font-bold text-orange-900 mb-2">⚠️ Target Size: 10-20 KB</h4>
                <p className="text-orange-800 text-sm">Quality: FAIR (visible blocky 8×8 pixel squares)</p>
                <p className="text-orange-700 text-sm mt-2">• Only for very strict size limits (some railways exams)</p>
                <p className="text-orange-700 text-sm">• Face is still recognizable but noticeably compressed</p>
              </div>

              <div className="border border-red-300 bg-red-50 p-6 rounded-lg">
                <h4 className="font-bold text-red-900 mb-2">❌ Target Size: 1-10 KB</h4>
                <p className="text-red-800 text-sm">Quality: POOR (extreme pixelation, colors shift)</p>
                <p className="text-red-700 text-sm mt-2">• Avoid unless absolutely mandatory</p>
                <p className="text-red-700 text-sm">• Risk of portal rejection due to poor quality</p>
              </div>
            </div>

            <h3 className="text-2xl font-semibold text-slate-800 mt-8">Pro Tips for Better Quality at Lower File Sizes</h3>
            
            <div className="space-y-4">
              <div className="border-l-4 border-blue-600 bg-slate-50 p-4 rounded">
                <p className="font-bold text-slate-900 mb-1">1. Start with a high-quality source</p>
                <p className="text-slate-700 text-sm">
                  A high-resolution, well-lit original photo compresses better than a low-quality phone screenshot. 
                  The more data you start with, the more intelligently the algorithm can compress.
                </p>
              </div>

              <div className="border-l-4 border-blue-600 bg-slate-50 p-4 rounded">
                <p className="font-bold text-slate-900 mb-1">2. Use solid backgrounds</p>
                <p className="text-slate-700 text-sm">
                  A white or light background is highly compressible (large areas of the same color). 
                  Textured backgrounds (wood, brick, nature scenes) resist compression.
                </p>
              </div>

              <div className="border-l-4 border-blue-600 bg-slate-50 p-4 rounded">
                <p className="font-bold text-slate-900 mb-1">3. Slight constraint before compression</p>
                <p className="text-slate-700 text-sm">
                  If compressing fails at your target, try: (a) increase target by 5KB (e.g., 0.025 instead of 0.02), 
                  (b) crop the image to remove background, (c) take a new photo with better lighting and simpler background.
                </p>
              </div>

              <div className="border-l-4 border-blue-600 bg-slate-50 p-4 rounded">
                <p className="font-bold text-slate-900 mb-1">4. Avoid re-compressing</p>
                <p className="text-slate-700 text-sm">
                  JPEG re-compression (compressing an already-compressed JPEG) causes quality to degrade exponentially. 
                  Always use the original high-quality source.
                </p>
              </div>

              <div className="border-l-4 border-blue-600 bg-slate-50 p-4 rounded">
                <p className="font-bold text-slate-900 mb-1">5. Convert PNG to JPG (for photos)</p>
                <p className="text-slate-700 text-sm">
                  PNG is lossless but takes 3-5x more space. For government photo submissions that don't require transparency, 
                  JPEG with slight quality loss beats uncompressed PNG by far.
                </p>
              </div>
            </div>
          </section>

          {/* Continue with remaining sections in next part */}
          <p className="text-center text-slate-600 italic mt-12 pt-8 border-t border-slate-200">
            [Continued in next section - Sections 8-12 will cover: Photography Best Practices, Technical JPEG Deep Dive, Troubleshooting, Tools Comparison, and Busting Compression Myths]
          </p>

          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-8 border border-blue-200 mt-12">
            <h3 className="text-xl font-bold text-slate-900 mb-3">Ready to compress your images?</h3>
            <p className="text-slate-700 mb-4">
              Visit our free Image Compressor tool to instantly reduce your photo to the exact size needed for your government exam or application.
            </p>
            <a href="/image-compressor" className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition">
              Use Image Compressor Tool
            </a>
          </div>
        </article>
      </main>
    </div>
  );
}
