import { SessionOptions } from "iron-session";

export interface SessionData {
  /** Keys are `"lang/courseId"`, e.g. "en/finance2" */
  authenticatedCourses: string[];
}

export const sessionOptions: SessionOptions = {
  password: process.env.SESSION_SECRET as string,
  cookieName: "vv_session",
  cookieOptions: {
    secure: process.env.NODE_ENV === "production",
    httpOnly: true,
    maxAge: 60 * 60 * 8, // 8 hours
  },
};

export function isCourseAuthenticated(
  session: SessionData,
  lang: string,
  courseId: string
): boolean {
  return (session.authenticatedCourses ?? []).includes(`${lang}/${courseId}`);
}
