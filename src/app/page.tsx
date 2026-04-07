"use client";

import { useRouter } from "next/navigation";
import { useLanguage } from "@/contexts/LanguageContext";
import { useAuth } from "@/contexts/AuthContext";
import { mockArticles } from "@/data/articleTypes";
import CarouselSection from "@/components/CarouselSection";
import MissionSection from "@/components/MissionSection";
import DevicesSection from "@/components/DevicesSection";
import PartnersSection from "@/components/PartnersSection";
import PricingSection from "@/components/PricingSection";
import FAQSection from "@/components/FAQSection";
import styles from "./page.module.css";

export default function Home() {
  const { t } = useLanguage();
  const { isAuthenticated, isLoading } = useAuth();
  const router = useRouter();

  if (isLoading) {
    return <div className={styles.page} />;
  }

  if (isAuthenticated) {
    return (
      <div className={styles.page}>
        <div className={styles.dashboard}>
          <h1 className={styles.welcomeHeading}>{t.dashboard.welcome}</h1>
          <section className={styles.articlesSection}>
            <h2 className={styles.articlesTitle}>{t.dashboard.articlesTitle}</h2>
            <div className={styles.articlesGrid}>
              {mockArticles.map((article) => (
                <article
                  key={article.id}
                  className={styles.articleCard}
                  onClick={() => router.push(`/article/${article.id}`)}
                >
                  <h3 className={styles.articleHeadline}>{article.title}</h3>
                  <span className={styles.articleSource}>{article.source}</span>
                </article>
              ))}
            </div>
          </section>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.page}>
      <CarouselSection />
      <MissionSection />
      <DevicesSection />
      <PartnersSection />
      <PricingSection />
      <FAQSection />
    </div>
  );
}

