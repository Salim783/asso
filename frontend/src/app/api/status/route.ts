import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({
    status: "ok",
    framework: "Next.js 16",
    ui: "MUI 9",
    data: "React Query 5",
    timestamp: new Date().toISOString(),
  });
}
