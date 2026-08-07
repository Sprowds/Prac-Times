import styles from "./News.module.css";
import type { RootState } from "../../store/store";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchNews } from "../../store/newsSlice";
import { useAppDispatch } from "../../hooks/useAppDispatch";
import type INewsItem from "../../types/newsItem";
import { NavLink } from "react-router";

const News = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchNews());
  }, [dispatch]);

  const newsList = useSelector((state: RootState) => state.newsReducer);

  const mainNewsItem: INewsItem =
    newsList.status === "succeeded"
      ? newsList.data[0]
      : {
          id: "",
          title: "",
          text: "",
          tags: [],
          exclusive: false,
          main: false,
          time: "",
          image: "",
        };

  const anotherNews: INewsItem[] =
    newsList.status === "succeeded" ? newsList.data.slice(1, 5) : [];

  return (
    <section className={styles.news}>
      <div className={styles.news__main}>
        <h2 className={styles.title}>Главные новости</h2>
        {newsList.status === "succeeded" ? (
          <article className={styles.main__news}>
            <img
              src={mainNewsItem.image}
              alt={mainNewsItem.title}
              className={styles.main__news__img}
            />
            <ul className={styles.main__news__tags}>
              {mainNewsItem.tags.map((tag) => (
                <li className={styles.main__news__tags__item} key={tag}>
                  #{tag}
                </li>
              ))}
            </ul>
            <NavLink to="/" className={styles.main__news__link}>
              <h3 className={styles.main__news__title}>{mainNewsItem.title}</h3>
            </NavLink>
            <time
              className={styles.main__news__time}
              dateTime={mainNewsItem.time}
            >
              {new Date(mainNewsItem.time).toLocaleDateString()}
            </time>
          </article>
        ) : (
          ""
        )}
      </div>
      <aside className={styles.news__another}>
        <h2 className={styles.title}>Другие новости</h2>
        <ul className={styles.another__content}>
          {anotherNews.map((item) => (
            <li className={styles.another__item}>
              <NavLink to="/" className={styles.another__item__link}>
                <p className={styles.another__item__tag}>{item.tags[0]}</p>
                <p className={styles.another__item__title}>{item.title}</p>
                <time
                  dateTime={item.time}
                  className={styles.another__item__time}
                >
                  {new Date(item.time).toLocaleDateString()}
                </time>
              </NavLink>
            </li>
          ))}
        </ul>
      </aside>
    </section>
  );
};

export default News;
