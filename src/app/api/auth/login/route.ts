import { NextResponse } from "next/server";
import { timingSafeEqual } from "crypto";
import { getAdminCredentials } from "@/lib/env";
import { createSession, buildSessionCookie } from "@/lib/session";

function timingSafeCompare(a: string, b: string): boolean {
  const bufA = Buffer.from(a);
  const bufB = Buffer.from(b);
  if (bufA.length !== bufB.length) {
    // Compare against self to keep constant time, then return false
    timingSafeEqual(bufA, bufA);
    return false;
  }
  return timingSafeEqual(bufA, bufB);
}

export async function POST(request: Request) {
  let body: { email?: string; password?: string };

  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { success: false, error: "bad_request" },
      { status: 400 }
    );
  }

  const { email, password } = body;

  if (
    !email ||
    !password ||
    typeof email !== "string" ||
    typeof password !== "string"
  ) {
    return NextResponse.json(
      { success: false, error: "bad_request" },
      { status: 400 }
    );
  }

  const admin = getAdminCredentials();

  const emailMatch = timingSafeCompare(email.toLowerCase(), admin.email.toLowerCase());
  const passwordMatch = timingSafeCompare(password, admin.password);

  if (!emailMatch || !passwordMatch) {
    return NextResponse.json(
      { success: false, error: "invalid_credentials" },
      { status: 401 }
    );
  }

  const token = createSession();
  const cookie = buildSessionCookie(token);

  const response = NextResponse.json({ success: true }, { status: 200 });
  response.cookies.set(cookie);

  return response;
}
