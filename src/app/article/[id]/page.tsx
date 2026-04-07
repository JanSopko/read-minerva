"use client";

import { useParams, useRouter } from "next/navigation";
import { useLanguage } from "@/contexts/LanguageContext";
import { useAuth } from "@/contexts/AuthContext";
import { mockArticles } from "@/data/articleTypes";
import ArticleRenderer from "@/components/ArticleRenderer";
import styles from "./page.module.css";

export default function ArticlePage() {
  const params = useParams();
  const router = useRouter();
  const { t } = useLanguage();
  const { isAuthenticated, isLoading } = useAuth();

  const article = mockArticles.find((a) => a.id === params.id);

  if (isLoading) {
    return <div className={styles.page} />;
  }

  if (!isAuthenticated) {
    router.push("/get-started");
    return null;
  }

  if (!article) {
    return (
      <div className={styles.page}>
        <div className={styles.notFound}>
          <h1>{t.article.notFound}</h1>
          <button className={styles.backButton} onClick={() => router.push("/")}>
            {t.article.backToDashboard}
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.page}>
      <div className={styles.articleContainer}>
        <button className={styles.backButton} onClick={() => router.push("/")}>
          ← {t.article.backToDashboard}
        </button>
        <ArticleRenderer article={article} />
      </div>
    </div>
  );
}
