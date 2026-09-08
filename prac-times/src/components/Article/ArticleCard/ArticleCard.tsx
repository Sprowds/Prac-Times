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
      <NavLink to="/" className={styles.item__img__link}>
        <img
          src={article.image}
          alt={article.title}
          className={styles.item__img}
        />
      </NavLink>

      <div className={styles.item__text__content}>
        <ul className={styles.item__tags}>
          {Object.entries(article.category).map(([key, value]) =>
            value === true ? (
              <li className={styles.item__tags__item} key={key}>
                <NavLink to="/" className={styles.tags__item__link}>
                  <NewsTag tagText={key} tagFontSize="16px" />
                </NavLink>
              </li>
            ) : (
              ""
            ),
          )}
        </ul>
        <NavLink to="/" className={styles.item__title__link}>
          <NewsTitle
            titleText={article.title}
            titleFontSize="clamp(16px, 2vw, 24px)"
          />
        </NavLink>
        <NewsTime dateTime={article.time} />
      </div>
    </article>
  );
};

export default ArticleCard;
