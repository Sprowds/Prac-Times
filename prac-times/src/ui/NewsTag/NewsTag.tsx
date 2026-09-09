import styles from "./NewsTag.module.css";

interface INewsTagProps {
  tagText: string | undefined;
  tagFontSize: string;
}

const NewsTag = ({ tagText, tagFontSize }: INewsTagProps) => {
  return (
    <p className={styles.tag} style={{ fontSize: tagFontSize }}>
      #<span>{tagText}</span>
    </p>
  );
};

export default NewsTag;
