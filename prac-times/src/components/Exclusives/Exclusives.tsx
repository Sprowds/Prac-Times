import { useSelector } from "react-redux";
import styles from "./Exclusives.module.css";
import type { RootState } from "../../store/store";
import { NavLink } from "react-router";
import NewsTitle from "../../ui/NewsTitle/NewsTitle";
import NewsTag from "../../ui/NewsTag/NewsTag";
import NewsTime from "../../ui/NewsTime/NewsTime";
import { useAppDispatch } from "../../hooks/useAppDispatch";
import { useEffect } from "react";
import { fetchExclusiveNews } from "../../store/newsSlice";

const Exclusives = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchExclusiveNews());
  }, [dispatch]);

  const exclusiveNewsFetchStatus = useSelector(
    (state: RootState) => state.newsReducer.status.exclusive,
  );

  const exclusivesList = useSelector(
    (state: RootState) => state.newsReducer.data.exclusive,
  );

  return (
    <section className={styles.exclusives}>
      <h2 className={styles.exclusives__title}>Эксклюзив</h2>
      <ul className={styles.exclusives__grid}>
        {exclusiveNewsFetchStatus === "succeeded"
          ? exclusivesList.map((item) => (
              <li className={styles.exclusives__item} key={item.title}>
                <img
                  src={item.image}
                  alt={item.title}
                  className={styles.item__img}
                />
                <div className={styles.item__text__content}>
                  <ul className={styles.item__tags}>
                    {Object.entries(item.category).map(([key, value]) =>
                      value === true ? (
                        <li className={styles.item__tags__item} key={key}>
                          <NavLink to="/" className={styles.tags__item__link}>
                            <NewsTag tagText={key} tagFontSize="16px" />
                          </NavLink>
                        </li>
                      ) : (
                        ""
                      ),
                    )}
                  </ul>
                  <NavLink to="/" className={styles.item__title__link}>
                    <NewsTitle
                      titleText={item.title}
                      titleFontSize="clamp(16px, 2vw, 24px)"
                    />
                  </NavLink>
                  <NewsTime dateTime={item.time} />
                </div>
              </li>
            ))
          : ""}
      </ul>
    </section>
  );
};

export default Exclusives;
