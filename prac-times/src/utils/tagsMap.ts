import type { INewsCategory } from "../types/newsItem";

export default function tagsMap(tagList: INewsCategory) {
  return Object.entries(tagList)
    .filter(([key, value]) => value === true)
    .map(([key, value]) => key);
}
