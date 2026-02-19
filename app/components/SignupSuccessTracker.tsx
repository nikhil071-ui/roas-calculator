"use client";

import { useEffect } from "react";
import { trackEvent } from "@/app/lib/analytics";

type SignupSuccessTrackerProps = {
  source: string;
};

export default function SignupSuccessTracker({ source }: SignupSuccessTrackerProps) {
  useEffect(() => {
    trackEvent("email_signup_success", { source });
  }, [source]);

  return null;
}
