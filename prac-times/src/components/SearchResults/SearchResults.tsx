import styles from "./SearchResults.module.css";
import { useSelector } from "react-redux";
import type { RootState } from "../../store/store";
import NewsTag from "../../ui/NewsTag/NewsTag";
import NewsTime from "../../ui/NewsTime/NewsTime";
import NewsTitle from "../../ui/NewsTitle/NewsTitle";
import { NavLink } from "react-router";
import Pagination from "../Pagination/Pagination";

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
                <NavLink to="/" className={styles.item__link}>
                  <div className={styles.item__main}>
                    <img
                      src={item.image}
                      alt={item.title}
                      className={styles.item__img}
                    />

                    <NewsTitle
                      titleText={item.title}
                      titleFontSize="clamp(18px, 4vw, 28px)"
                    />
                  </div>
                </NavLink>

                <div className={styles.item__additional}>
                  <ul className={styles.item__tags}>
                    {Object.entries(item.category).map(([key, value]) =>
                      value === true ? (
                        <li className={styles.main__news__tags__item} key={key}>
                          <NewsTag tagText={key} tagFontSize="14px" />
                        </li>
                      ) : (
                        ""
                      ),
                    )}
                  </ul>
                  <NewsTime dateTime={item.time} />
                </div>
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
