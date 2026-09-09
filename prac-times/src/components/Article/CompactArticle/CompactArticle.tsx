import styles from "./CompactArticle.module.css";
import { NavLink } from "react-router";
import NewsTime from "../../../ui/NewsTime/NewsTime";
import type { INewsCategory } from "../../../types/newsItem";
import type INewsItem from "../../../types/newsItem";
import NewsTag from "../../../ui/NewsTag/NewsTag";

interface ICompactArticleProps {
  article: INewsItem;
}

const CompactArticle = ({ article }: ICompactArticleProps) => {
  const tag = Object.keys(article.category).find(
    (key) => article.category[key as keyof INewsCategory] === true,
  );

  return (
    <article className={styles.article}>
      <NavLink to={article.id} className={styles.article__link}>
        <NewsTag tagText={tag} tagFontSize="16px" />
        <p className={styles.article__title}>{article.title}</p>
        <NewsTime dateTime={article.time} />
      </NavLink>
    </article>
  );
};

export default CompactArticle;
