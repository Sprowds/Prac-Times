import styles from "./WorldNewsPage.module.css";
import { useAppDispatch } from "../../hooks/useAppDispatch";
import { useEffect, useState } from "react";
import { fetchMainNewsItem } from "../../store/newsSlice";
import { useSelector } from "react-redux";
import type { RootState } from "../../store/store";
import MainArticle from "../../components/Article/MainArticle/MainArticle";
import type INewsItem from "../../types/newsItem";
import { getArticles } from "../../utils/fetchArticle";

const WorldNewsPage = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchMainNewsItem());
  }, [dispatch]);

  const mainNewsItemFetchStatus = useSelector(
    (state: RootState) => state.newsReducer.status.main,
  );

  const mainNewsItem = useSelector(
    (state: RootState) => state.newsReducer.data.main,
  );

  const [list, setList]: [
    INewsItem[],
    React.Dispatch<React.SetStateAction<INewsItem[]>>,
  ] = useState<INewsItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    getArticles("", setList, setLoading, setError);
  }, []);

  if (loading) return <div>Loading</div>;
  if (error) return <div>Ошибка: {error}</div>;

  return (
    <div className="container">
      <div className={styles.world__inner}>
        {/* {mainNewsItemFetchStatus === "succeeded" ? (
          <MainArticle article={mainNewsItem[0]} />
        ) : (
          ""
        )} */}
        {list.map((article) => (
          <div key={article.id}>{article.title}</div>
        ))}
      </div>
    </div>
  );
};

export default WorldNewsPage;
