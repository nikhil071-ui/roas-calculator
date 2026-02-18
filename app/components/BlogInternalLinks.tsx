"use client";

import Link from "next/link";
import { useMemo } from "react";

type InternalLinkItem = {
  href: string;
  label: string;
};

type IntentBucket = "search" | "social" | "direct" | "email";

type BlogInternalLinksProps = {
  title?: string;
  description?: string;
  links: InternalLinkItem[];
  linksByIntent?: Partial<Record<IntentBucket, InternalLinkItem[]>>;
};

export default function BlogInternalLinks({
  title = "Next Tools and Calculators",
  description = "Use these pages to move from analysis to action.",
  links,
  linksByIntent,
}: BlogInternalLinksProps) {
  const resolvedLinks = useMemo(() => {
    if (!linksByIntent || typeof document === "undefined") return links;

    const referrer = document.referrer.toLowerCase();
    const source = `${window.location.search} ${referrer}`;

    if (source.includes("utm_medium=email") || source.includes("mail.")) {
      return linksByIntent.email ?? links;
    }
    if (source.includes("facebook") || source.includes("instagram") || source.includes("linkedin") || source.includes("t.co")) {
      return linksByIntent.social ?? links;
    }
    if (source.includes("google.") || source.includes("bing.") || source.includes("duckduckgo.") || source.includes("utm_medium=organic")) {
      return linksByIntent.search ?? links;
    }
    if (!referrer) {
      return linksByIntent.direct ?? links;
    }

    return links;
  }, [links, linksByIntent]);

  return (
    <section className="bg-slate-50 rounded-xl p-6 border border-slate-200">
      <h2 className="text-2xl font-bold text-slate-900 mb-2">{title}</h2>
      <p className="text-slate-600 mb-3">{description}</p>
      <div className="flex flex-wrap gap-3">
        {resolvedLinks.map((link) => (
          <Link key={`${link.href}-${link.label}`} href={link.href} className="text-blue-700 hover:underline">
            {link.label}
          </Link>
        ))}
      </div>
    </section>
  );
}
