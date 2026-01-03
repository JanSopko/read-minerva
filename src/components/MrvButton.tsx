"use client";

import { ReactNode } from "react";
import styles from "./MrvButton.module.css";

type MrvButtonSize = "xs" | "sm" | "md" | "lg" | "xl";
type MrvButtonVariant = "primary" | "outline" | "secondary";

type MrvButtonProps = {
  children: ReactNode;
  size?: MrvButtonSize;
  variant?: MrvButtonVariant;
  fullWidth?: boolean;
  className?: string;
} & Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "className" | "type"> & {
    type?: "button" | "submit" | "reset";
  };

const sizeClassMap: Record<MrvButtonSize, string> = {
  xs: styles.sizeXs,
  sm: styles.sizeSm,
  md: styles.sizeMd,
  lg: styles.sizeLg,
  xl: styles.sizeXl,
};

const variantClassMap: Record<MrvButtonVariant, string> = {
  primary: styles.primary,
  outline: styles.outline,
  secondary: styles.secondary,
};

export default function MrvButton({
  children,
  size = "md",
  variant = "primary",
  fullWidth,
  className = "",
  type = "button",
  disabled,
  ...rest
}: MrvButtonProps) {
  const commonClasses = [
    styles.base,
    sizeClassMap[size],
    variantClassMap[variant],
    fullWidth ? styles.fullWidth : "",
    disabled ? styles.disabled : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <button
      type={type}
      className={commonClasses}
      disabled={disabled}
      {...rest}
    >
      {children}
    </button>
  );
}

