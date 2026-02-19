import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Page Not Found | ROAS Tools",
  description: "The requested page could not be found.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function NotFound() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900 px-4 py-16">
      <div className="max-w-2xl mx-auto rounded-2xl border border-slate-200 bg-white p-8 md:p-12 text-center">
        <p className="text-sm font-semibold uppercase tracking-wider text-blue-700">404 Error</p>
        <h1 className="mt-3 text-3xl md:text-4xl font-bold">Page not found</h1>
        <p className="mt-4 text-slate-600">
          The URL may have changed, or the page no longer exists.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Link href="/" className="rounded-lg bg-blue-600 px-4 py-2 font-semibold text-white hover:bg-blue-700">
            Go Home
          </Link>
          <Link href="/blog" className="rounded-lg border border-slate-300 px-4 py-2 font-semibold text-slate-900 hover:bg-slate-100">
            Visit Blog
          </Link>
          <Link href="/resources" className="rounded-lg border border-slate-300 px-4 py-2 font-semibold text-slate-900 hover:bg-slate-100">
            Open Resources
          </Link>
        </div>
      </div>
    </main>
  );
}
