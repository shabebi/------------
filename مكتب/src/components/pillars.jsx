import "./pillars.css";

const Svg = ({ children }) => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    {children}
  </svg>
);

const ArrowLeft = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M19 12H5M11 6l-6 6 6 6" />
  </svg>
);

const DEFAULT_ITEMS = [
  {
    id: "plans",
    title: "الخطط",
    icon: (
      <Svg>
        <path d="m12.99 6.74 1.93 3.44" />
        <path d="M19.136 12a10 10 0 0 1-14.271 0" />
        <path d="m21 21-2.16-3.84" />
        <path d="m3 21 8.02-14.26" />
        <circle cx="12" cy="5" r="2" />
      </Svg>
    ),
  },
  {
    id: "reports",
    title: "التقارير",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" aria-hidden="true">
        <rect x="3" y="3" width="18" height="18" rx="3" fill="currentColor" />
        <path d="M8 17v-4M12 17V8M16 17v-6" stroke="var(--color-white)" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    id: "indicators",
    title: "المؤشرات",
    icon: (
      <Svg>
        <path d="M3 18l6-6 4 4 5-5" />
        <path d="M19 3v4M17 5h4" />
        <path d="M5 4v2M4 5h2" />
      </Svg>
    ),
  },
  {
    id: "food-security",
    title: "وحدة الأمن الغذائي",
    icon: (
      <Svg>
        <path d="M7 20h10" />
        <path d="M10 20c5.5-2.5.8-6.4 3-10" />
        <path d="M9.5 9.4c1.1.8 1.8 2.2 2.3 3.7-2 .4-3.5.4-4.8-.3-1.2-.6-2.3-1.9-3-4.2 2.8-.5 4.4 0 5.5.8z" />
        <path d="M14.1 6a7 7 0 0 0-1.1 4c1.9-.1 3.3-.6 4.3-1.4 1-1 1.6-2.3 1.7-4.6-2.7.1-4 1-4.9 2z" />
      </Svg>
    ),
  },
];

export default function Pillars({
  id = "pillars",
  title = "ركائز عمل المكتب",
  items = DEFAULT_ITEMS,
  exploreLabel = "استكشف",
  onExplore,
}) {
  return (
    <section className="pillars" id={id} dir="rtl" aria-labelledby={`${id}-title`}>
      <div className="container">
        <div className="pillars__heading">
          <span className="pillars__line pillars__line--end" aria-hidden="true" />
          <h2 className="pillars__title" id={`${id}-title`}>{title}</h2>
          <span className="pillars__line pillars__line--start" aria-hidden="true" />
        </div>

        <ul className="pillars__panel">
          {items.map((item) => (
            <li className="pillars__card" key={item.id}>
              <span className="pillars__icon">{item.icon}</span>
              <h3 className="pillars__name">{item.title}</h3>
              <button type="button" className="pillars__btn" onClick={() => onExplore?.(item)}>
                <span>{exploreLabel}</span>
                <ArrowLeft />
              </button>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
