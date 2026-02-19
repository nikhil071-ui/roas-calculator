import { promises as fs } from "node:fs";
import path from "node:path";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const hasAccess = request.cookies.get("lead_magnet_access")?.value === "1";

  if (!hasAccess) {
    const lockedUrl = new URL("/lead-magnet/roas-decision-matrix", request.url);
    lockedUrl.searchParams.set("locked", "1");
    return NextResponse.redirect(lockedUrl, 303);
  }

  const filePath = path.join(process.cwd(), "public", "resources", "roas-decision-matrix.csv");
  const fileBuffer = await fs.readFile(filePath);

  return new NextResponse(fileBuffer, {
    status: 200,
    headers: {
      "Content-Type": "text/csv; charset=utf-8",
      "Content-Disposition": 'attachment; filename="roas-decision-matrix.csv"',
      "Cache-Control": "private, no-store",
    },
  });
}
