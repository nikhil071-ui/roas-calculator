"use client";

import { trackEvent } from "@/app/lib/analytics";

type TrackedDownloadLinkProps = {
  href: string;
  className?: string;
  children: React.ReactNode;
  templateName: string;
  fileType: "csv" | "txt";
  sourcePage: string;
};

export default function TrackedDownloadLink({
  href,
  className,
  children,
  templateName,
  fileType,
  sourcePage,
}: TrackedDownloadLinkProps) {
  return (
    <a
      href={href}
      download
      className={className}
      onClick={() =>
        trackEvent("template_download", {
          template_name: templateName,
          file_type: fileType,
          source_page: sourcePage,
        })
      }
    >
      {children}
    </a>
  );
}

