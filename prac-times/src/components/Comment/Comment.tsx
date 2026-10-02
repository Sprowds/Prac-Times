import { NavLink } from "react-router";
import Avatar from "../../ui/Avatar/Avatar";
import styles from "./Comment.module.css";
import getUserInfoByUsername from "../../utils/getUserInfoByUsername";
import NewsTime from "../../ui/NewsTime/NewsTime";

interface IProps {
  author: string;
  text: string;
  createdAt: string;
}

const Comment = ({ author, text, createdAt }: IProps) => {
  const authorInfo = getUserInfoByUsername(author);

  return (
    <article className={styles.comment}>
      <NavLink to={`/profile/${author}`} className={styles.avatar__link}>
        <Avatar avatar={authorInfo.avatar} name={author} size="74px" />
      </NavLink>
      <div className={styles.content}>
        <NavLink to={`/profile/${author}`} className={styles.title__link}>
          <p
            className={styles.title}
          >{`${authorInfo.name} ${authorInfo.surname}`}</p>
        </NavLink>
        <p className={styles.text}>{text}</p>
        <div className={styles.time__wrapper}>
          <NewsTime dateTime={createdAt} />
        </div>
      </div>
    </article>
  );
};

export default Comment;
