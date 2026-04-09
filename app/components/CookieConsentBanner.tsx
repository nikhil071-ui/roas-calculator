import Link from "next/link";

export default function CookieConsentBanner() {
  return (
    <section className="w-full border-b border-amber-200 bg-amber-50">
      <div className="container mx-auto px-4 py-2 text-sm text-slate-700">
        We use cookies for ads and analytics. Read our{" "}
        <Link href="/privacy-policy" className="text-blue-700 underline">
          Privacy Policy
        </Link>
        .
      </div>
    </section>
  );
}
