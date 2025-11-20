"use client";

import { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import styles from "./Footer.module.css";

export default function Footer() {
  const { t } = useLanguage();
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Handle newsletter subscription
    console.log("Newsletter subscription:", email);
    setEmail("");
  };

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        {/* Newsletter Section */}
        <div className={styles.newsletter}>
          <h3 className={styles.newsletterTitle}>
            {t.footer.newsletterTitle}
          </h3>
          <form onSubmit={handleSubmit} className={styles.newsletterForm}>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder={t.footer.emailPlaceholder}
              className={styles.emailInput}
              required
            />
            <button type="submit" className={styles.submitButton}>
              {t.footer.submit}
            </button>
          </form>
        </div>

        {/* Main Footer Content */}
        <div className={styles.mainContent}>
          {/* Left Section - Branding & Social */}
          <div className={styles.brandSection}>
            <div className={styles.brandLogo}>MINERVA</div>
            <div className={styles.socialIcons}>
              <a href="#" className={styles.socialIcon} aria-label="LinkedIn">
                <span>in</span>
              </a>
              <a href="#" className={styles.socialIcon} aria-label="Facebook">
                <span>f</span>
              </a>
              <a href="#" className={styles.socialIcon} aria-label="Instagram">
                <span>📷</span>
              </a>
              <a href="#" className={styles.socialIcon} aria-label="X (Twitter)">
                <span>𝕏</span>
              </a>
            </div>
          </div>

          {/* Right Section - Links */}
          <div className={styles.linksSection}>
            {/* Column 1 */}
            <div className={styles.linkColumn}>
              <h4 className={styles.columnTitle}>{t.footer.aboutUs}</h4>
              <ul className={styles.linkList}>
                <li>
                  <a href="/about-us">{t.footer.aboutUs}</a>
                </li>
                <li>
                  <a href="/contact-us">{t.footer.contactUs}</a>
                </li>
                <li>
                  <a href="/career">{t.footer.career}</a>
                </li>
                <li>
                  <a href="#faq">{t.footer.faq}</a>
                </li>
              </ul>
            </div>

            {/* Column 2 */}
            <div className={styles.linkColumn}>
              <h4 className={styles.columnTitle}>{t.footer.privacyPolicy}</h4>
              <ul className={styles.linkList}>
                <li>
                  <a href="/privacy">{t.footer.privacyPolicy}</a>
                </li>
                <li>
                  <a href="/terms">{t.footer.termsOfUse}</a>
                </li>
                <li>
                  <a href="/cookies">{t.footer.cookies}</a>
                </li>
                <li>
                  <a href="/legal">{t.footer.legalNotices}</a>
                </li>
              </ul>
            </div>

            {/* Column 3 */}
            <div className={styles.linkColumn}>
              <h4 className={styles.columnTitle}>{t.footer.account}</h4>
              <ul className={styles.linkList}>
                <li>
                  <a href="/account">{t.footer.account}</a>
                </li>
                <li>
                  <a href="/subscribe">{t.footer.subscribe}</a>
                </li>
                <li>
                  <a href="/#pricing">{t.footer.chooseYourPlan}</a>
                </li>
                <li>
                  <a href="/unsubscribe">{t.footer.cancelMembership}</a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className={styles.copyright}>
          ©Minerva 2025, All Rights Reserved
        </div>
      </div>
    </footer>
  );
}

