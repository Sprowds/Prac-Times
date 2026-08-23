import styles from "./NewsTime.module.css";

interface IProps {
  dateTime: string;
}

const NewsTime = ({ dateTime }: IProps) => {
  return (
    <time dateTime={dateTime} className={styles.time}>
      {new Date(dateTime).toLocaleString().slice(0, 17)}
    </time>
  );
};

export default NewsTime;
