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

export async function getArticles(
  params: string,
  setList: React.Dispatch<React.SetStateAction<INewsItem[]>>,
  setLoading: React.Dispatch<React.SetStateAction<boolean>>,
  setError: React.Dispatch<React.SetStateAction<null>>,
) {
  try {
    const response = await fetch(
      `http://localhost:3000/api/articles?${params}`,
    );

    if (!response.ok) throw new Error("Loshara");

    const result = await response.json();

    if (typeof result === "undefined" || result.length < 1)
      throw new Error("Looooh");

    setList(result);
  } catch (error: any) {
    setError(error.message);
  } finally {
    setLoading(false);
  }
}
