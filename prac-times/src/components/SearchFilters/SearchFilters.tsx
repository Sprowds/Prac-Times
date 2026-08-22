import styles from "./SearchFilters.module.css";

const SearchFilters = () => {
  return (
    <aside className={styles.filter}>
      <form className={styles.search__name}>
        <input
          id="searchTextInput"
          type="text"
          placeholder="Найти в Prac Times"
          className={styles.search__name__input}
        />
        <button type="submit" className={styles.search__name__btn}>
          Поиск
        </button>
      </form>
    </aside>
  );
};

export default SearchFilters;
