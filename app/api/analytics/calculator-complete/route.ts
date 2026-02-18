import { NextResponse } from "next/server";

type CompletionPayload = {
  calculator_type?: string;
  result_state?: string;
  roas_value?: number;
  break_even_value?: number | null;
  event_time?: string;
};

export async function POST(request: Request) {
  try {
    const payload = (await request.json()) as CompletionPayload;

    console.info("calculator_complete_server_log", {
      calculator_type: payload.calculator_type ?? "unknown",
      result_state: payload.result_state ?? "unknown",
      roas_value: payload.roas_value ?? null,
      break_even_value: payload.break_even_value ?? null,
      event_time: payload.event_time ?? new Date().toISOString(),
    });

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ ok: false }, { status: 400 });
  }
}
