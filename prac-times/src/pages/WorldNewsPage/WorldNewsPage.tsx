import styles from "./WorldNewsPage.module.css";
import { useAppDispatch } from "../../hooks/useAppDispatch";
import { useEffect } from "react";
import { fetchMainNewsItem } from "../../store/newsSlice";
import { useSelector } from "react-redux";
import type { RootState } from "../../store/store";
import MainArticle from "../../components/Article/MainArticle/MainArticle";

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

  return (
    <div className="container">
      <div className={styles.world__inner}>
        {mainNewsItemFetchStatus === "succeeded" ? (
          <MainArticle article={mainNewsItem[0]} />
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default WorldNewsPage;
