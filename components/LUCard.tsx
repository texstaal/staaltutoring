"use client";
import Link from "next/link";
import { LearningUnit } from "@/lib/courses";
import { useProgress } from "@/hooks/useProgress";

export default function LUCard({
  lu,
  lang,
  courseId,
}: {
  lu: LearningUnit;
  lang: string;
  courseId: string;
}) {
  const { mounted, isComplete } = useProgress(lang, courseId);
  const done = mounted && isComplete(lu.id);

  return (
    <Link
      href={`/${lang}/${courseId}/lu/${lu.id}`}
      className={`group flex items-center gap-4 px-4 py-3.5 rounded-xl border bg-white
                 transition-all duration-200 ${
                   done
                     ? "border-green-100 hover:border-green-200 hover:bg-green-50/40"
                     : "border-neutral-100 hover:border-[#4b58ff]/30 hover:bg-[#4b58ff]/[0.03]"
                 }`}
    >
      {/* Number badge OR completed check */}
      <div
        className={`shrink-0 w-8 h-8 rounded-lg flex items-center justify-center transition-colors duration-200 ${
          done
            ? "bg-green-50"
            : "bg-[#4b58ff]/8 group-hover:bg-[#4b58ff]"
        }`}
      >
        {done ? (
          <svg className="w-4 h-4 text-green-500" viewBox="0 0 24 24" fill="currentColor">
            <path fillRule="evenodd" clipRule="evenodd"
              d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm4.707 7.293a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0l-2.5-2.5a1 1 0 011.414-1.414L11 13.586l4.293-4.293a1 1 0 011.414 0z" />
          </svg>
        ) : (
          <span className="text-[11px] font-bold tabular-nums text-[#4b58ff] group-hover:text-white transition-colors duration-200">
            {lu.number}
          </span>
        )}
      </div>

      {/* Text */}
      <div className="flex-1 min-w-0">
        <p className={`text-sm font-medium transition-colors duration-200 truncate ${
          done ? "text-neutral-600 group-hover:text-green-700" : "text-neutral-800 group-hover:text-[#4b58ff]"
        }`}>
          {lu.title}
        </p>
        <p className="mt-0.5 text-xs text-neutral-400 line-clamp-1 leading-relaxed">
          {lu.description}
        </p>
      </div>

      {/* Arrow */}
      <svg
        className={`shrink-0 w-4 h-4 group-hover:translate-x-0.5 transition-all duration-200 ${
          done ? "text-green-300 group-hover:text-green-500" : "text-neutral-300 group-hover:text-[#4b58ff]"
        }`}
        fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
      </svg>
    </Link>
  );
}
