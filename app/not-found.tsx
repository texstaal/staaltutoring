import Link from "next/link";
import Image from "next/image";
import Footer from "@/components/Footer";

export default function NotFound() {
  return (
    <main className="min-h-screen bg-white flex flex-col">
      {/* Header */}
      <header className="border-b border-neutral-100 px-6 py-4 flex items-center justify-between">
        <Link href="/language">
          <Image src="/logo.svg" alt="Staal Tutoring" width={110} height={44} />
        </Link>
        <Link
          href="/contact"
          className="text-xs font-medium text-neutral-400 hover:text-[#4b58ff] transition-colors duration-200
                     rounded-lg px-2.5 py-1.5 hover:bg-[#4b58ff]/5"
        >
          Contact
        </Link>
      </header>

      {/* Content */}
      <div className="flex-1 flex flex-col items-center justify-center px-4 text-center">

        {/* LU-style badge */}
        <div className="inline-flex items-center gap-2.5 bg-[#4b58ff]/8 px-5 py-2.5 rounded-full mb-8">
          <span className="text-[10px] font-black tracking-[0.2em] uppercase text-[#4b58ff]">LU</span>
          <span className="text-3xl font-black text-[#4b58ff] leading-none tabular-nums">404</span>
        </div>

        {/* Heading */}
        <h1 className="text-3xl sm:text-4xl font-black text-neutral-900 tracking-tight mb-3">
          This wasn't in the lecture.
        </h1>

        <p className="text-sm text-neutral-400 max-w-sm leading-relaxed mb-10">
          The page you're looking for doesn't exist, has moved, or the URL is incorrect.
          Check the link or head back to the course overview.
        </p>

        {/* Progress bar (decorative, stuck at 0%) */}
        <div className="w-48 h-1 bg-neutral-100 rounded-full overflow-hidden mb-10">
          <div className="h-full w-0 bg-[#4b58ff] rounded-full" />
        </div>

        {/* CTA */}
        <div className="flex flex-col sm:flex-row items-center gap-3">
          <Link
            href="/language"
            className="inline-flex items-center gap-2 bg-[#4b58ff] text-white text-sm font-semibold
                       px-5 py-2.5 rounded-xl hover:bg-[#3a47ee] transition-colors duration-200"
          >
            Back to courses
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 text-sm font-medium text-neutral-500
                       px-5 py-2.5 rounded-xl border border-neutral-200 hover:border-neutral-300
                       hover:text-neutral-700 transition-all duration-200"
          >
            Contact Tex
          </Link>
        </div>

      </div>

      {/* Footer hint */}
      <p className="text-center text-xs text-neutral-300 pb-4">
        Grade: 0 / 10 — topic not found
      </p>

      <Footer />
    </main>
  );
}
