// export interface INewsCategory {
//   world: boolean;
//   business: boolean;
//   politic: boolean;
// }

export type ArticleCategory = "world" | "business" | "politic";

export type ArticleType =
  | "main"
  | "exclusive"
  | "interview"
  | "story"
  | "podcast";

// export interface INewsType {
//   main: boolean;
//   exclusive: boolean;
//   interview: boolean;
//   story: boolean;
//   podcast: boolean;
// }

// export default interface INewsItem {
//   id: string;
//   title: string;
//   text: string;
//   category: INewsCategory;
//   type: INewsType;
//   time: string;
//   image: string;
//   author: string;
//   commentsCount: number;
// }

export default interface INewsItem {
  id: string;
  title: string;
  text: string;
  category: ArticleCategory[];
  type: ArticleType;
  time: string;
  image: string;
  author: string;
  commentsCount: number;
}

export interface IAllNews {
  news: INewsItem[];
  pageCount: number;
}
