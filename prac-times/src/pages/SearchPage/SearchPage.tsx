import styles from "./SearchPage.module.css";
import SearchResults from "../../components/SearchResults/SearchResults";
import SearchFilters from "../../components/SearchFilters/SearchFilters";
import { useSearchParams } from "react-router";
import { useEffect } from "react";
import { useAppDispatch } from "../../hooks/useAppDispatch";
import { fetchAllNews } from "../../store/newsSlice";

const SearchPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const addSearchParams = (key: string, value: string) => {
    setSearchParams((prev) => {
      prev.set(key, value);
      return prev;
    });
  };

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchAllNews(searchParams.toString()));
  }, [searchParams]);

  return (
    <div className="container">
      <section className={styles.search}>
        <SearchResults
          searchParams={searchParams}
          addSearchParams={addSearchParams}
        />
        <SearchFilters
          searchParams={searchParams}
          addSearchParams={addSearchParams}
        />
      </section>
    </div>
  );
};

export default SearchPage;
