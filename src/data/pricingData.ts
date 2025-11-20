export interface PricingData {
  monthly: {
    basic: number;
    premium: number;
    family: number;
  };
  yearly: {
    basic: number;
    premium: number;
    family: number;
  };
}

export const pricingEUR: PricingData = {
  monthly: {
    basic: 8.99,
    premium: 12.99,
    family: 15.99,
  },
  yearly: {
    basic: 86.90,
    premium: 124.90,
    family: 153.90,
  },
};

export const pricingCZK: PricingData = {
  monthly: {
    basic: 219.0,
    premium: 319.0,
    family: 389.0,
  },
  yearly: {
    basic: 2099.0,
    premium: 3029.0,
    family: 3729.0,
  },
};

export type Currency = "EUR" | "CZK";
export type BillingPeriod = "monthly" | "yearly";

export const currencySymbols: Record<Currency, string> = {
  EUR: "€",
  CZK: "Kč",
};

