"use client";

import { FormEvent, useState } from "react";

type EmailCaptureCardProps = {
  title?: string;
  description?: string;
  source: string;
  className?: string;
  variant?: "default" | "compact";
  buttonLabel?: string;
  helperText?: string;
};

export default function EmailCaptureCard({
  title = "Get Weekly Publisher RPM/ROAS Benchmarks",
  description = "Join the email list for weekly benchmark updates, profitability playbooks, and scale/hold/pause guidance.",
  source,
  className = "",
  variant = "default",
  buttonLabel = "Get Benchmark Updates",
  helperText = "Free bonus: 2026 Ad Revenue Benchmark Sheet (Google Sheets).",
}: EmailCaptureCardProps) {
  const [email, setEmail] = useState("");
  const [consent, setConsent] = useState(false);
  const actionUrl = process.env.NEXT_PUBLIC_EMAIL_CAPTURE_ACTION || "/api/email-capture";

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    if (!consent) {
      event.preventDefault();
    }
  };

  return (
    <section className={`bg-slate-900 text-white rounded-2xl ${variant === "compact" ? "p-5" : "p-6 md:p-7"} ${className}`}>
      <h2 className={`${variant === "compact" ? "text-xl" : "text-2xl"} font-bold`}>{title}</h2>
      <p className={`text-slate-300 max-w-2xl ${variant === "compact" ? "mt-1 text-sm" : "mt-2"}`}>{description}</p>
      <p className="mt-1 text-xs text-slate-400">{helperText}</p>

      <form
        action={actionUrl || "#"}
        method="post"
        onSubmit={handleSubmit}
        className={`mt-4 grid gap-3 ${variant === "compact" ? "" : "md:grid-cols-[1fr_auto]"}`}
      >
        <input type="hidden" name="source" value={source} />
        <input
          type="email"
          name="email"
          required
          autoComplete="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          placeholder="name@company.com"
          className="w-full rounded-lg border border-slate-600 bg-slate-950 px-4 py-3 text-white placeholder:text-slate-400 focus:border-blue-500 focus:outline-none"
        />
        <button
          type="submit"
          className="inline-flex items-center justify-center rounded-lg bg-blue-600 px-5 py-3 font-semibold hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-60"
        >
          {buttonLabel}
        </button>
        <label className="md:col-span-2 text-sm text-slate-300 inline-flex items-start gap-2">
          <input
            type="checkbox"
            checked={consent}
            onChange={(event) => setConsent(event.target.checked)}
            className="mt-1 h-4 w-4 rounded border-slate-500 bg-slate-950"
            required
          />
          I agree to receive email updates. Unsubscribe any time.
        </label>
      </form>
    </section>
  );
}
