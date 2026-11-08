import { useState } from "react";
import "./footer.css";

const QUICK_LINKS = [
  { label: "بوابة المشتريات والمناقصات الحكومية", href: "#" },
  { label: "المنصة الوطنية الموحدة للخدمات", href: "#" },
  { label: "مكتبة البيانات الوطنية المفتوحة", href: "#" },
  { label: "بوابة التوظيف والكفاءات الاستراتيجية", href: "#" },
  { label: "لوحة الأداء التنموي المفتوح", href: "#" },
];

const LEGAL_LINKS = [
  { label: "إمكانية الوصول الرقمي", href: "#" },
  { label: "سياسة الخصوصية والاستخدام", href: "#" },
  { label: "معايير الأمان والامتثال السيبراني", href: "#" },
  { label: "خريطة البوابة", href: "#" },
];

const Emblem = () => (
  <svg viewBox="0 0 64 64" width="100%" height="100%" aria-hidden="true">
    <rect width="64" height="64" fill="#fff" />
    <path d="M32 8c-8 6-16 8-22 8 0 18 8 32 22 40 14-8 22-22 22-40-6 0-14-2-22-8Z" fill="#B8860B" />
    <path d="M32 14v34M20 26h24" stroke="#fff" strokeWidth="3" />
  </svg>
);

const Svg = ({ children, size = 16 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    {children}
  </svg>
);

const ShieldCheckIcon = () => (
  <Svg>
    <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
    <path d="m9 12 2 2 4-4" />
  </Svg>
);

const LockIcon = () => (
  <Svg>
    <rect width="18" height="11" x="3" y="11" rx="2" />
    <path d="M7 11V7a5 5 0 0 1 10 0v4" />
  </Svg>
);

const ArrowLeft = () => (
  <Svg size={14}>
    <path d="M19 12H5M11 6l-6 6 6 6" />
  </Svg>
);

export default function Footer({
  logoSrc,
  phone = "19900",
  email = "info@strategic.gov",
  workingHours = "الأحد - الخميس (7:30 ص - 3:30 م)",
  quickLinks = QUICK_LINKS,
  legalLinks = LEGAL_LINKS,
  onSubscribe,
}) {
  const [subscriberEmail, setSubscriberEmail] = useState("");

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!subscriberEmail.trim()) return;
    onSubscribe?.(subscriberEmail.trim());
    setSubscriberEmail("");
  };

  return (
    <footer className="footer" dir="rtl">
      <div className="container">
        <div className="footer__grid">
          {/* Brand */}
          <div className="footer__brand">
            <a className="footer__logo" href="/">
              <span className="footer__emblem">
                <img src="/logo.png" alt="شعار مكتب التخطيط" />
              </span>
              <span className="footer__logo-text">
                <strong>البوابة الوطنية الرقمية</strong>
                <small>مكتب الشؤون الاستراتيجية والتنمية</small>
              </span>
            </a>

            <p className="footer__about">
              المنصة المركزية لإدارة الخطط الوطنية ومتابعة تنفيذ أولويات التنمية
              والأمن الغذائي، تابعة مباشرة للمجلس الاقتصادي والتنموي الأعلى.
            </p>

            <ul className="footer__badges">
              <li className="footer__badge">
                <ShieldCheckIcon />
                <span>بوابة رسمية موثقة</span>
              </li>
              <li className="footer__badge">
                <LockIcon />
                <span>تشفير عالي الأمان 256-bit</span>
              </li>
            </ul>
          </div>

          {/* Quick links */}
          <nav className="footer__col" aria-labelledby="footer-links-title">
            <h3 className="footer__title" id="footer-links-title">الروابط السريعة</h3>
            <ul className="footer__links">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a className="footer__link" href={link.href}>
                    <ArrowLeft />
                    <span>{link.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contact */}
          <div className="footer__col">
            <h3 className="footer__title">التواصل والدعم</h3>
            <dl className="footer__contact">
              <div>
                <dt>مركز الاتصال الحكومي:</dt>
                <dd className="footer__phone" dir="ltr">{phone}</dd>
              </div>
              <div>
                <dt>البريد الإلكتروني الرسمي:</dt>
                <dd>
                  <a href={`mailto:${email}`} dir="ltr">{email}</a>
                </dd>
              </div>
              <div>
                <dt>أوقات العمل الميداني:</dt>
                <dd>{workingHours}</dd>
              </div>
            </dl>
          </div>

          {/* Newsletter */}
          <div className="footer__col">
            <h3 className="footer__title">النشرة الدورية والتحديثات</h3>
            <p className="footer__text">
              اشترك لاستلام الملخص الشهري لتقارير الأداء ومستجدات الأمن الغذائي في بريدك.
            </p>
            <form className="footer__form" onSubmit={handleSubscribe}>
              <input
                type="email"
                value={subscriberEmail}
                onChange={(e) => setSubscriberEmail(e.target.value)}
                placeholder="بريدك الإلكتروني"
                aria-label="البريد الإلكتروني للاشتراك"
                dir="rtl"
                required
              />
              <button type="submit">اشترك</button>
            </form>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="footer__bottom">
          <p className="footer__copy">
            © {new Date().getFullYear()} البوابة الوطنية الرقمية | مكتب الشؤون
            الاستراتيجية والتنمية. جميع الحقوق محفوظة. بوابة حكومية رسمية.
          </p>
          <ul className="footer__legal">
            {legalLinks.map((link) => (
              <li key={link.label}>
                <a href={link.href}>{link.label}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
