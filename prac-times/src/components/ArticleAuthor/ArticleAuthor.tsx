import { NavLink } from "react-router";
import type { INewsCategory } from "../../types/newsItem";
import tagsMap from "../../utils/tagsMap";
import translate from "../../utils/translate";
import styles from "./ArticleAuthor.module.css";
import getUserInfoByUsername from "../../utils/getUserInfoByUsername";
import Avatar from "../../ui/Avatar/Avatar";

interface IProps {
  articleTags: INewsCategory;
  articleAuthor: string;
}

const ArticleAuthor = ({ articleTags, articleAuthor }: IProps) => {
  const authorInfo = getUserInfoByUsername(articleAuthor);

  return (
    <section className={styles.author}>
      <div className={styles.author__inner}>
        <ul className={styles.tag_list}>
          {tagsMap(articleTags).map((tag) => (
            <li className={styles.tag__item} key={tag}>
              <NavLink to={`/${tag}`} className={styles.tag__link}>
                <p className={styles.tag}>
                  #<span>{translate(tag)}</span>
                </p>
              </NavLink>
            </li>
          ))}
        </ul>
        <div className={styles.author__info}>
          <NavLink
            to={`/profile/${authorInfo.username}`}
            className={styles.author__link}
          >
            <Avatar
              avatar={authorInfo.avatar}
              name={`${authorInfo.name} ${authorInfo.surname}`}
              size="74px"
            />
            <div className={styles.info__text}>
              <p className={styles.text__title}>Автор</p>
              <p className={styles.text__name}>
                {authorInfo.name}
                <br />
                {authorInfo.surname}
              </p>
            </div>
          </NavLink>
        </div>
      </div>
    </section>
  );
};

export default ArticleAuthor;
