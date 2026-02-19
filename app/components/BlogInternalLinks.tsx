"use client";

import Link from "next/link";
import { useMemo } from "react";
import EmailCaptureCard from "@/app/components/EmailCaptureCard";

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
  captureSource?: string;
};

export default function BlogInternalLinks({
  title = "Next Tools and Calculators",
  description = "Use these pages to move from analysis to action.",
  links,
  linksByIntent,
  captureSource = "blog_end_of_post",
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
    <section className="space-y-4">
      <div className="bg-slate-50 rounded-xl p-6 border border-slate-200">
        <h2 className="text-2xl font-bold text-slate-900 mb-2">{title}</h2>
        <p className="text-slate-600 mb-3">{description}</p>
        <div className="flex flex-wrap gap-3">
          {resolvedLinks.map((link) => (
            <Link key={`${link.href}-${link.label}`} href={link.href} className="text-blue-700 hover:underline">
              {link.label}
            </Link>
          ))}
        </div>
      </div>
      <EmailCaptureCard
        source={captureSource}
        variant="compact"
        title="Get the ROAS Profitability Checklist (free PDF)"
        description="Use this checklist in your weekly account review to decide scale, hold, or pause with confidence."
        buttonLabel="Email Me the Checklist"
        helperText="Includes: break-even guardrails, scenario prompts, and benchmark review steps."
      />
      <div className="bg-white rounded-xl p-4 border border-slate-200">
        <p className="text-sm text-slate-600">
          Prefer a direct download?{" "}
          <Link href="/lead-magnet/roas-decision-matrix" className="text-blue-700 hover:underline">
            Open the ROAS Decision Matrix page
          </Link>
          .
        </p>
      </div>
    </section>
  );
}
