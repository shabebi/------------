import "./plans.css";
import Breadcrumb from "../components/breadcrumb";
import PageHeading from "../components/page-heading";
import PlanCard from "../components/plan-card";
import PlansArchive from "../components/plans-archive";

const Svg = ({ children }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    {children}
  </svg>
);

/* Placeholder copy: replace with the final text */
const PLAN_CATEGORIES = [
  {
    id: "strategic",
    title: "خطط استراتيجية",
    badge: "لآخر 3 سنوات",
    description:
      "الخطط التنموية الشاملة طويلة ومتوسطة المدى لرسم مسارات التنمية الوطنية ومستهدفات الرؤية المستقبلية وتكامل القطاعات السياسية والاقتصادية.",
    icon: (
      <Svg>
        <rect width="8" height="8" x="3" y="3" rx="2" />
        <path d="M7 11v4a2 2 0 0 0 2 2h4" />
        <rect width="8" height="8" x="13" y="13" rx="2" />
      </Svg>
    ),
    deco: (
      <Svg>
        <circle cx="12" cy="12" r="10" />
        <circle cx="12" cy="12" r="6" />
        <circle cx="12" cy="12" r="2" />
      </Svg>
    ),
  },
  {
    id: "annual-investment",
    title: "خطط سنوية استثمارية",
    badge: "لآخر 3 سنوات",
    description:
      "البرامج والمشاريع السنوية المرصودة ضمن الموازنة الاستثمارية ومشاريع الإنفاق الرأسمالي الحكومي ومحركات تحفيز القطاع الخاص والإنتاج المحلي.",
    icon: (
      <Svg>
        <rect width="20" height="12" x="2" y="6" rx="2" />
        <circle cx="12" cy="12" r="2" />
        <path d="M6 12h.01M18 12h.01" />
      </Svg>
    ),
    deco: (
      <Svg>
        <path d="M22 7 13.5 15.5 8.5 10.5 2 17" />
        <path d="M16 7h6v6" />
      </Svg>
    ),
  },
  {
    id: "response",
    title: "خطط الاستجابة",
    badge: "لآخر 3 سنوات",
    description:
      "خطط التدخل العاجل وإدارة الأزمات وتأمين الإمداد ومواجهة الطوارئ الاقتصادية والتنموية، وضمان استدامة السلع الحيوية وتأمين المخزون الاستراتيجي.",
    icon: (
      <Svg>
        <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
      </Svg>
    ),
    deco: (
      <Svg>
        <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
      </Svg>
    ),
  },
  {
    id: "other",
    title: "خطط أخرى",
    badge: "لآخر 3 سنوات",
    description:
      "الخطط القطاعية ومبادرات التوعية الخاصة بالجهات والمؤسسات الفاعلة، وحوكمة التنمية المحلية وتطوير الكفاءات البشرية والمؤسسية.",
    icon: (
      <Svg>
        <path d="M8.3 10a.7.7 0 0 1-.626-1.079L11.4 3a.7.7 0 0 1 1.198-.043L16.3 8.9a.7.7 0 0 1-.572 1.1Z" />
        <rect x="3" y="14" width="7" height="7" rx="1" />
        <circle cx="17.5" cy="17.5" r="3.5" />
      </Svg>
    ),
    deco: (
      <Svg>
        <circle cx="18" cy="5" r="3" />
        <circle cx="6" cy="12" r="3" />
        <circle cx="18" cy="19" r="3" />
        <path d="m8.59 13.51 6.83 3.98M15.41 6.51l-6.82 3.98" />
      </Svg>
    ),
  },
];

export default function Plans({ onNavigate, onOpenCategory, onOpenArchive }) {
  return (
    <div className="plans-page" dir="rtl">
      <Breadcrumb
        items={[
          { label: "الرئيسية", onClick: () => onNavigate?.("home") },
          { label: "الخطط" },
        ]}
      />

      <div className="container plans-page__body">
        <PageHeading
          title="تصنيفات الخطط المعتمدة"
          subtitle="اختر أحد التصنيفات الرئيسية للخطط لاستعراض المزيد من التفاصيل عنها"
        />

        <div className="plans-page__panel">
          <div className="plans-page__grid">
            {PLAN_CATEGORIES.map((category) => (
              <PlanCard
                key={category.id}
                {...category}
                onView={() => onOpenCategory?.(category)}
              />
            ))}
          </div>

          <PlansArchive onOpen={onOpenArchive} />
        </div>
      </div>
    </div>
  );
}
