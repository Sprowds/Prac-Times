import styles from "./News.module.css";
import type { RootState } from "../../store/store";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchNews } from "../../store/newsSlice";
import { useAppDispatch } from "../../hooks/useAppDispatch";
import type INewsItem from "../../types/newsItem";
import { NavLink } from "react-router";
import NewsTitle from "../../ui/NewsTitle/NewsTitle";
import NewsTag from "../../ui/NewsTag/NewsTag";
import NewsTime from "../../ui/NewsTime/NewsTime";
import type { INewsCategory } from "../../types/newsItem";

const News = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchNews("main"));
    dispatch(fetchNews("another"));
  }, [dispatch]);

  const newsFetchStatus = useSelector(
    (state: RootState) => state.newsReducer.status,
  );

  const mainNewsItem: INewsItem = useSelector(
    (state: RootState) => state.newsReducer.data.main[0],
  );

  const anotherNews: INewsItem[] = useSelector(
    (state: RootState) => state.newsReducer.data.another,
  );

  return (
    <section className={styles.news}>
      <div className={styles.news__main}>
        <h2 className={styles.title}>Главные новости</h2>
        {newsFetchStatus === "succeeded" ? (
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

      <aside className={styles.news__another}>
        <h2 className={styles.title}>Другие новости</h2>
        {newsFetchStatus === "succeeded" ? (
          <ul className={styles.another__content}>
            {anotherNews.map((item) => (
              <li className={styles.another__item} key={item.id}>
                <NavLink to="/" className={styles.another__item__link}>
                  <p className={styles.another__item__tag}>
                    {Object.keys(item.category).find(
                      (key) =>
                        item.category[key as keyof INewsCategory] === true,
                    )}
                  </p>
                  <p className={styles.another__item__title}>{item.title}</p>
                  <NewsTime dateTime={item.time} />
                </NavLink>
              </li>
            ))}
          </ul>
        ) : (
          <></>
        )}
      </aside>
    </section>
  );
};

export default News;
