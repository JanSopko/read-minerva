"use client";

import { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import styles from "./page.module.css";

export default function ContactUs() {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    email: "",
    name: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Handle form submission
    console.log("Contact form submitted:", formData);
    // Reset form
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
      <div className={styles.container}>
        <h1 className={styles.mainTitle}>{t.contactUs.title}</h1>
        <p className={styles.subtitle}>{t.contactUs.subtitle}</p>

        {/* Contact Form */}
        <form onSubmit={handleSubmit} className={styles.form}>
          <div className={styles.inputRow}>
            <div className={styles.inputGroup}>
              <label htmlFor="email" className={styles.label}>
                {t.contactUs.email} <span className={styles.required}>*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={styles.input}
                required
                placeholder={t.contactUs.emailPlaceholder}
              />
            </div>

            <div className={styles.inputGroup}>
              <label htmlFor="name" className={styles.label}>
                {t.contactUs.name} <span className={styles.optional}>({t.contactUs.optional})</span>
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className={styles.input}
                placeholder={t.contactUs.namePlaceholder}
              />
            </div>
          </div>

          <div className={styles.inputGroup}>
            <label htmlFor="message" className={styles.label}>
              {t.contactUs.message} <span className={styles.required}>*</span>
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              className={styles.textarea}
              required
              rows={6}
              placeholder={t.contactUs.messagePlaceholder}
            />
          </div>

          <button type="submit" className={styles.submitButton}>
            {t.contactUs.submit}
          </button>
        </form>

        {/* Contact Information */}
        <div className={styles.contactInfo}>
          {/* Chat */}
          <div className={styles.contactCard}>
            <div className={styles.iconWrapper}>
              <span className={styles.icon}>💬</span>
            </div>
            <h3 className={styles.contactTitle}>{t.contactUs.chat.title}</h3>
            <p className={styles.contactText}>{t.contactUs.chat.subtitle}</p>
          </div>

          {/* Call */}
          <div className={styles.contactCard}>
            <div className={styles.iconWrapper}>
              <span className={styles.icon}>📞</span>
            </div>
            <h3 className={styles.contactTitle}>{t.contactUs.call.title}</h3>
            <p className={styles.contactText}>{t.contactUs.call.description}</p>
            <p className={styles.contactText}>{t.contactUs.call.phone}</p>
            <p className={styles.contactText}>{t.contactUs.call.location}</p>
          </div>

          {/* Location */}
          <div className={styles.contactCard}>
            <div className={styles.iconWrapper}>
              <span className={styles.icon}>📍</span>
            </div>
            <h3 className={styles.contactTitle}>{t.contactUs.location.title}</h3>
            <p className={styles.contactText}>{t.contactUs.location.address1}</p>
            <p className={styles.contactText}>{t.contactUs.location.address2}</p>
            <p className={styles.contactText}>{t.contactUs.location.country}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

