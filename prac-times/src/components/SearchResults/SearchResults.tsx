import styles from "./SearchResults.module.css";
import Pagination from "../Pagination/Pagination";
import ArticleCard from "../Article/ArticleCard/ArticleCard";
import PageTitle from "../../ui/PageTitle/PageTitle";
import LoadingBlock from "../../ui/LoadingBlock/LoadingBlock";
import { useGetArticlesQuery } from "../../services/newsApi";
import type GetArticleParams from "../../types/getArticleParams";

interface IProps {
  searchParams: URLSearchParams;
  addSearchParams: (key: string, value: string) => void;
}

const SearchResults = ({ searchParams, addSearchParams }: IProps) => {
  const articlesOnPage = 10; // Перевести в состояние и сделать форму для выбора количества

  const fetchParams: GetArticleParams = {
    title_like: searchParams.has("string")
      ? String(searchParams.get("string"))
      : "",
    page: searchParams.has("page") ? Number(searchParams.get("page")) : 1,
    limit: articlesOnPage,
  };

  const newsList = useGetArticlesQuery(fetchParams);

  const countOfPages = newsList.data
    ? Math.ceil(
        newsList.data.pagination.totalItems / newsList.data.pagination.limit,
      )
    : 0;

  if (newsList.isLoading) return <LoadingBlock />;

  if (newsList.isFetching)
    return <p className={styles.update}>Обновляюсь, пахадите.</p>;

  if (newsList.isError)
    return (
      <p className={styles.error__message}>
        Не удалось получить список новостей. Попробуйте позднее.
      </p>
    );

  if (newsList.data?.items.length === 0)
    return (
      <p className={styles.result__nothing}>
        По вашему запросу ничего не найдено
      </p>
    );

  return (
    <div className={styles.result}>
      <PageTitle titleText="Новости" />
      <p>Всего: {newsList.data?.pagination.totalItems}</p>
      <>
        <ul className={styles.result__list}>
          {newsList.data?.items.map((item) => (
            <li className={styles.result__item} key={item.id}>
              <ArticleCard article={item} />
            </li>
          ))}
        </ul>
        {countOfPages > 1 ? (
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
        ) : (
          ""
        )}
      </>
    </div>
  );
};

export default SearchResults;
