"use client";

import { CSSProperties } from "react";
import {
  Article,
  SectionItem,
  SectionItemType,
  TextStyle,
} from "@/data/articleTypes";
import styles from "./ArticleRenderer.module.css";

function buildTextStyle(style?: TextStyle | null): CSSProperties | undefined {
  if (!style) return undefined;

  const result: CSSProperties = {};
  if (style.font) result.fontFamily = style.font;
  if (style.fontSize) result.fontSize = style.fontSize;
  if (style.color) result.color = style.color;

  return Object.keys(result).length > 0 ? result : undefined;
}

function formatDate(isoDate: string): string {
  const date = new Date(isoDate);
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

function renderItem(item: SectionItem, index: number) {
  switch (item.type) {
    case SectionItemType.Heading1:
      return (
        <h1
          key={index}
          className={styles.heading1}
          style={buildTextStyle(item.style)}
        >
          {item.text}
        </h1>
      );

    case SectionItemType.Heading2:
      return (
        <h2
          key={index}
          className={styles.heading2}
          style={buildTextStyle(item.style)}
        >
          {item.text}
        </h2>
      );

    case SectionItemType.TextParagraph:
      return (
        <p
          key={index}
          className={styles.paragraph}
          style={buildTextStyle(item.style)}
        >
          {item.text}
        </p>
      );

    case SectionItemType.Image: {
      const dimensionProps = item.dimensions
        ? { width: item.dimensions.x, height: item.dimensions.y }
        : {};

      return (
        <img
          key={index}
          src={item.source}
          alt=""
          className={styles.image}
          {...dimensionProps}
        />
      );
    }

    default:
      return null;
  }
}

interface ArticleRendererProps {
  article: Article;
}

export default function ArticleRenderer({ article }: ArticleRendererProps) {
  return (
    <article className={styles.article}>
      <header className={styles.header}>
        <h1 className={styles.title}>{article.title}</h1>
        <div className={styles.meta}>
          <span className={styles.source}>{article.source}</span>
          <span className={styles.separator}>·</span>
          <time className={styles.date} dateTime={article.publishedAt}>
            {formatDate(article.publishedAt)}
          </time>
        </div>
      </header>

      {article.sections.map((section) => (
        <section key={section.id} className={styles.section}>
          {section.items.map((item, index) => renderItem(item, index))}
        </section>
      ))}
    </article>
  );
}
