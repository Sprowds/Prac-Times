import { useState } from "react";
import styles from "./SearchFilters.module.css";

interface IProps {
  searchParams: URLSearchParams;
  addSearchParams: (key: string, value: string) => void;
}

const SearchFilters = ({ searchParams, addSearchParams }: IProps) => {
  const [searchString, setSearchString] = useState(() => {
    if (searchParams.has(`string`)) return String(searchParams.get(`string`));
    else return "";
  });

  const handleSubmit = (event: React.SubmitEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (searchParams.get(`string`) !== null || searchString.trim().length > 0) {
      addSearchParams("string", searchString);
    }
  };

  return (
    <aside className={styles.filter}>
      <form className={styles.search__name} onSubmit={handleSubmit}>
        <input
          id="searchTextInput"
          type="text"
          placeholder="Найти в Prac Times"
          value={searchString}
          className={styles.search__name__input}
          onChange={(event) => setSearchString(event.target.value)}
        />
        <button type="submit" className={styles.search__name__btn}>
          Поиск
        </button>
      </form>
    </aside>
  );
};

export default SearchFilters;
