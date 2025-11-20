"use client";

import { useLanguage } from "@/contexts/LanguageContext";
import CarouselSection from "@/components/CarouselSection";
import MissionSection from "@/components/MissionSection";
import DevicesSection from "@/components/DevicesSection";
import PartnersSection from "@/components/PartnersSection";
import PricingSection from "@/components/PricingSection";
import FAQSection from "@/components/FAQSection";
import styles from "./page.module.css";

export default function Home() {
  const { t } = useLanguage();

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

