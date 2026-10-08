import { NavLink } from "react-router";
import type { ArticleCategory } from "../../types/newsItem";
import translate from "../../utils/translate";
import styles from "./ArticleAuthor.module.css";
import Avatar from "../../ui/Avatar/Avatar";
import { useGetUserPublicInfoByUserNameQuery } from "../../services/usersPublicApi";
import LoadingBlock from "../../ui/LoadingBlock/LoadingBlock";
import validateAvatarLink from "../../utils/validateAvatarLink";

interface IProps {
  articleTags: ArticleCategory[];
  articleAuthor: string;
}

const ArticleAuthor = ({ articleTags, articleAuthor }: IProps) => {
  const fetchedAuthorInfo = useGetUserPublicInfoByUserNameQuery(articleAuthor);

  if (fetchedAuthorInfo.isLoading) return <LoadingBlock />;

  if (
    fetchedAuthorInfo.isError ||
    typeof fetchedAuthorInfo.data === "undefined"
  )
    return (
      <p className={styles.error__message}>
        Не удалось загрузить данные об авторе.
      </p>
    );

  const authorInfo = fetchedAuthorInfo.data;

  return (
    <section className={styles.author}>
      <div className={styles.author__inner}>
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
        <div className={styles.author__info}>
          <NavLink
            to={`/profile/${authorInfo.username}`}
            className={styles.author__link}
          >
            <Avatar
              avatar={validateAvatarLink(authorInfo.avatar)}
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
