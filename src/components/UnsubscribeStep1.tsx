"use client";

import React from "react";
import PricingCard, { PricingCardProps } from "./PricingCard";
import styles from "./UnsubscribeStep1.module.css";

interface UnsubscribeStep1Props {
  currentPlan: PricingCardProps;
  onReasonSelect: (reason: string) => void;
  t: any;
}

const CANCELLATION_REASONS = [
  "needMoreTime",
  "tooExpensive",
  "dislikePlan",
  "needMoreContent",
  "technicalIssues",
  "noReason",
  "other",
];

export default function UnsubscribeStep1({
  currentPlan,
  onReasonSelect,
  t,
}: UnsubscribeStep1Props) {
  return (
    <div className={styles.container}>
      <h1 className={styles.header}>{t.unsubscribe.step1.header}</h1>

      <div className={styles.planContainer}>
        <PricingCard {...currentPlan} />
      </div>

      <div className={styles.reasonsSection}>
        <p className={styles.reasonsPrompt}>
          {t.unsubscribe.step1.reasonPrompt}
        </p>
        <div className={styles.reasonButtons}>
          {CANCELLATION_REASONS.map((reason) => (
            <button
              key={reason}
              className={styles.reasonButton}
              onClick={() => onReasonSelect(reason)}
            >
              {t.unsubscribe.step1.reasons[reason]}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}


