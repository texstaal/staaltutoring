import Link from "next/link";
import { LearningUnit } from "@/lib/courses";

export default function LUCard({
  lu,
  lang,
  courseId,
}: {
  lu: LearningUnit;
  lang: string;
  courseId: string;
}) {
  return (
    <Link
      href={`/${lang}/${courseId}/lu/${lu.id}`}
      className="group flex items-center gap-4 px-4 py-3.5 rounded-xl border border-neutral-100 bg-white
                 hover:border-[#4b58ff]/30 hover:bg-[#4b58ff]/[0.03]
                 transition-all duration-200"
    >
      {/* Number badge */}
      <div
        className="shrink-0 w-8 h-8 rounded-lg bg-[#4b58ff]/8 flex items-center justify-center
                   group-hover:bg-[#4b58ff] transition-colors duration-200"
      >
        <span className="text-[11px] font-bold tabular-nums text-[#4b58ff] group-hover:text-white transition-colors duration-200">
          {lu.number}
        </span>
      </div>

      {/* Text */}
      <div className="flex-1 min-w-0">
        <p className="text-sm font-medium text-neutral-800 group-hover:text-[#4b58ff] transition-colors duration-200 truncate">
          {lu.title}
        </p>
        <p className="mt-0.5 text-xs text-neutral-400 line-clamp-1 leading-relaxed">
          {lu.description}
        </p>
      </div>

      {/* Play arrow */}
      <svg
        className="shrink-0 w-4 h-4 text-neutral-300 group-hover:text-[#4b58ff] group-hover:translate-x-0.5
                   transition-all duration-200"
        fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
      </svg>
    </Link>
  );
}
