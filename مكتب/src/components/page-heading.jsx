import "./page-heading.css";

export default function PageHeading({ title, subtitle }) {
  return (
    <header className="page-heading" dir="rtl">
      <h1 className="page-heading__title">{title}</h1>
      {subtitle && <p className="page-heading__subtitle">{subtitle}</p>}
    </header>
  );
}
