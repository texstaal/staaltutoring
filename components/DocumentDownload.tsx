import { CourseDocument } from "@/lib/courses";

const config = {
  ppt: {
    label: "PPTX",
    iconBg: "bg-orange-50",
    iconColor: "text-orange-400",
    badgeColor: "text-orange-400",
    icon: (
      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round"
          d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
    ),
  },
  pdf: {
    label: "PDF",
    iconBg: "bg-red-50",
    iconColor: "text-red-400",
    badgeColor: "text-red-400",
    icon: (
      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round"
          d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
  },
  xlsx: {
    label: "XLSX",
    iconBg: "bg-green-50",
    iconColor: "text-green-500",
    badgeColor: "text-green-500",
    icon: (
      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round"
          d="M3 10h18M3 14h18M10 3v18M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
    ),
  },
};

export default function DocumentDownload({ doc }: { doc: CourseDocument }) {
  const style = config[doc.type];

  return (
    <a
      href={doc.path}
      download
      className="group flex items-center gap-3.5 p-4 rounded-xl border border-neutral-100 bg-white
                 hover:border-neutral-200 hover:shadow-[0_2px_8px_rgba(0,0,0,0.06)]
                 transition-all duration-200"
    >
      {/* File-type icon */}
      <div className={`shrink-0 w-9 h-9 rounded-lg ${style.iconBg} ${style.iconColor} flex items-center justify-center`}>
        {style.icon}
      </div>

      {/* Label */}
      <div className="flex-1 min-w-0">
        <p className="text-sm font-medium text-neutral-800 leading-snug truncate">
          {doc.title}
        </p>
        <p className={`text-[11px] font-semibold mt-0.5 ${style.badgeColor}`}>{style.label}</p>
      </div>

      {/* Download icon */}
      <svg
        className="shrink-0 w-4 h-4 text-neutral-300 group-hover:text-neutral-500 group-hover:translate-y-0.5
                   transition-all duration-200"
        fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
      </svg>
    </a>
  );
}
