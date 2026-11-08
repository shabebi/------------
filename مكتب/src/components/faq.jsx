import { useState } from "react";
import "./faq.css";

/* Placeholder content: replace with the real questions and answers.
   Each item: { id, question, intro?, steps? } */
const DEFAULT_FAQS = [
  {
    id: "funding-requests",
    question: "كيف يمكن للجهات الحكومية تقديم طلبات التمويل للمشاريع التنموية؟",
    intro:
      "تتم عملية التقديم إلكترونيًا وبشكل مؤتمت بالكامل عبر منصة التخطيط التنموي الموحدة باتباع الخطوات التالية:",
    steps: [
      "تسجيل الدخول للمنصة بواسطة ممثل الجهة المعتمد عبر الهوية الرقمية الحكومية.",
      "تعبئة نموذج دراسة الجدوى الاقتصادية والأثر التنموي وربطه بأحد مستهدفات رؤية 2030.",
      "إرفاق المخطط الزمني وجداول الكميات والتدفقات النقدية المطلوبة للسنوات المالية.",
      "يخضع الطلب للتقييم الفني والمالي من قبل لجان المكتب خلال 15 يوم عمل مع إشعار فوري بحالة الاعتماد.",
    ],
  },
  {
    id: "supply-chain-indicators",
    question: "ما هي المؤشرات المعتمدة في تقييم كفاءة سلاسل الإمداد الغذائي؟",
    intro:
      "يعتمد المكتب مجموعة من المؤشرات الموحدة تشمل مستوى المخزون الاستراتيجي، ومدة التوريد، ونسبة الفاقد، واستقرار أسعار السلع الأساسية.",
  },
  {
    id: "data-updates",
    question: "كيف يتم تحديث بيانات لوحة المؤشرات الوطنية وما مدى دقتها؟",
    intro:
      "تُحدَّث البيانات دوريًا من الجهات المصدرة عبر الربط الإلكتروني، وتخضع للمراجعة والتحقق قبل نشرها على اللوحة.",
  },
  {
    id: "open-data",
    question: "هل يمكن للمواطنين والباحثين الوصول إلى التقارير والبيانات المفتوحة؟",
    intro:
      "نعم، تتوفر التقارير والبيانات المفتوحة للجميع عبر البوابة، ويمكن تنزيلها بصيغ متعددة دون الحاجة إلى تسجيل الدخول.",
  },
];

const ChevronDown = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="m6 9 6 6 6-6" />
  </svg>
);

const HelpIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M9.5 9a2.5 2.5 0 1 1 3.6 2.2c-.7.4-1.1.9-1.1 1.8" />
    <path d="M12 17h.01" />
  </svg>
);

export default function Faq({
  id = "faq",
  title = "الأسئلة الشائعة",
  subtitle = "إجابات فورية وموثقة على استفسارات المواطنين والجهات المعنية حول أعمال وخدمات المكتب",
  items = DEFAULT_FAQS,
  contactHref = "#contact",
}) {
  const [openId, setOpenId] = useState(items[0]?.id ?? null);

  const toggle = (itemId) => setOpenId((current) => (current === itemId ? null : itemId));

  return (
    <section className="faq" id={id} dir="rtl" aria-labelledby={`${id}-title`}>
      <div className="faq__inner">
        <div className="faq__heading">
          <span className="faq__line faq__line--end" aria-hidden="true" />
          <h2 className="faq__title" id={`${id}-title`}>{title}</h2>
          <span className="faq__line faq__line--start" aria-hidden="true" />
        </div>

        <p className="faq__subtitle">{subtitle}</p>

        <ul className="faq__list">
          {items.map((item) => {
            const isOpen = openId === item.id;
            return (
              <li key={item.id} className={`faq__item${isOpen ? " is-open" : ""}`}>
                <h3 className="faq__heading-item">
                  <button
                    type="button"
                    className="faq__trigger"
                    id={`${id}-trigger-${item.id}`}
                    aria-expanded={isOpen}
                    aria-controls={`${id}-panel-${item.id}`}
                    onClick={() => toggle(item.id)}
                  >
                    <span className="faq__question">{item.question}</span>
                    <span className="faq__chevron"><ChevronDown /></span>
                  </button>
                </h3>

                <div
                  className="faq__panel"
                  id={`${id}-panel-${item.id}`}
                  role="region"
                  aria-labelledby={`${id}-trigger-${item.id}`}
                >
                  <div className="faq__panel-inner">
                    <div className="faq__answer">
                      {item.intro && <p className="faq__intro">{item.intro}</p>}
                      {item.steps?.length > 0 && (
                        <ul className="faq__steps">
                          {item.steps.map((step) => (
                            <li key={step}>{step}</li>
                          ))}
                        </ul>
                      )}
                    </div>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>

        <div className="faq__help">
          <span className="faq__help-icon"><HelpIcon /></span>
          <span className="faq__help-text">لم أجد الإجابة التي أبحث عنها؟</span>
          <a className="faq__help-link" href={contactHref}>تواصل معنا</a>
        </div>
      </div>
    </section>
  );
}
