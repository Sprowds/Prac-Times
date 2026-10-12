import { useGetCommentsQuery } from "../../services/commentsApi";
import type GetCommentsParams from "../../types/getCommentsParams";
import ErrorBlock from "../../ui/ErrorBlock/ErrorBlock";
import LoadingBlock from "../../ui/LoadingBlock/LoadingBlock";
import ProfileComment from "../ProfileComment/ProfileComment";
import styles from "./ProfileCommentList.module.css";

interface IProps {
  username: string;
}

const ProfileCommentList = ({ username }: IProps) => {
  const commentsFetchParams: GetCommentsParams = {
    username_like: username,
    limit: 10,
  };

  const commentList = useGetCommentsQuery(commentsFetchParams);

  if (commentList.isLoading) return <LoadingBlock />;

  if (commentList.isError) return <ErrorBlock />;

  return (
    <ul className={styles.comment__list}>
      {commentList.data?.map((comment) => (
        <li className={styles.comment__item} key={comment.id}>
          <ProfileComment comment={comment} />
        </li>
      ))}
    </ul>
  );
};

export default ProfileCommentList;
