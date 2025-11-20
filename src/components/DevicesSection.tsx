"use client";

import { useLanguage } from "@/contexts/LanguageContext";
import styles from "./DevicesSection.module.css";

export default function DevicesSection() {
  const { t } = useLanguage();

  return (
    <section className={styles.devicesSection}>
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>{t.devices.title}</h2>

        <div className={styles.devicesGrid}>
          {/* Desktop Computer */}
          <div className={styles.deviceCard}>
            <div className={styles.deviceIcon}>💻</div>
            <h3 className={styles.deviceTitle}>{t.devices.desktop.title}</h3>
            <p className={styles.deviceDescription}>
              {t.devices.desktop.description}
            </p>
          </div>

          {/* Mobile Phone */}
          <div className={styles.deviceCard}>
            <div className={styles.deviceIcon}>📱</div>
            <h3 className={styles.deviceTitle}>{t.devices.mobile.title}</h3>
            <p className={styles.deviceDescription}>
              {t.devices.mobile.description}
            </p>
          </div>

          {/* Tablet */}
          <div className={styles.deviceCard}>
            <div className={styles.deviceIcon}>📱</div>
            <h3 className={styles.deviceTitle}>{t.devices.tablet.title}</h3>
            <p className={styles.deviceDescription}>
              {t.devices.tablet.description}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

