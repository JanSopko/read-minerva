"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useLanguage } from "@/contexts/LanguageContext";
import LanguageSwitcher from "./LanguageSwitcher";
import styles from "./Navbar.module.css";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { t } = useLanguage();
  const pathname = usePathname();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const handlePricingClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    closeMenu();
    
    // If we're not on the homepage, navigate to it first
    if (pathname !== "/") {
      window.location.href = "/#pricing";
      return;
    }
    
    // Smooth scroll to pricing section
    const pricingSection = document.getElementById("pricing");
    if (pricingSection) {
      pricingSection.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        {/* Logo */}
        <div className={styles.logo}>
          <Link href="/" onClick={closeMenu}>
            Minerva
          </Link>
        </div>

        {/* Desktop Navigation */}
          <div className={styles.desktopNav}>
            <Link href="/#pricing" className={styles.navLink} onClick={handlePricingClick}>
              {t.nav.pricing}
            </Link>
            <Link href="/about-us" className={styles.navLink}>
              {t.nav.about}
            </Link>
            <Link href="/get-started" className={styles.ctaButton}>
              {t.nav.getStarted}
            </Link>
          </div>

        {/* Right Section: Language Switcher + Mobile Menu Button */}
        <div className={styles.rightSection}>
          <LanguageSwitcher />
          
          {/* Mobile Menu Button */}
          <button
            className={styles.menuButton}
            onClick={toggleMenu}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMenuOpen}
          >
            <span className={styles.menuIcon}>
              {isMenuOpen ? "✕" : "☰"}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className={styles.mobileNav}>
            <Link
              href="/#pricing"
              className={styles.mobileNavLink}
              onClick={handlePricingClick}
            >
              {t.nav.pricing}
            </Link>
            <Link
              href="/about-us"
              className={styles.mobileNavLink}
              onClick={closeMenu}
            >
              {t.nav.about}
            </Link>
            <Link
              href="/get-started"
              className={styles.mobileCtaButton}
              onClick={closeMenu}
            >
              {t.nav.getStarted}
            </Link>
          </div>
        )}
    </nav>
  );
}

