import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
// Go up two levels (../../) to 'app', then into 'pdf-converter' to find the tool
import PdfClient from "../../pdf-converter/PdfClient"; 
import AdBanner from "../../AdBanner"; 

export const dynamic = "force-static";
export const revalidate = 86400;

// --- STATIC PARAMS FOR FAST INDEXING ---
export async function generateStaticParams() {
  return [
    { slug: 'jpg-to-pdf' },
    { slug: 'png-to-pdf' },
    { slug: 'merge-photos-to-pdf' },
    { slug: 'images-to-pdf' },
    { slug: 'screenshot-to-pdf' },
    { slug: 'iphone-photo-to-pdf' },
    { slug: 'create-pdf-assignment' },
    { slug: 'receipt-scanner-pdf' },
    { slug: 'instagram-to-pdf' },
    { slug: 'document-photo-to-pdf' }
  ];
}

// --- 1. SEO DATA LOOKUP TABLE ---
const SEO_DATA: Record<string, { title: string; desc: string; h1: string; subtext: string; keywords: string[] }> = {
  "jpg-to-pdf": {
    title: "Convert JPG to PDF Online (Free & Fast)",
    desc: "Merge multiple JPG images into a single PDF document instantly. No sign-up required. Best free JPG to PDF converter.",
    h1: "Convert JPG to PDF",
    subtext: "Turn your JPG photos into a professional document.",
    keywords: ["JPG to PDF", "image to document", "combine photos", "free pdf converter"]
  },
  "png-to-pdf": {
    title: "Convert PNG to PDF - High Quality & Transparent",
    desc: "Turn PNG images into PDF documents without losing quality. Support for transparency. Fast and secure.",
    h1: "Convert PNG to PDF",
    subtext: "Best for screenshots and transparent images.",
    keywords: ["PNG to PDF", "screenshot to pdf", "high quality pdf", "lossless converter"]
  },
  "merge-photos-to-pdf": {
    title: "Merge Photos to PDF - Combine Multiple Images",
    desc: "Select multiple photos and merge them into one organized PDF file. Great for assignments and receipts.",
    h1: "Merge Photos to PDF",
    subtext: "Combine unlimited photos into one file.",
    keywords: ["merge photos", "combine images", "photo album to pdf", "multi-page pdf"]
  },
  "images-to-pdf": {
    title: "Image to PDF Converter (Supports All Formats)",
    desc: "Convert any image format (JPG, PNG, WEBP) to PDF. Drag and drop to create documents instantly.",
    h1: "Image to PDF Converter",
    subtext: "Universal converter for all image types.",
    keywords: ["image to pdf", "picture to pdf", "photo converter", "online pdf tool"]
  },
  "screenshot-to-pdf": {
    title: "Convert Screenshots to PDF (Mobile & Desktop)",
    desc: "Turn your mobile or desktop screenshots into a shareable PDF document in seconds.",
    h1: "Screenshot to PDF",
    subtext: "Perfect for saving receipts and chat history.",
    keywords: ["screenshot converter", "save chat as pdf", "mobile screenshot pdf", "receipt organizer"]
  },
  "iphone-photo-to-pdf": {
    title: "iPhone Photos to PDF Converter (HEIC Support)",
    desc: "Easily convert iPhone photos to PDF format. Works with all iOS image types. Fast and private.",
    h1: "iPhone Photos to PDF",
    subtext: "Convert iOS gallery photos to documents.",
    keywords: ["iphone to pdf", "ios converter", "ipad photos to pdf", "apple image converter"]
  },
  "create-pdf-assignment": {
    title: "Make PDF for Assignments & Homework",
    desc: "Take photos of your homework and combine them into a single PDF submission. Perfect for students.",
    h1: "Assignment PDF Maker",
    subtext: "The student's favorite tool for submitting work.",
    keywords: ["homework scanner", "assignment to pdf", "student pdf tool", "submit homework online"]
  },
  "receipt-scanner-pdf": {
    title: "Receipt to PDF Scanner & Converter",
    desc: "Digitize your paper receipts. Take photos and convert them to a PDF for expense reports.",
    h1: "Receipt to PDF Converter",
    subtext: "Organize your expenses and taxes.",
    keywords: ["receipt scanner", "expense report pdf", "bills to pdf", "tax document organizer"]
  },
  "instagram-to-pdf": {
    title: "Convert Instagram Photos to PDF",
    desc: "Save your favorite Instagram photos or stories as a PDF document for offline viewing.",
    h1: "Instagram to PDF",
    subtext: "Archive your social media memories.",
    keywords: ["social media saver", "insta to pdf", "save stories", "photo archive"]
  },
  "document-photo-to-pdf": {
    title: "Document Photo to PDF (Clean & Professional)",
    desc: "Turn photos of documents into a clean, professional PDF file. Better than a scanner.",
    h1: "Document Photo to PDF",
    subtext: "Digitize paper documents instantly.",
    keywords: ["camscanner alternative", "scan to pdf", "paper to digital", "document digitizer"]
  },
};

// --- 2. GENERATE DYNAMIC METADATA ---
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const data = SEO_DATA[resolvedParams.slug];
  
  if (!data) {
    return {
      title: "PDF Converter | Page Not Found",
    };
  }

  return {
    title: data.title,
    description: data.desc,
    keywords: data.keywords,
    robots: {
      index: true,
      follow: true,
      nocache: false,
    },
    alternates: {
      canonical: `https://roas-calculator-brown.vercel.app/pdf/${resolvedParams.slug}`,
    },
    openGraph: {
      title: data.title,
      description: data.desc,
      type: "website",
    }
  };
}

// --- 3. THE PAGE COMPONENT ---
export default async function DynamicPdfPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
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
             <PdfClient />
        </div>

        {/* --- AD SLOT 2: BOTTOM --- */}
        <div className="w-full flex justify-center bg-gray-50 rounded-lg p-2">
           <AdBanner />
        </div>

        {/* --- LONG FORM SEO CONTENT --- */}
        <article className="prose prose-lg max-w-none text-gray-800">
          
          <h2 className="text-3xl font-bold text-gray-900 border-b border-gray-200 pb-4">
            How to {data.h1} in 3 Simple Steps ({currentDate})
          </h2>
          
          <p className="lead text-xl text-gray-700">
            Converting digital files should not be hard. Whether you are trying to <strong>{data.keywords[0]}</strong> for 
            work, school, or personal archives, our tool makes it effortless. You don't need to install heavy software 
            like Adobe Acrobat just to perform a simple <strong>{data.keywords[1]}</strong> task.
          </p>

          <h3 className="text-2xl font-bold text-gray-900 mt-8">Why use this Online PDF Tool?</h3>
          <p>
            PDF (Portable Document Format) is the global standard for sharing documents. When you 
            <strong> {data.keywords[2]}</strong>, you ensure that the receiver sees exactly what you see, 
            regardless of their device.
          </p>
          <ul className="list-disc pl-5 space-y-2 text-gray-700">
            <li><strong>Universal Compatibility:</strong> PDFs open on iPhones, Androids, Windows, and Macs.</li>
            <li><strong>Security:</strong> Unlike editable Word docs, PDFs are harder to accidentally alter.</li>
            <li><strong>Professionalism:</strong> Sending a PDF looks much more professional than sending a folder of 10 separate images.</li>
          </ul>

          <div className="bg-blue-50 border-l-4 border-blue-600 p-6 my-8 rounded-r-lg">
            <h4 className="text-xl font-bold text-blue-900 mb-2">🚀 Tool Highlights:</h4>
            <ul className="list-disc pl-5 space-y-2 text-blue-800">
              <li><strong>Zero Uploads:</strong> We process files in your browser for maximum privacy.</li>
              <li><strong>No Watermarks:</strong> Your documents are clean and professional.</li>
              <li><strong>Unlimited Pages:</strong> Merge as many photos as you need into one file.</li>
            </ul>
          </div>

          <h3 className="text-2xl font-bold text-gray-900 mt-8">Step-by-Step Guide</h3>
          <ol className="list-decimal pl-5 space-y-4 text-gray-800">
            <li>
              <strong>Select Images:</strong> Tap the button above to select the photos you want to convert. 
              We support JPG, PNG, and more.
            </li>
            <li>
              <strong>Arrangement:</strong> If you are combining multiple files (like for <strong>{data.keywords[3]}</strong>), 
              the tool will arrange them in order.
            </li>
            <li>
              <strong>Convert & Download:</strong> Click the "Create PDF" button. Your new document will be generated instantly 
              and ready for download.
            </li>
          </ol>

          <h3 className="text-2xl font-bold text-gray-900 mt-8">Common Questions about {data.h1}</h3>
          
          <div className="space-y-4 mt-6">
             <details className="group bg-gray-50 p-6 rounded-xl cursor-pointer border border-gray-200">
                <summary className="font-bold text-gray-900">Is this tool really free?</summary>
                <p className="text-gray-700 mt-2">Yes, it is completely free. There are no hidden fees, no limits on the number of documents, and no watermarks.</p>
             </details>
             <details className="group bg-gray-50 p-6 rounded-xl cursor-pointer border border-gray-200">
                <summary className="font-bold text-gray-900">Will my data remain private?</summary>
                <p className="text-gray-700 mt-2">Absolutely. We use client-side processing technology. Your images and documents never leave your device.</p>
             </details>
             <details className="group bg-gray-50 p-6 rounded-xl cursor-pointer border border-gray-200">
                <summary className="font-bold text-gray-900">Can I convert iPhone HEIC photos?</summary>
                <p className="text-gray-700 mt-2">Yes, our converter supports modern formats including HEIC, WEBP, PNG, and JPG.</p>
             </details>
          </div>

          <div className="mt-12 p-8 bg-slate-900 text-white rounded-2xl text-center">
            <h3 className="text-2xl font-bold mb-4">Need to reduce the file size first?</h3>
            <p className="mb-6 text-slate-300">
              If your PDF is too large to email, compress the images first using our compression tool.
            </p>
            <Link 
              href="/image-compressor" 
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full transition-transform hover:scale-105"
            >
              Go to Image Compressor &rarr;
            </Link>
          </div>

        </article>

      </div>
    </main>
  );
}