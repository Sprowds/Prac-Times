import styles from "./NewsTitle.module.css";

interface IProps {
  titleText: string;
  titleFontSize: string;
}

const NewsTitle = ({ titleText, titleFontSize }: IProps) => {
  return (
    <h3 className={styles.title} style={{ fontSize: titleFontSize }}>
      {titleText}
    </h3>
  );
};

export default NewsTitle;
