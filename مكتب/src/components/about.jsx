import "./about.css";

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
    id: "office-info",
    title: "معلومات المكتب",
    icon: (
      <Svg>
        <path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z" />
        <path d="M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2" />
        <path d="M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2" />
        <path d="M10 6h4M10 10h4M10 14h4M10 18h4" />
      </Svg>
    ),
  },
  {
    id: "directorates",
    title: "المديريات",
    icon: (
      <Svg>
        <path d="M14.106 5.553a2 2 0 0 0 1.788 0l3.659-1.83A1 1 0 0 1 21 4.619v12.764a1 1 0 0 1-.553.894l-4.553 2.277a2 2 0 0 1-1.788 0l-4.212-2.106a2 2 0 0 0-1.788 0l-3.659 1.83A1 1 0 0 1 3 19.381V6.618a1 1 0 0 1 .553-.894l4.553-2.277a2 2 0 0 1 1.788 0z" />
        <path d="M15 5.764v15M9 3.236v15" />
      </Svg>
    ),
  },
  {
    id: "funding",
    title: "مصادر التمويل",
    icon: (
      <Svg>
        <rect width="20" height="12" x="2" y="6" rx="2" />
        <circle cx="12" cy="12" r="2" />
        <path d="M6 12h.01M18 12h.01" />
      </Svg>
    ),
  },
  {
    id: "partners",
    title: "جهات ذات صلة",
    icon: (
      <Svg>
        <path d="m11 17 2 2a1 1 0 1 0 3-3" />
        <path d="m14 14 2.5 2.5a1 1 0 1 0 3-3l-3.88-3.88a3 3 0 0 0-4.24 0l-.88.88a1 1 0 1 1-3-3l2.81-2.81a5.79 5.79 0 0 1 7.06-.87l.47.28a2 2 0 0 0 1.42.25L21 4" />
        <path d="m21 3 1 11h-2" />
        <path d="M3 3 2 14l6.5 6.5a1 1 0 1 0 3-3" />
        <path d="M3 4h8" />
      </Svg>
    ),
  },
  {
    id: "news",
    title: "الأخبار",
    icon: (
      <Svg>
        <rect width="18" height="18" x="3" y="3" rx="2" />
        <path d="M3 9h18M9 21V9" />
      </Svg>
    ),
  },
];

export default function About({
  id = "about",
  title = "تفاصيل عن المكتب",
  items = DEFAULT_ITEMS,
  exploreLabel = "استكشف",
  onExplore,
}) {
  return (
    <section className="about" id={id} dir="rtl" aria-labelledby={`${id}-title`}>
      <div className="container">
        <div className="about__heading">
          <span className="about__line about__line--end" aria-hidden="true" />
          <h2 className="about__title" id={`${id}-title`}>{title}</h2>
          <span className="about__line about__line--start" aria-hidden="true" />
        </div>

        <ul className="about__panel">
          {items.map((item) => (
            <li className="about__card" key={item.id}>
              <span className="about__icon">{item.icon}</span>
              <h3 className="about__name">{item.title}</h3>
              <button type="button" className="about__btn" onClick={() => onExplore?.(item)}>
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
