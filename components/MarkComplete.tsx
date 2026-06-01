"use client";
import { useProgress } from "@/hooks/useProgress";

export default function MarkComplete({
  lang,
  courseId,
  luId,
}: {
  lang: string;
  courseId: string;
  luId: string;
}) {
  const { mounted, markComplete, markIncomplete, isComplete } = useProgress(lang, courseId);
  const done = mounted && isComplete(luId);

  if (!mounted) return null; // avoid hydration mismatch

  return (
    <button
      onClick={() => (done ? markIncomplete(luId) : markComplete(luId))}
      className={`inline-flex items-center gap-2 text-sm font-medium px-4 py-2.5 rounded-xl border
                  transition-all duration-200 ${
                    done
                      ? "border-green-200 bg-green-50 text-green-600 hover:bg-green-100"
                      : "border-neutral-200 bg-white text-neutral-500 hover:border-[#4b58ff]/40 hover:text-[#4b58ff] hover:bg-[#4b58ff]/5"
                  }`}
    >
      {done ? (
        <>
          {/* Solid check circle */}
          <svg className="w-4 h-4 shrink-0" viewBox="0 0 24 24" fill="currentColor">
            <path fillRule="evenodd" clipRule="evenodd"
              d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm4.707 7.293a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0l-2.5-2.5a1 1 0 011.414-1.414L11 13.586l4.293-4.293a1 1 0 011.414 0z" />
          </svg>
          Completed
        </>
      ) : (
        <>
          {/* Outline circle */}
          <svg className="w-4 h-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <circle cx="12" cy="12" r="9" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4" />
          </svg>
          Mark as complete
        </>
      )}
    </button>
  );
}
