"use client";

import { useState, FormEvent } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

interface Props {
  lang: string;
  courseId: string;
  courseTitle: string;
  courseSubtitle: string;
  languageFlag: string;
  languageLabel: string;
}

export default function CoursePasswordGate({
  lang, courseId, courseTitle, courseSubtitle, languageFlag, languageLabel,
}: Props) {
  const [password, setPassword] = useState("");
  const [error, setError]       = useState("");
  const [loading, setLoading]   = useState(false);
  const router = useRouter();

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError("");
    const res = await fetch("/api/course-login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ lang, courseId, password }),
    });
    if (res.ok) {
      router.refresh();
    } else {
      setError("Incorrect password. Please try again.");
      setLoading(false);
    }
  }

  return (
    <main className="min-h-screen bg-white flex flex-col">
      {/* Header */}
      <header className="border-b border-neutral-100 px-6 py-4 flex items-center justify-between">
        <Link href="/language">
          <Image src="/logo.svg" alt="Staal Tutoring" width={110} height={44} />
        </Link>
        <div className="flex items-center gap-1">
          <Link href="/pricing"
            className="text-xs font-medium text-neutral-400 hover:text-[#4b58ff] transition-colors duration-200
                       rounded-lg px-2.5 py-1.5 hover:bg-[#4b58ff]/5">
            Pricing
          </Link>
          <Link href={`/${lang}`}
            className="text-xs font-medium text-neutral-400 hover:text-[#4b58ff] transition-colors duration-200
                       flex items-center gap-1.5 rounded-lg px-2.5 py-1.5 hover:bg-[#4b58ff]/5">
            <span className="text-sm leading-none">{languageFlag}</span>
            {languageLabel}
          </Link>
        </div>
      </header>

      {/* Gate */}
      <div className="flex-1 flex items-center justify-center px-4 py-16">
        <div className="w-full max-w-[380px]">

          {/* Course identity */}
          <div className="mb-8 text-center">
            <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-[#4b58ff]/8 mb-5">
              <svg className="w-6 h-6 text-[#4b58ff]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                <path strokeLinecap="round" strokeLinejoin="round"
                  d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
            </div>
            <h1 className="text-xl font-bold text-neutral-900 tracking-tight">{courseTitle}</h1>
            <p className="mt-1 text-sm text-neutral-400">{courseSubtitle}</p>
          </div>

          {/* What's included */}
          <div className="mb-6 rounded-xl border border-neutral-100 bg-neutral-50/60 p-4 space-y-2">
            {[
              "7 video lectures — one per Learning Unit",
              "PDF summaries, exercises & answer keys",
              "Track your progress through the course",
            ].map((item) => (
              <div key={item} className="flex items-start gap-2.5">
                <svg className="w-3.5 h-3.5 text-[#4b58ff] mt-0.5 shrink-0" viewBox="0 0 24 24" fill="currentColor">
                  <path fillRule="evenodd" clipRule="evenodd"
                    d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm4.707 7.293a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0l-2.5-2.5a1 1 0 011.414-1.414L11 13.586l4.293-4.293a1 1 0 011.414 0z" />
                </svg>
                <p className="text-xs text-neutral-600">{item}</p>
              </div>
            ))}
          </div>

          {/* Password form */}
          <form onSubmit={handleSubmit} className="space-y-3">
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Course password"
              required
              autoFocus
              className="w-full px-4 py-3 rounded-xl bg-neutral-50 border border-neutral-200 text-neutral-900
                         placeholder-neutral-400 text-sm
                         focus:outline-none focus:ring-2 focus:ring-[#4b58ff]/25 focus:border-[#4b58ff]
                         transition-all duration-200"
            />

            {error && (
              <div className="flex items-center gap-2 text-sm text-red-500 bg-red-50 rounded-xl px-4 py-3">
                <svg className="w-4 h-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round"
                    d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
                {error}
              </div>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full py-3 rounded-xl bg-[#4b58ff] text-white text-sm font-semibold
                         hover:bg-[#3a46e0] active:scale-[0.98]
                         disabled:opacity-50 disabled:cursor-not-allowed
                         transition-all duration-200"
            >
              {loading ? "Checking…" : "Unlock Course"}
            </button>
          </form>

          {/* Footer links */}
          <div className="mt-6 flex flex-col items-center gap-2">
            <p className="text-xs text-neutral-400">
              No password yet?{" "}
              <Link href="/pricing" className="text-[#4b58ff] hover:underline font-medium">
                View packages
              </Link>
              {" "}or{" "}
              <a href="https://wa.me/31628363631" target="_blank" rel="noopener noreferrer"
                className="text-[#4b58ff] hover:underline font-medium">
                contact Tex
              </a>
            </p>
          </div>

        </div>
      </div>
    </main>
  );
}
