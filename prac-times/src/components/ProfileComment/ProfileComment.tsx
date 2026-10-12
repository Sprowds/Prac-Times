import { NavLink } from "react-router";
import { useGetArticleByIdQuery } from "../../services/newsApi";
import type IComment from "../../types/comment";
import ErrorBlock from "../../ui/ErrorBlock/ErrorBlock";
import LoadingBlock from "../../ui/LoadingBlock/LoadingBlock";
import NewsTitle from "../../ui/NewsTitle/NewsTitle";
import styles from "./ProfileComment.module.css";
import NewsTime from "../../ui/NewsTime/NewsTime";

interface IProps {
  comment: IComment;
}

const ProfileComment = ({ comment }: IProps) => {
  const article = useGetArticleByIdQuery(comment.articleId);

  if (article.isLoading) return <LoadingBlock />;

  if (article.isError || !article.data) return <ErrorBlock />;

  return (
    <article className={styles.comment}>
      <NavLink to={`/article/${article.data.id}`} className={styles.link}>
        <NewsTitle titleText={article.data.title} titleFontSize="20px" />
      </NavLink>
      <NewsTime dateTime={comment.time} />
      <p className={styles.text}>{comment.text}</p>
    </article>
  );
};

export default ProfileComment;
