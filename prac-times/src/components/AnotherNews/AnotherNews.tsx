import styles from "./AnotherNews.module.css";
import CompactArticle from "../Article/CompactArticle/CompactArticle";
import PageTitle from "../../ui/PageTitle/PageTitle";
import { useGetArticlesQuery } from "../../services/newsApi";
import type GetArticleParams from "../../types/getArticleParams";
import LoadingBlock from "../../ui/LoadingBlock/LoadingBlock";
import ErrorBlock from "../../ui/ErrorBlock/ErrorBlock";

const AnotherNews = () => {
  const fetchParams: GetArticleParams = {
    limit: 4,
    type_not: "main",
  };

  const anotherNews = useGetArticlesQuery(fetchParams);

  const anotherNewsBlock = () => {
    if (anotherNews.isLoading) return <LoadingBlock />;

    if (anotherNews.isError) return <ErrorBlock />;

    return (
      <ul className={styles.another__content}>
        {anotherNews.data?.items.map((item) => (
          <li className={styles.another__item} key={item.id}>
            <CompactArticle article={item} />
          </li>
        ))}
      </ul>
    );
  };

  return (
    <aside className={styles.news__another}>
      <PageTitle titleText="Другие новости" />
      {anotherNewsBlock()}
    </aside>
  );
};

export default AnotherNews;
