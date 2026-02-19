import { NextRequest, NextResponse } from "next/server";

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function sanitizeSource(value: string | null): string {
  if (!value) return "unknown";
  return value.slice(0, 80).replace(/[^a-zA-Z0-9_-]/g, "_");
}

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();
    const email = String(formData.get("email") || "").trim().toLowerCase();
    const source = sanitizeSource(String(formData.get("source") || ""));

    if (!EMAIL_REGEX.test(email)) {
      return NextResponse.json({ ok: false, error: "Invalid email" }, { status: 400 });
    }

    const apiKey = process.env.BREVO_API_KEY;
    const listId = Number(process.env.BREVO_LIST_ID || "");

    if (!apiKey) {
      return NextResponse.json(
        { ok: false, error: "Missing BREVO_API_KEY" },
        { status: 500 }
      );
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
      });
      const safeMessage =
        process.env.NODE_ENV === "development"
          ? `Brevo error ${brevoResponse.status}: ${errorBody}`
          : "Brevo contact sync failed";
      return NextResponse.json(
        { ok: false, error: safeMessage },
        { status: 502 }
      );
    }

    console.info("email_capture", { email, source, at: new Date().toISOString() });

    const redirectUrl = new URL(request.headers.get("referer") || "/", request.url);
    redirectUrl.searchParams.set("signup", "success");
    return NextResponse.redirect(redirectUrl);
  } catch {
    return NextResponse.json({ ok: false, error: "Failed to process signup" }, { status: 500 });
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
