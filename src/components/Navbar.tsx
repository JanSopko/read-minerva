"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";
import { useLanguage } from "@/contexts/LanguageContext";
import { useAuth } from "@/contexts/AuthContext";
import LanguageSwitcher from "./LanguageSwitcher";
import MrvButton from "./MrvButton";
import styles from "./Navbar.module.css";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAuthMenuOpen, setIsAuthMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const authMenuRef = useRef<HTMLDivElement>(null);
  const { t } = useLanguage();
  const { isAuthenticated, isLoading, logout } = useAuth();
  const pathname = usePathname();
  const router = useRouter();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const closeAuthMenu = () => {
    setIsAuthMenuOpen(false);
  };

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        authMenuRef.current &&
        !authMenuRef.current.contains(event.target as Node)
      ) {
        setIsAuthMenuOpen(false);
      }
    }

    if (isAuthMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isAuthMenuOpen]);

  const handlePricingClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    closeMenu();

    if (pathname !== "/") {
      window.location.href = "/#pricing";
      return;
    }

    const pricingSection = document.getElementById("pricing");
    if (pricingSection) {
      pricingSection.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  const goToGetStarted = () => {
    closeMenu();
    router.push("/get-started");
  };

  const handleLogout = async () => {
    closeAuthMenu();
    await logout();
    router.push("/");
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const trimmed = searchQuery.trim();
    if (!trimmed) return;
    router.push(`/search?q=${encodeURIComponent(trimmed)}`);
  };

  const showAuthNav = !isLoading && isAuthenticated;

  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <Link href="/" onClick={closeMenu}>
            Minerva
          </Link>
        </div>

        {showAuthNav ? (
          <div className={styles.desktopNav}>
            <form onSubmit={handleSearch} className={styles.searchForm}>
              <input
                type="text"
                className={styles.searchBar}
                placeholder={t.nav.search}
                aria-label={t.nav.search}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </form>
          </div>
        ) : (
          <div className={styles.desktopNav}>
            <Link href="/#pricing" className={styles.navLink} onClick={handlePricingClick}>
              {t.nav.pricing}
            </Link>
            <Link href="/about-us" className={styles.navLink}>
              {t.nav.about}
            </Link>
            <MrvButton
              size="sm"
              variant="primary"
              className={styles.navButton}
              onClick={goToGetStarted}
            >
              {t.nav.getStarted}
            </MrvButton>
          </div>
        )}

        <div className={styles.rightSection}>
          {showAuthNav && (
            <div className={styles.authMenuWrapper} ref={authMenuRef}>
              <button
                className={styles.authMenuButton}
                onClick={() => setIsAuthMenuOpen(!isAuthMenuOpen)}
                aria-label={isAuthMenuOpen ? "Close menu" : "Open menu"}
                aria-expanded={isAuthMenuOpen}
                aria-haspopup="true"
              >
                <span className={styles.authMenuIcon}>
                  {isAuthMenuOpen ? "✕" : "☰"}
                </span>
              </button>

              {isAuthMenuOpen && (
                <div className={styles.authDropdown}>
                  <Link href="/" className={styles.authDropdownItem} onClick={closeAuthMenu}>
                    {t.nav.articles}
                  </Link>
                  <Link href="#" className={styles.authDropdownItem} onClick={closeAuthMenu}>
                    {t.nav.profile}
                  </Link>
                  <Link href="#" className={styles.authDropdownItem} onClick={closeAuthMenu}>
                    {t.nav.settings}
                  </Link>
                  <button className={styles.authDropdownItem} onClick={handleLogout}>
                    {t.nav.logout}
                  </button>
                </div>
              )}
            </div>
          )}

          <LanguageSwitcher />

          {!showAuthNav && (
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
          )}
        </div>
      </div>

      {!showAuthNav && isMenuOpen && (
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
          <MrvButton
            size="md"
            variant="primary"
            fullWidth
            className={styles.mobileNavButton}
            onClick={goToGetStarted}
          >
            {t.nav.getStarted}
          </MrvButton>
        </div>
      )}
    </nav>
  );
}

