import styles from "./Avatar.module.css";

interface IProps {
  avatar: string | undefined;
  name: string;
  size: string;
}

const Avatar = ({ avatar, name, size }: IProps) => {
  return (
    <img
      src={avatar ? avatar : "/src/data/userData/img/default-avatar.jpg"}
      alt={name}
      className={styles.avatar}
      style={{ width: size }}
    />
  );
};

export default Avatar;
