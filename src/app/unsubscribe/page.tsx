"use client";

import { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import UnsubscribeStep1 from "@/components/UnsubscribeStep1";
import UnsubscribeStep2 from "@/components/UnsubscribeStep2";
import UnsubscribeStep3 from "@/components/UnsubscribeStep3";
import { PricingCardProps } from "@/components/PricingCard";
import styles from "./page.module.css";

type Step = 1 | 2 | 3;

export default function UnsubscribePage() {
  const { t } = useLanguage();
  const [currentStep, setCurrentStep] = useState<Step>(1);
  const [selectedReason, setSelectedReason] = useState<string>("");
  const [isPositiveOutcome, setIsPositiveOutcome] = useState<boolean>(false);

  // Mock current plan data (will come from API later)
  const currentPlan: PricingCardProps = {
    name: t.pricing.premium.name,
    price: "12.99€",
    period: t.pricing.perMonth,
    features: [
      t.pricing.premium.feature1,
      t.pricing.premium.feature2,
      t.pricing.premium.feature3,
      t.pricing.premium.feature4,
    ],
    isPopular: true,
  };

  // Discounted plan (50% off)
  const discountedPlan: PricingCardProps = {
    name: t.pricing.premium.name,
    price: "6.49€",
    period: t.pricing.perMonth,
    features: [
      t.pricing.premium.feature1,
      t.pricing.premium.feature2,
      t.pricing.premium.feature3,
      t.pricing.premium.feature4,
    ],
    isPopular: true,
    originalPrice: "12.99€",
    discount: "50%",
  };

  const handleReasonSelect = (reason: string) => {
    setSelectedReason(reason);
    setCurrentStep(2);
  };

  const handleKeepSubscription = () => {
    setIsPositiveOutcome(true);
    setCurrentStep(3);
  };

  const handleCancelSubscription = () => {
    setIsPositiveOutcome(false);
    setCurrentStep(3);
  };

  return (
    <div className={styles.page}>
      <div className={styles.container}>
        {currentStep === 1 && (
          <UnsubscribeStep1
            currentPlan={currentPlan}
            onReasonSelect={handleReasonSelect}
            t={t}
          />
        )}

        {currentStep === 2 && (
          <UnsubscribeStep2
            discountedPlan={discountedPlan}
            onKeepSubscription={handleKeepSubscription}
            onCancelSubscription={handleCancelSubscription}
            t={t}
          />
        )}

        {currentStep === 3 && (
          <UnsubscribeStep3 isPositive={isPositiveOutcome} t={t} />
        )}
      </div>
    </div>
  );
}


