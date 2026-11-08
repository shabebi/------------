import "./reports.css";
import Breadcrumb from "../components/breadcrumb";
import PageHeading from "../components/page-heading";
import ReportCard from "../components/report-card";
import ReportsArchive from "../components/reports-archive";

const Svg = ({ children }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    {children}
  </svg>
);

/* Placeholder copy: replace with the final text */
const REPORT_CATEGORIES = [
  {
    id: "investment-program",
    title: "تقارير البرنامج الإستثماري",
    badge: "لآخر 3 سنوات",
    description:
      "المتابعة المالية والتنفيذية لبرامج ومشاريع الإنفاق الرأسمالي الحكومي ومعدلات التدفق وإنجاز المشروعات الاستثمارية.",
    icon: (
      <Svg>
        <path d="M18 20V10" />
        <path d="M12 20V4" />
        <path d="M6 20v-6" />
      </Svg>
    ),
  },
  {
    id: "organizations-evaluation",
    title: "تقارير تقييم خطط المنظمات",
    badge: "لآخر 3 سنوات",
    description:
      "تقييم أداء الشركاء الدوليين والمنظمات الأممية والمحلية وقياس الأثر التنموي الفعلي للمشاريع المشتركة.",
    icon: (
      <Svg>
        <rect width="18" height="18" x="3" y="3" rx="2" />
        <path d="M8 17v-5M12 17V7M16 17v-3" />
      </Svg>
    ),
  },
  {
    id: "response",
    title: "تقارير الاستجابة",
    badge: "لآخر 3 سنوات",
    description:
      "تقارير التدخل السريع ومتابعة سلاسل الإمداد ومواجهة الطوارئ الاقتصادية ومؤشرات المخزون الاستراتيجي للسلع الحيوية.",
    icon: (
      <Svg>
        <path d="M12 2v10" />
        <path d="M18.4 6.6a9 9 0 1 1-12.77.04" />
      </Svg>
    ),
  },
];

export default function Reports({ onNavigate, onOpenCategory, onOpenArchive }) {
  return (
    <div className="reports-page" dir="rtl">
      <Breadcrumb
        items={[
          { label: "الرئيسية", onClick: () => onNavigate?.("home") },
          { label: "التقارير" },
        ]}
      />

      <div className="container reports-page__body">
        <PageHeading
          title="تصنيفات التقارير المعتمدة"
          subtitle="اختر أحد التصنيفات الرئيسية للتقارير لاستعراض المزيد من التفاصيل والوثائق الدورية"
        />

        <div className="reports-page__panel">
          <div className="reports-page__grid">
            {REPORT_CATEGORIES.map((category) => (
              <ReportCard
                key={category.id}
                {...category}
                onView={() => onOpenCategory?.(category)}
              />
            ))}
          </div>

          <ReportsArchive onOpen={onOpenArchive} />
        </div>
      </div>
    </div>
  );
}
