import Link from "next/link";
import { Course } from "@/lib/courses";

export default function CourseCard({ course, lang }: { course: Course; lang: string }) {
  /* ── Coming soon (unavailable) ─────────────────────────────────────────── */
  if (!course.available) {
    return (
      <div className="relative flex flex-col p-6 rounded-2xl border border-neutral-100 bg-neutral-50 select-none">
        <div className="flex items-start justify-between gap-3 mb-4">
          <div className="w-9 h-9 rounded-xl bg-neutral-100 flex items-center justify-center shrink-0">
            <svg className="w-4 h-4 text-neutral-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
            </svg>
          </div>
          <span className="text-[10px] font-semibold tracking-widest uppercase text-neutral-300 bg-neutral-100 px-2.5 py-1 rounded-full">
            Soon
          </span>
        </div>

        <h3 className="font-semibold text-neutral-300 text-base leading-tight">{course.title}</h3>
        <p className="mt-1 text-xs text-neutral-300 leading-snug">{course.subtitle}</p>
      </div>
    );
  }

  /* ── Available course ───────────────────────────────────────────────────── */
  return (
    <Link
      href={`/${lang}/${course.id}`}
      className="group flex flex-col p-6 rounded-2xl border border-neutral-200 bg-white
                 hover:border-[#4b58ff]/40 hover:shadow-[0_4px_20px_rgba(75,88,255,0.10)]
                 transition-all duration-200"
    >
      {/* Icon row */}
      <div className="flex items-start justify-between gap-3 mb-5">
        <div className="w-9 h-9 rounded-xl bg-[#4b58ff]/8 flex items-center justify-center shrink-0
                        group-hover:bg-[#4b58ff] transition-colors duration-200">
          <svg
            className="w-4 h-4 text-[#4b58ff] group-hover:text-white transition-colors duration-200"
            fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}
          >
            <path strokeLinecap="round" strokeLinejoin="round"
              d="M15 10l4.553-2.276A1 1 0 0121 8.723v6.554a1 1 0 01-1.447.894L15 14M3 8a2 2 0 012-2h8a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2V8z" />
          </svg>
        </div>
        <svg
          className="w-4 h-4 text-neutral-300 group-hover:text-[#4b58ff] group-hover:translate-x-0.5
                     transition-all duration-200 mt-0.5"
          fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        </svg>
      </div>

      {/* Text */}
      <h3 className="font-semibold text-neutral-900 text-base leading-tight group-hover:text-[#4b58ff] transition-colors duration-200">
        {course.title}
      </h3>
      <p className="mt-1 text-xs text-neutral-400 leading-snug">{course.subtitle}</p>

      {/* Meta */}
      <p className="mt-4 pt-4 border-t border-neutral-100 text-xs text-neutral-400 flex items-center gap-1.5">
        <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
        </svg>
        7 learning units
      </p>
    </Link>
  );
}
