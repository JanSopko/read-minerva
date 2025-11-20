"use client";

import React from "react";
import PricingCard, { PricingCardProps } from "./PricingCard";
import styles from "./UnsubscribeStep2.module.css";

interface UnsubscribeStep2Props {
  discountedPlan: PricingCardProps;
  onKeepSubscription: () => void;
  onCancelSubscription: () => void;
  t: any;
}

export default function UnsubscribeStep2({
  discountedPlan,
  onKeepSubscription,
  onCancelSubscription,
  t,
}: UnsubscribeStep2Props) {
  return (
    <div className={styles.container}>
      <h1 className={styles.header}>{t.unsubscribe.step2.header}</h1>
      <p className={styles.subheader}>{t.unsubscribe.step2.subheader}</p>

      <div className={styles.warningSection}>
        <h2 className={styles.warningHeader}>
          {t.unsubscribe.step2.confirmQuestion}
        </h2>
        <p className={styles.warningText}>
          {t.unsubscribe.step2.loseAccessText}
        </p>
        <ul className={styles.featuresList}>
          {t.unsubscribe.step2.loseAccessFeatures.map(
            (feature: string, index: number) => (
              <li key={index} className={styles.featureItem}>
                <span className={styles.crossIcon}>✕</span>
                {feature}
              </li>
            )
          )}
        </ul>
      </div>

      <div className={styles.offerSection}>
        <div className={styles.offerBadge}>
          <span className={styles.newPriceLabel}>
            {t.unsubscribe.step2.newPrice}
          </span>
          <span className={styles.discountLabel}>
            {t.unsubscribe.step2.savePercent}
          </span>
        </div>
        
        <div className={styles.cardContainer}>
          <PricingCard {...discountedPlan} />
        </div>
      </div>

      <div className={styles.actions}>
        <button className={styles.keepButton} onClick={onKeepSubscription}>
          {t.unsubscribe.step2.keepSubscription}
        </button>
        <button className={styles.cancelButton} onClick={onCancelSubscription}>
          {t.unsubscribe.step2.cancelSubscription}
        </button>
      </div>
    </div>
  );
}


