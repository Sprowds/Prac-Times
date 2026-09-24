import styles from "./MainArticle.module.css";
import { NavLink } from "react-router";
import NewsTag from "../../../ui/NewsTag/NewsTag";
import NewsTitle from "../../../ui/NewsTitle/NewsTitle";
import NewsTime from "../../../ui/NewsTime/NewsTime";
import type INewsItem from "../../../types/newsItem";

interface IMainArticleProps {
  article: INewsItem;
}

const MainArticle = ({ article }: IMainArticleProps) => {
  const link = `/${article.id}`;
  return (
    <article className={styles.article}>
      <NavLink to={link} className={styles.img__link}>
        <div className={styles.img__wrapper}>
          <img
            src={article.image}
            alt={article.title}
            className={styles.article__img}
          />
        </div>
      </NavLink>

      <NavLink to={link} className={styles.title__link}>
        <NewsTitle
          titleText={article.title}
          titleFontSize="clamp(22px, 3vw, 48px)"
        />
      </NavLink>

      <ul className={styles.tags}>
        {Object.entries(article.category).map(([key, value]) =>
          value === true ? (
            <li className={styles.tags__item} key={key}>
              <NavLink to={key} className={styles.tags__link}>
                <NewsTag tagText={key} tagFontSize="14px" />
              </NavLink>
            </li>
          ) : (
            ""
          ),
        )}
      </ul>

      <NewsTime dateTime={article.time} />
    </article>
  );
};

export default MainArticle;
