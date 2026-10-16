import { useState } from "react";
import type INewsItem from "../../types/newsItem";
import ArticleCard from "../Article/ArticleCard/ArticleCard";
import styles from "./Slider.module.css";

interface IProps {
  list: INewsItem[];
}

const Slider = ({ list }: IProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleClick = (number: number) => {
    const result = currentIndex + number;
    console.log(currentIndex);

    if (result < 0) {
      setCurrentIndex(0);
      return;
    }
    if (result > list.length - 1) return;

    setCurrentIndex(result);
  };

  return (
    <section className={styles.slider}>
      <div className={styles.slider__inner}>
        <ul
          className={styles.slider__list}
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
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
        disabled={currentIndex > list.length - 1}
      >{`>`}</button>
      <button
        className={styles.slider__button}
        onClick={() => handleClick(-1)}
        disabled={currentIndex === 0}
      >{`<`}</button>
    </section>
  );
};

export default Slider;
