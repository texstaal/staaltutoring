import { NextRequest, NextResponse } from "next/server";
import { getIronSession } from "iron-session";
import { SessionData, sessionOptions } from "@/lib/session";
import { getCourse } from "@/lib/courses";

export async function POST(req: NextRequest) {
  const { lang, courseId, password } = await req.json();

  const course = getCourse(lang, courseId);
  if (!course || !course.available) {
    return NextResponse.json({ error: "Course not found" }, { status: 404 });
  }

  const expected = process.env[course.passwordEnvKey];
  if (!expected || password !== expected) {
    return NextResponse.json({ error: "Invalid password" }, { status: 401 });
  }

  const res = NextResponse.json({ ok: true });
  const session = await getIronSession<SessionData>(req, res, sessionOptions);
  if (!session.authenticatedCourses) session.authenticatedCourses = [];

  const key = `${lang}/${courseId}`;
  if (!session.authenticatedCourses.includes(key)) {
    session.authenticatedCourses.push(key);
  }
  await session.save();
  return res;
}
