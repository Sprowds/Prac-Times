import styles from "./CompactArticle.module.css";
import { NavLink } from "react-router";
import NewsTime from "../../../ui/NewsTime/NewsTime";
import type { INewsCategory } from "../../../types/newsItem";
import type INewsItem from "../../../types/newsItem";

interface ICompactArticleProps {
  article: INewsItem;
}

const CompactArticle = ({ article }: ICompactArticleProps) => {
  return (
    <article className={styles.article}>
      <NavLink to={article.id} className={styles.article__link}>
        <p className={styles.article__tag}>
          {Object.keys(article.category).find(
            (key) => article.category[key as keyof INewsCategory] === true,
          )}
        </p>
        <p className={styles.article__title}>{article.title}</p>
        <NewsTime dateTime={article.time} />
      </NavLink>
    </article>
  );
};

export default CompactArticle;
