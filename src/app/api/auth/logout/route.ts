import { NextResponse } from "next/server";
import {
  getSessionToken,
  invalidateSession,
  buildClearSessionCookie,
} from "@/lib/session";

export async function POST() {
  const token = await getSessionToken();

  if (token) {
    invalidateSession(token);
  }

  const response = NextResponse.json({ success: true }, { status: 200 });
  response.cookies.set(buildClearSessionCookie());

  return response;
}
