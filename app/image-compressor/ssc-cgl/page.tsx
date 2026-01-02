import type { Metadata } from "next";
// We import the "Brain" from the folder above
import CompressorClient from "../CompressorClient"; 
// Import the Ad Component (adjust path if your file is deeper/shallower)
import AdBanner from "../../AdBanner";

// 1. SPECIFIC SEO FOR SSC STUDENTS
export const metadata: Metadata = {
  title: "Resize Photo for SSC CGL Form (20KB - 50KB) | Free Tool",
  description: "Online tool to resize signature and photo for SSC CGL application forms. Compress JPG to 20KB-50KB instantly. Privacy focused, no upload needed.",
  keywords: ["ssc cgl photo resizer", "resize image 20kb to 50kb", "ssc signature resize", "reduce image size for ssc"],
};

export default function SSCPage() {
  return (
    <main className="min-h-screen bg-gray-50 p-4 py-12">
      <div className="max-w-4xl mx-auto space-y-8">
        
        {/* 2. SPECIFIC HEADER (Only for this page) */}
        <div className="text-center space-y-4">
          <h1 className="text-3xl md:text-4xl font-bold text-slate-900">
            SSC CGL Photo & Signature Resizer
          </h1>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Easily compress your photo to <strong>20KB–50KB</strong> and signature to <strong>10KB–20KB</strong> for the SSC CGL 2026 application form.
          </p>
        </div>

        {/* --- AD SLOT 1: TOP --- */}
        <div className="w-full">
          <AdBanner />
        </div>

        {/* 3. REUSE YOUR EXISTING TOOL */}
        <CompressorClient />

        {/* --- AD SLOT 2: MIDDLE --- */}
        <div className="w-full">
          <AdBanner />
        </div>

        {/* 4. SPECIFIC TEXT CONTENT (Google loves this) */}
        <div className="prose max-w-none bg-white p-8 rounded-xl shadow-sm border border-slate-100 mt-8">
          <h3 className="text-xl font-bold mb-4">SSC CGL Photo Requirements 2026</h3>
          <ul className="list-disc pl-5 space-y-2 text-slate-700">
            <li><strong>Photo Size:</strong> 20 KB to 50 KB</li>
            <li><strong>Signature Size:</strong> 10 KB to 20 KB</li>
            <li><strong>Format:</strong> JPEG or JPG</li>
            <li><strong>Dimension:</strong> 3.5 cm (width) x 4.5 cm (height)</li>
          </ul>
          <p className="text-sm text-slate-500 mt-6 bg-blue-50 p-4 rounded-lg">
            <strong>Privacy Note:</strong> This tool runs locally in your browser. Your photos are never uploaded to any server, ensuring 100% privacy for your application data.
          </p>
        </div>

      </div>
    </main>
  );
}