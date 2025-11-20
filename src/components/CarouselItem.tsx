"use client";

import { useState } from "react";
import Image from "next/image";
import { CarouselItemData } from "@/data/carouselData";
import styles from "./CarouselItem.module.css";

interface CarouselItemProps {
  item: CarouselItemData;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
}

export default function CarouselItem({
  item,
  onMouseEnter,
  onMouseLeave,
}: CarouselItemProps) {
  const [showOverlay, setShowOverlay] = useState(false);

  const handleMouseEnter = () => {
    setShowOverlay(true);
    onMouseEnter();
  };

  const handleMouseLeave = () => {
    setShowOverlay(false);
    onMouseLeave();
  };

  const handleClick = (e: React.MouseEvent) => {
    // Open link in new tab
    window.open(item.link, "_blank", "noopener,noreferrer");
  };

  const handleMouseEnterWrapper = (e: React.MouseEvent) => {
    // Only show overlay on hover, not on click
    handleMouseEnter();
  };

  return (
    <a
      href={item.link}
      target="_blank"
      rel="noopener noreferrer"
      className={styles.carouselItem}
      onMouseEnter={handleMouseEnterWrapper}
      onMouseLeave={handleMouseLeave}
      onClick={(e) => {
        e.preventDefault();
        handleClick(e);
      }}
    >
      <div className={styles.imageWrapper}>
        <Image
          src={item.imageUrl}
          alt={item.altText}
          fill
          sizes="(max-width: 768px) 100vw, 320px"
          className={styles.image}
        />
      </div>

      {showOverlay && (
        <div className={styles.overlay}>
          <div className={styles.content}>
            <h3 className={styles.title}>{item.title}</h3>
            <p className={styles.description}>{item.description}</p>
          </div>
        </div>
      )}
    </a>
  );
}

