import { NextResponse } from "next/server";
import { getAllArticles } from "@/lib/articles";
import {
  Article,
  SectionItemType,
  SectionItem,
} from "@/data/articleTypes";

interface SearchResult {
  article: Article;
  score: number;
}

function isTextItem(
  item: SectionItem
): item is { type: SectionItemType; text: string } & SectionItem {
  return (
    item.type === SectionItemType.Heading1 ||
    item.type === SectionItemType.Heading2 ||
    item.type === SectionItemType.TextParagraph
  );
}

function isHeadingItem(item: SectionItem): boolean {
  return (
    item.type === SectionItemType.Heading1 ||
    item.type === SectionItemType.Heading2
  );
}

function scoreArticle(article: Article, query: string): number {
  const lowerQuery = query.toLowerCase();
  let score = 0;

  const firstTwoSections = article.sections.slice(0, 2);
  for (const section of firstTwoSections) {
    for (const item of section.items) {
      if (isHeadingItem(item) && isTextItem(item)) {
        if (item.text.toLowerCase().includes(lowerQuery)) {
          score += 2;
        }
      }
    }
  }

  for (const section of article.sections) {
    for (const item of section.items) {
      if (
        (item.type === SectionItemType.Heading1 ||
          item.type === SectionItemType.Heading2 ||
          item.type === SectionItemType.TextParagraph) &&
        isTextItem(item)
      ) {
        if (item.text.toLowerCase().includes(lowerQuery)) {
          score += 1;
        }
      }
    }
  }

  return score;
}

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const query = searchParams.get("q")?.trim();

  if (!query) {
    return NextResponse.json({ results: [] }, { status: 200 });
  }

  const articles = await getAllArticles();

  const scored: SearchResult[] = articles
    .map((article) => ({
      article,
      score: scoreArticle(article, query),
    }))
    .filter((result) => result.score > 0)
    .sort((a, b) => b.score - a.score);

  const response = scored.map((r) => ({
    id: r.article.id,
    title: r.article.title,
    source: r.article.source,
    score: r.score,
  }));

  return NextResponse.json({ results: response }, { status: 200 });
}
