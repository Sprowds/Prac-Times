export interface INewsCategory {
  мир: boolean;
  бизнес: boolean;
  политика: boolean;
}

export interface INewsType {
  main: boolean;
  exclusive: boolean;
  interview: boolean;
  story: boolean;
  podcast: boolean;
}

export default interface INewsItem {
  id: string;
  title: string;
  text: string;
  //-----------------
  // tags: string[];
  category: INewsCategory;
  //-----------------
  // exclusive: boolean;
  // main: boolean;
  type: INewsType;
  //-----------------
  time: string;
  image: string;
}
