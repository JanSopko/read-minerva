"use client";

import React from "react";
import styles from "./HoverCard.module.css";

interface HoverCardProps {
  children: React.ReactNode;
  className?: string;
}

export default function HoverCard({ children, className = "" }: HoverCardProps) {
  return (
    <div className={`${className} ${styles.hoverCard} `}>
      {children}
    </div>
  );
}

