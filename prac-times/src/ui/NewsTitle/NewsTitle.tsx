import type { INewsTitleProps } from "../../types/componentProps";
import styles from "./NewsTitle.module.css";

const NewsTitle = ({ titleText, titleFontSize }: INewsTitleProps) => {
  return (
    <h3 className={styles.title} style={{ fontSize: titleFontSize }}>
      {titleText}
    </h3>
  );
};

export default NewsTitle;
