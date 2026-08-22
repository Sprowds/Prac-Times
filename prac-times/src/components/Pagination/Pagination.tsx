import { useState } from "react";
import styles from "./Pagination.module.css";
import type { IPagination } from "../../types/componentProps";

const Pagination = ({
  countOfPages,
  currentPage,
  editCurrentPage,
}: IPagination) => {
  const [pageInput, setPageInput] = useState<number>(currentPage);

  return (
    <>
      <p className={styles.pagination__title}>
        Страница: <span>{currentPage}</span> из {countOfPages}
      </p>
      <ul className={styles.pagination}>
        <li className={styles.pagination__item}>
          <button
            disabled={currentPage < 2 ? true : false}
            className={styles.pagination__button}
            onClick={() => editCurrentPage(currentPage - 1)}
          >
            Предыдущая страница
          </button>
        </li>
        <li className={styles.pagination__item}>
          <form
            className={styles.jump__form}
            onSubmit={(event) => {
              event.preventDefault();
              editCurrentPage(pageInput);
            }}
          >
            <input
              className={styles.jump__input}
              type="number"
              min="1"
              max={countOfPages}
              value={pageInput}
              onChange={(event) => {
                const numberValue = Number(event.target.value);
                if (
                  numberValue <= countOfPages &&
                  numberValue > 0 &&
                  numberValue % 1 === 0
                )
                  setPageInput(numberValue);
              }}
            />
            <button className={styles.pagination__button}>
              Перейти на страницу
            </button>
          </form>
        </li>
        <li className={styles.pagination__item}>
          <button
            disabled={currentPage < countOfPages ? false : true}
            className={styles.pagination__button}
            onClick={() => editCurrentPage(currentPage + 1)}
          >
            Следующая страница
          </button>
        </li>
      </ul>
    </>
  );
};

export default Pagination;
