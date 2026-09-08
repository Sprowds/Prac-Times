import styles from "./News.module.css";
import type { RootState } from "../../store/store";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchMainNewsItem } from "../../store/newsSlice";
import { useAppDispatch } from "../../hooks/useAppDispatch";
import type INewsItem from "../../types/newsItem";
import AnotherNews from "../AnotherNews/AnotherNews";
import MainArticle from "../MainArticle/MainArticle";

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
          <MainArticle mainNewsItem={mainNewsItem} />
        ) : (
          ""
        )}
      </div>
      <AnotherNews />
    </section>
  );
};

export default News;
