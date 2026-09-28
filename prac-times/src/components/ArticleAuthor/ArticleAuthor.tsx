import { NavLink } from "react-router";
import type { INewsCategory } from "../../types/newsItem";
import tagsMap from "../../utils/tagsMap";
import translate from "../../utils/translate";
import styles from "./ArticleAuthor.module.css";

interface IProps {
  articleTags: INewsCategory;
}

const ArticleAuthor = ({ articleTags }: IProps) => {
  return (
    <section className={styles.author}>
      <ul className={styles.tag_list}>
        {tagsMap(articleTags).map((tag) => (
          <li className={styles.tag__item}>
            <NavLink to={`/${tag}`} className={styles.tag__link}>
              <p className={styles.tag}>
                #<span>{translate(tag)}</span>
              </p>
            </NavLink>
          </li>
        ))}
      </ul>
      <div className={styles.author__info}>
        <img src="/" alt="" className={styles.info__img} />
        <div className={styles.info__text}>
          <p className={styles.text__title}>Автор</p>
          <p className={styles.text__name}></p>
        </div>
      </div>
    </section>
  );
};

export default ArticleAuthor;
