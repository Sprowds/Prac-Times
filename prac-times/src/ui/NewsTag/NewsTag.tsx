import styles from "./NewsTag.module.css";

interface IProps {
  tagText: string;
  tagFontSize: string;
}

const NewsTag = ({ tagText, tagFontSize }: IProps) => {
  return (
    <p className={styles.tag} style={{ fontSize: tagFontSize }}>
      #<span>{tagText}</span>
    </p>
  );
};

export default NewsTag;
