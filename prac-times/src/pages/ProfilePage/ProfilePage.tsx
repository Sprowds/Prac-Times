import { useNavigate, useParams } from "react-router";
import styles from "./ProfilePage.module.css";
import { useGetUserPublicInfoByUserNameQuery } from "../../services/usersPublicApi";
import Avatar from "../../ui/Avatar/Avatar";
import PageTitle from "../../ui/PageTitle/PageTitle";
import LoadingBlock from "../../ui/LoadingBlock/LoadingBlock";
import ErrorBlock from "../../ui/ErrorBlock/ErrorBlock";
import { useEffect } from "react";
import ProfileCommentList from "../../components/ProfileCommentList/ProfileCommentList";

const ProfilePage = () => {
  const params = useParams();
  const navigate = useNavigate();

  const userInfo = useGetUserPublicInfoByUserNameQuery(
    params.username ? params.username : "",
  );

  useEffect(() => {
    if (
      userInfo.error &&
      "status" in userInfo.error &&
      userInfo.error.status === 404
    )
      navigate("/");
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

  return (
    <div className={styles.profile}>
      <div className="container">
        <div className={styles.profile__inner}>
          {userInfoBlock()}
          <section className={styles.comment}>
            <PageTitle titleText="Комментарии" />
            <ProfileCommentList
              username={params.username ? params.username : ""}
            />
          </section>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
