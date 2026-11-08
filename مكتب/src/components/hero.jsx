import { useEffect, useState } from "react";
import "./hero.css";

const DEFAULT_SLIDES = [
  {
    id: 1,
    title: "الاستراتيجية الوطنية للتنمية المستدامة",
    highlight: "والأمن الغذائي",
    description:
      "منظومة حكومية رقمية موحدة لتعزيز الكفاءة التشغيلية، ومراقبة شبكات الإمداد والمخزون الاستراتيجي، ومواءمة خطط الوزارات والجهات التنموية لضمان تنمية اقتصادية مستدامة للأجيال القادمة.",
    cta: "استكشف أحدث الأخبار",
  },
  {
    id: 2,
    title: "متابعة مؤشرات الأداء الوطنية",
    highlight: "بدقة وشفافية",
    description:
      "لوحات متابعة محدثة تعرض مؤشرات الأداء للجهات الحكومية وتدعم اتخاذ القرار المبني على البيانات.",
    cta: "استعرض المؤشرات",
  },
  {
    id: 3,
    title: "خطط وبرامج التنمية",
    highlight: "في مكان واحد",
    description:
      "الوصول السريع إلى الخطط الوطنية والقطاعية وتقارير التنفيذ الدورية الخاصة بها.",
    cta: "تصفح الخطط",
  },
  {
    id: 4,
    title: "تقارير وحدة الأمن الغذائي",
    highlight: "أولاً بأول",
    description:
      "متابعة المخزون الاستراتيجي وسلاسل الإمداد وأسعار السلع الأساسية عبر تقارير دورية.",
    cta: "اقرأ التقارير",
  },
];

/* Each id must match the id of the section it scrolls to
   (Pillars = "pillars", About = "about", Faq = "faq") */
const DEFAULT_TABS = [
  { id: "pillars", label: "ركائز عمل المكتب" },
  { id: "about", label: "تفاصيل عن المكتب" },
  { id: "faq", label: "الأسئلة الشائعة" },
];

const Chevron = ({ dir = "left" }) => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d={dir === "left" ? "m15 6-6 6 6 6" : "m9 6 6 6-6 6"} />
  </svg>
);

const ArrowLeft = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M19 12H5M11 6l-6 6 6 6" />
  </svg>
);

export default function Hero({
  slides = DEFAULT_SLIDES,
  tabs = DEFAULT_TABS,
  autoPlayMs = 6000,
  onCtaClick,
}) {
  const [index, setIndex] = useState(0);
  const [activeTab, setActiveTab] = useState(tabs[0]?.id);
  const count = slides.length;

  const next = () => setIndex((i) => (i + 1) % count);
  const prev = () => setIndex((i) => (i - 1 + count) % count);

  useEffect(() => {
    if (!autoPlayMs || count < 2) return;
    const t = setInterval(next, autoPlayMs);
    return () => clearInterval(t);
  }, [autoPlayMs, count]);

  /* Highlight the tab of the section currently on screen */
  useEffect(() => {
    if (!("IntersectionObserver" in window)) return;
    const sections = tabs
      .map((t) => document.getElementById(t.id))
      .filter(Boolean);
    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveTab(entry.target.id);
        });
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );

    sections.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [tabs]);

  const goToSection = (id) => {
    setActiveTab(id);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const slide = slides[index];

  return (
    <section className="hero" dir="rtl" aria-roledescription="carousel" aria-label="الشرائح الرئيسية">
      <div className="hero__card">
        <div className="hero__glow" aria-hidden="true" />

        <button
          type="button"
          className="hero__arrow hero__arrow--right"
          onClick={prev}
          aria-label="السابق"
        >
          <Chevron dir="right" />
        </button>

        <button
          type="button"
          className="hero__arrow hero__arrow--left"
          onClick={next}
          aria-label="التالي"
        >
          <Chevron dir="left" />
        </button>

        <div className="hero__content" key={slide.id} aria-live="polite">
          <h1 className="hero__title">
            {slide.title}
            <span className="hero__highlight">{slide.highlight}</span>
          </h1>
          <p className="hero__desc">{slide.description}</p>
          <button type="button" className="hero__cta" onClick={() => onCtaClick?.(slide)}>
            <span>{slide.cta}</span>
            <ArrowLeft />
          </button>
        </div>

        <div className="hero__dots" role="tablist" aria-label="اختيار الشريحة">
          {slides.map((s, i) => (
            <button
              key={s.id}
              type="button"
              role="tab"
              aria-selected={i === index}
              aria-label={`الشريحة ${i + 1}`}
              className={`hero__dot${i === index ? " is-active" : ""}`}
              onClick={() => setIndex(i)}
            />
          ))}
        </div>
      </div>

      {/* Section filter */}
      <nav className="hero__tabs-wrap" aria-label="أقسام الصفحة">
        <ul className="hero__tabs">
          {tabs.map((tab) => (
            <li key={tab.id}>
              <button
                type="button"
                className={`hero__tab${activeTab === tab.id ? " is-active" : ""}`}
                aria-current={activeTab === tab.id ? "true" : undefined}
                onClick={() => goToSection(tab.id)}
              >
                {tab.label}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </section>
  );
}
