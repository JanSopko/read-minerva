"use client";

import React from "react";
import styles from "./PricingCard.module.css";

export interface PricingCardProps {
  name: string;
  price: string;
  period: string;
  features: string[];
  isPopular?: boolean;
  originalPrice?: string; // For showing discount
  discount?: string; // e.g., "50%"
}

export default function PricingCard({
  name,
  price,
  period,
  features,
  isPopular = false,
  originalPrice,
  discount,
}: PricingCardProps) {
  return (
    <div className={`${styles.pricingCard} ${isPopular ? styles.popular : ""}`}>
      {isPopular && <div className={styles.popularBadge}>Popular</div>}
      
      {discount && (
        <div className={styles.discountBadge}>
          Save {discount}
        </div>
      )}

      <div className={styles.header}>
        <h3 className={styles.planName}>{name}</h3>
        <div className={styles.priceWrapper}>
          {originalPrice && (
            <span className={styles.originalPrice}>{originalPrice}</span>
          )}
          <div className={styles.priceContainer}>
            <span className={styles.price}>{price}</span>
            <span className={styles.period}>{period}</span>
          </div>
        </div>
      </div>

      <ul className={styles.features}>
        {features.map((feature, index) => (
          <li key={index} className={styles.feature}>
            <span className={styles.checkmark}>✓</span>
            {feature}
          </li>
        ))}
      </ul>
    </div>
  );
}


