import { cookies } from "next/headers";
import { getIronSession } from "iron-session";
import { SessionData, sessionOptions, isCourseAuthenticated } from "@/lib/session";
import { getCourse, getLanguage } from "@/lib/courses";
import { notFound, redirect } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import VideoPlayer from "@/components/VideoPlayer";
import MarkComplete from "@/components/MarkComplete";

export default async function LUPage({
  params,
}: {
  params: Promise<{ lang: string; courseId: string; luId: string }>;
}) {
  const { lang, courseId, luId } = await params;
  const language = getLanguage(lang);
  const course = getCourse(lang, courseId);
  if (!language || !course || !course.available) notFound();

  const session = await getIronSession<SessionData>(await cookies(), sessionOptions);
  if (!isCourseAuthenticated(session, lang, courseId)) redirect(`/${lang}/${courseId}`);

  const lu = course.learningUnits.find((u) => u.id === luId);
  if (!lu) notFound();

  const idx = course.learningUnits.indexOf(lu);
  const prev = course.learningUnits[idx - 1] ?? null;
  const next = course.learningUnits[idx + 1] ?? null;
  return (
    <main className="min-h-screen bg-white">
      {/* ── Header ──────────────────────────────────────────────────────────── */}
      <header className="border-b border-neutral-100 px-6 py-4 flex items-center justify-between bg-white">
        <Link href="/language">
          <Image src="/logo.svg" alt="Staal Tutoring" width={110} height={44} />
        </Link>

        <div className="flex items-center gap-3">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm text-neutral-400">
            <Link href={`/${lang}`} className="hover:text-[#4b58ff] transition-colors duration-200 hidden sm:block">
              {"Courses"}
            </Link>
            <span className="hidden sm:block">/</span>
            <Link href={`/${lang}/${courseId}`} className="hover:text-[#4b58ff] transition-colors duration-200">
              {course.title}
            </Link>
            <span>/</span>
            <span className="text-neutral-700 font-medium">LU {lu.number}</span>
          </nav>

          <span className="text-neutral-200 hidden sm:block">·</span>

          <Link
            href="/contact"
            className="text-xs font-medium text-neutral-400 hover:text-[#4b58ff] transition-colors duration-200
                       rounded-lg px-2.5 py-1.5 hover:bg-[#4b58ff]/5 hidden sm:block"
          >
            Contact
          </Link>
        </div>
      </header>

      <div className="max-w-4xl mx-auto px-6 py-10">

        {/* Progress indicator */}
        <div className="flex items-center gap-2 mb-6">
          <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#4b58ff]
                           bg-[#4b58ff]/8 px-3 py-1.5 rounded-full">
            LU {lu.number}
          </span>
          <span className="text-xs text-neutral-300">
            {lu.number} / {course.learningUnits.length}
          </span>

          {/* Progress bar */}
          <div className="flex-1 h-1 bg-neutral-100 rounded-full overflow-hidden hidden sm:block">
            <div
              className="h-full bg-[#4b58ff] rounded-full transition-all"
              style={{ width: `${(lu.number / course.learningUnits.length) * 100}%` }}
            />
          </div>
        </div>

        {/* Video */}
        <VideoPlayer src={lu.videoSrc} />

        {/* Title + description */}
        <div className="mt-7">
          <div className="flex items-start justify-between gap-4 flex-wrap">
            <h1 className="text-xl font-bold text-neutral-900 tracking-tight">{lu.title}</h1>
            <MarkComplete lang={lang} courseId={courseId} luId={lu.id} />
          </div>
          <p className="mt-3 text-sm text-neutral-500 leading-[1.75]">{lu.description}</p>
        </div>

        {/* ── Prev / Next ───────────────────────────────────────────────────── */}
        <div className="mt-10 pt-6 border-t border-neutral-100 flex items-stretch gap-3">
          {prev ? (
            <Link
              href={`/${lang}/${courseId}/lu/${prev.id}`}
              className="group flex-1 flex items-center gap-3 px-4 py-3.5 rounded-xl border border-neutral-100
                         hover:border-[#4b58ff]/30 hover:bg-[#4b58ff]/[0.03] transition-all duration-200"
            >
              <svg className="w-4 h-4 text-neutral-300 group-hover:text-[#4b58ff] group-hover:-translate-x-0.5
                              transition-all duration-200 shrink-0"
                fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
              <div className="min-w-0">
                <p className="text-[11px] text-neutral-400 mb-0.5">{"Previous"}</p>
                <p className="text-sm font-medium text-neutral-700 group-hover:text-[#4b58ff]
                              transition-colors duration-200 truncate">
                  LU {prev.number}: {prev.title}
                </p>
              </div>
            </Link>
          ) : <div className="flex-1" />}

          {next ? (
            <Link
              href={`/${lang}/${courseId}/lu/${next.id}`}
              className="group flex-1 flex items-center justify-end gap-3 px-4 py-3.5 rounded-xl border border-neutral-100
                         hover:border-[#4b58ff]/30 hover:bg-[#4b58ff]/[0.03] transition-all duration-200 text-right"
            >
              <div className="min-w-0">
                <p className="text-[11px] text-neutral-400 mb-0.5">{"Next"}</p>
                <p className="text-sm font-medium text-neutral-700 group-hover:text-[#4b58ff]
                              transition-colors duration-200 truncate">
                  LU {next.number}: {next.title}
                </p>
              </div>
              <svg className="w-4 h-4 text-neutral-300 group-hover:text-[#4b58ff] group-hover:translate-x-0.5
                              transition-all duration-200 shrink-0"
                fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          ) : <div className="flex-1" />}
        </div>

      </div>
    </main>
  );
}
