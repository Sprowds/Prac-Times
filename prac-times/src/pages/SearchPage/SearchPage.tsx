import styles from "./SearchPage.module.css";
import SearchResults from "../../components/SearchResults/SearchResults";
import SearchFilters from "../../components/SearchFilters/SearchFilters";

const SearchPage = () => {
  return (
    <div className="container">
      <section className={styles.search}>
        <SearchResults />
        <SearchFilters />
      </section>
    </div>
  );
};

export default SearchPage;
