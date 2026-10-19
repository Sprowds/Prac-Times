import { useState } from "react";
import type INewsItem from "../../types/newsItem";
import ArticleCard from "../Article/ArticleCard/ArticleCard";
import styles from "./Slider.module.css";
import useWindowSize from "../../hooks/useWindowSize";

interface IProps {
  list: INewsItem[];
}

const Slider = ({ list }: IProps) => {
  const windowSize = useWindowSize();

  const itemsOnPage = windowSize.width <= 600 ? 1 : 3;

  const pageCount = Math.ceil(list.length / itemsOnPage);

  const [currentPage, setCurrentPage] = useState(0);
  const activePage = Math.min(currentPage, Math.max(0, pageCount - 1));

  const handleClick = (number: number) => {
    const result = activePage + number;

    if (result < 0) {
      setCurrentPage(0);
      return;
    }
    if (result >= pageCount) return;

    setCurrentPage(result);
  };

  const paginationBlock = () => {
    const items = [];

    for (let i = 0; i < pageCount; i++) {
      items.push(
        <li
          className={`${styles.pagination__item} ${i === activePage ? styles.active : ""}`}
          key={i}
        >
          <button
            className={styles.pagination__btn}
            onClick={() => {
              setCurrentPage(i);
            }}
            disabled={currentPage === i}
          ></button>
        </li>,
      );
    }

    return (
      <nav className={styles.slider__nav}>
        <ul className={styles.pagination}>{items.map((item) => item)}</ul>
      </nav>
    );
  };

  return (
    <section className={styles.slider}>
      <div className={styles.slider__inner}>
        {paginationBlock()}
        <ul
          className={styles.slider__list}
          style={{ transform: `translateX(-${activePage * 100}%)` }}
        >
          {list.map((item) => (
            <li className={styles.list__item} key={item.id}>
              <ArticleCard article={item} />
            </li>
          ))}
        </ul>
      </div>

      <button
        className={styles.slider__button}
        onClick={() => handleClick(1)}
        disabled={activePage >= pageCount - 1}
      >{`>`}</button>

      <button
        className={styles.slider__button}
        onClick={() => handleClick(-1)}
        disabled={activePage === 0}
      >{`<`}</button>
    </section>
  );
};

export default Slider;
