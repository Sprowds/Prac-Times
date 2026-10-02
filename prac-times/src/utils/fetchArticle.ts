import type INewsItem from "../types/newsItem";
import { fetchArticleById } from "./backendAPIEmulator";

export default async function fetchArticleData(
  id: string,
): Promise<INewsItem | undefined> {
  try {
    const article = await fetchArticleById(id);

    return article;
  } catch {
    return undefined;
  }
}
