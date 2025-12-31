import type { Metadata } from "next";
import Link from "next/link";
import CompressorClient from "./CompressorClient"; // <--- Importing the tool we just made

export const metadata: Metadata = {
  title: "Free Image Compressor - Reduce Size to 50KB / 20KB (JPEG & PNG)",
  description: "Compress images online for free. Reduce JPG/PNG size to specific MB or KB limits for government forms (SSC, UPSC). No signup required.",
  keywords: ["image compressor", "reduce image size to 50kb", "photo compressor", "jpeg compressor online", "reduce photo size for signature"],
  alternates: {
    canonical: "https://roas-calculator-brown.vercel.app/image-compressor",
  },
};

export default function ImageCompressorPage() {
  return (
    <main className="min-h-screen bg-gray-50 p-6 font-sans relative">
      
      {/* Navbar Link */}
      <div className="max-w-5xl mx-auto mb-6 flex justify-between items-center">
        <Link href="/" className="text-blue-600 hover:underline">← Back to Home</Link>
      </div>

      {/* --- AD SLOT: TOP LEADERBOARD --- */}
      <div className="max-w-5xl mx-auto mb-8 h-[90px] bg-white border border-gray-300 rounded-lg flex items-center justify-center text-gray-400 text-sm">
         [Google AdSense Leaderboard 728x90]
      </div>

      {/* --- THE INTERACTIVE TOOL --- */}
      <div className="max-w-5xl mx-auto">
        <CompressorClient />
      </div>
      
      {/* --- AD SLOT: BOTTOM BANNER --- */}
      <div className="max-w-6xl mx-auto mt-8 h-[250px] bg-white border border-gray-300 rounded-lg flex items-center justify-center text-gray-400 text-sm">
         [Google AdSense Banner 300x250 or Responsive]
      </div>

     {/* --- SEO CONTENT (The "Secret Sauce" for #1 Ranking) --- */}
      <article className="max-w-4xl mx-auto mt-16 prose lg:prose-lg text-gray-700 border-t pt-12">
        <h2 className="text-3xl font-bold text-slate-900">How to Compress Images to 50KB for Government Forms (2025 Guide)</h2>
        <p>
          Applying for government jobs in India like <strong>SSC, UPSC, IBPS, SBI PO, or Railways (RRB)</strong>? 
          You know the struggle: the portal asks for a photo "under 50KB" and a signature "under 20KB", but your phone takes photos that are 5MB.
        </p>
        <p>
          Our <strong>Free Image Compressor</strong> is the only tool designed specifically for Indian exam portals. 
          Unlike other tools that just say "Medium Quality," we let you type exact numbers like <strong>0.05 MB</strong> (which is 50KB) to ensure your application never gets rejected.
        </p>

        <h3 className="text-2xl font-bold text-slate-900 mt-8">Step-by-Step: Reduce Image Size in Seconds</h3>
        <ol className="list-decimal pl-5 space-y-2">
            <li><strong>Upload your Photo:</strong> Click the upload box or drag your JPG/PNG file.</li>
            <li><strong>Set Target Size:</strong> Look at the "Target Max Size" input. Type <strong>0.05</strong> for 50KB, or <strong>0.02</strong> for 20KB.</li>
            <li><strong>Wait for Magic:</strong> Our smart algorithm instantly shrinks the file size while keeping your face clear.</li>
            <li><strong>Check & Download:</strong> Click the "Eye" icon to preview. If it looks good, hit Download.</li>
        </ol>

        <h3 className="text-2xl font-bold text-slate-900 mt-8">Why is this tool better than others?</h3>
        <ul>
            <li><strong>100% Privacy Guarantee:</strong> Most online compressors upload your private photos to a server in a foreign country. We don't. <strong>Your images are processed locally in your browser</strong> and never leave your device.</li>
            <li><strong>Works Offline:</strong> Once the page loads, you can turn off your internet and it will still work!</li>
            <li><strong>No Watermarks:</strong> We don't put any ugly logos on your important documents.</li>
        </ul>

        <h3 className="text-2xl font-bold text-slate-900 mt-8">Common Size Requirements for 2025 Exams</h3>
        <div className="overflow-x-auto my-6">
            <table className="min-w-full bg-white border border-gray-300">
                <thead>
                    <tr className="bg-gray-100">
                        <th className="py-2 px-4 border-b text-left">Exam Name</th>
                        <th className="py-2 px-4 border-b text-left">Photo Size</th>
                        <th className="py-2 px-4 border-b text-left">Signature Size</th>
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
                    <tr>
                        <td className="py-2 px-4 border-b">RRB NTPC</td>
                        <td className="py-2 px-4 border-b">20KB – 50KB</td>
                        <td className="py-2 px-4 border-b">10KB – 20KB</td>
                    </tr>
                </tbody>
            </table>
        </div>

        <h3 className="text-2xl font-bold text-slate-900 mt-8">Frequently Asked Questions (FAQ)</h3>
        <details className="group border-b pb-4 mb-4 cursor-pointer">
            <summary className="font-bold text-lg list-none flex justify-between items-center">
                <span>Can I compress PNG images?</span>
                <span className="transition group-open:rotate-180">⬇️</span>
            </summary>
            <p className="mt-2 text-gray-600">Yes! We support JPG, JPEG, PNG, and WEBP formats. The tool will automatically convert them to a lightweight format if needed.</p>
        </details>
        <details className="group border-b pb-4 mb-4 cursor-pointer">
            <summary className="font-bold text-lg list-none flex justify-between items-center">
                <span>Will my photo become blurry?</span>
                <span className="transition group-open:rotate-180">⬇️</span>
            </summary>
            <p className="mt-2 text-gray-600">We use advanced compression that removes unnecessary metadata without destroying the image pixels. However, if you compress a 5MB photo to 10KB, some quality loss is expected.</p>
        </details>
      </article>

    </main>
  );
}