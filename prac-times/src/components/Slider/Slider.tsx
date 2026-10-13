import { useState } from "react";
import type INewsItem from "../../types/newsItem";
import ArticleCard from "../Article/ArticleCard/ArticleCard";
import styles from "./Slider.module.css";

interface IProps {
  list: INewsItem[];
}

const Slider = ({ list }: IProps) => {
  const [isClicked, setIsClicked] = useState(false);
  const [moveDistance, setMoveDistance] = useState(0);

  return (
    <section
      className={styles.slider}
      onMouseDown={(event) => {
        event.preventDefault();
        setIsClicked(true);

        document.addEventListener(
          "mouseup",
          (event) => {
            event.preventDefault();
            setIsClicked(false);
          },
          {
            once: true,
          },
        );
      }}
      onMouseMove={(event) => {
        if (isClicked) setMoveDistance((prev) => prev + event.movementX);
      }}
    >
      <ul
        className={styles.slider__list}
        style={{ transform: `translateX(${moveDistance}px)` }}
      >
        {list.map((item) => (
          <li className={styles.list__item} key={item.id}>
            <ArticleCard article={item} />
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Slider;
