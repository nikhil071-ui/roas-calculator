import { NextRequest, NextResponse } from "next/server";

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function sanitizeSource(value: string | null): string {
  if (!value) return "unknown";
  return value.slice(0, 80).replace(/[^a-zA-Z0-9_-]/g, "_");
}

function buildFallbackUrl(request: NextRequest): URL {
  const referer = request.headers.get("referer");
  if (!referer) return new URL("/", request.url);
  return new URL(referer);
}

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();
    const email = String(formData.get("email") || "").trim().toLowerCase();
    const source = sanitizeSource(String(formData.get("source") || ""));
    const fallbackUrl = buildFallbackUrl(request);

    if (!EMAIL_REGEX.test(email)) {
      fallbackUrl.searchParams.set("signup", "error");
      fallbackUrl.searchParams.set("reason", "invalid_email");
      return NextResponse.redirect(fallbackUrl, 303);
    }

    const apiKey = process.env.BREVO_API_KEY;
    const listId = Number(process.env.BREVO_LIST_ID || "");

    if (!apiKey) {
      fallbackUrl.searchParams.set("signup", "error");
      fallbackUrl.searchParams.set("reason", "missing_config");
      return NextResponse.redirect(fallbackUrl, 303);
    }

    const payload: {
      email: string;
      updateEnabled: boolean;
      listIds?: number[];
    } = {
      email,
      updateEnabled: true,
    };
    if (Number.isFinite(listId) && listId > 0) {
      payload.listIds = [listId];
    }

    const brevoResponse = await fetch("https://api.brevo.com/v3/contacts", {
      method: "POST",
      headers: {
        "api-key": apiKey,
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(payload),
      cache: "no-store",
    });

    if (!brevoResponse.ok) {
      const errorBody = await brevoResponse.text();
      console.error("brevo_email_capture_error", {
        status: brevoResponse.status,
        errorBody,
        source,
      });
      fallbackUrl.searchParams.set("signup", "error");
      fallbackUrl.searchParams.set("reason", "provider_error");
      if (process.env.NODE_ENV === "development") {
        fallbackUrl.searchParams.set("provider_status", String(brevoResponse.status));
      }
      return NextResponse.redirect(fallbackUrl, 303);
    }

    console.info("email_capture", { email, source, at: new Date().toISOString() });

    const redirectUrl = new URL("/thank-you", request.url);
    redirectUrl.searchParams.set("source", source);
    const response = NextResponse.redirect(redirectUrl, 303);
    response.cookies.set("lead_magnet_access", "1", {
      httpOnly: true,
      sameSite: "lax",
      secure: process.env.NODE_ENV === "production",
      path: "/",
      maxAge: 60 * 60 * 24 * 7,
    });
    return response;
  } catch {
    const fallbackUrl = buildFallbackUrl(request);
    fallbackUrl.searchParams.set("signup", "error");
    fallbackUrl.searchParams.set("reason", "unknown_error");
    return NextResponse.redirect(fallbackUrl, 303);
  }
}

export async function GET() {
  return NextResponse.json(
    {
      ok: true,
      route: "/api/email-capture",
      message: "Use POST with form fields: email, source",
    },
    { status: 200 }
  );
}
