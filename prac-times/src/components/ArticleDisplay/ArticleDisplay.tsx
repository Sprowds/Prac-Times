import { NavLink } from "react-router";
import type { ArticleCategory } from "../../types/newsItem";
import NewsTime from "../../ui/NewsTime/NewsTime";
import styles from "./ArticleDisplay.module.css";
import translate from "../../utils/translate";

interface IProps {
  articleImg: string;
  articleTags: ArticleCategory[];
  articleTitle: string;
  articleTime: string;
}

const ArticleDisplay = ({
  articleImg,
  articleTags,
  articleTitle,
  articleTime,
}: IProps) => {
  return (
    <section className={styles.display}>
      <img src={articleImg} alt={articleTitle} className={styles.banner} />

      <div className={styles.text__content}>
        <ul className={styles.tag_list}>
          {articleTags.map((tag) => (
            <li className={styles.tag__item} key={tag}>
              <NavLink to={`/${tag}`} className={styles.tag__link}>
                <p className={styles.tag}>
                  #<span>{translate(tag)}</span>
                </p>
              </NavLink>
            </li>
          ))}
        </ul>

        <h2 className={styles.title}>{articleTitle}</h2>

        <NewsTime dateTime={articleTime} />
      </div>
    </section>
  );
};

export default ArticleDisplay;
