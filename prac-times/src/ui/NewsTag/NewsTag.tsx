import type { INewsTagProps } from "../../types/componentProps";
import styles from "./NewsTag.module.css";

const NewsTag = ({ tagText, tagFontSize }: INewsTagProps) => {
  return (
    <p className={styles.tag} style={{ fontSize: tagFontSize }}>
      #{tagText}
    </p>
  );
};

export default NewsTag;
