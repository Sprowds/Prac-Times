import styles from "./News.module.css";
import type { RootState } from "../../store/store";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchMainNewsItem } from "../../store/newsSlice";
import { useAppDispatch } from "../../hooks/useAppDispatch";
import type INewsItem from "../../types/newsItem";
import { NavLink } from "react-router";
import NewsTitle from "../../ui/NewsTitle/NewsTitle";
import NewsTag from "../../ui/NewsTag/NewsTag";
import NewsTime from "../../ui/NewsTime/NewsTime";
import AnotherNews from "../AnotherNews/AnotherNews";

const News = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchMainNewsItem());
  }, [dispatch]);

  const mainNewsItemFetchStatus = useSelector(
    (state: RootState) => state.newsReducer.status.main,
  );

  const mainNewsItem: INewsItem = useSelector(
    (state: RootState) => state.newsReducer.data.main[0],
  );

  return (
    <section className={styles.news}>
      <div className={styles.news__main}>
        <h2 className={styles.title}>Главные новости</h2>
        {mainNewsItemFetchStatus === "succeeded" ? (
          <article className={styles.main__news}>
            <img
              src={mainNewsItem.image}
              alt={mainNewsItem.title}
              className={styles.main__news__img}
            />
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
        ) : (
          ""
        )}
      </div>
      <AnotherNews />
    </section>
  );
};

export default News;
