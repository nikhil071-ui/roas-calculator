import Link from "next/link";

type FounderAuthorityBlockProps = {
  compact?: boolean;
  className?: string;
};

export default function FounderAuthorityBlock({
  compact = false,
  className = "",
}: FounderAuthorityBlockProps) {
  return (
    <section className={`rounded-2xl border border-slate-200 bg-white p-5 ${className}`}>
      <p className="text-xs font-semibold tracking-wide text-blue-700 uppercase">Founder Authority</p>
      <h2 className={`${compact ? "text-lg" : "text-2xl"} mt-2 font-bold text-slate-900`}>
        Built by Sanjay Kumar for paid media profitability teams
      </h2>
      <p className="mt-2 text-slate-600">
        15+ years across performance marketing and analytics, with exposure to $2M+ monthly ad spend programs.
      </p>
      <div className="mt-4 flex flex-wrap gap-2 text-xs">
        <span className="rounded-full bg-slate-100 px-3 py-1 text-slate-700">2,000+ campaigns analyzed</span>
        <span className="rounded-full bg-slate-100 px-3 py-1 text-slate-700">50,000+ monthly users</span>
        <span className="rounded-full bg-slate-100 px-3 py-1 text-slate-700">ROAS/CAC/LTV/MER workflow focus</span>
      </div>
      <div className="mt-4 flex flex-wrap gap-3 text-sm">
        <Link href="/team" className="font-semibold text-blue-700 hover:underline">
          View Team Credentials
        </Link>
        <Link href="https://www.linkedin.com" className="font-semibold text-blue-700 hover:underline">
          Founder LinkedIn
        </Link>
      </div>
    </section>
  );
}
