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
            Reduce size to 20KB - 50KB for Government Forms.
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
            Yes! We support JPG, JPEG, PNG, and WEBP formats.
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
            We use advanced compression to reduce file size while maintaining
            visible quality.
          </p>
        </details>
      </article>
    </main>
  );
}