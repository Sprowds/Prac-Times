import styles from "./SearchResults.module.css";
import Pagination from "../Pagination/Pagination";
import ArticleCard from "../Article/ArticleCard/ArticleCard";
import PageTitle from "../../ui/PageTitle/PageTitle";
import LoadingBlock from "../../ui/LoadingBlock/LoadingBlock";
import { useGetArticlesQuery } from "../../services/newsApi";
import type GetArticleParams from "../../types/getArticleParams";
import ErrorBlock from "../../ui/ErrorBlock/ErrorBlock";

interface IProps {
  searchParams: URLSearchParams;
  addSearchParams: (key: string, value: string) => void;
}

const SearchResults = ({ searchParams, addSearchParams }: IProps) => {
  const articlesOnPage = 10; // Перевести в состояние и сделать форму для выбора количества

  const fetchParams: GetArticleParams = {
    limit: articlesOnPage,
  };

  if (searchParams.has("string"))
    fetchParams.title_like = String(searchParams.get("string"));

  if (searchParams.has("page"))
    fetchParams.page = Number(searchParams.get("page"));

  const newsList = useGetArticlesQuery(fetchParams);

  const countOfPages = newsList.data
    ? Math.ceil(
        newsList.data.pagination.totalItems / newsList.data.pagination.limit,
      )
    : 0;

  const newsListBlock = () => {
    if (newsList.isLoading) return <LoadingBlock />;

    if (newsList.isFetching)
      return <p className={styles.update}>Обновляюсь, пахадите.</p>;

    if (newsList.isError) return <ErrorBlock />;

    if (newsList.data?.items.length === 0)
      return (
        <p className={styles.result__nothing}>
          По вашему запросу ничего не найдено
        </p>
      );

    return (
      <>
        <p>Всего: {newsList.data?.pagination.totalItems}</p>

        <ul className={styles.result__list}>
          {newsList.data?.items.map((item) => (
            <li className={styles.result__item} key={item.id}>
              <ArticleCard article={item} />
            </li>
          ))}
        </ul>
      </>
    );
  };

  const paginationBlock = () => {
    if (countOfPages > 1)
      return (
        <Pagination
          countOfPages={countOfPages}
          currentPage={
            Number(searchParams.get("page")) < 1 ||
            Number(searchParams.get("page")) > countOfPages
              ? 1
              : Number(searchParams.get("page"))
          }
          addSearchParams={addSearchParams}
        />
      );

    return "";
  };

  return (
    <div className={styles.result}>
      <PageTitle titleText="Новости" />
      {newsListBlock()}
      {paginationBlock()}
    </div>
  );
};

export default SearchResults;
