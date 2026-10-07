import styles from "./News.module.css";
import AnotherNews from "../AnotherNews/AnotherNews";
import MainArticle from "../Article/MainArticle/MainArticle";
import PageTitle from "../../ui/PageTitle/PageTitle";
import LoadingBlock from "../../ui/LoadingBlock/LoadingBlock";
import { useGetArticlesQuery } from "../../services/newsApi";
import type GetArticleParams from "../../types/getArticleParams";

const News = () => {
  const fetchParams: GetArticleParams = {
    limit: 1,
    type: "main",
  };

  const lastMainArticle = useGetArticlesQuery(fetchParams);

  const getMainArticle = () => {
    if (lastMainArticle.isLoading) return <LoadingBlock />;

    if (lastMainArticle.isError || !lastMainArticle.data?.items[0])
      return (
        <p className={styles.error__message}>
          Не удалось получить новость. Попробуйте позднее.
        </p>
      );

    return <MainArticle article={lastMainArticle.data?.items[0]} />;
  };

  return (
    <section className={styles.news}>
      <div className={styles.news__main}>
        <PageTitle titleText="Главные новости" />
        {getMainArticle()}
      </div>
      <AnotherNews />
    </section>
  );
};

export default News;
