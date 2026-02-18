"use client";

import Link, { type LinkProps } from "next/link";
import { trackEvent } from "@/app/lib/analytics";

type TrackedLinkProps = LinkProps & {
  children: React.ReactNode;
  className?: string;
  eventName: string;
  eventParams?: Record<string, string | number | boolean | null | undefined>;
};

export default function TrackedLink({
  children,
  className,
  eventName,
  eventParams,
  ...linkProps
}: TrackedLinkProps) {
  return (
    <Link
      {...linkProps}
      className={className}
      onClick={() => {
        trackEvent(eventName, eventParams || {});
      }}
    >
      {children}
    </Link>
  );
}

