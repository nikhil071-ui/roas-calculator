import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
// Go up two levels, then into the folder where the component lives
import CompressorClient from "../../image-compressor/CompressorClient"; 
import AdBanner from "../../AdBanner"; 

// --- 1. SEO DATA LOOKUP TABLE ---
const SEO_DATA: Record<string, { title: string; desc: string; h1: string; subtext: string; keywords: string[] }> = {
  "jpeg-to-50kb": {
    title: "Compress JPEG to 50KB Online (Free & Fast)",
    desc: "Reduce JPG/JPEG file size to under 50KB instantly. Perfect for online application forms. No quality loss.",
    h1: "Compress JPEG to 50KB",
    subtext: "Strict 50KB limit optimized for online forms.",
    keywords: ["JPEG compression", "reduce image size", "50KB limit", "online photo resizer"]
  },
  "image-to-20kb": {
    title: "Resize Image to 20KB - Photo & Signature Resizer",
    desc: "Compress images to 20KB for SSC, UPSC, and government forms. Free online tool for photos and signatures.",
    h1: "Resize Image to 20KB",
    subtext: "Perfect for SSC & UPSC Signatures.",
    keywords: ["signature resizer", "20KB photo", "SSC exam photo", "UPSC signature size"]
  },
  "reduce-image-size-in-kb": {
    title: "Reduce Image Size in KB (Custom Size)",
    desc: "Easily reduce image size in KB or MB. Choose your target file size and compress instantly online.",
    h1: "Reduce Image Size in KB",
    subtext: "Enter any target size (e.g., 100KB, 2MB).",
    keywords: ["kb reducer", "image size changer", "custom compression", "reduce mb to kb"]
  },
  "passport-photo-size": {
    title: "Passport Photo Size Converter & Compressor",
    desc: "Resize and compress photos for passport applications. Meets international size standards.",
    h1: "Passport Photo Size Converter",
    subtext: "Standardized compression for official documents.",
    keywords: ["passport size photo", "visa photo maker", "official document resize", "id photo compressor"]
  },
  "compress-png-to-100kb": {
    title: "Compress PNG to 100KB Online",
    desc: "Reduce PNG file size to under 100KB while maintaining transparency and quality. Free tool.",
    h1: "Compress PNG to 100KB",
    subtext: "High quality compression for transparent images.",
    keywords: ["PNG compressor", "transparent background", "100KB limit", "lossless compression"]
  },
  "compress-image-for-web": {
    title: "Image Optimizer for Websites (SEO Friendly)",
    desc: "Compress images for faster website loading. Improve your PageSpeed score with our free optimizer.",
    h1: "Web Image Optimizer",
    subtext: "Boost your site speed with optimized images.",
    keywords: ["SEO images", "website speed", "google pagespeed", "optimize webp"]
  },
  "resize-pixel-perfect": {
    title: "Resize Image by Pixel Dimensions (Width x Height)",
    desc: "Change image resolution (px) and reduce file size simultaneously. Exact pixel resizing tool.",
    h1: "Pixel Perfect Image Resizer",
    subtext: "Set exact width and height dimensions.",
    keywords: ["pixel resizer", "change resolution", "resize by width", "aspect ratio"]
  },
  "bulk-image-compressor": {
    title: "Bulk Image Compressor - Process 20+ Photos",
    desc: "Compress multiple images at once. Drag and drop to reduce file size for entire folders instantly.",
    h1: "Bulk Image Compressor",
    subtext: "Upload multiple files to process in batch.",
    keywords: ["bulk resize", "batch compression", "multiple images", "folder compressor"]
  },
  "ssc-chsl-photo-resizer": {
    title: "SSC CHSL Photo & Signature Resizer (2026)",
    desc: "Official dimensions and size compressor for SSC CHSL application forms. 20KB-50KB compliant.",
    h1: "SSC CHSL Photo Resizer",
    subtext: "Optimized for Staff Selection Commission forms.",
    keywords: ["SSC CHSL", "exam form", "photo upload error", "ssc signature"]
  },
  "upsc-photo-resizer": {
    title: "UPSC Civil Services Photo Resizer Tool",
    desc: "Resize photo and signature for UPSC IAS exams. Automatic formatting to 350x350 pixels.",
    h1: "UPSC Photo Resizer",
    subtext: "Meets Civil Services Exam requirements.",
    keywords: ["UPSC IAS", "civil services form", "upsc photo size", "upsc signature"]
  },
};

// --- 2. GENERATE DYNAMIC METADATA ---
// FIX APPLIED: params is Promise<{ slug: string }>
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params; // <--- CRITICAL FIX
  const data = SEO_DATA[resolvedParams.slug];
  
  if (!data) {
    return {
      title: "Image Compressor | Page Not Found",
    };
  }

  return {
    title: data.title,
    description: data.desc,
    keywords: data.keywords,
    alternates: {
      canonical: `https://roas-calculator-brown.vercel.app/compressor/${resolvedParams.slug}`,
    },
    openGraph: {
      title: data.title,
      description: data.desc,
      type: "website",
    }
  };
}

// --- 3. THE PAGE COMPONENT ---
// FIX APPLIED: params is Promise<{ slug: string }>
export default async function DynamicCompressorPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params; // <--- CRITICAL FIX
  const data = SEO_DATA[resolvedParams.slug];

  if (!data) {
    notFound();
  }

  const currentDate = new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric' });

  return (
    <main className="min-h-screen bg-white p-4 py-12 font-sans text-gray-900">
      <div className="max-w-5xl mx-auto space-y-12">
        
        {/* DYNAMIC HEADER */}
        <div className="text-center space-y-6">
          <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 tracking-tight leading-tight">
            {data.h1}
          </h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto font-medium">
            {data.subtext} <span className="text-blue-600 font-bold">100% Free & Private.</span>
          </p>
        </div>

        {/* --- AD SLOT 1: TOP --- */}
        <div className="w-full flex justify-center bg-gray-50 rounded-lg p-2">
          <AdBanner />
        </div>

        {/* THE TOOL ITSELF */}
        <div className="bg-white rounded-3xl shadow-xl border border-gray-200 overflow-hidden">
             <CompressorClient />
        </div>

        {/* --- AD SLOT 2: BOTTOM --- */}
        <div className="w-full flex justify-center bg-gray-50 rounded-lg p-2">
           <AdBanner />
        </div>

        {/* --- LONG FORM SEO CONTENT --- */}
        <article className="prose prose-lg max-w-none text-gray-800">
          
          <h2 className="text-3xl font-bold text-gray-900 border-b border-gray-200 pb-4">
            The Ultimate Guide to {data.h1} ({currentDate})
          </h2>
          
          <p className="lead text-xl text-gray-700">
            Are you struggling with file size limits? You are not alone. Whether you are applying for a government exam, 
            optimizing a website, or simply trying to email a photo, dealing with specific file requirements like 
            <strong> {data.keywords[0]}</strong> or <strong>{data.keywords[1]}</strong> can be frustrating. 
            Our tool is designed to solve exactly this problem.
          </p>

          <h3 className="text-2xl font-bold text-gray-900 mt-8">Why do you need to {data.h1.toLowerCase()}?</h3>
          <p>
            In the digital age, efficiency is key. Large image files slow down websites, consume data, and get rejected by 
            online portals. Specifically for <strong>{data.keywords[2]}</strong>, having the exact dimension and file size is mandatory.
            If your file is even 1KB over the limit, your application could be rejected instantly.
          </p>
          <p>
            Our tool ensures you meet these strict requirements without needing expensive software like Photoshop. 
            We use advanced compression algorithms to reduce the file size while keeping the visual quality high.
          </p>

          <div className="bg-blue-50 border-l-4 border-blue-600 p-6 my-8 rounded-r-lg">
            <h4 className="text-xl font-bold text-blue-900 mb-2">🚀 Key Features of this Tool:</h4>
            <ul className="list-disc pl-5 space-y-2 text-blue-800">
              <li><strong>Exact Size Control:</strong> Target 50KB, 20KB, or any custom size.</li>
              <li><strong>Privacy Guaranteed:</strong> Images are processed locally in your browser. No server uploads.</li>
              <li><strong>Universal Support:</strong> Works with JPG, PNG, WEBP, and JPEG formats.</li>
              <li><strong>Instant Preview:</strong> See the quality before you download.</li>
            </ul>
          </div>

          <h3 className="text-2xl font-bold text-gray-900 mt-8">Step-by-Step: How to Use This Tool</h3>
          <ol className="list-decimal pl-5 space-y-4 text-gray-800">
            <li>
              <strong>Upload Your Image:</strong> Click the upload box above or drag and drop your image file.
            </li>
            <li>
              <strong>Select Target Size:</strong> Depending on your needs, enter your target size (e.g., "50" for 50KB). 
              For {data.keywords[0]}, verify the official requirement first.
            </li>
            <li>
              <strong>Adjust Settings (Optional):</strong> You can switch between KB and MB units. The tool will automatically 
              calculate the best compression ratio.
            </li>
            <li>
              <strong>Download:</strong> Once satisfied with the preview, click "Download" to save the optimized file to your device.
            </li>
          </ol>

          <h3 className="text-2xl font-bold text-gray-900 mt-8">Understanding Image Compression Quality</h3>
          <p>
            One common concern when you <strong>{data.h1.toLowerCase()}</strong> is the loss of quality. 
            "Lossy" compression works by removing data that the human eye can barely perceive. 
          </p>
          <p>
            For example, if you reduce a 5MB photo to 50KB, there will be some quality reduction. However, for 
            <strong> {data.keywords[3]}</strong> or application forms, this is perfectly acceptable and often required. 
            Our tool attempts to keep the highest possible quality for the size you select.
          </p>

          <h3 className="text-2xl font-bold text-gray-900 mt-8">Common Use Cases for {data.h1}</h3>
          <div className="grid md:grid-cols-2 gap-6 my-6">
            <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
              <h4 className="font-bold text-gray-900 mb-2">Government Exams (SSC/UPSC)</h4>
              <p className="text-sm text-gray-700">
                Most portals accept images between 20KB and 50KB. Our presets are calibrated exactly for this.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
              <h4 className="font-bold text-gray-900 mb-2">Website Performance</h4>
              <p className="text-sm text-gray-700">
                Google ranks faster websites higher. Compressing images is the #1 way to speed up your site.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
              <h4 className="font-bold text-gray-900 mb-2">Email Attachments</h4>
              <p className="text-sm text-gray-700">
                Email services like Gmail have a 25MB limit. Compressing photos lets you send more in one email.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
              <h4 className="font-bold text-gray-900 mb-2">Storage Saving</h4>
              <p className="text-sm text-gray-700">
                Save space on your phone or cloud drive by archiving optimized versions of your photos.
              </p>
            </div>
          </div>

          <hr className="border-gray-200 my-12" />

          {/* --- FAQ SECTION --- */}
          <section>
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Frequently Asked Questions</h2>
            <div className="space-y-4">
              
              <details className="group bg-gray-50 p-6 rounded-xl cursor-pointer border border-gray-200 hover:border-blue-300 transition-colors">
                <summary className="font-bold text-lg text-gray-900 list-none flex justify-between items-center">
                  Is it safe to upload my private photos here?
                  <span className="text-blue-600 group-open:rotate-180 transition-transform duration-300">▼</span>
                </summary>
                <p className="text-gray-700 mt-4 leading-relaxed">
                  Yes, absolutely. Unlike other websites, this tool runs <strong>100% in your browser</strong>. 
                  Your photos are never uploaded to our server. They are processed locally on your device, ensuring maximum privacy.
                </p>
              </details>

              <details className="group bg-gray-50 p-6 rounded-xl cursor-pointer border border-gray-200 hover:border-blue-300 transition-colors">
                <summary className="font-bold text-lg text-gray-900 list-none flex justify-between items-center">
                  Why does the file size sometimes differ slightly?
                  <span className="text-blue-600 group-open:rotate-180 transition-transform duration-300">▼</span>
                </summary>
                <p className="text-gray-700 mt-4 leading-relaxed">
                  Image compression is complex. The target size is an estimate. Sometimes, to maintain a usable image quality, 
                  the algorithm might result in a file that is 1-2KB different. We recommend checking the final size in the preview before submitting.
                </p>
              </details>

              <details className="group bg-gray-50 p-6 rounded-xl cursor-pointer border border-gray-200 hover:border-blue-300 transition-colors">
                <summary className="font-bold text-lg text-gray-900 list-none flex justify-between items-center">
                  Can I use this for {data.keywords[0]}?
                  <span className="text-blue-600 group-open:rotate-180 transition-transform duration-300">▼</span>
                </summary>
                <p className="text-gray-700 mt-4 leading-relaxed">
                  Yes! This tool is specifically optimized for keywords like <strong>{data.keywords[0]}</strong> and <strong>{data.keywords[1]}</strong>.
                  Simply select the target size or use the custom input to match your requirements.
                </p>
              </details>

              <details className="group bg-gray-50 p-6 rounded-xl cursor-pointer border border-gray-200 hover:border-blue-300 transition-colors">
                <summary className="font-bold text-lg text-gray-900 list-none flex justify-between items-center">
                  Does this work on mobile phones?
                  <span className="text-blue-600 group-open:rotate-180 transition-transform duration-300">▼</span>
                </summary>
                <p className="text-gray-700 mt-4 leading-relaxed">
                  Yes, our tool is fully responsive. You can {data.h1.toLowerCase()} directly from your iPhone, Android, or tablet browser without installing any apps.
                </p>
              </details>

            </div>
          </section>

          <div className="mt-12 p-8 bg-slate-900 text-white rounded-2xl text-center">
            <h3 className="text-2xl font-bold mb-4">Need to convert these to PDF?</h3>
            <p className="mb-6 text-slate-300">
              If you have multiple images, you can combine them into a single document using our free PDF tool.
            </p>
            <Link 
              href="/pdf-converter" 
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full transition-transform hover:scale-105"
            >
              Go to PDF Converter &rarr;
            </Link>
          </div>

        </article>

      </div>
    </main>
  );
}