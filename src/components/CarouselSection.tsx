"use client";

import { useRef, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useLanguage } from "@/contexts/LanguageContext";
import CarouselItem from "./CarouselItem";
import MrvButton from "./MrvButton";
import { carouselItems, carouselConfig } from "@/data/carouselData";
import styles from "./CarouselSection.module.css";

export default function CarouselSection() {
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
        // Calculate scroll speed based on config
        const scrollSpeed = carouselConfig.autoPlaySpeed / 60; // pixels per frame at 60fps
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
  const duplicatedItems = [...carouselItems, ...carouselItems];

  return (
    <section className={styles.carouselSection}>
      <div className={styles.container}>

        <div className={styles.carouselWrapper}>
          <div
            ref={scrollContainerRef}
            className={styles.carouselTrack}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            {duplicatedItems.map((item, index) => (
              <CarouselItem
                key={`${item.id}-${index}`}
                item={item}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              />
            ))}
          </div>
        </div>

        {/* Get Started Button - Below Carousel */}
        <div className={styles.buttonWrapper}>
          <MrvButton
            size="xl"
            variant="primary"
            className={styles.getStartedButton}
            onClick={() => router.push("/get-started")}
          >
            {t.nav.getStarted}
          </MrvButton>
        </div>
      </div>
    </section>
  );
}

