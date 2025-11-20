"use client";

import React from "react";
import Link from "next/link";
import styles from "./UnsubscribeStep3.module.css";

interface UnsubscribeStep3Props {
  isPositive: boolean; // true = kept subscription, false = cancelled
  t: any;
}

export default function UnsubscribeStep3({
  isPositive,
  t,
}: UnsubscribeStep3Props) {
  if (isPositive) {
    // User kept subscription with discount
    return (
      <div className={styles.container}>
        <div className={styles.iconWrapper}>
          <span className={styles.successIcon}>✓</span>
        </div>
        <h1 className={styles.header}>{t.unsubscribe.step3.positive.header}</h1>
        <p className={styles.message}>
          {t.unsubscribe.step3.positive.message}
        </p>
        <div className={styles.actions}>
          <Link href="/" className={styles.primaryButton}>
            {t.unsubscribe.step3.positive.backToHome}
          </Link>
        </div>
      </div>
    );
  } else {
    // User cancelled subscription
    return (
      <div className={styles.container}>
        <div className={styles.iconWrapper}>
          <span className={styles.cancelIcon}>✕</span>
        </div>
        <h1 className={styles.header}>{t.unsubscribe.step3.negative.header}</h1>
        <p className={styles.message}>
          {t.unsubscribe.step3.negative.message}
        </p>
        <div className={styles.infoBox}>
          <p className={styles.infoText}>
            {t.unsubscribe.step3.negative.accessInfo}
          </p>
        </div>
        <div className={styles.actions}>
          <Link href="/" className={styles.primaryButton}>
            {t.unsubscribe.step3.negative.backToHome}
          </Link>
        </div>
      </div>
    );
  }
}


