import styles from "./AnotherNews.module.css";
import { fetchAnotherNews } from "../../store/newsSlice";
import { useEffect } from "react";
import { useAppDispatch } from "../../hooks/useAppDispatch";
import { useSelector } from "react-redux";
import type { RootState } from "../../store/store";
import type INewsItem from "../../types/newsItem";
import CompactArticle from "../Article/CompactArticle/CompactArticle";

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
              <CompactArticle article={item} />
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
