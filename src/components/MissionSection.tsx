"use client";

import { useLanguage } from "@/contexts/LanguageContext";
import styles from "./MissionSection.module.css";

export default function MissionSection() {
  const { t } = useLanguage();

  return (
    <section className={styles.missionSection}>
      <div className={styles.container}>
        <p className={styles.missionText}>{t.mission.text}</p>
      </div>
    </section>
  );
}

