import styles from "./NewsTag.module.css";

interface INewsTagProps {
  tagText: string | undefined;
  tagFontSize: string;
}

const NewsTag = ({ tagText, tagFontSize }: INewsTagProps) => {
  // В будущем сделать папку locales для локализации сайта
  let translatedTagText = "";
  switch (tagText) {
    case "world":
      translatedTagText = "мир";
      break;
    case "business":
      translatedTagText = "бизнес";
      break;
    case "politic":
      translatedTagText = "политика";
      break;
  }
  return (
    <p className={styles.tag} style={{ fontSize: tagFontSize }}>
      #<span>{translatedTagText}</span>
    </p>
  );
};

export default NewsTag;
