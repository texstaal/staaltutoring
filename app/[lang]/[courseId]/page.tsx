import { cookies } from "next/headers";
import { getIronSession } from "iron-session";
import { SessionData, sessionOptions, isCourseAuthenticated } from "@/lib/session";
import { getCourse, getLanguage } from "@/lib/courses";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import CoursePasswordGate from "@/components/CoursePasswordGate";
import LUCard from "@/components/LUCard";
import DocumentDownload from "@/components/DocumentDownload";

export default async function CoursePage({
  params,
}: {
  params: Promise<{ lang: string; courseId: string }>;
}) {
  const { lang, courseId } = await params;
  const language = getLanguage(lang);
  const course = getCourse(lang, courseId);
  if (!language || !course || !course.available) notFound();

  const session = await getIronSession<SessionData>(await cookies(), sessionOptions);
  const authenticated = isCourseAuthenticated(session, lang, courseId);

  if (!authenticated) {
    return (
      <CoursePasswordGate
        lang={lang}
        courseId={courseId}
        courseTitle={course.title}
        courseSubtitle={course.subtitle}
        languageFlag={language.flag}
        languageLabel={language.label}
      />
    );
  }

  return (
    <main className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b border-neutral-100 px-6 py-4 flex items-center justify-between bg-white">
        <Link href="/language">
          <Image src="/logo.svg" alt="Staal Tutoring" width={110} height={44} />
        </Link>
        <div className="flex items-center gap-1">
          <Link
            href="/contact"
            className="text-xs font-medium text-neutral-400 hover:text-[#4b58ff] transition-colors duration-200
                       rounded-lg px-2.5 py-1.5 hover:bg-[#4b58ff]/5"
          >
            Contact
          </Link>
          <Link
            href={`/${lang}`}
            className="text-sm text-neutral-400 hover:text-[#4b58ff] transition-colors duration-200
                       flex items-center gap-1.5 rounded-lg px-2.5 py-1.5 hover:bg-[#4b58ff]/5"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
            Courses
          </Link>
        </div>
      </header>

      <div className="max-w-3xl mx-auto px-6 py-12 space-y-14">

        {/* Course title */}
        <div className="pb-6 border-b border-neutral-100">
          <p className="text-xs font-semibold tracking-widest uppercase text-[#4b58ff] mb-2">
            {language.label}
          </p>
          <h1 className="text-3xl font-bold text-neutral-900 tracking-tight">{course.title}</h1>
          <p className="mt-1.5 text-sm text-neutral-400">{course.subtitle}</p>
        </div>

        {/* Introduction */}
        <section>
          <h2 className="text-base font-semibold text-neutral-900 mb-4">
            {course.intro.heading}
          </h2>
          <div className="rounded-2xl border border-neutral-100 bg-neutral-50/60 p-6 space-y-3">
            {course.intro.body.split("\n\n").map((para, i) => (
              <p key={i} className="text-sm text-neutral-600 leading-[1.75]">{para}</p>
            ))}
          </div>
        </section>

        {/* Documents */}
        <section>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-base font-semibold text-neutral-900">Course Documents</h2>
            <span className="text-xs text-neutral-400">{course.documents.length} files</span>
          </div>
          <div className="grid gap-2.5 sm:grid-cols-2">
            {course.documents.map((doc) => (
              <DocumentDownload key={doc.id} doc={doc} />
            ))}
          </div>
        </section>

        {/* Learning Units */}
        <section>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-base font-semibold text-neutral-900">Learning Units</h2>
            <span className="text-xs text-neutral-400">{course.learningUnits.length} units</span>
          </div>
          <div className="space-y-1.5">
            {course.learningUnits.map((lu) => (
              <LUCard key={lu.id} lu={lu} lang={lang} courseId={courseId} />
            ))}
          </div>
        </section>

      </div>
    </main>
  );
}
