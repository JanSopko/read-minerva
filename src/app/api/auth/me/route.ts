import { NextResponse } from "next/server";
import { getSessionToken, isValidSession } from "@/lib/session";

export async function GET() {
  const token = await getSessionToken();

  if (!token || !isValidSession(token)) {
    return NextResponse.json(
      { authenticated: false },
      { status: 401 }
    );
  }

  return NextResponse.json(
    { authenticated: true, user: { role: "admin" } },
    { status: 200 }
  );
}
