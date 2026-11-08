import "./plans-archive.css";

const ArrowLeft = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M19 12H5M11 6l-6 6 6 6" />
  </svg>
);

const ArchiveIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <rect width="20" height="5" x="2" y="3" rx="1" />
    <path d="M4 8v11a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8" />
    <path d="M10 12h4" />
  </svg>
);

export default function PlansArchive({
  badge = "الأعوام السابقة",
  title = "أرشيف الخطط السابقة",
  subtitle = "سجل توثيقي شامل للخطط المنتهية",
  actionLabel = "استعراض الأرشيف",
  onOpen,
}) {
  return (
    <section className="plans-archive" dir="rtl" aria-labelledby="plans-archive-title">
      <span className="plans-archive__glow" aria-hidden="true" />
      <span className="plans-archive__deco" aria-hidden="true"><ArchiveIcon /></span>

      <div className="plans-archive__text">
        <span className="plans-archive__badge">{badge}</span>
        <h3 className="plans-archive__title" id="plans-archive-title">{title}</h3>
        <p className="plans-archive__subtitle">{subtitle}</p>
      </div>

      <button type="button" className="plans-archive__btn" onClick={onOpen}>
        <span>{actionLabel}</span>
        <ArrowLeft />
      </button>
    </section>
  );
}
