import Image from "next/image";
import Link from "next/link";
import Footer from "@/components/Footer";


export const metadata = {
  title: "Contact – Staal Tutoring",
  description: "Get in touch with Tex Staal for questions about courses or tutoring.",
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-white flex flex-col">
      {/* Header */}
      <header className="border-b border-neutral-100 px-6 py-4 flex items-center justify-between">
        <Link href="/language">
          <Image src="/logo.svg" alt="Staal Tutoring" width={110} height={44} />
        </Link>
        <Link
          href="/language"
          className="text-xs font-medium text-neutral-400 hover:text-[#4b58ff] transition-colors duration-200
                     flex items-center gap-1.5 rounded-lg px-2.5 py-1.5 hover:bg-[#4b58ff]/5"
        >
          <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
          Courses
        </Link>
      </header>

      {/* Content */}
      <div className="flex-1 flex items-center justify-center px-4 py-16">
        <div className="w-full max-w-[360px]">

          {/* Avatar / photo */}
          <div className="mb-8 text-center">
            <div className="inline-block w-20 h-20 rounded-full overflow-hidden border border-neutral-100 shadow-sm mb-5">
              <Image
                src="/tex.png"
                alt="Tex Staal"
                width={80}
                height={80}
                className="w-full h-full object-cover object-top"
                priority
              />
            </div>
            <h1 className="text-xl font-bold text-neutral-900 tracking-tight">Tex Staal</h1>
            <p className="mt-1 text-sm text-neutral-400">Staal Tutoring</p>
          </div>

          {/* Contact cards */}
          <div className="space-y-2.5">

            {/* WhatsApp */}
            <a
              href="https://wa.me/31628363631"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-4 p-4 rounded-xl border border-neutral-100 bg-white
                         hover:border-[#25d366]/40 hover:shadow-[0_2px_12px_rgba(37,211,102,0.10)]
                         transition-all duration-200"
            >
              <div className="shrink-0 w-10 h-10 rounded-xl bg-[#25d366]/10 flex items-center justify-center">
                {/* WhatsApp icon */}
                <svg className="w-5 h-5 text-[#25d366]" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-xs font-semibold text-[#25d366] mb-0.5">WhatsApp</p>
                <p className="text-sm font-medium text-neutral-800">+31 6 28 36 36 31</p>
              </div>
              <svg className="w-4 h-4 text-neutral-300 group-hover:text-[#25d366] group-hover:translate-x-0.5 transition-all duration-200 shrink-0"
                fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </a>

            {/* Phone */}
            <a
              href="tel:+31628363631"
              className="group flex items-center gap-4 p-4 rounded-xl border border-neutral-100 bg-white
                         hover:border-[#4b58ff]/30 hover:shadow-[0_2px_12px_rgba(75,88,255,0.08)]
                         transition-all duration-200"
            >
              <div className="shrink-0 w-10 h-10 rounded-xl bg-[#4b58ff]/8 flex items-center justify-center">
                <svg className="w-5 h-5 text-[#4b58ff]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                  <path strokeLinecap="round" strokeLinejoin="round"
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-xs font-semibold text-[#4b58ff] mb-0.5">Phone</p>
                <p className="text-sm font-medium text-neutral-800">+31 6 28 36 36 31</p>
              </div>
              <svg className="w-4 h-4 text-neutral-300 group-hover:text-[#4b58ff] group-hover:translate-x-0.5 transition-all duration-200 shrink-0"
                fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </a>

            {/* Email */}
            <a
              href="mailto:texstaal@gmail.com"
              className="group flex items-center gap-4 p-4 rounded-xl border border-neutral-100 bg-white
                         hover:border-[#4b58ff]/30 hover:shadow-[0_2px_12px_rgba(75,88,255,0.08)]
                         transition-all duration-200"
            >
              <div className="shrink-0 w-10 h-10 rounded-xl bg-[#4b58ff]/8 flex items-center justify-center">
                <svg className="w-5 h-5 text-[#4b58ff]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                  <path strokeLinecap="round" strokeLinejoin="round"
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-xs font-semibold text-[#4b58ff] mb-0.5">Email</p>
                <p className="text-sm font-medium text-neutral-800 truncate">texstaal@gmail.com</p>
              </div>
              <svg className="w-4 h-4 text-neutral-300 group-hover:text-[#4b58ff] group-hover:translate-x-0.5 transition-all duration-200 shrink-0"
                fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </a>

          </div>

          <p className="mt-8 text-center text-xs text-neutral-400">
            Typically replies within a few hours.
          </p>
        </div>
      </div>

      <Footer />
    </main>
  );
}
