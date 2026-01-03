"use client";

import { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import MrvButton from "@/components/MrvButton";
import styles from "./page.module.css";

type Mode = "login" | "register";

export default function GetStartedPage() {
  const { t } = useLanguage();
  const [mode, setMode] = useState<Mode>("login");

  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const [registerData, setRegisterData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    plan: "premium",
  });

  const switchToRegister = () => setMode("register");
  const switchToLogin = () => setMode("login");

  const handleLoginSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Login submit", loginData);
  };

  const handleRegisterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Register submit", registerData);
  };

  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <h1 className={styles.title}>{t.getStarted.title}</h1>
        <p className={styles.subtitle}>{t.getStarted.subtitle}</p>

        <div className={styles.card}>
          {/* Hidden native radios for semantics */}
          <div className={styles.hiddenRadios} aria-hidden="true">
            <input type="radio" name="auth-mode" value="login" checked={mode === "login"} readOnly />
            <input type="radio" name="auth-mode" value="register" checked={mode === "register"} readOnly />
          </div>

          <div className={styles.modeButtons} role="group" aria-label="Auth mode">
            <MrvButton
              size="sm"
              variant={mode === "login" ? "primary" : "secondary"}
              fullWidth
              aria-pressed={mode === "login"}
              onClick={() => setMode("login")}
            >
              {t.getStarted.modeLogin}
            </MrvButton>
            <MrvButton
              size="sm"
              variant={mode === "register" ? "primary" : "secondary"}
              fullWidth
              aria-pressed={mode === "register"}
              onClick={() => setMode("register")}
            >
              {t.getStarted.modeRegister}
            </MrvButton>
          </div>

          {mode === "login" ? (
            <form className={styles.form} onSubmit={handleLoginSubmit}>
              <div className={styles.inputGroup}>
                <label htmlFor="login-email" className={styles.label}>
                  {t.getStarted.email}
                </label>
                <input
                  id="login-email"
                  type="email"
                  value={loginData.email}
                  onChange={(e) =>
                    setLoginData((prev) => ({ ...prev, email: e.target.value }))
                  }
                  className={styles.input}
                  required
                />
              </div>

              <div className={styles.inputGroup}>
                <label htmlFor="login-password" className={styles.label}>
                  {t.getStarted.password}
                </label>
                <input
                  id="login-password"
                  type="password"
                  value={loginData.password}
                  onChange={(e) =>
                    setLoginData((prev) => ({
                      ...prev,
                      password: e.target.value,
                    }))
                  }
                  className={styles.input}
                  required
                />
              </div>

              <MrvButton type="submit" size="lg" variant="primary" fullWidth>
                {t.getStarted.loginCta}
              </MrvButton>

              <button
                type="button"
                className={styles.switchLink}
                onClick={switchToRegister}
              >
                {t.getStarted.switchToRegister}
              </button>
            </form>
          ) : (
            <form className={styles.form} onSubmit={handleRegisterSubmit}>
              <div className={styles.inputGroup}>
                <label htmlFor="reg-email" className={styles.label}>
                  {t.getStarted.email}
                </label>
                <input
                  id="reg-email"
                  type="email"
                  value={registerData.email}
                  onChange={(e) =>
                    setRegisterData((prev) => ({
                      ...prev,
                      email: e.target.value,
                    }))
                  }
                  className={styles.input}
                  required
                />
              </div>

              <div className={styles.inputGroup}>
                <label htmlFor="reg-password" className={styles.label}>
                  {t.getStarted.password}
                </label>
                <input
                  id="reg-password"
                  type="password"
                  value={registerData.password}
                  onChange={(e) =>
                    setRegisterData((prev) => ({
                      ...prev,
                      password: e.target.value,
                    }))
                  }
                  className={styles.input}
                  required
                />
              </div>

              <div className={styles.inputGroup}>
                <label htmlFor="reg-confirm" className={styles.label}>
                  {t.getStarted.confirmPassword}
                </label>
                <input
                  id="reg-confirm"
                  type="password"
                  value={registerData.confirmPassword}
                  onChange={(e) =>
                    setRegisterData((prev) => ({
                      ...prev,
                      confirmPassword: e.target.value,
                    }))
                  }
                  className={styles.input}
                  required
                />
              </div>

              <div className={styles.inputGroup}>
                <span className={styles.label}>{t.getStarted.planLabel}</span>
                <div className={styles.planOptions}>
                  {(["basic", "premium", "family"] as const).map((plan) => (
                    <label key={plan} className={styles.planOption}>
                      <input
                        type="radio"
                        name="plan"
                        value={plan}
                        checked={registerData.plan === plan}
                        onChange={() =>
                          setRegisterData((prev) => ({ ...prev, plan }))
                        }
                      />
                      <span>{t.getStarted.planOptions[plan]}</span>
                    </label>
                  ))}
                </div>
              </div>

              <MrvButton type="submit" size="lg" variant="primary" fullWidth>
                {t.getStarted.registerCta}
              </MrvButton>

              <button
                type="button"
                className={styles.switchLink}
                onClick={switchToLogin}
              >
                {t.getStarted.switchToLogin}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}

