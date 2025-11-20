"use client";

import { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import {
  pricingEUR,
  pricingCZK,
  currencySymbols,
  Currency,
  BillingPeriod,
} from "@/data/pricingData";
import styles from "./PricingSection.module.css";

export default function PricingSection() {
  const { t } = useLanguage();
  const [billingPeriod, setBillingPeriod] = useState<BillingPeriod>("monthly");
  const [currency, setCurrency] = useState<Currency>("EUR");

  const pricing = currency === "EUR" ? pricingEUR : pricingCZK;
  const currencySymbol = currencySymbols[currency];

  const formatPrice = (price: number) => {
    if (currency === "EUR") {
      return `${currencySymbol}${price.toFixed(2)}`;
    } else {
      return `${price.toFixed(0)} ${currencySymbol}`;
    }
  };

  return (
    <section id="pricing" className={styles.pricingSection}>
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>{t.pricing.sectionTitle}</h2>

        {/* Controls: Billing Period Switch + Currency Selector */}
        <div className={styles.controls}>
          {/* Billing Period Switch */}
          <div className={styles.billingSwitch}>
            <button
              className={`${styles.switchButton} ${
                billingPeriod === "monthly" ? styles.active : ""
              }`}
              onClick={() => setBillingPeriod("monthly")}
            >
              {t.pricing.billedMonthly}
            </button>
            <button
              className={`${styles.switchButton} ${
                billingPeriod === "yearly" ? styles.active : ""
              }`}
              onClick={() => setBillingPeriod("yearly")}
            >
              {t.pricing.billedYearly}
            </button>
          </div>

          {/* Currency Selector */}
          <div className={styles.currencySelector}>
            <label htmlFor="currency" className={styles.currencyLabel}>
              {t.pricing.currency}:
            </label>
            <select
              id="currency"
              value={currency}
              onChange={(e) => setCurrency(e.target.value as Currency)}
              className={styles.currencySelect}
            >
              <option value="EUR">EUR (€)</option>
              <option value="CZK">CZK (Kč)</option>
            </select>
          </div>
        </div>

        {/* Pricing Tiers */}
        <div className={styles.pricingGrid}>
          {/* Basic Tier */}
          <div className={styles.pricingCard}>
            <h3 className={styles.tierName}>{t.pricing.basic.name}</h3>
            <div className={styles.priceWrapper}>
              <div className={styles.price}>
                {formatPrice(pricing[billingPeriod].basic)}
              </div>
              <div className={styles.period}>
                {billingPeriod === "monthly"
                  ? t.pricing.perMonth
                  : t.pricing.perYear}
              </div>
            </div>
            <ul className={styles.featureList}>
              <li>{t.pricing.basic.feature1}</li>
              <li>{t.pricing.basic.feature2}</li>
              <li>{t.pricing.basic.feature3}</li>
            </ul>
            <button className={styles.ctaButton}>
              {t.pricing.getStarted}
            </button>
          </div>

          {/* Premium Tier */}
          <div className={`${styles.pricingCard} ${styles.featured}`}>
            <div className={styles.badge}>{t.pricing.popular}</div>
            <h3 className={styles.tierName}>{t.pricing.premium.name}</h3>
            <div className={styles.priceWrapper}>
              <div className={styles.price}>
                {formatPrice(pricing[billingPeriod].premium)}
              </div>
              <div className={styles.period}>
                {billingPeriod === "monthly"
                  ? t.pricing.perMonth
                  : t.pricing.perYear}
              </div>
            </div>
            <ul className={styles.featureList}>
              <li>{t.pricing.premium.feature1}</li>
              <li>{t.pricing.premium.feature2}</li>
              <li>{t.pricing.premium.feature3}</li>
              <li>{t.pricing.premium.feature4}</li>
            </ul>
            <button className={`${styles.ctaButton} ${styles.primary}`}>
              {t.pricing.getStarted}
            </button>
          </div>

          {/* Family Tier */}
          <div className={styles.pricingCard}>
            <h3 className={styles.tierName}>{t.pricing.family.name}</h3>
            <div className={styles.priceWrapper}>
              <div className={styles.price}>
                {formatPrice(pricing[billingPeriod].family)}
              </div>
              <div className={styles.period}>
                {billingPeriod === "monthly"
                  ? t.pricing.perMonth
                  : t.pricing.perYear}
              </div>
            </div>
            <ul className={styles.featureList}>
              <li>{t.pricing.family.feature1}</li>
              <li>{t.pricing.family.feature2}</li>
              <li>{t.pricing.family.feature3}</li>
              <li>{t.pricing.family.feature4}</li>
              <li>{t.pricing.family.feature5}</li>
            </ul>
            <button className={styles.ctaButton}>
              {t.pricing.getStarted}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

