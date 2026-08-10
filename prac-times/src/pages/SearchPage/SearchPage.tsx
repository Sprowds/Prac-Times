import styles from "./SearchPage.module.css";

const SearchPage = () => {
  return (
    <div className="container">
      <section className={styles.search}>
        <div className={styles.result}>Results</div>
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
      </section>
    </div>
  );
};

export default SearchPage;
