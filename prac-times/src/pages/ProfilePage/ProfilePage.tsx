import { useNavigate, useParams } from "react-router";
import styles from "./ProfilePage.module.css";
import { useGetUserPublicInfoByUserNameQuery } from "../../services/usersPublicApi";
import Avatar from "../../ui/Avatar/Avatar";
import PageTitle from "../../ui/PageTitle/PageTitle";
import { useGetCommentsQuery } from "../../services/commentsApi";
import type GetCommentsParams from "../../types/getCommentsParams";
import LoadingBlock from "../../ui/LoadingBlock/LoadingBlock";
import ErrorBlock from "../../ui/ErrorBlock/ErrorBlock";
import Comment from "../../components/Comment/Comment";
import { useEffect } from "react";

const ProfilePage = () => {
  const params = useParams();
  const navigate = useNavigate();

  const userInfo = useGetUserPublicInfoByUserNameQuery(
    params.username ? params.username : "",
  );

  useEffect(() => {
    if (userInfo.error?.status === 404) navigate("/");
  }, [userInfo, navigate]);

  const userInfoBlock = () => {
    if (userInfo.isLoading) return <LoadingBlock />;

    if (userInfo.isError) return <ErrorBlock />;

    return (
      <div className={styles.info}>
        <h1
          className={styles.title}
        >{`${userInfo.data?.name} ${userInfo.data?.surname}`}</h1>
        <Avatar
          avatar={userInfo.data?.avatar}
          name={`${userInfo.data?.name} ${userInfo.data?.surname}`}
          size="250px"
        />
      </div>
    );
  };

  const commentsFetchParams: GetCommentsParams = {
    username_like: userInfo.data?.username,
    limit: 10,
  };

  const commentList = useGetCommentsQuery(commentsFetchParams);

  const commentListBlock = () => {
    if (commentList.isLoading) return <LoadingBlock />;

    if (commentList.isError) return <ErrorBlock />;

    return (
      <ul className={styles.comment__list}>
        {commentList.data?.map((comment) => (
          <li className={styles.comment__item} key={comment.id}>
            <Comment
              author={comment.username}
              text={comment.text}
              createdAt={comment.time}
            />
          </li>
        ))}
      </ul>
    );
  };

  return (
    <div className={styles.profile}>
      <div className="container">
        <div className={styles.profile__inner}>
          {userInfoBlock()}
          <section className={styles.comment}>
            <PageTitle titleText="Комментарии" />
            {commentListBlock()}
          </section>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
