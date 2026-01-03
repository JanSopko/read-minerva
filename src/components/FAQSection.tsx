"use client";

import { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { FAQ_DATA } from "@/data/faqData";
import styles from "./FAQSection.module.css";

export default function FAQSection() {
  const { language, t } = useLanguage();
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqItems = FAQ_DATA[language];

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className={styles.faqSection} id="faq">
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>{t.faq.title}</h2>

        <div className={styles.faqList}>
          {faqItems.map((item, index) => (
            <div
              key={index}
              className={`${styles.faqItem} ${
                openIndex === index ? styles.open : ""
              }`}
            >
              <button
                className={styles.question}
                onClick={() => toggleItem(index)}
                aria-expanded={openIndex === index}
              >
                <span className={styles.questionText}>{item.question}</span>
                <span className={styles.chevron}>
                  {openIndex === index ? "▲" : "▼"}
                </span>
              </button>

              {openIndex === index && (
                <div className={styles.answer}>
                  <p>{item.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

