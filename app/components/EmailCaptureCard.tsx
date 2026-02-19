"use client";

import { FormEvent, useState } from "react";

type EmailCaptureCardProps = {
  title?: string;
  description?: string;
  source: string;
  className?: string;
};

export default function EmailCaptureCard({
  title = "Get the ROAS Decision Matrix",
  description = "Join the email list for weekly profitability playbooks, benchmark updates, and scale/hold/pause checklists.",
  source,
  className = "",
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
    <section className={`bg-slate-900 text-white rounded-2xl p-6 md:p-7 ${className}`}>
      <h2 className="text-2xl font-bold">{title}</h2>
      <p className="mt-2 text-slate-300 max-w-2xl">{description}</p>
      <p className="mt-1 text-xs text-slate-400">
        Free resource: Profitability Scorecard PDF + monthly ROAS benchmark updates.
      </p>

      <form
        action={actionUrl || "#"}
        method="post"
        onSubmit={handleSubmit}
        className="mt-5 grid gap-3 md:grid-cols-[1fr_auto]"
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
          Send Me the Scorecard
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
