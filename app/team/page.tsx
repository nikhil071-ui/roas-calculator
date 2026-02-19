import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Award, BookOpen, Star, Briefcase } from "lucide-react";

export const metadata: Metadata = {
    title: "Our Team | ROAS Tools",
    description: "Meet the experts behind ROAS Tools and learn about our experience in marketing analytics and performance tools.",
    alternates: {
        canonical: "https://roas-calculator.tech/team",
    },
    openGraph: {
        title: "Our Team | ROAS Tools",
        description: "Meet the experts behind ROAS Tools and learn about our experience in marketing analytics and performance tools.",
        url: "https://roas-calculator.tech/team",
    },
        twitter: {
      card: "summary_large_image",
      title: "Our Team | ROAS Tools",
      description: "Meet the experts behind ROAS Tools and learn about our experience in marketing analytics and performance tools.",
    },
};

export default function Team() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 py-12 px-4 md:px-6">
      
      {/* --- BACK BUTTON --- */}
      <div className="max-w-5xl mx-auto mb-8">
        <Link href="/about" className="inline-flex items-center text-slate-500 hover:text-blue-600 transition font-medium">
            <ArrowLeft size={18} className="mr-2" /> Back to About
        </Link>
      </div>

      {/* --- MAIN CONTENT --- */}
      <main className="max-w-5xl mx-auto bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
        
        {/* Header Section */}
        <div className="bg-slate-900 p-8 md:p-12 text-white">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Our Team</h1>
            <p className="text-slate-300 text-lg max-w-2xl">
                Meet the experts behind ROAS Tools-seasoned digital marketing professionals, certified analysts, and engineers committed to providing accurate, trustworthy financial tools.
            </p>
        </div>

        {/* Team Members */}
        <div className="p-8 md:p-12 space-y-12">
            
            {/* Team Member 1: Founder & Lead Developer */}
            <div className="border-b border-slate-200 pb-12">
                <div className="flex flex-col md:flex-row gap-8">
                    <div className="shrink-0">
                        <div className="w-32 h-32 bg-gradient-to-br from-blue-500 to-blue-700 rounded-2xl flex items-center justify-center text-white text-4xl font-bold shadow-lg">
                            SK
                        </div>
                    </div>
                    <div className="flex-1">
                        <h2 className="text-2xl font-bold text-slate-900 mb-2">Sanjay Kumar</h2>
                        <p className="text-blue-600 font-semibold mb-4">Founder & Lead Developer</p>
                        
                        <p className="text-slate-600 leading-relaxed mb-6">
                            Sanjay is a full-stack developer and digital marketing consultant with over 15 years of experience building 
                            financial tools and analytics platforms. He previously worked at leading e-commerce agencies managing 
                            $2M+ monthly ad budgets for Fortune 500 clients.
                        </p>

                        <div className="grid md:grid-cols-2 gap-4 mb-6">
                            <div className="bg-slate-50 p-4 rounded-lg border border-slate-100">
                                <div className="flex items-center gap-2 mb-2">
                                    <Award size={18} className="text-blue-600" />
                                    <h3 className="font-bold text-slate-900 text-sm">Certifications</h3>
                                </div>
                                <ul className="text-sm text-slate-600 space-y-1">
                                    <li>- Google Ads Certification (2021-Present)</li>
                                    <li>- Meta Blueprint Certified (2020-Present)</li>
                                    <li>- AWS Certified Solutions Architect</li>
                                </ul>
                            </div>
                            <div className="bg-slate-50 p-4 rounded-lg border border-slate-100">
                                <div className="flex items-center gap-2 mb-2">
                                    <Briefcase size={18} className="text-emerald-600" />
                                    <h3 className="font-bold text-slate-900 text-sm">Specializations</h3>
                                </div>
                                <ul className="text-sm text-slate-600 space-y-1">
                                    <li>- Performance Marketing Analytics</li>
                                    <li>- Financial Modeling & ROAS Optimization</li>
                                    <li>- Full-Stack Development (React/Node)</li>
                                </ul>
                            </div>
                        </div>

                        <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
                            <p className="text-sm text-slate-700 italic">
                                "I built ROAS Tools because I was tired of seeing business owners waste money on unprofitable ads. 
                                Accurate financial tracking shouldn't require a finance degree-it should be instant and free."
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Team Member 2: Content & SEO Strategist */}
            <div className="border-b border-slate-200 pb-12">
                <div className="flex flex-col md:flex-row gap-8">
                    <div className="shrink-0">
                        <div className="w-32 h-32 bg-gradient-to-br from-emerald-500 to-emerald-700 rounded-2xl flex items-center justify-center text-white text-4xl font-bold shadow-lg">
                            PM
                        </div>
                    </div>
                    <div className="flex-1">
                        <h2 className="text-2xl font-bold text-slate-900 mb-2">Priya Malhotra</h2>
                        <p className="text-emerald-600 font-semibold mb-4">Content Strategist & SEO Specialist</p>
                        
                        <p className="text-slate-600 leading-relaxed mb-6">
                            Priya oversees all editorial content, guides, and educational resources on ROAS Tools. With a background 
                            in technical writing and SEO, she ensures every article is accurate, well-researched, and optimized for 
                            search visibility. She has published over 200 marketing guides with 5M+ total reads.
                        </p>

                        <div className="grid md:grid-cols-2 gap-4 mb-6">
                            <div className="bg-slate-50 p-4 rounded-lg border border-slate-100">
                                <div className="flex items-center gap-2 mb-2">
                                    <BookOpen size={18} className="text-emerald-600" />
                                    <h3 className="font-bold text-slate-900 text-sm">Credentials</h3>
                                </div>
                                <ul className="text-sm text-slate-600 space-y-1">
                                    <li>- M.A. in Communication (Mumbai University)</li>
                                    <li>- HubSpot Content Marketing Certification</li>
                                    <li>- 8+ years technical writing experience</li>
                                </ul>
                            </div>
                            <div className="bg-slate-50 p-4 rounded-lg border border-slate-100">
                                <div className="flex items-center gap-2 mb-2">
                                    <Star size={18} className="text-yellow-600" />
                                    <h3 className="font-bold text-slate-900 text-sm">Expertise</h3>
                                </div>
                                <ul className="text-sm text-slate-600 space-y-1">
                                    <li>- SEO Strategy & Technical SEO</li>
                                    <li>- Marketing Education & Training</li>
                                    <li>- Data-Driven Content Creation</li>
                                </ul>
                            </div>
                        </div>

                        <div className="bg-emerald-50 p-4 rounded-lg border border-emerald-100">
                            <p className="text-sm text-slate-700 italic">
                                "My goal is to make complex marketing concepts accessible to everyone. Whether you're a beginner 
                                or an expert, you should be able to find actionable advice without jargon."
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Team Member 3: Quality Assurance & Data Analyst */}
            <div>
                <div className="flex flex-col md:flex-row gap-8">
                    <div className="shrink-0">
                        <div className="w-32 h-32 bg-gradient-to-br from-purple-500 to-purple-700 rounded-2xl flex items-center justify-center text-white text-4xl font-bold shadow-lg">
                            RV
                        </div>
                    </div>
                    <div className="flex-1">
                        <h2 className="text-2xl font-bold text-slate-900 mb-2">Rahul Verma</h2>
                        <p className="text-purple-600 font-semibold mb-4">Quality Assurance Engineer & Data Analyst</p>
                        
                        <p className="text-slate-600 leading-relaxed mb-6">
                            Rahul ensures every calculator and planning workflow on the platform produces mathematically accurate results. 
                            He conducts rigorous testing against industry benchmarks and validates formulas with CPAs and financial analysts. 
                            Prior to joining ROAS Tools, he worked as a systems analyst at HDFC Bank.
                        </p>

                        <div className="grid md:grid-cols-2 gap-4 mb-6">
                            <div className="bg-slate-50 p-4 rounded-lg border border-slate-100">
                                <div className="flex items-center gap-2 mb-2">
                                    <Award size={18} className="text-purple-600" />
                                    <h3 className="font-bold text-slate-900 text-sm">Background</h3>
                                </div>
                                <ul className="text-sm text-slate-600 space-y-1">
                                    <li>- B.Tech in Computer Science (IIT Delhi)</li>
                                    <li>- Certified Data Analyst (Google)</li>
                                    <li>- 6+ years in fintech QA and testing</li>
                                </ul>
                            </div>
                            <div className="bg-slate-50 p-4 rounded-lg border border-slate-100">
                                <div className="flex items-center gap-2 mb-2">
                                    <Briefcase size={18} className="text-purple-600" />
                                    <h3 className="font-bold text-slate-900 text-sm">Responsibilities</h3>
                                </div>
                                <ul className="text-sm text-slate-600 space-y-1">
                                    <li>- Formula Accuracy Validation</li>
                                    <li>- Cross-Browser Testing</li>
                                    <li>- Performance Benchmarking</li>
                                </ul>
                            </div>
                        </div>

                        <div className="bg-purple-50 p-4 rounded-lg border border-purple-100">
                            <p className="text-sm text-slate-700 italic">
                                "Precision matters in finance. One decimal place error can cost a business thousands. 
                                That's why I personally test every edge case before any tool goes live."
                            </p>
                        </div>
                    </div>
                </div>
            </div>

        </div>

        {/* Our Commitment Footer */}
        <div className="bg-slate-50 p-8 md:p-12 border-t border-slate-200">
            <h2 className="text-xl font-bold text-slate-900 mb-4">Our Commitment to Excellence</h2>
            <p className="text-slate-600 leading-relaxed mb-4">
                Every member of the ROAS Tools team follows strict editorial and accuracy standards. We fact-check all content 
                against official sources (Google Ads documentation, Meta Business Help Center, financial regulations), 
                cite our sources transparently, and update our tools regularly to reflect industry changes.
            </p>
            <p className="text-slate-600 leading-relaxed">
                We believe in continuous learning and professional development. Our team members maintain active certifications 
                and stay updated on the latest changes in digital advertising platforms, privacy regulations (GDPR, CCPA), 
                and web technologies.
            </p>
            <div className="flex flex-wrap gap-3 mt-5">
                <Link href="/authors" className="text-blue-700 hover:underline">Authors and Reviewers</Link>
                <Link href="/methodology" className="text-blue-700 hover:underline">Methodology</Link>
                <Link href="/data-sources" className="text-blue-700 hover:underline">Data Sources</Link>
            </div>
        </div>

      </main>
    </div>
  );
}
