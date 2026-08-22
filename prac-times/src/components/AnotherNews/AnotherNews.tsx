import styles from "./AnotherNews.module.css";
import type { INewsCategory } from "../../types/newsItem";
import { fetchAnotherNews } from "../../store/newsSlice";
import { useEffect } from "react";
import { useAppDispatch } from "../../hooks/useAppDispatch";
import { useSelector } from "react-redux";
import type { RootState } from "../../store/store";
import type INewsItem from "../../types/newsItem";
import { NavLink } from "react-router";
import NewsTime from "../../ui/NewsTime/NewsTime";

const AnotherNews = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchAnotherNews());
  }, [dispatch]);

  const anotherNewsFetchStatus = useSelector(
    (state: RootState) => state.newsReducer.status.another,
  );

  const anotherNews: INewsItem[] = useSelector(
    (state: RootState) => state.newsReducer.data.another,
  );
  return (
    <aside className={styles.news__another}>
      <h2 className={styles.title}>Другие новости</h2>
      {anotherNewsFetchStatus === "succeeded" ? (
        <ul className={styles.another__content}>
          {anotherNews.map((item) => (
            <li className={styles.another__item} key={item.id}>
              <NavLink to="/" className={styles.another__item__link}>
                <p className={styles.another__item__tag}>
                  {Object.keys(item.category).find(
                    (key) => item.category[key as keyof INewsCategory] === true,
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
  );
};

export default AnotherNews;
