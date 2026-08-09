import type { INewsTime } from "../../types/componentProps";
import styles from "./NewsTime.module.css";

const NewsTime = ({ dateTime }: INewsTime) => {
  return (
    <time dateTime={dateTime} className={styles.time}>
      {new Date(dateTime).toLocaleString().slice(0, 17)}
    </time>
  );
};

export default NewsTime;
