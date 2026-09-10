import styles from "./SearchResults.module.css";
import { useSelector } from "react-redux";
import type { RootState } from "../../store/store";
import Pagination from "../Pagination/Pagination";
import ArticleCard from "../Article/ArticleCard/ArticleCard";

interface IProps {
  searchParams: URLSearchParams;
  addSearchParams: (key: string, value: string) => void;
}

const SearchResults = ({ searchParams, addSearchParams }: IProps) => {
  const allNewsFetchStatus = useSelector(
    (state: RootState) => state.newsReducer.status.all,
  );

  const newsList = useSelector(
    (state: RootState) => state.newsReducer.data.all,
  );

  return (
    <div className={styles.result}>
      <h2 className={styles.result__title}>Новости</h2>
      {allNewsFetchStatus !== "succeeded" ? (
        ""
      ) : newsList.news.length === 0 ? (
        <p className={styles.result__nothing}>
          По вашему запросу ничего не найдено
        </p>
      ) : (
        <>
          <p>Всего страниц: {newsList.pageCount}</p>
          <ul className={styles.result__list}>
            {newsList.news.map((item) => (
              <li className={styles.result__item} key={item.id}>
                <ArticleCard article={item} />
              </li>
            ))}
          </ul>
          {newsList.pageCount > 1 ? (
            <Pagination
              countOfPages={newsList.pageCount}
              currentPage={
                Number(searchParams.get("page")) < 1 ||
                Number(searchParams.get("page")) > newsList.pageCount
                  ? 1
                  : Number(searchParams.get("page"))
              }
              addSearchParams={addSearchParams}
            />
          ) : (
            ""
          )}
        </>
      )}
    </div>
  );
};

export default SearchResults;
