import { NavLink } from "react-router";
import Avatar from "../../ui/Avatar/Avatar";
import styles from "./Comment.module.css";
import NewsTime from "../../ui/NewsTime/NewsTime";
import { useGetUserPublicInfoByUserNameQuery } from "../../services/usersPublicApi";
import LoadingBlock from "../../ui/LoadingBlock/LoadingBlock";

interface IProps {
  author: string;
  text: string;
  createdAt: string;
}

const Comment = ({ author, text, createdAt }: IProps) => {
  const authorInfo = useGetUserPublicInfoByUserNameQuery(author);

  const authorBlock = () => {
    if (authorInfo.isLoading) return <LoadingBlock />;

    if (authorInfo.isError)
      return (
        <p className={styles.error__message}>
          Не удалось загрузить данные о пользователе.
        </p>
      );

    return (
      <NavLink to={`/profile/${author}`} className={styles.author__link}>
        <Avatar avatar={authorInfo.data?.avatar} name={author} size="45px" />
        <p
          className={styles.title}
        >{`${authorInfo.data?.name} ${authorInfo.data?.surname}`}</p>
      </NavLink>
    );
  };

  return (
    <article className={styles.comment}>
      <div className={styles.comment__info}>
        {authorBlock()}
        <div className={styles.time__wrapper}>
          <NewsTime dateTime={createdAt} />
        </div>
      </div>
      <p className={styles.comment__text}>{text}</p>
    </article>
  );
};

export default Comment;
