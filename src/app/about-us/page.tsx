"use client";

import { useLanguage } from "@/contexts/LanguageContext";
import TeamMember from "@/components/TeamMember";
import styles from "./page.module.css";

export default function AboutUs() {
  const { t } = useLanguage();

  const teamMembers = [
    {
      name: "Jozef Schnelly",
      position: t.aboutUs.team.ceoPosition,
    },
    {
      name: "Martin Rusnak",
      position: t.aboutUs.team.cooPosition,
    },
    {
      name: "Jan Sopko",
      position: t.aboutUs.team.ctoPosition,
    },
  ];

  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <h1 className={styles.mainTitle}>{t.aboutUs.title}</h1>

        {/* Founding Story Section */}
        <section className={styles.section}>
          <h2 className={styles.subSectionTitle}>{t.aboutUs.foundingStory.title}</h2>
          <p className={styles.text}>{t.aboutUs.foundingStory.content}</p>
        </section>

        {/* Our Mission Section */}
        <section className={styles.section}>
          <h2 className={styles.subSectionTitle}>{t.aboutUs.ourMission.title}</h2>
          <p className={styles.text}>{t.aboutUs.ourMission.content}</p>
        </section>

        {/* Our Values Section */}
        <section className={styles.section}>
          <h2 className={styles.subSectionTitle}>{t.aboutUs.ourValues.title}</h2>
          <p className={styles.text}>{t.aboutUs.ourValues.content}</p>
        </section>

        {/* Meet Our Team Section */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>{t.aboutUs.team.title}</h2>
          <div className={styles.teamGrid}>
            {teamMembers.map((member, index) => (
              <TeamMember
                key={member.name}
                name={member.name}
                position={member.position}
                isEven={index % 2 === 1}
              />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}

