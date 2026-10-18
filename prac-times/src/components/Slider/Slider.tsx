import { useEffect, useState } from "react";
import type INewsItem from "../../types/newsItem";
import ArticleCard from "../Article/ArticleCard/ArticleCard";
import styles from "./Slider.module.css";
import useWindowSize from "../../hooks/useWindowSize";

interface IProps {
  list: INewsItem[];
}

const Slider = ({ list }: IProps) => {
  const [currentPage, setCurrentPage] = useState(0);

  const windowSize = useWindowSize();

  const [itemsOnPage, setItemsOnPage] = useState(3);

  const pageCount = Math.ceil(list.length / itemsOnPage);

  const handleClick = (number: number) => {
    const result = currentPage + number;

    if (result < 0) {
      setCurrentPage(0);
      return;
    }
    if (result >= pageCount) return;

    setCurrentPage(result);
  };

  useEffect(() => {
    if (windowSize.width <= 600) setItemsOnPage(1);
    else {
      setItemsOnPage(3);

      if (currentPage >= pageCount) setCurrentPage(0);
    }
  }, [windowSize]);

  return (
    <section className={styles.slider}>
      <div className={styles.slider__inner}>
        <ul
          className={styles.slider__list}
          style={{ transform: `translateX(-${currentPage * 100}%)` }}
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
        disabled={currentPage >= pageCount - 1}
      >{`>`}</button>

      <button
        className={styles.slider__button}
        onClick={() => handleClick(-1)}
        disabled={currentPage === 0}
      >{`<`}</button>
    </section>
  );
};

export default Slider;
