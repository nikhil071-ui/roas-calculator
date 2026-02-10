import Link from "next/link";
import { ArrowLeft, Star, Quote } from "lucide-react";

export default function Testimonials() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 py-12 px-4 md:px-6">
      
      {/* --- BACK BUTTON --- */}
      <div className="max-w-5xl mx-auto mb-8">
        <Link href="/" className="inline-flex items-center text-slate-500 hover:text-blue-600 transition font-medium">
            <ArrowLeft size={18} className="mr-2" /> Back to Home
        </Link>
      </div>

      {/* --- MAIN CONTENT --- */}
      <main className="max-w-5xl mx-auto bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
        
        {/* Header Section */}
        <div className="bg-slate-900 p-8 md:p-12 text-white">
            <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-yellow-500 rounded-lg flex items-center justify-center">
                    <Star className="text-white" size={28} />
                </div>
                <div>
                    <h1 className="text-3xl md:text-4xl font-bold">What Users Say</h1>
                </div>
            </div>
            <p className="text-slate-300 text-lg max-w-2xl">
                Real feedback from marketers, business owners, and students who use ROAS Tools daily.
            </p>
        </div>

        {/* Testimonials Grid */}
        <div className="p-8 md:p-12 space-y-8">
            
            {/* Stats Overview */}
            <div className="grid md:grid-cols-4 gap-4 mb-8">
                <div className="bg-blue-50 p-4 rounded-lg border border-blue-100 text-center">
                    <p className="text-3xl font-bold text-blue-600">50K+</p>
                    <p className="text-sm text-slate-600">Monthly Users</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg border border-green-100 text-center">
                    <p className="text-3xl font-bold text-green-600">4.8/5</p>
                    <p className="text-sm text-slate-600">Average Rating</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg border border-purple-100 text-center">
                    <p className="text-3xl font-bold text-purple-600">1,200+</p>
                    <p className="text-sm text-slate-600">Positive Reviews</p>
                </div>
                <div className="bg-orange-50 p-4 rounded-lg border border-orange-100 text-center">
                    <p className="text-3xl font-bold text-orange-600">85%</p>
                    <p className="text-sm text-slate-600">Return Users</p>
                </div>
            </div>

            {/* Testimonials */}
            <div className="grid md:grid-cols-2 gap-6">
                
                {/* Testimonial 1 */}
                <div className="bg-slate-50 p-6 rounded-xl border border-slate-200">
                    <div className="flex gap-1 mb-3">
                        {[...Array(5)].map((_, i) => (
                            <Star key={i} size={16} className="text-yellow-500 fill-yellow-500" />
                        ))}
                    </div>
                    <Quote size={24} className="text-slate-300 mb-2" />
                    <p className="text-slate-700 mb-4 italic">
                        "This ROAS calculator saved my business. I was scaling unprofitable campaigns thinking I was making money. 
                        Turns out my break-even ROAS was 3.8x, not 2.0x like I thought. Stopped 4 campaigns immediately and my profit doubled."
                    </p>
                    <div className="flex items-center gap-3">
                        <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-700 rounded-full flex items-center justify-center text-white font-bold text-sm">
                            NS
                        </div>
                        <div>
                            <p className="font-bold text-slate-900">Neha Sharma</p>
                            <p className="text-sm text-slate-500">E-commerce Owner, Mumbai</p>
                        </div>
                    </div>
                </div>

                {/* Testimonial 2 */}
                <div className="bg-slate-50 p-6 rounded-xl border border-slate-200">
                    <div className="flex gap-1 mb-3">
                        {[...Array(5)].map((_, i) => (
                            <Star key={i} size={16} className="text-yellow-500 fill-yellow-500" />
                        ))}
                    </div>
                    <Quote size={24} className="text-slate-300 mb-2" />
                    <p className="text-slate-700 mb-4 italic">
                        "As a freelancer managing 12 clients, I use this tool in every strategy call. Instead of confusing spreadsheets, 
                        I share my screen and calculate ROAS live. Clients love it—they can actually see if their ads are working."
                    </p>
                    <div className="flex items-center gap-3">
                        <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-emerald-700 rounded-full flex items-center justify-center text-white font-bold text-sm">
                            PM
                        </div>
                        <div>
                            <p className="font-bold text-slate-900">Pooja Malhotra</p>
                            <p className="text-sm text-slate-500">Freelance Digital Marketer, Delhi</p>
                        </div>
                    </div>
                </div>

                {/* Testimonial 3 */}
                <div className="bg-slate-50 p-6 rounded-xl border border-slate-200">
                    <div className="flex gap-1 mb-3">
                        {[...Array(5)].map((_, i) => (
                            <Star key={i} size={16} className="text-yellow-500 fill-yellow-500" />
                        ))}
                    </div>
                    <Quote size={24} className="text-slate-300 mb-2" />
                    <p className="text-slate-700 mb-4 italic">
                        "The image compressor is a lifesaver. Government job applications in India have strict 300 KB limits. 
                        I spent 3 hours trying other tools with poor results. This one hit exactly 285 KB with perfect quality."
                    </p>
                    <div className="flex items-center gap-3">
                        <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-700 rounded-full flex items-center justify-center text-white font-bold text-sm">
                            RT
                        </div>
                        <div>
                            <p className="font-bold text-slate-900">Rajesh Tiwari</p>
                            <p className="text-sm text-slate-500">UPSC Aspirant, Lucknow</p>
                        </div>
                    </div>
                </div>

                {/* Testimonial 4 */}
                <div className="bg-slate-50 p-6 rounded-xl border border-slate-200">
                    <div className="flex gap-1 mb-3">
                        {[...Array(5)].map((_, i) => (
                            <Star key={i} size={16} className="text-yellow-500 fill-yellow-500" />
                        ))}
                    </div>
                    <Quote size={24} className="text-slate-300 mb-2" />
                    <p className="text-slate-700 mb-4 italic">
                        "I manage $200K/month in Google Ads for SaaS clients. This tool helped me explain to a CFO why we needed 
                        more budget—showed break-even ROAS vs actual ROAS. Got approval for 50% increase that same day."
                    </p>
                    <div className="flex items-center gap-3">
                        <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-700 rounded-full flex items-center justify-center text-white font-bold text-sm">
                            AK
                        </div>
                        <div>
                            <p className="font-bold text-slate-900">Arjun Kumar</p>
                            <p className="text-sm text-slate-500">Growth Lead, Bengaluru</p>
                        </div>
                    </div>
                </div>

                {/* Testimonial 5 */}
                <div className="bg-slate-50 p-6 rounded-xl border border-slate-200">
                    <div className="flex gap-1 mb-3">
                        {[...Array(4)].map((_, i) => (
                            <Star key={i} size={16} className="text-yellow-500 fill-yellow-500" />
                        ))}
                        <Star size={16} className="text-slate-300" />
                    </div>
                    <Quote size={24} className="text-slate-300 mb-2" />
                    <p className="text-slate-700 mb-4 italic">
                        "Simple, fast, no BS. I bookmarked it and use it 3-4 times a week. Only complaint: I wish there was a mobile app. 
                        But the mobile website works fine so not a big deal."
                    </p>
                    <div className="flex items-center gap-3">
                        <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-red-700 rounded-full flex items-center justify-center text-white font-bold text-sm">
                            VS
                        </div>
                        <div>
                            <p className="font-bold text-slate-900">Vikram Singh</p>
                            <p className="text-sm text-slate-500">Dropshipper, Jaipur</p>
                        </div>
                    </div>
                </div>

                {/* Testimonial 6 */}
                <div className="bg-slate-50 p-6 rounded-xl border border-slate-200">
                    <div className="flex gap-1 mb-3">
                        {[...Array(5)].map((_, i) => (
                            <Star key={i} size={16} className="text-yellow-500 fill-yellow-500" />
                        ))}
                    </div>
                    <Quote size={24} className="text-slate-300 mb-2" />
                    <p className="text-slate-700 mb-4 italic">
                        "I teach digital marketing at a college. I recommend ROAS Tools to all my students because it's free, 
                        accurate, and teaches them the RIGHT way to calculate profitability. Better than paid tools we used before."
                    </p>
                    <div className="flex items-center gap-3">
                        <div className="w-12 h-12 bg-gradient-to-br from-teal-500 to-teal-700 rounded-full flex items-center justify-center text-white font-bold text-sm">
                            MG
                        </div>
                        <div>
                            <p className="font-bold text-slate-900">Dr. Meera Gupta</p>
                            <p className="text-sm text-slate-500">Marketing Professor, Pune</p>
                        </div>
                    </div>
                </div>

                {/* Testimonial 7 */}
                <div className="bg-slate-50 p-6 rounded-xl border border-slate-200">
                    <div className="flex gap-1 mb-3">
                        {[...Array(5)].map((_, i) => (
                            <Star key={i} size={16} className="text-yellow-500 fill-yellow-500" />
                        ))}
                    </div>
                    <Quote size={24} className="text-slate-300 mb-2" />
                    <p className="text-slate-700 mb-4 italic">
                        "The PDF converter saved my project presentation. Client needed it under 2 MB for email, but all other tools 
                        destroyed the quality. This one kept it sharp at 1.85 MB. No watermark, no signup required. Perfect."
                    </p>
                    <div className="flex items-center gap-3">
                        <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-indigo-700 rounded-full flex items-center justify-center text-white font-bold text-sm">
                            SK
                        </div>
                        <div>
                            <p className="font-bold text-slate-900">Sanjay Kapoor</p>
                            <p className="text-sm text-slate-500">Graphic Designer, Hyderabad</p>
                        </div>
                    </div>
                </div>

                {/* Testimonial 8 */}
                <div className="bg-slate-50 p-6 rounded-xl border border-slate-200">
                    <div className="flex gap-1 mb-3">
                        {[...Array(5)].map((_, i) => (
                            <Star key={i} size={16} className="text-yellow-500 fill-yellow-500" />
                        ))}
                    </div>
                    <Quote size={24} className="text-slate-300 mb-2" />
                    <p className="text-slate-700 mb-4 italic">
                        "Currency converter with live rates is clutch. I pay international freelancers weekly and need accurate INR conversions 
                        for invoicing. This tool matches XE.com rates but loads faster. Added to my daily bookmarks."
                    </p>
                    <div className="flex items-center gap-3">
                        <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-pink-700 rounded-full flex items-center justify-center text-white font-bold text-sm">
                            AD
                        </div>
                        <div>
                            <p className="font-bold text-slate-900">Ananya Das</p>
                            <p className="text-sm text-slate-500">Agency Owner, Kolkata</p>
                        </div>
                    </div>
                </div>

            </div>

        </div>

        {/* CTA Footer */}
        <div className="bg-slate-900 p-8 md:p-12 text-center text-white">
            <h2 className="text-2xl font-bold mb-4">Want to Share Your Experience?</h2>
            <p className="text-slate-300 mb-6 max-w-2xl mx-auto">
                If ROAS Tools helped your business or saved you time, we'd love to hear about it. Send us your story and we may feature it here.
            </p>
            <Link href="/contact" className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg transition">
                Share Your Feedback
            </Link>
        </div>

      </main>
    </div>
  );
}
