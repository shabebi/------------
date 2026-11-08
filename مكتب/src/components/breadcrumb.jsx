import "./breadcrumb.css";

/* items: [{ label, onClick? }]  (the last item is the current page) */
export default function Breadcrumb({ items = [] }) {
  return (
    <nav className="breadcrumb" dir="rtl" aria-label="مسار التنقل">
      <div className="container">
        <ol className="breadcrumb__list">
          {items.map((item, i) => {
            const isLast = i === items.length - 1;
            return (
              <li className="breadcrumb__item" key={item.label}>
                {isLast || !item.onClick ? (
                  <span
                    className={isLast ? "breadcrumb__current" : undefined}
                    aria-current={isLast ? "page" : undefined}
                  >
                    {item.label}
                  </span>
                ) : (
                  <button type="button" className="breadcrumb__link" onClick={item.onClick}>
                    {item.label}
                  </button>
                )}
              </li>
            );
          })}
        </ol>
      </div>
    </nav>
  );
}
