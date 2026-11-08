import "./report-card.css";

const ArrowLeft = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M19 12H5M11 6l-6 6 6 6" />
  </svg>
);

/* icon: JSX element (svg paths) shown in the small tile at the top */
export default function ReportCard({
  title,
  description,
  badge,
  icon,
  actionLabel = "عرض",
  onView,
}) {
  return (
    <article className="report-card" dir="rtl">
      <div className="report-card__head">
        <span className="report-card__icon" aria-hidden="true">{icon}</span>
        {badge && <span className="report-card__badge">{badge}</span>}
      </div>

      <h3 className="report-card__title">{title}</h3>
      <p className="report-card__desc">{description}</p>

      <button type="button" className="report-card__btn" onClick={onView}>
        <span>{actionLabel}</span>
        <ArrowLeft />
      </button>
    </article>
  );
}
