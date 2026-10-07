import styles from "./AnotherNews.module.css";
import CompactArticle from "../Article/CompactArticle/CompactArticle";
import PageTitle from "../../ui/PageTitle/PageTitle";
import { useGetArticlesQuery } from "../../services/newsApi";
import type GetArticleParams from "../../types/getArticleParams";
import LoadingBlock from "../../ui/LoadingBlock/LoadingBlock";

const AnotherNews = () => {
  const fetchParams: GetArticleParams = {
    limit: 4,
    type_not: "main",
  };

  const anotherNews = useGetArticlesQuery(fetchParams);

  if (anotherNews.isLoading) return <LoadingBlock />;

  if (anotherNews.isError)
    return (
      <p className={styles.error__message}>
        Не удалось получить список новостей. Попробуйте позднее.
      </p>
    );

  return (
    <aside className={styles.news__another}>
      <PageTitle titleText="Другие новости" />

      <ul className={styles.another__content}>
        {anotherNews.data?.items.map((item) => (
          <li className={styles.another__item} key={item.id}>
            <CompactArticle article={item} />
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default AnotherNews;
