import styles from "./ArticleCard.module.css";
import { NavLink } from "react-router";
import NewsTag from "../../../ui/NewsTag/NewsTag";
import NewsTitle from "../../../ui/NewsTitle/NewsTitle";
import NewsTime from "../../../ui/NewsTime/NewsTime";
import type INewsItem from "../../../types/newsItem";
import tagsMap from "../../../utils/tagsMap";

interface IArticleCardProps {
  article: INewsItem;
}

const ArticleCard = ({ article }: IArticleCardProps) => {
  const link = `/article/${article.id}`;

  return (
    <article className={styles.article}>
      <NavLink to={link} className={styles.article__link}>
        <div className={styles.img__wrapper}>
          <img
            src={article.image}
            alt={article.title}
            className={styles.article__img}
          />
        </div>

        <NewsTitle
          titleText={article.title}
          titleFontSize="clamp(16px, 2vw, 20px)"
        />
      </NavLink>

      <div className={styles.article__info}>
        <ul className={styles.article__tags}>
          {tagsMap(article.category).map((tag) => (
            <li className={styles.article__tags__item} key={tag}>
              <NavLink to={tag} className={styles.tags__item__link}>
                <NewsTag tagText={tag} tagFontSize="16px" />
              </NavLink>
            </li>
          ))}
        </ul>
        <NewsTime dateTime={article.time} />
      </div>
    </article>
  );
};

export default ArticleCard;
