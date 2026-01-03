"use client";

import { useRef, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useLanguage } from "@/contexts/LanguageContext";
import MrvButton from "./MrvButton";
import styles from "./PartnersSection.module.css";

const partners = [
  { name: "Vogue", logo: "VOGUE" },
  { name: "Forbes", logo: "FORBES" },
  { name: "New York Times", logo: "NYT" },
  { name: "Wired", logo: "WIRED" },
  { name: "National Geographic", logo: "NAT GEO" },
  { name: "The Washington Post", logo: "WP" },
  { name: "The Economist", logo: "ECONOMIST" },
];

export default function PartnersSection() {
  const { t } = useLanguage();
  const router = useRouter();
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);
  const animationFrameRef = useRef<number>(0);
  const scrollPositionRef = useRef(0);

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const animate = () => {
      if (!isPaused && container) {
        // Slow scroll speed for partners
        const scrollSpeed = 20 / 60; // pixels per frame at 60fps
        scrollPositionRef.current += scrollSpeed;

        // Reset position for infinite loop
        const maxScroll = container.scrollWidth / 2;
        if (scrollPositionRef.current >= maxScroll) {
          scrollPositionRef.current = 0;
        }

        container.scrollLeft = scrollPositionRef.current;
      }

      animationFrameRef.current = requestAnimationFrame(animate);
    };

    animationFrameRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [isPaused]);

  const handleMouseEnter = () => {
    setIsPaused(true);
  };

  const handleMouseLeave = () => {
    setIsPaused(false);
  };

  // Duplicate items for infinite scroll effect
  const duplicatedPartners = [...partners, ...partners, ...partners];

  return (
    <section className={styles.partnersSection}>
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>{t.partners.title}</h2>

        <div className={styles.carouselWrapper}>
          <div
            ref={scrollContainerRef}
            className={styles.carouselTrack}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            {duplicatedPartners.map((partner, index) => (
              <div key={`${partner.name}-${index}`} className={styles.partnerCard}>
                <div className={styles.partnerLogo}>{partner.logo}</div>
              </div>
            ))}
          </div>
        </div>

        <div className={styles.buttonWrapper}>
          <MrvButton
            size="lg"
            variant="primary"
            onClick={() => router.push("/become-our-partner")}
          >
            {t.partners.cta}
          </MrvButton>
        </div>
      </div>
    </section>
  );
}

