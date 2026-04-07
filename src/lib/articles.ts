import { Article } from "@/data/articleTypes";
import { mockArticles } from "@/data/articleTypes";

export async function getAllArticles(): Promise<Article[]> {
  return mockArticles;
}
