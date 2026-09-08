import styles from "./MainArticle.module.css";
import { NavLink } from "react-router";
import NewsTag from "../../ui/NewsTag/NewsTag";
import NewsTitle from "../../ui/NewsTitle/NewsTitle";
import NewsTime from "../../ui/NewsTime/NewsTime";
import type INewsItem from "../../types/newsItem";

interface IProps {
  mainNewsItem: INewsItem;
}

const MainArticle = ({ mainNewsItem }: IProps) => {
  return (
    <article className={styles.main__article}>
      <NavLink to="/" className={styles.main__news__img__link}>
        <img
          src={mainNewsItem.image}
          alt={mainNewsItem.title}
          className={styles.main__news__img}
        />
      </NavLink>

      <ul className={styles.main__news__tags}>
        {Object.entries(mainNewsItem.category).map(([key, value]) =>
          value === true ? (
            <li className={styles.main__news__tags__item} key={key}>
              <NavLink to="/" className={styles.main__news__tags__link}>
                <NewsTag tagText={key} tagFontSize="14px" />
              </NavLink>
            </li>
          ) : (
            ""
          ),
        )}
      </ul>
      <NavLink to="/" className={styles.main__news__link}>
        <NewsTitle
          titleText={mainNewsItem.title}
          titleFontSize="clamp(22px, 3vw, 48px)"
        />
      </NavLink>
      <NewsTime dateTime={mainNewsItem.time} />
    </article>
  );
};

export default MainArticle;
