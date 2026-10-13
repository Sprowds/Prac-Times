import styles from "./Exclusives.module.css";
import ArticleCard from "../Article/ArticleCard/ArticleCard";
import PageTitle from "../../ui/PageTitle/PageTitle";
import LoadingBlock from "../../ui/LoadingBlock/LoadingBlock";
import { useGetArticlesQuery } from "../../services/newsApi";
import type GetArticleParams from "../../types/getArticleParams";
import ErrorBlock from "../../ui/ErrorBlock/ErrorBlock";
import Slider from "../Slider/Slider";

const Exclusives = () => {
  const fetchParams: GetArticleParams = {
    limit: 6,
    type: "exclusive",
  };

  const exclusiveArticlesList = useGetArticlesQuery(fetchParams);

  const exclusiveArticlesListBlock = () => {
    if (exclusiveArticlesList.isLoading) return <LoadingBlock />;

    if (exclusiveArticlesList.isError) return <ErrorBlock />;

    return (
      <ul className={styles.exclusives__grid}>
        {exclusiveArticlesList.data?.items.map((article) => (
          <li className={styles.exclusives__item} key={article.id}>
            <ArticleCard article={article} />
          </li>
        ))}
      </ul>
    );
  };

  return (
    <section className={styles.exclusives}>
      <PageTitle titleText="Эксклюзив" />
      {exclusiveArticlesListBlock()}

      <Slider
        list={
          exclusiveArticlesList.data?.items
            ? exclusiveArticlesList.data?.items
            : []
        }
      />
    </section>
  );
};

export default Exclusives;
