
import "./plan-card.css";

const ArrowLeft = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M19 12H5M11 6l-6 6 6 6" />
  </svg>
);

export default function PlanCard({
  title,
  description,
  badge,
  icon,
  actionLabel = "عرض",
  onView,
}) {
  return (
    <article className="plan-card" dir="rtl">
      <div className="plan-card__head">
        <span className="plan-card__icon" aria-hidden="true">
          {icon}
        </span>

        {badge && (
          <span className="plan-card__badge">
            {badge}
          </span>
        )}
      </div>

      <h3 className="plan-card__title">{title}</h3>

      <p className="plan-card__desc">{description}</p>

      <button
        type="button"
        className="plan-card__btn"
        onClick={onView}
      >
        <span>{actionLabel}</span>
        <ArrowLeft />
      </button>
    </article>
  );
}
