export default interface INewsItem {
  id: string;
  title: string;
  text: string;
  tags: string[];
  exclusive: boolean;
  main: boolean;
  time: string;
  image: string;
}
