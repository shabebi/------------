import "./reports-archive.css";

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

export default function ReportsArchive({
  badge = "الأعوام السابقة",
  title = "أرشيف التقارير السابقة",
  subtitle = "سجل توثيقي شامل لكافة التقارير السابقة",
  actionLabel = "استعراض الأرشيف",
  onOpen,
}) {
  return (
    <section className="reports-archive" dir="rtl" aria-labelledby="reports-archive-title">
      <span className="reports-archive__glow" aria-hidden="true" />
      <span className="reports-archive__deco" aria-hidden="true"><ArchiveIcon /></span>

      <div className="reports-archive__text">
        <span className="reports-archive__badge">{badge}</span>
        <h3 className="reports-archive__title" id="reports-archive-title">{title}</h3>
        <p className="reports-archive__subtitle">{subtitle}</p>
      </div>

      <button type="button" className="reports-archive__btn" onClick={onOpen}>
        <span>{actionLabel}</span>
        <ArrowLeft />
      </button>
    </section>
  );
}
