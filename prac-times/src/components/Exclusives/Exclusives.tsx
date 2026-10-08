import styles from "./Exclusives.module.css";
import ArticleCard from "../Article/ArticleCard/ArticleCard";
import PageTitle from "../../ui/PageTitle/PageTitle";
import LoadingBlock from "../../ui/LoadingBlock/LoadingBlock";
import { useGetArticlesQuery } from "../../services/newsApi";
import type GetArticleParams from "../../types/getArticleParams";

const Exclusives = () => {
  const fetchParams: GetArticleParams = {
    limit: 6,
    type: "exclusive",
  };

  const exclusiveArticlesList = useGetArticlesQuery(fetchParams);

  if (exclusiveArticlesList.isLoading) return <LoadingBlock />;

  if (exclusiveArticlesList.isError)
    return (
      <p className={styles.error__message}>
        Не удалось получить список новостей. Попробуйте позднее.
      </p>
    );

  return (
    <section className={styles.exclusives}>
      <PageTitle titleText="Эксклюзив" />
      <ul className={styles.exclusives__grid}>
        {exclusiveArticlesList.data?.items.map((article) => (
          <li className={styles.exclusives__item} key={article.id}>
            <ArticleCard article={article} />
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Exclusives;
