"use client";

import { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import MrvButton from "@/components/MrvButton";
import styles from "./page.module.css";

export default function BecomeOurPartnerPage() {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    email: "",
    name: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: integrate form submission
    console.log("Partner contact form:", formData);
    setFormData({ email: "", name: "", message: "" });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className={styles.page}>
      <section className={styles.hero}>
        <div className={styles.container}>
          <h1 className={styles.title}>{t.becomePartner.title}</h1>
          <p className={styles.subtitle}>{t.becomePartner.description}</p>
        </div>
      </section>

      <section className={styles.b2bSection}>
        <div className={styles.container}>
          <div className={styles.b2bGrid}>
            <div className={styles.b2bImagePlaceholder}>
              <span>{t.becomePartner.b2b.imagePlaceholder}</span>
            </div>

            <div className={styles.b2bContent}>
              <h2 className={styles.b2bTitle}>{t.becomePartner.b2b.title}</h2>
              <p className={styles.b2bParagraph}>{t.becomePartner.b2b.paragraph1}</p>
              <p className={styles.b2bParagraph}>{t.becomePartner.b2b.paragraph2}</p>
              <p className={styles.b2bParagraph}>{t.becomePartner.b2b.paragraph3}</p>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.publisherSection}>
        <div className={styles.container}>
          <div className={styles.publisherGrid}>
            <div className={styles.publisherContent}>
              <h2 className={styles.b2bTitle}>{t.becomePartner.publisher.title}</h2>
              <p className={styles.b2bParagraph}>{t.becomePartner.publisher.paragraph1}</p>
              <p className={styles.b2bParagraph}>{t.becomePartner.publisher.paragraph2}</p>
              <p className={styles.b2bParagraph}>{t.becomePartner.publisher.paragraph3}</p>
            </div>
            <div className={styles.publisherImagePlaceholder}>
              <span>{t.becomePartner.publisher.imagePlaceholder}</span>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.contactSection}>
        <div className={styles.container}>
          <div className={styles.contactIntro}>
            <h3 className={styles.contactHeading}>{t.becomePartner.contact.heading}</h3>
            <p className={styles.contactLine}>{t.becomePartner.contact.line1}</p>
            <p className={styles.contactLine}>{t.becomePartner.contact.line2}</p>
          </div>

          <form className={styles.form} onSubmit={handleSubmit}>
            <div className={styles.inputRow}>
              <div className={styles.inputGroup}>
                <label htmlFor="partner-email" className={styles.label}>
                  {t.contactUs.email} <span className={styles.required}>*</span>
                </label>
                <input
                  id="partner-email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={styles.input}
                  required
                  placeholder={t.contactUs.emailPlaceholder}
                />
              </div>
              <div className={styles.inputGroup}>
                <label htmlFor="partner-name" className={styles.label}>
                  {t.contactUs.name}{" "}
                  <span className={styles.optional}>({t.contactUs.optional})</span>
                </label>
                <input
                  id="partner-name"
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={handleChange}
                  className={styles.input}
                  placeholder={t.contactUs.namePlaceholder}
                />
              </div>
            </div>

            <div className={styles.inputGroup}>
              <label htmlFor="partner-message" className={styles.label}>
                {t.contactUs.message} <span className={styles.required}>*</span>
              </label>
              <textarea
                id="partner-message"
                name="message"
                rows={6}
                value={formData.message}
                onChange={handleChange}
                className={styles.textarea}
                required
                placeholder={t.contactUs.messagePlaceholder}
              />
            </div>

            <MrvButton type="submit" size="lg" variant="primary" fullWidth>
              {t.contactUs.submit}
            </MrvButton>
          </form>
        </div>
      </section>
    </div>
  );
}

