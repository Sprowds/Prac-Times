import styles from "./ArticleCard.module.css";
import { NavLink } from "react-router";
import NewsTag from "../../../ui/NewsTag/NewsTag";
import NewsTitle from "../../../ui/NewsTitle/NewsTitle";
import NewsTime from "../../../ui/NewsTime/NewsTime";
import type INewsItem from "../../../types/newsItem";

interface IArticleCardProps {
  article: INewsItem;
}

const ArticleCard = ({ article }: IArticleCardProps) => {
  return (
    <article className={styles.article}>
      <NavLink to="/" className={styles.article__link}>
        <img
          src={article.image}
          alt={article.title}
          className={styles.article__img}
        />
        <NewsTitle
          titleText={article.title}
          titleFontSize="clamp(14px, 2vw, 20px)"
        />
      </NavLink>

      <div className={styles.article__info}>
        <ul className={styles.article__tags}>
          {Object.entries(article.category).map(([key, value]) =>
            value === true ? (
              <li className={styles.article__tags__item} key={key}>
                <NavLink to="/" className={styles.tags__item__link}>
                  <NewsTag tagText={key} tagFontSize="16px" />
                </NavLink>
              </li>
            ) : (
              ""
            ),
          )}
        </ul>
        <NewsTime dateTime={article.time} />
      </div>
    </article>
  );
};

export default ArticleCard;
