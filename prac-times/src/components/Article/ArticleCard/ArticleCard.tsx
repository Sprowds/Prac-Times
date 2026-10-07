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
          {article.category.map((category) => (
            <li className={styles.article__tags__item} key={category}>
              <NavLink to={category} className={styles.tags__item__link}>
                <NewsTag tagText={category} tagFontSize="16px" />
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
