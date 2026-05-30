export type LanguageId = "en" | "nl";

// ─── Video CDN (Cloudflare R2) ────────────────────────────────────────────────
// Upload new videos to R2 bucket "staal-tutoring-videos" at the same path structure:
//   nl/finance2/lu1.mp4, en/finance2/lu1.mp4, etc.
const R2 = "https://pub-d3fb5aaddbac42038fca278a198932ca.r2.dev";

export const languages = [
  { id: "en" as LanguageId, label: "English", flag: "🇬🇧" },
  { id: "nl" as LanguageId, label: "Dutch",   flag: "🇳🇱" },
];

export interface CourseDocument {
  id: string;
  title: string;
  path: string;
  type: "ppt" | "pdf" | "xlsx";
}

export interface LearningUnit {
  id: string;
  number: number;
  title: string;
  description: string;
  videoSrc: string;
}

export interface Course {
  id: string;
  title: string;
  subtitle: string;
  available: boolean;
  passwordEnvKey: string;
  /** heading + body are the only things that differ per language */
  intro: { heading: string; body: string };
  documents: CourseDocument[];
  learningUnits: LearningUnit[];
}

// ─── Finance 2 ────────────────────────────────────────────────────────────────
function buildFinance2(lang: LanguageId): Course {
  return {
    id: "finance2",
    title: "Finance 2",
    subtitle: "Advanced Financial Management",
    available: true,
    passwordEnvKey: "FINANCE2_PASSWORD",
    intro: {
      heading: "How this course works",
      body:
        lang === "en"
          ? `Finance 2 builds on foundational accounting knowledge to develop your ability to analyse, interpret, and apply financial data in a hospitality business context. The course is structured around 7 Learning Units that progress from risk and leverage, through financial analysis and working capital, to investment appraisal and hotel real estate valuation.\n\nEach LU comes with a video lecture and supporting documents — summary, exercises, and answer key. We recommend watching the video first, then working through the summary, and finally attempting the exercises before checking the answers.\n\nPay close attention to ratio formulas and capital budgeting models, as these form the core of the exam.`
          : `Finance 2 bouwt voort op basiskennis in boekhouding en leert je financiële data te analyseren, interpreteren en toepassen in een hospitality-context. De cursus is opgebouwd rond 7 Leereenheden die progressief behandelen: risico en hefboomwerking, financiële analyse, werkkapitaalbeheer, investeringsbeoordeling en vastgoedwaardering in de hotelsector.\n\nElke LE bevat een videocollege en ondersteunende documenten — samenvatting, oefeningen en antwoordensleutel. We raden aan eerst de video te bekijken, daarna de samenvatting door te nemen en tot slot de oefeningen te maken vóór je de antwoorden raadpleegt.\n\nBesteed extra aandacht aan ratioformules en investeringsmodellen, want die vormen de kern van het examen.`,
    },
    documents: [
      { id: "masterclass", title: "Masterclass",                        path: `/documents/${lang}/finance2/masterclass.pdf`,   type: "pdf"  },
      { id: "summary",     title: "Summary",                           path: `/documents/${lang}/finance2/summary.pdf`,        type: "pdf"  },
      { id: "exercises",   title: "Additional Exercises",              path: `/documents/${lang}/finance2/exercises.xlsx`,     type: "xlsx" },
      { id: "answers",     title: "Answers to Additional Exercises",   path: `/documents/${lang}/finance2/answers.xlsx`,       type: "xlsx" },
    ],
    learningUnits: [
      {
        id: "lu1", number: 1,
        title: "Risk & Financial Leverage",
        description: "Covers systematic vs. unsystematic risk, key business risk categories, and risk management frameworks. Introduces financial leverage: how the debt-to-equity mix affects ROE, the Rate of Return Trap, and the tax shield benefit of debt. Includes DuPont Analysis (ROE = Net Profit Margin × Asset Turnover × Financial Leverage) and asset financing options (short-term vs. long-term liabilities vs. equity).",
        videoSrc: `${R2}/${lang}/finance2/lu1.mp4`,
      },
      {
        id: "lu2", number: 2,
        title: "Financial Statements & Ratio Analysis",
        description: "Deep dive into the three core financial statements: Balance Sheet, Income Statement, and Cash Flow Statement, and how they interconnect. Covers all five ratio categories — liquidity (NWC, current ratio, quick ratio), solvency (debt-to-equity, financial leverage ratio), activity (inventory turnover, asset turnover, ADR, RevPAR), profitability (ROA, ROE, EBITDA margin), and operating ratios specific to hospitality.",
        videoSrc: `/videos/${lang}/finance2/lu2.mp4`,
      },
      {
        id: "lu3", number: 3,
        title: "Comparative Financial Analysis",
        description: "Techniques for comparing financial performance across time and between companies. Horizontal analysis compares two years using absolute and relative changes. Vertical (common-size) analysis expresses every line item as a percentage of a base total. Base-year analysis tracks multiple years against a single reference year to distinguish one-off events from ongoing trends.",
        videoSrc: lang === "nl"
          ? "https://iframe.mediadelivery.net/embed/673137/70a3a411-ab1b-4145-9eab-f3edf7a81dfd"
          : `${R2}/${lang}/finance2/lu3.mp4`,
      },
      {
        id: "lu4", number: 4,
        title: "Working Capital Management",
        description: "Explains Net Working Capital (NWC) and Net Operating Working Capital (NOWC) and why negative NOWC can be a strategic advantage. Introduces the Cash Conversion Cycle (CCC = IHP + ACP − PDP) with all related turnover and period formulas. Strategies for shortening the CCC: reducing inventory holding and collection periods, extending payment deferral, and the trade-offs involved.",
        videoSrc: `/videos/${lang}/finance2/lu4.mp4`,
      },
      {
        id: "lu5", number: 5,
        title: "Cash Budgeting & Cash Flow Statement",
        description: "Step-by-step cash budget preparation including credit card fee adjustments, payment delays, and timing of receipts. Covers how to read and interpret a Cash Flow Statement (operating, investing, financing activities) and how to determine a company's lifecycle stage — start-up, growth, mature, or declining — from its cash flow pattern.",
        videoSrc: `/videos/${lang}/finance2/lu5.mp4`,
      },
      {
        id: "lu6", number: 6,
        title: "Investment Appraisal & Capital Budgeting",
        description: "Covers value creation principles, WACC (Weighted Average Cost of Capital), and the Time Value of Money (compounding and discounting, FV/PV formulas, semi-annual compounding). Evaluates four capital budgeting models: ARR, Payback Period, NPV, Profitability Index, and IRR. Includes terminal value (Gordon Growth Model), maximum investment calculations, and a comparison of each model's strengths and limitations.",
        videoSrc: `/videos/${lang}/finance2/lu6.mp4`,
      },
      {
        id: "lu7", number: 7,
        title: "Hotel Real Estate Valuation",
        description: "Explores how hotel value is determined by both operational performance and property fundamentals. Covers Gross and Net Initial Yield (GIY/NIY), Loan-to-Value (LTV) ratio, and terminal value methods used in hotel real estate (including the Colliers EBITDA exit-multiple approach). Discusses the shift to asset-light strategies, sale-and-leaseback transactions, and the risks and benefits of separating hotel ownership from hotel operations.",
        videoSrc: `/videos/${lang}/finance2/lu7.mp4`,
      },
    ],
  };
}

// ─── Finance 1 (placeholder) ──────────────────────────────────────────────────
function buildFinance1(lang: LanguageId): Course {
  return {
    id: "finance1",
    title: "Finance 1",
    subtitle: "Fundamentals of Financial Management",
    available: false,
    passwordEnvKey: "FINANCE1_PASSWORD",
    intro: { heading: "", body: "" },
    documents: [],
    learningUnits: [],
  };
}

// ─── HBP (placeholder) ────────────────────────────────────────────────────────
function buildHBP(lang: LanguageId): Course {
  return {
    id: "hbp",
    title: "HBP",
    subtitle: "Human Behaviour & Performance",
    available: false,
    passwordEnvKey: "HBP_PASSWORD",
    intro: { heading: "", body: "" },
    documents: [],
    learningUnits: [],
  };
}

// ─── Exported catalog ─────────────────────────────────────────────────────────
export const catalog: Record<LanguageId, Course[]> = {
  en: [buildFinance2("en"), buildFinance1("en"), buildHBP("en")],
  nl: [buildFinance2("nl"), buildFinance1("nl"), buildHBP("nl")],
};

export function getCourse(lang: string, courseId: string): Course | undefined {
  if (lang !== "en" && lang !== "nl") return undefined;
  return catalog[lang as LanguageId].find((c) => c.id === courseId);
}

export function getLanguage(lang: string) {
  return languages.find((l) => l.id === lang);
}
