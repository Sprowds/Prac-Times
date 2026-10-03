import { useSelector } from "react-redux";
import styles from "./Exclusives.module.css";
import type { RootState } from "../../store/store";
import { useAppDispatch } from "../../hooks/useAppDispatch";
import { useEffect } from "react";
import { fetchExclusiveNews } from "../../store/newsSlice";
import ArticleCard from "../Article/ArticleCard/ArticleCard";
import PageTitle from "../../ui/PageTitle/PageTitle";
import LoadingBlock from "../../ui/LoadingBlock/LoadingBlock";

const Exclusives = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchExclusiveNews());
  }, [dispatch]);

  const exclusiveNewsFetchStatus = useSelector(
    (state: RootState) => state.newsReducer.status.exclusive,
  );

  const exclusivesList = useSelector(
    (state: RootState) => state.newsReducer.data.exclusive,
  );

  return (
    <section className={styles.exclusives}>
      <PageTitle titleText="Эксклюзив" />
      <ul className={styles.exclusives__grid}>
        {exclusiveNewsFetchStatus === "succeeded" ? (
          exclusivesList.map((item) => (
            <li className={styles.exclusives__item} key={item.id}>
              <ArticleCard article={item} />
            </li>
          ))
        ) : (
          <LoadingBlock />
        )}
      </ul>
    </section>
  );
};

export default Exclusives;
