import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import CompressorClient from "./CompressorClient";
import AdBanner from "../AdBanner"; // Import the ad component

export const metadata: Metadata = {
  title: "Free Image Compressor - Reduce Size to 50KB / 20KB (JPEG & PNG)",
  description:
    "Compress images online for free. Reduce JPG/PNG size to specific MB or KB limits for government forms (SSC, UPSC). No signup required.",
  keywords: [
    "image compressor",
    "reduce image size to 50kb",
    "photo compressor",
    "jpeg compressor online",
    "reduce photo size for signature",
  ],
  alternates: {
    // TODO: Update this to your actual custom domain for production
    canonical: "https://roas-calculator-brown.vercel.app/image-compressor",
  },
  openGraph: {
    title: "Free Image Compressor - Reduce Size to 50KB / 20KB",
    description: "Perfect for SSC, UPSC, and IBPS online forms. Privacy-focused & Offline capable.",
    type: "website",
  },
};

export default function ImageCompressorPage() {
  return (
    <main className="min-h-screen bg-gray-50 font-sans relative pb-12">
      {/* Header / Navbar */}
      <div className="bg-slate-900 text-white py-8 px-4">
        <div className="max-w-5xl mx-auto">
          <Link
            href="/"
            className="inline-flex items-center text-slate-400 hover:text-white mb-4 transition"
          >
            <ArrowLeft size={16} className="mr-2" /> Back to Home
          </Link>
          <h1 className="text-2xl md:text-4xl font-bold">
            Free Image Compressor
          </h1>
          <p className="text-slate-400 mt-2">
            Reduce size to 20KB - 50KB for Government Forms, Exam Portals, and Online Applications
          </p>
          <p className="text-slate-500 text-sm mt-3">
            ✓ Privacy-First (Offline) • ✓ No Limits • ✓ Instant Results
          </p>
        </div>
      </div>

      {/* --- AD SLOT 1: TOP --- */}
      <div className="max-w-5xl mx-auto mt-6">
        <AdBanner />
      </div>

      {/* --- THE INTERACTIVE TOOL --- */}
      <div className="max-w-5xl mx-auto mt-8 px-4">
        <CompressorClient />
      </div>

      {/* --- AD SLOT 2: MIDDLE --- */}
      <div className="max-w-5xl mx-auto mt-8">
        <AdBanner />
      </div>

      {/* EXPERT GUIDE CTA */}
      <div className="max-w-5xl mx-auto mt-8 px-4">
        <div className="bg-gradient-to-r from-purple-50 to-blue-50 rounded-xl border-2 border-purple-300 p-8">
          <h3 className="text-2xl font-bold text-slate-900 mb-2">📚 Want to Master Image Compression?</h3>
          <p className="text-slate-700 mb-4">
            Our comprehensive guide covers JPEG algorithms, quality-size tradeoffs, all government exam requirements, and technical troubleshooting.
          </p>
          <Link 
            href="/image-compressor/guide"
            className="inline-block bg-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-purple-700 transition"
          >
            Read Complete Image Compression Guide →
          </Link>
        </div>
      </div>

      {/* QUICK HELP */}
      <div className="max-w-5xl mx-auto mt-6 px-4">
        <div className="bg-white rounded-xl border border-slate-200 p-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <h3 className="text-lg font-bold text-slate-900">Need quick answers?</h3>
            <p className="text-slate-600">See size rules, formats, and troubleshooting tips.</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link href="/image-compressor/faq" className="bg-slate-900 text-white px-4 py-2 rounded-lg font-semibold hover:bg-slate-800 transition">Image FAQ</Link>
            <Link href="/resources" className="bg-blue-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-blue-700 transition">Free Resources</Link>
            <Link href="/comparisons" className="bg-emerald-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-emerald-700 transition">Tool Comparisons</Link>
          </div>
        </div>
      </div>

      {/* --- SEO CONTENT (High Value Publisher Content) --- */}
      <article className="max-w-4xl mx-auto mt-12 bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-gray-200 prose lg:prose-lg text-gray-700">
        <h2 className="text-3xl font-bold text-slate-900">
          How to Compress Images to 50KB for Government Forms (2026 Guide)
        </h2>
        <p>
          Applying for government jobs in India like{" "}
          <strong>SSC, UPSC, IBPS, SBI PO, or Railways (RRB)</strong>? You know
          the struggle: the portal asks for a photo "under 50KB" and a signature
          "under 20KB", but your phone takes photos that are 5MB.
        </p>
        <p>
          Our <strong>Free Image Compressor</strong> is the only tool designed
          specifically for Indian exam portals. Unlike other tools that just say
          "Medium Quality," we let you type exact numbers like{" "}
          <strong>0.05 MB</strong> (which is 50KB) to ensure your application
          never gets rejected.
        </p>

        <h3 className="text-2xl font-bold text-slate-900 mt-8">
          Step-by-Step: Reduce Image Size in Seconds
        </h3>
        <ol className="list-decimal pl-5 space-y-2">
          <li>
            <strong>Upload your Photo:</strong> Click the upload box or drag
            your JPG/PNG file.
          </li>
          <li>
            <strong>Set Target Size:</strong> Look at the "Target Max Size"
            input. Type <strong>0.05</strong> for 50KB, or <strong>0.02</strong>{" "}
            for 20KB.
          </li>
          <li>
            <strong>Wait for Magic:</strong> Our smart algorithm instantly
            shrinks the file size while keeping your face clear.
          </li>
          <li>
            <strong>Check & Download:</strong> Click the "Eye" icon to preview.
            If it looks good, hit Download.
          </li>
        </ol>

        <h3 className="text-2xl font-bold text-slate-900 mt-8">
          Why is this tool better than others?
        </h3>
        <ul>
          <li>
            <strong>100% Privacy Guarantee:</strong> Most online compressors
            upload your private photos to a server in a foreign country. We
            don't. <strong>Your images are processed locally in your browser</strong>{" "}
            and never leave your device.
          </li>
          <li>
            <strong>Works Offline:</strong> Once the page loads, you can turn
            off your internet and it will still work!
          </li>
          <li>
            <strong>No Watermarks:</strong> We don't put any ugly logos on your
            important documents.
          </li>
        </ul>

        <h3 className="text-2xl font-bold text-slate-900 mt-8">
          Common Size Requirements for 2026 Exams
        </h3>
        <div className="overflow-x-auto my-6">
          <table className="min-w-full bg-white border border-gray-300 text-sm border-collapse">
            <thead>
              <tr className="bg-slate-100">
                <th className="py-3 px-4 border-b text-left font-bold text-slate-800">
                  Exam Name
                </th>
                <th className="py-3 px-4 border-b text-left font-bold text-slate-800">
                  Photo Size
                </th>
                <th className="py-3 px-4 border-b text-left font-bold text-slate-800">
                  Signature Size
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="py-2 px-4 border-b">SSC CGL / CHSL</td>
                <td className="py-2 px-4 border-b">20KB – 50KB</td>
                <td className="py-2 px-4 border-b">10KB – 20KB</td>
              </tr>
              <tr>
                <td className="py-2 px-4 border-b">UPSC Civil Services</td>
                <td className="py-2 px-4 border-b">20KB – 300KB</td>
                <td className="py-2 px-4 border-b">20KB – 300KB</td>
              </tr>
              <tr>
                <td className="py-2 px-4 border-b">IBPS PO / Clerk</td>
                <td className="py-2 px-4 border-b">20KB – 50KB</td>
                <td className="py-2 px-4 border-b">10KB – 20KB</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3 className="text-2xl font-bold text-slate-900 mt-8">
          Frequently Asked Questions (FAQ)
        </h3>
        <details className="group border-b pb-4 mb-4 cursor-pointer">
          <summary className="font-bold text-lg list-none flex justify-between items-center text-slate-800">
            <span>Can I compress PNG images?</span>
            <span className="transition-transform duration-300 group-open:rotate-180">
              ⬇️
            </span>
          </summary>
          <p className="mt-2 text-gray-600">
            Yes! We support JPG, JPEG, PNG, and WEBP formats. PNG files (especially with transparency) tend to be larger, 
            so our tool applies smart compression to reduce size while preserving quality.
          </p>
        </details>
        <details className="group border-b pb-4 mb-4 cursor-pointer">
          <summary className="font-bold text-lg list-none flex justify-between items-center text-slate-800">
            <span>Will my photo become blurry?</span>
            <span className="transition-transform duration-300 group-open:rotate-180">
              ⬇️
            </span>
          </summary>
          <p className="mt-2 text-gray-600">
            We use advanced compression algorithms to reduce file size while maintaining visible quality. 
            For portraits (like passport photos), facial features remain sharp even at 50KB. 
            Always preview the compressed image before downloading to ensure it meets your standards.
          </p>
        </details>
        <details className="group border-b pb-4 mb-4 cursor-pointer">
          <summary className="font-bold text-lg list-none flex justify-between items-center text-slate-800">
            <span>What's the difference between lossy and lossless compression?</span>
            <span className="transition-transform duration-300 group-open:rotate-180">
              ⬇️
            </span>
          </summary>
          <p className="mt-2 text-gray-600">
            <strong>Lossless compression</strong> reduces file size without losing any image data (like ZIP compression). 
            <strong>Lossy compression</strong> (what we use for JPG) removes imperceptible details to achieve much smaller files. 
            For government forms, lossy is preferred because you need extreme size reduction (2MB to 50KB) and slight quality loss isn't noticeable to the human eye.
          </p>
        </details>
        <details className="group border-b pb-4 mb-4 cursor-pointer">
          <summary className="font-bold text-lg list-none flex justify-between items-center text-slate-800">
            <span>Can I compress images on my phone?</span>
            <span className="transition-transform duration-300 group-open:rotate-180">
              ⬇️
            </span>
          </summary>
          <p className="mt-2 text-gray-600">
            Absolutely! Our tool is fully mobile-optimized. Just open this page on your smartphone browser (Chrome, Safari), 
            tap the upload box, select photos from your gallery, and download the compressed version. Works on iOS and Android.
          </p>
        </details>
        <details className="group border-b pb-4 mb-4 cursor-pointer">
          <summary className="font-bold text-lg list-none flex justify-between items-center text-slate-800">
            <span>Why does the portal reject my photo even after compression?</span>
            <span className="transition-transform duration-300 group-open:rotate-180">
              ⬇️
            </span>
          </summary>
          <p className="mt-2 text-gray-600">
            Check these common issues: 1) Wrong dimensions (some forms require 200x200 pixels or 3.5x4.5 cm), 
            2) Wrong format (must be JPG, not PNG), 3) File name has special characters (use "photo.jpg"), 
            4) Background color (some exams require white background). Our tool handles size; you may need to edit dimensions/background separately.
          </p>
        </details>
        <details className="group border-b pb-4 mb-4 cursor-pointer">
          <summary className="font-bold text-lg list-none flex justify-between items-center text-slate-800">
            <span>Is there a limit to how many images I can compress?</span>
            <span className="transition-transform duration-300 group-open:rotate-180">
              ⬇️
            </span>
          </summary>
          <p className="mt-2 text-gray-600">
            No limits! Compress as many photos as you need. Since everything processes locally in your browser, 
            there's no server queue or usage restrictions.
          </p>
        </details>

        <h3 className="text-2xl font-bold text-slate-900 mt-10">
          How Image Compression Actually Works (Technical Explanation)
        </h3>
        <p>
          Understanding the science behind compression helps you use the tool more effectively. Here's what happens behind the scenes:
        </p>

        <h4 className="text-xl font-semibold text-slate-900 mt-6">
          1. JPEG Compression Algorithm
        </h4>
        <p className="mt-3">
          JPEG (Joint Photographic Experts Group) uses a technique called <strong>Discrete Cosine Transform (DCT)</strong> 
          to convert image data from the spatial domain (pixels) to the frequency domain (patterns). 
          High-frequency details (like noise and fine texture) are discarded, while low-frequency information (overall shape and color) is preserved.
        </p>
        <p className="mt-2">
          The "quality" slider you see in most compressors (0-100%) controls how aggressively these high-frequency components are removed. 
          At 100%, nothing is removed. At 50%, significant compression occurs with minimal visible loss.
        </p>

        <h4 className="text-xl font-semibold text-slate-900 mt-6">
          2. Chroma Subsampling
        </h4>
        <p className="mt-3">
          Human eyes are more sensitive to brightness (luminance) than color (chrominance). 
          JPEG exploits this by storing less color information than brightness information—a technique called chroma subsampling. 
          The most common format (4:2:0) reduces color data by 75% without visible quality loss.
        </p>

        <h4 className="text-xl font-semibold text-slate-900 mt-6">
          3. Progressive vs. Baseline JPEG
        </h4>
        <p className="mt-3">
          <strong>Baseline JPEG:</strong> Loads top-to-bottom in a single pass (default for most cameras).
          <br />
          <strong>Progressive JPEG:</strong> Loads in multiple passes, starting blurry and becoming sharper. 
          Progressive JPEGs are often 2-5% smaller but take slightly longer to decode. We use baseline for compatibility.
        </p>

        <h3 className="text-2xl font-bold text-slate-900 mt-10">
          Best Practices for Government Exam Photos
        </h3>
        
        <div className="bg-blue-50 p-6 rounded-xl border border-blue-200 my-6">
          <h4 className="font-bold text-blue-900 mb-3">✅ Do These Things:</h4>
          <ul className="space-y-2 text-blue-800">
            <li>• <strong>Take photos in good lighting:</strong> Natural daylight prevents grain and noise, which compresses better.</li>
            <li>• <strong>Use a plain background:</strong> White or light-colored walls reduce file size because there's less detail to store.</li>
            <li>• <strong>Face the camera directly:</strong> Side angles add shadows and complexity, increasing file size.</li>
            <li>• <strong>Remove glasses:</strong> Reflections create high-frequency noise that resists compression.</li>
            <li>• <strong>Test before the deadline:</strong> Always upload a test photo to the portal a few days early to catch any issues.</li>
          </ul>
        </div>

        <div className="bg-red-50 p-6 rounded-xl border border-red-200 my-6">
          <h4 className="font-bold text-red-900 mb-3">❌ Avoid These Mistakes:</h4>
          <ul className="space-y-2 text-red-800">
            <li>• <strong>Using selfie mode:</strong> Front cameras have lower resolution and more distortion than rear cameras.</li>
            <li>• <strong>Zooming in too much:</strong> Cropping a small portion of a large photo reduces quality. Take a properly framed photo from the start.</li>
            <li>• <strong>Applying filters:</strong> Instagram/Snapchat filters add digital artifacts that inflate file size.</li>
            <li>• <strong>Scanning at high DPI:</strong> 600 DPI scans create massive files. Use 150-300 DPI for documents.</li>
            <li>• <strong>Using PNG for photos:</strong> PNG is lossless and creates 3-5x larger files. Always convert to JPG for photos.</li>
          </ul>
        </div>

        <h3 className="text-2xl font-bold text-slate-900 mt-10">
          Alternatives: When NOT to Use This Tool
        </h3>
        <p>
          Our compressor is optimized for <strong>government forms, exam portals, and document uploads</strong> where strict size limits exist. 
          Here's when you might need different solutions:
        </p>

        <ul className="list-disc pl-5 space-y-3 mt-4">
          <li>
            <strong>Professional Photography:</strong> If you're a photographer delivering client photos, use Adobe Lightroom or Photoshop 
            with manual quality settings to maintain color accuracy and sharpness.
          </li>
          <li>
            <strong>Print Materials:</strong> Compressing images for printing can cause banding and pixelation. Keep original high-res files 
            (300 DPI minimum) for print projects.
          </li>
          <li>
            <strong>Archival Storage:</strong> If you're backing up family photos or important documents for long-term storage, 
            keep the originals uncompressed. Hard drives are cheap; lost quality is permanent.
          </li>
          <li>
            <strong>Bulk Processing:</strong> Need to compress thousands of images for a website? Use desktop software like 
            JPEGmini or command-line tools like ImageMagick for batch operations.
          </li>
        </ul>

        <h3 className="text-2xl font-bold text-slate-900 mt-10">
          Image Size Guide: KB vs MB vs Pixels
        </h3>
        <p>
          Confused about the difference between file size (KB/MB) and dimensions (pixels)? Here's a clear explanation:
        </p>

        <div className="overflow-x-auto my-6">
          <table className="w-full border border-slate-300 text-sm">
            <thead className="bg-slate-100">
              <tr>
                <th className="border border-slate-300 px-4 py-3 text-left font-bold">Term</th>
                <th className="border border-slate-300 px-4 py-3 text-left font-bold">Definition</th>
                <th className="border border-slate-300 px-4 py-3 text-left font-bold">Example</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-slate-300 px-4 py-2 font-semibold">File Size (KB/MB)</td>
                <td className="border border-slate-300 px-4 py-2">
                  The amount of storage space the image file uses on your device. Measured in Kilobytes (KB) or Megabytes (MB).
                </td>
                <td className="border border-slate-300 px-4 py-2">
                  A photo from your phone might be 5 MB (5000 KB) in size.
                </td>
              </tr>
              <tr className="bg-slate-50">
                <td className="border border-slate-300 px-4 py-2 font-semibold">Dimensions (Pixels)</td>
                <td className="border border-slate-300 px-4 py-2">
                  The width and height of the image measured in pixels (tiny dots of color). Determines resolution.
                </td>
                <td className="border border-slate-300 px-4 py-2">
                  A typical phone photo is 4000 x 3000 pixels (12 megapixels).
                </td>
              </tr>
              <tr>
                <td className="border border-slate-300 px-4 py-2 font-semibold">DPI/PPI</td>
                <td className="border border-slate-300 px-4 py-2">
                  Dots Per Inch / Pixels Per Inch. Determines print quality. Irrelevant for screens.
                </td>
                <td className="border border-slate-300 px-4 py-2">
                  72 DPI for web, 300 DPI for high-quality prints.
                </td>
              </tr>
              <tr className="bg-slate-50">
                <td className="border border-slate-300 px-4 py-2 font-semibold">Aspect Ratio</td>
                <td className="border border-slate-300 px-4 py-2">
                  The proportional relationship between width and height. Common ratios: 4:3, 16:9, 1:1.
                </td>
                <td className="border border-slate-300 px-4 py-2">
                  Instagram square posts are 1:1 (1080 x 1080 pixels).
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="mt-4">
          <strong>Important:</strong> Our tool reduces <em>file size</em> (MB to KB) without changing <em>dimensions</em> (pixels). 
          If a form requires 200x200 pixels, you need to resize/crop the image first using a photo editor, then compress it here.
        </p>

        <h3 className="text-2xl font-bold text-slate-900 mt-10">
          Privacy & Security: Why Client-Side Processing Matters
        </h3>
        <p>
          Most free image compressors upload your photos to their servers, which creates several risks:
        </p>

        <ul className="list-disc pl-5 space-y-2 mt-4 text-slate-700">
          <li><strong>Data Breaches:</strong> If the server is hacked, your photos (which may include sensitive documents like Aadhar cards) could be stolen.</li>
          <li><strong>Third-Party Access:</strong> Some services sell uploaded images to data brokers for AI training or advertising purposes.</li>
          <li><strong>Metadata Leakage:</strong> Photos contain EXIF data (GPS location, camera model, timestamp) that could be harvested.</li>
          <li><strong>Compliance Issues:</strong> For businesses, uploading customer documents to random websites violates GDPR and privacy laws.</li>
        </ul>

        <p className="mt-4">
          Our tool uses <strong>JavaScript Canvas API</strong> to process images entirely within your browser. 
          Your photos never leave your device—we couldn't see them even if we wanted to. 
          This is verified by checking the browser Network tab (no upload requests) or inspecting our open-source code.
        </p>

        <h3 className="text-2xl font-bold text-slate-900 mt-10">
          Troubleshooting Common Issues
        </h3>

        <details className="group border border-slate-200 rounded-lg p-4 mb-4 cursor-pointer bg-white">
          <summary className="font-bold text-slate-900 list-none flex justify-between items-center">
            <span>Issue: Compressed image is still too large</span>
            <span className="transition-transform duration-300 group-open:rotate-180">▼</span>
          </summary>
          <div className="mt-3 text-slate-700 space-y-2">
            <p><strong>Solution 1:</strong> Lower the target size further. For example, if you set 0.05 MB (50 KB) and it's still 52 KB, try 0.045 MB.</p>
            <p><strong>Solution 2:</strong> The original image might have extreme detail (like a textured background). Crop or blur the background before compressing.</p>
            <p><strong>Solution 3:</strong> If the image is PNG with transparency, convert it to JPG with a solid background color first.</p>
          </div>
        </details>

        <details className="group border border-slate-200 rounded-lg p-4 mb-4 cursor-pointer bg-white">
          <summary className="font-bold text-slate-900 list-none flex justify-between items-center">
            <span>Issue: Image looks too blurry or pixelated</span>
            <span className="transition-transform duration-300 group-open:rotate-180">▼</span>
          </summary>
          <div className="mt-3 text-slate-700 space-y-2">
            <p><strong>Cause:</strong> The target size is too aggressive for the image complexity.</p>
            <p><strong>Solution:</strong> Increase the target size slightly. For example, if 20 KB looks bad, try 30 KB. Most forms specify a maximum, not exact size.</p>
            <p><strong>Prevention:</strong> Take a cleaner, simpler photo (plain background, no patterns) which compresses better without quality loss.</p>
          </div>
        </details>

        <details className="group border border-slate-200 rounded-lg p-4 mb-4 cursor-pointer bg-white">
          <summary className="font-bold text-slate-900 list-none flex justify-between items-center">
            <span>Issue: Tool doesn't work on my phone</span>
            <span className="transition-transform duration-300 group-open:rotate-180">▼</span>
          </summary>
          <div className="mt-3 text-slate-700 space-y-2">
            <p><strong>Check 1:</strong> Make sure you're using a modern browser (Chrome 90+, Safari 14+). Old browsers lack Canvas API support.</p>
            <p><strong>Check 2:</strong> If on iPhone, ensure you're using Safari or Chrome (not Facebook in-app browser).</p>
            <p><strong>Check 3:</strong> Try refreshing the page and clearing browser cache.</p>
            <p><strong>Still broken?</strong> Email us at luckmatters199@gmail.com with your device model and browser version.</p>
          </div>
        </details>

        <details className="group border border-slate-200 rounded-lg p-4 mb-4 cursor-pointer bg-white">
          <summary className="font-bold text-slate-900 list-none flex justify-between items-center">
            <span>Issue: Download button doesn't work</span>
            <span className="transition-transform duration-300 group-open:rotate-180">▼</span>
          </summary>
          <div className="mt-3 text-slate-700 space-y-2">
            <p><strong>Solution 1:</strong> Check if your browser is blocking pop-ups or downloads. Enable downloads in browser settings.</p>
            <p><strong>Solution 2:</strong> On mobile, long-press the preview image and select "Save Image" instead of using the download button.</p>
            <p><strong>Solution 3:</strong> Try a different browser or use Incognito/Private mode to bypass extension interference.</p>
          </div>
        </details>

        <h3 className="text-2xl font-bold text-slate-900 mt-10">
          Related Tools You Might Need
        </h3>
        <div className="grid md:grid-cols-2 gap-6 mt-6">
          <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
            <h4 className="font-bold text-slate-900 mb-2">PDF Converter</h4>
            <p className="text-sm text-slate-600 mb-3">
              Combine multiple images (ID proof, certificates) into a single PDF file under 2 MB for government applications.
            </p>
            <a href="/pdf-converter" className="text-blue-600 font-semibold hover:underline text-sm">
              Go to PDF Converter →
            </a>
          </div>

          <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
            <h4 className="font-bold text-slate-900 mb-2">Background Remover (Coming Soon)</h4>
            <p className="text-sm text-slate-600 mb-3">
              Automatically remove backgrounds and replace with white for professional ID photos that meet exam requirements.
            </p>
            <p className="text-slate-400 text-sm font-semibold">
              Launching Q2 2026
            </p>
          </div>
        </div>

        <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-8 border border-blue-200 mt-12">
          <h3 className="text-xl font-bold text-slate-900 mb-3">Still Have Questions?</h3>
          <p className="text-slate-700 mb-4">
            We're here to help! If you're facing issues or need guidance on preparing photos for a specific exam, 
            reach out to us via email.
          </p>
          <a href="/contact" className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition">
            Contact Support
          </a>
        </div>
      </article>
    </main>
  );
}