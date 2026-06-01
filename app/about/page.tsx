import Image from "next/image";
import Link from "next/link";
import Footer from "@/components/Footer";

export const metadata = {
  title: "About – Staal Tutoring",
  description: "Meet Tex Staal — Hotelschool graduate, Black Belt in Finance, and tutor.",
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white flex flex-col">
      {/* Header */}
      <header className="border-b border-neutral-100 px-6 py-4 flex items-center justify-between bg-white">
        <Link href="/language">
          <Image src="/logo.svg" alt="Staal Tutoring" width={110} height={44} />
        </Link>
        <div className="flex items-center gap-1">
          <Link href="/pricing"
            className="text-xs font-medium text-neutral-400 hover:text-[#4b58ff] transition-colors duration-200
                       rounded-lg px-2.5 py-1.5 hover:bg-[#4b58ff]/5">
            Pricing
          </Link>
          <Link href="/contact"
            className="text-xs font-medium text-neutral-400 hover:text-[#4b58ff] transition-colors duration-200
                       rounded-lg px-2.5 py-1.5 hover:bg-[#4b58ff]/5">
            Contact
          </Link>
        </div>
      </header>

      {/* Content */}
      <div className="flex-1 max-w-2xl mx-auto w-full px-6 py-14">

        {/* Intro */}
        <div className="flex items-center gap-5 mb-10">
          <div className="shrink-0 w-16 h-16 rounded-2xl bg-[#4b58ff]/8 flex items-center justify-center">
            <span className="text-[#4b58ff] text-xl font-bold">TS</span>
          </div>
          <div>
            <h1 className="text-2xl font-bold text-neutral-900 tracking-tight">Tex Staal</h1>
            <p className="text-sm text-neutral-400 mt-0.5">Finance Tutor · Staal Tutoring</p>
          </div>
        </div>

        {/* Bio */}
        <section className="mb-10">
          <p className="text-sm text-neutral-600 leading-[1.85] mb-4">
            Hi, I&apos;m Tex. I started at the Hotelschool in 2021 and graduated at the beginning of last year.
            I completed the Finance programme and earned a <span className="font-semibold text-neutral-800">Black Belt Certificate</span> — the highest distinction awarded for Finance at the Hotelschool.
          </p>
          <p className="text-sm text-neutral-600 leading-[1.85]">
            Throughout my studies I regularly helped fellow students with Finance, and for a little over a year now
            I&apos;ve been doing this officially as a tutoring side business. The video lectures and course materials on this
            platform are designed to give you the clearest possible explanation of every topic — the way I wish someone had explained it to me.
          </p>
        </section>

        {/* Highlights */}
        <section className="grid sm:grid-cols-3 gap-3 mb-12">
          {[
            {
              icon: (
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                  <path strokeLinecap="round" strokeLinejoin="round"
                    d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
              ),
              label: "Black Belt Certificate",
              sub: "Finance — Hotelschool",
            },
            {
              icon: (
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                  <path strokeLinecap="round" strokeLinejoin="round"
                    d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              ),
              label: "Hotelschool Den Haag",
              sub: "Graduated 2025",
            },
            {
              icon: (
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                  <path strokeLinecap="round" strokeLinejoin="round"
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              ),
              label: "1+ year tutoring",
              sub: "Groups &amp; individuals",
            },
          ].map((item) => (
            <div key={item.label}
              className="flex flex-col gap-2 p-4 rounded-xl border border-neutral-100 bg-neutral-50">
              <div className="w-8 h-8 rounded-lg bg-[#4b58ff]/8 flex items-center justify-center text-[#4b58ff]">
                {item.icon}
              </div>
              <p className="text-sm font-semibold text-neutral-800 leading-tight">{item.label}</p>
              <p className="text-xs text-neutral-400" dangerouslySetInnerHTML={{ __html: item.sub }} />
            </div>
          ))}
        </section>

        {/* CTA */}
        <div className="rounded-2xl border border-neutral-100 bg-neutral-50/60 p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <p className="text-sm font-semibold text-neutral-800 mb-1">Ready to get started?</p>
            <p className="text-xs text-neutral-400">View the packages or reach out directly.</p>
          </div>
          <div className="flex gap-2 shrink-0">
            <Link href="/pricing"
              className="inline-flex items-center gap-1.5 bg-[#4b58ff] text-white text-xs font-semibold
                         px-4 py-2.5 rounded-xl hover:bg-[#3a47ee] transition-colors duration-200">
              See pricing
            </Link>
            <Link href="/contact"
              className="inline-flex items-center gap-1.5 border border-neutral-200 text-neutral-600
                         text-xs font-medium px-4 py-2.5 rounded-xl hover:border-neutral-300 hover:text-neutral-800
                         transition-all duration-200">
              Contact
            </Link>
          </div>
        </div>

      </div>

      <Footer />
    </main>
  );
}
