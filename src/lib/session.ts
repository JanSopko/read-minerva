import { cookies } from "next/headers";

const SESSION_COOKIE = "session_token";

const activeSessions = new Set<string>();

export function createSession(): string {
  const token = crypto.randomUUID();
  activeSessions.add(token);
  return token;
}

export function invalidateSession(token: string): void {
  activeSessions.delete(token);
}

export function isValidSession(token: string): boolean {
  return activeSessions.has(token);
}

export async function getSessionToken(): Promise<string | undefined> {
  const cookieStore = await cookies();
  return cookieStore.get(SESSION_COOKIE)?.value;
}

export function buildSessionCookie(token: string) {
  const isProduction = process.env.NODE_ENV === "production";
  return {
    name: SESSION_COOKIE,
    value: token,
    httpOnly: true,
    secure: isProduction,
    sameSite: "lax" as const,
    path: "/",
    maxAge: 60 * 60 * 24 * 7, // 7 days
  };
}

export function buildClearSessionCookie() {
  return {
    name: SESSION_COOKIE,
    value: "",
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax" as const,
    path: "/",
    maxAge: 0,
  };
}
