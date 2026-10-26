import { useState } from "react";
import type INewsItem from "../../types/newsItem";
import ArticleCard from "../Article/ArticleCard/ArticleCard";
import styles from "./Slider.module.css";
import useWindowSize from "../../hooks/useWindowSize";
import CircleButton from "../../ui/CircleButton/CircleButton";

interface IProps {
  list: INewsItem[];
}

const Slider = ({ list }: IProps) => {
  const windowWidth = useWindowSize().width;

  const sliderWidth = windowWidth >= 1253 ? 1218 : windowWidth - 35;

  const itemsOnPage = windowWidth <= 600 ? 1 : 3;

  const pageCount = Math.ceil(list.length / itemsOnPage);

  const [currentPage, setCurrentPage] = useState(0);
  const activePage = Math.min(currentPage, Math.max(0, pageCount - 1));

  const handlePageChange = (number: number) => {
    const result = activePage + number;

    if (result < 0) {
      setCurrentPage(0);
      return;
    }
    if (result >= pageCount) return;

    setCurrentPage(result);
  };

  const [isMouseDown, setIsMouseDown] = useState(false);
  const [isOnSlider, setIsOnSlider] = useState(false);
  const [mouseMoveDistance, setMouseMoveDistance] = useState(0);

  const handleMouseMove = (event: React.PointerEvent) => {
    if (isMouseDown && isOnSlider) {
      setMouseMoveDistance((prev) => prev + event.movementX);
    }
  };

  const handleMouseMoveEnd = () => {
    if (mouseMoveDistance > sliderWidth / 2) handlePageChange(-1);
    else if (mouseMoveDistance < -sliderWidth / 2) handlePageChange(1);

    setMouseMoveDistance(0);
  };

  const [isDrag, setIsDrag] = useState(false);

  const handleDragging = () => {
    if (mouseMoveDistance > 6 || mouseMoveDistance < -6) setIsDrag(true);
    else setIsDrag(false);
  };

  const handleClickCapture = (event: React.MouseEvent) => {
    if (isDrag) event.preventDefault();
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
    <section
      className={styles.slider}
      onPointerDown={() => setIsMouseDown(true)}
      onPointerUp={() => {
        setIsMouseDown(false);
        handleMouseMoveEnd();
        handleDragging();
      }}
      onPointerOver={() => setIsOnSlider(true)}
      onPointerLeave={() => {
        setIsOnSlider(false);
        setIsMouseDown(false);
        handleMouseMoveEnd();
        handleDragging();
      }}
      onPointerMove={handleMouseMove}
      onClickCapture={handleClickCapture}
    >
      <div className={styles.slider__inner}>
        {paginationBlock()}
        <ul
          className={styles.slider__list}
          style={{
            transform:
              isMouseDown && isOnSlider
                ? `translateX(calc(${-activePage * 100}% + ${mouseMoveDistance}px))`
                : `translateX(-${activePage * 100}%)`,
            transition: isMouseDown && isOnSlider ? "0s" : "",
          }}
        >
          {list.map((item) => (
            <li
              className={styles.list__item}
              key={item.id}
              onDragStart={(event) => event.preventDefault()}
            >
              <ArticleCard article={item} />
            </li>
          ))}
        </ul>
      </div>

      <div className={styles.right_arrow__btn}>
        <CircleButton
          inner=">"
          handleClick={() => handlePageChange(1)}
          disableState={activePage >= pageCount - 1}
        />
      </div>

      <div className={styles.left_arrow__btn}>
        <CircleButton
          inner="<"
          handleClick={() => handlePageChange(-1)}
          disableState={activePage === 0}
        />
      </div>
    </section>
  );
};

export default Slider;
