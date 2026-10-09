import type { ArticleCategory, ArticleType } from "./newsItem";

export default interface GetArticleParams {
  title_like?: string;
  page?: number;
  type?: ArticleType;
  type_not?: ArticleType;
  category?: ArticleCategory[];
  limit: number;
}
