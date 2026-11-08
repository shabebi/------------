import { useEffect, useState } from "react";
import "./header.css";

const NAV_ITEMS = [
  { id: "home", label: "الرئيسية" },
  { id: "plans", label: "الخطط" },
  { id: "reports", label: "التقارير" },
  { id: "indicators", label: "المؤشرات" },
  { id: "food-security", label: "وحدة الأمن الغذائي" },
  { id: "about", label: "عن المكتب" },
];

const SearchIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <circle cx="11" cy="11" r="7" />
    <path d="m20 20-3.5-3.5" />
  </svg>
);

const FilterIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
    <path d="M4 7h9M17 7h3M4 17h3M11 17h9" />
    <circle cx="15" cy="7" r="2" />
    <circle cx="9" cy="17" r="2" />
  </svg>
);

const GlobeIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <circle cx="12" cy="12" r="9" />
    <path d="M3 12h18M12 3c2.5 2.7 3.8 5.7 3.8 9s-1.3 6.3-3.8 9c-2.5-2.7-3.8-5.7-3.8-9S9.5 5.7 12 3Z" />
  </svg>
);

const BellIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M6 8a6 6 0 1 1 12 0c0 7 3 8 3 8H3s3-1 3-8" />
    <path d="M10.3 20a2 2 0 0 0 3.4 0" />
  </svg>
);

const UserIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <circle cx="12" cy="8" r="4" />
    <path d="M4 21a8 8 0 0 1 16 0" />
  </svg>
);

const MenuIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" aria-hidden="true">
    <path d="M4 7h16M4 12h16M4 17h16" />
  </svg>
);

const CloseIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" aria-hidden="true">
    <path d="M6 6l12 12M18 6 6 18" />
  </svg>
);

export default function Header({
  logoSrc,
  notificationCount = 3,
  activeId: controlledActive,
  onNavigate,
  onSearch,
  onLogin,
  onLanguage,
  onNotifications,
}) {
  const [activeId, setActiveId] = useState("home");
  const current = controlledActive ?? activeId;
  const [query, setQuery] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);

  const handleNav = (id) => {
    setActiveId(id);
    setMenuOpen(false);
    onNavigate?.(id);
  };

  /* Close the phone menu with Escape and lock page scroll while it is open */
  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (e) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    document.addEventListener("keydown", onKey);
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = previousOverflow;
    };
  }, [menuOpen]);

  /* Reset the menu when the screen grows past the phone breakpoint */
  useEffect(() => {
    const mq = window.matchMedia("(min-width: 721px)");
    const onChange = (e) => {
      if (e.matches) setMenuOpen(false);
    };
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  return (
    <div className="hdr" dir="rtl">
      <header className="hdr__top">
        <a className="hdr__brand" href="/">
          <span className="hdr__logo">
            <img
              src={logoSrc ?? `${import.meta.env.BASE_URL}logo.png`}
              alt="شعار مكتب التخطيط"
            />
          </span>
          <span className="hdr__brand-text">
            <strong>البوابة الوطنية الرقمية</strong>
            <small>مكتب الشؤون الاستراتيجية والتنمية</small>
          </span>
        </a>

        <form
          className="hdr__search"
          role="search"
          onSubmit={(e) => {
            e.preventDefault();
            onSearch?.(query);
          }}
        >
          <span className="hdr__search-icon"><SearchIcon /></span>
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="ابحث مع فلاتر التصنيفات للوصول السريع للمعلومات ..."
            aria-label="بحث"
          />
          <button type="button" className="hdr__filter" aria-label="تصفية">
            <FilterIcon />
          </button>
        </form>

        <div className="hdr__actions">
          <button type="button" className="hdr__icon-btn" aria-label="اللغة" onClick={onLanguage}>
            <GlobeIcon />
          </button>
          <button type="button" className="hdr__icon-btn" aria-label="الإشعارات" onClick={onNotifications}>
            <BellIcon />
            {notificationCount > 0 && <span className="hdr__badge">{notificationCount}</span>}
          </button>
          <button type="button" className="hdr__login" aria-label="تسجيل الدخول" onClick={onLogin}>
            <span className="hdr__login-icon"><UserIcon /></span>
            <span className="hdr__login-text">تسجيل الدخول</span>
          </button>
        </div>
      </header>

      {/* Desktop and tablet navigation */}
      <nav className="hdr__nav" aria-label="التنقل الرئيسي">
        <span className="hdr__line hdr__line--start" aria-hidden="true" />
        <ul className="hdr__pill">
          {NAV_ITEMS.map((item) => (
            <li key={item.id}>
              <button
                type="button"
                className={`hdr__link${current === item.id ? " is-active" : ""}`}
                aria-current={current === item.id ? "page" : undefined}
                onClick={() => handleNav(item.id)}
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>
        <span className="hdr__line hdr__line--end" aria-hidden="true" />
      </nav>

      {/* Phone navigation: floating menu bubble */}
      <div
        className={`hdr__overlay${menuOpen ? " is-open" : ""}`}
        onClick={() => setMenuOpen(false)}
        aria-hidden="true"
      />

      <nav
        id="hdr-mobile-menu"
        className={`hdr__menu${menuOpen ? " is-open" : ""}`}
        aria-label="التنقل الرئيسي"
      >
        <ul className="hdr__menu-list">
          {NAV_ITEMS.map((item) => (
            <li key={item.id}>
              <button
                type="button"
                className={`hdr__menu-link${current === item.id ? " is-active" : ""}`}
                aria-current={current === item.id ? "page" : undefined}
                onClick={() => handleNav(item.id)}
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>
      </nav>

      <button
        type="button"
        className={`hdr__fab${menuOpen ? " is-open" : ""}`}
        aria-label={menuOpen ? "إغلاق القائمة" : "فتح القائمة"}
        aria-expanded={menuOpen}
        aria-controls="hdr-mobile-menu"
        onClick={() => setMenuOpen((open) => !open)}
      >
        {menuOpen ? <CloseIcon /> : <MenuIcon />}
      </button>
    </div>
  );
}
