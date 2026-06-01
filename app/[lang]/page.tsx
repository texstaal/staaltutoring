import { notFound } from "next/navigation";
import { catalog, getLanguage } from "@/lib/courses";
import Image from "next/image";
import Link from "next/link";
import CourseCard from "@/components/CourseCard";
import Footer from "@/components/Footer";

export default async function CoursesPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const language = getLanguage(lang);
  if (!language) notFound();

  const courses = catalog[language.id];

  return (
    <main className="min-h-screen bg-white">
      <header className="border-b border-neutral-100 px-6 py-4 flex items-center justify-between bg-white">
        <Link href="/language">
          <Image src="/logo.svg" alt="Staal Tutoring" width={110} height={44} />
        </Link>
        <div className="flex items-center gap-1">
          <Link href="/about"
            className="text-xs font-medium text-neutral-400 hover:text-[#4b58ff] transition-colors duration-200
                       rounded-lg px-2.5 py-1.5 hover:bg-[#4b58ff]/5 hidden sm:block">
            About
          </Link>
          <Link href="/pricing"
            className="text-xs font-medium text-neutral-400 hover:text-[#4b58ff] transition-colors duration-200
                       rounded-lg px-2.5 py-1.5 hover:bg-[#4b58ff]/5 hidden sm:block">
            Pricing
          </Link>
          <Link
            href="/contact"
            className="text-xs font-medium text-neutral-400 hover:text-[#4b58ff] transition-colors duration-200
                       rounded-lg px-2.5 py-1.5 hover:bg-[#4b58ff]/5"
          >
            Contact
          </Link>
          <Link
            href="/language"
            className="flex items-center gap-1.5 text-xs font-medium text-neutral-400 hover:text-[#4b58ff]
                       transition-colors duration-200 rounded-lg px-2.5 py-1.5 hover:bg-[#4b58ff]/5"
          >
            <span className="text-sm leading-none">{language.flag}</span>
            {language.label}
            <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </Link>
        </div>
      </header>

      <section className="max-w-3xl mx-auto px-6 py-14">
        <div className="mb-10">
          <p className="text-xs font-semibold tracking-widest uppercase text-[#4b58ff] mb-2">
            {language.label}
          </p>
          <h1 className="text-2xl font-bold text-neutral-900 tracking-tight">Select a course</h1>
          <p className="mt-1.5 text-sm text-neutral-400">
            Each course is password-protected. You will need your course password to access the material.
          </p>
        </div>
        <div className="grid gap-4 sm:grid-cols-3">
          {courses.map((course) => (
            <CourseCard key={course.id} course={course} lang={lang} />
          ))}
        </div>
      </section>
      <Footer />
    </main>
  );
}
