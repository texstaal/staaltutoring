"use client";
import { useProgress } from "@/hooks/useProgress";

export default function CourseProgressBar({
  lang,
  courseId,
  total,
}: {
  lang: string;
  courseId: string;
  total: number;
}) {
  const { mounted, completed } = useProgress(lang, courseId);

  if (!mounted || completed.length === 0) return null;

  const count = Math.min(completed.length, total);
  const pct   = total > 0 ? (count / total) * 100 : 0;
  const done  = count === total;

  return (
    <div className={`flex items-center gap-4 px-4 py-3.5 rounded-xl border transition-colors duration-300 ${
      done ? "bg-green-50 border-green-100" : "bg-neutral-50 border-neutral-100"
    }`}>
      <div className="flex-1 min-w-0">
        <div className="flex items-center justify-between mb-2">
          <span className="text-xs font-medium text-neutral-500">
            {done ? "Course completed 🎉" : "Your progress"}
          </span>
          <span className={`text-xs font-bold tabular-nums ${done ? "text-green-600" : "text-[#4b58ff]"}`}>
            {count} / {total}
          </span>
        </div>
        <div className="h-1.5 bg-neutral-200 rounded-full overflow-hidden">
          <div
            className={`h-full rounded-full transition-all duration-500 ${done ? "bg-green-500" : "bg-[#4b58ff]"}`}
            style={{ width: `${pct}%` }}
          />
        </div>
      </div>

      {done && (
        <svg className="w-5 h-5 text-green-500 shrink-0" viewBox="0 0 24 24" fill="currentColor">
          <path fillRule="evenodd" clipRule="evenodd"
            d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm4.707 7.293a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0l-2.5-2.5a1 1 0 011.414-1.414L11 13.586l4.293-4.293a1 1 0 011.414 0z" />
        </svg>
      )}
    </div>
  );
}
