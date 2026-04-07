"use client";

import { Suspense, useState, useEffect } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { useLanguage } from "@/contexts/LanguageContext";
import { useAuth } from "@/contexts/AuthContext";
import styles from "./page.module.css";

interface SearchResultItem {
  id: string;
  title: string;
  source: string;
  score: number;
}

function SearchResults() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const { t } = useLanguage();
  const { isAuthenticated, isLoading: authLoading } = useAuth();

  const query = searchParams.get("q") || "";
  const [results, setResults] = useState<SearchResultItem[]>([]);
  const [isSearching, setIsSearching] = useState(false);

  useEffect(() => {
    if (!query || !isAuthenticated) return;

    let cancelled = false;
    setIsSearching(true);

    fetch(`/api/search?q=${encodeURIComponent(query)}`)
      .then((res) => res.json())
      .then((data) => {
        if (!cancelled) {
          setResults(data.results || []);
        }
      })
      .catch(() => {
        if (!cancelled) {
          setResults([]);
        }
      })
      .finally(() => {
        if (!cancelled) {
          setIsSearching(false);
        }
      });

    return () => {
      cancelled = true;
    };
  }, [query, isAuthenticated]);

  if (authLoading) {
    return <div className={styles.page} />;
  }

  if (!isAuthenticated) {
    router.push("/get-started");
    return null;
  }

  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <button className={styles.backButton} onClick={() => router.push("/")}>
          ← {t.search.backToDashboard}
        </button>

        <h1 className={styles.title}>
          {t.search.resultsFor} &ldquo;{query}&rdquo;
        </h1>

        {isSearching ? (
          <p className={styles.statusText}>{t.search.searching}</p>
        ) : results.length === 0 ? (
          <p className={styles.statusText}>{t.search.noResults}</p>
        ) : (
          <div className={styles.resultsGrid}>
            {results.map((result) => (
              <article
                key={result.id}
                className={styles.resultCard}
                onClick={() => router.push(`/article/${result.id}`)}
              >
                <div className={styles.resultContent}>
                  <h3 className={styles.resultTitle}>{result.title}</h3>
                  <span className={styles.resultSource}>{result.source}</span>
                </div>
                <span className={styles.relevanceBadge}>
                  {result.score} {result.score === 1 ? t.search.point : t.search.points}
                </span>
              </article>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default function SearchPage() {
  return (
    <Suspense fallback={<div className={styles.page} />}>
      <SearchResults />
    </Suspense>
  );
}
