"use client";

import {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
  ReactNode,
} from "react";

interface AuthContextType {
  isAuthenticated: boolean;
  isLoading: boolean;
  login: () => void;
  logout: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let cancelled = false;

    async function checkAuth() {
      try {
        const res = await fetch("/api/auth/me");
        const data = await res.json();
        if (!cancelled) {
          setIsAuthenticated(data.authenticated === true);
        }
      } catch {
        if (!cancelled) {
          setIsAuthenticated(false);
        }
      } finally {
        if (!cancelled) {
          setIsLoading(false);
        }
      }
    }

    checkAuth();

    return () => {
      cancelled = true;
    };
  }, []);

  const login = useCallback(() => {
    setIsAuthenticated(true);
    setIsLoading(false);
  }, []);

  const logout = useCallback(async () => {
    try {
      await fetch("/api/auth/logout", { method: "POST" });
    } catch {
      // Even if the API call fails, clear client state
    }
    setIsAuthenticated(false);
  }, []);

  return (
    <AuthContext.Provider value={{ isAuthenticated, isLoading, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}
