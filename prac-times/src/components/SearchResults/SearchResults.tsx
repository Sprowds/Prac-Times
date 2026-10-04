import styles from "./SearchResults.module.css";
import { useSelector } from "react-redux";
import type { RootState } from "../../store/store";
import Pagination from "../Pagination/Pagination";
import ArticleCard from "../Article/ArticleCard/ArticleCard";
import PageTitle from "../../ui/PageTitle/PageTitle";
import LoadingBlock from "../../ui/LoadingBlock/LoadingBlock";
import {
  useGetArticlesCountQuery,
  useGetArticlesQuery,
} from "../../services/newsApi";
import type GetArticleParams from "../../types/getArticleParams";

interface IProps {
  searchParams: URLSearchParams;
  addSearchParams: (key: string, value: string) => void;
}

const SearchResults = ({ searchParams, addSearchParams }: IProps) => {
  // const allNewsFetchStatus = useSelector(
  //   (state: RootState) => state.newsReducer.status.all,
  // );

  // const newsList = useSelector(
  //   (state: RootState) => state.newsReducer.data.all,
  // );

  const fetchParams: GetArticleParams = {
    title_like: "",
    page: Number(searchParams.get("page")),
    limit: 10,
  };

  const newsList = useGetArticlesQuery(fetchParams);

  const pageCount = useGetArticlesCountQuery();
  console.log(pageCount);

  if (newsList.isLoading) return <LoadingBlock />;

  if (newsList.isFetching)
    return <p className={styles.update}>Обновляюсь, пахадите.</p>;

  if (newsList.isError)
    return (
      <p className={styles.error__message}>
        Не удалось получить список новостей. Попробуйте позднее.
      </p>
    );

  return (
    <div className={styles.result}>
      <PageTitle titleText="Новости" />
      <>
        <ul className={styles.result__list}>
          {newsList.data?.map((item) => (
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
    </div>
    // <div className={styles.result}>
    //   <PageTitle titleText="Новости" />
    //   {allNewsFetchStatus !== "succeeded" ? (
    //     <LoadingBlock />
    //   ) : newsList.news.length === 0 ? (
    //     <p className={styles.result__nothing}>
    //       По вашему запросу ничего не найдено
    //     </p>
    //   ) : (
    //     <>
    //       <p>Всего страниц: {newsList.pageCount}</p>
    //       <ul className={styles.result__list}>
    //         {newsList.news.map((item) => (
    //           <li className={styles.result__item} key={item.id}>
    //             <ArticleCard article={item} />
    //           </li>
    //         ))}
    //       </ul>
    //       {newsList.pageCount > 1 ? (
    //         <Pagination
    //           countOfPages={newsList.pageCount}
    //           currentPage={
    //             Number(searchParams.get("page")) < 1 ||
    //             Number(searchParams.get("page")) > newsList.pageCount
    //               ? 1
    //               : Number(searchParams.get("page"))
    //           }
    //           addSearchParams={addSearchParams}
    //         />
    //       ) : (
    //         ""
    //       )}
    //     </>
    //   )}
    // </div>
  );
};

export default SearchResults;
