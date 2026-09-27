import styles from "./PageTitle.module.css";

interface IProps {
  titleText: string;
}

const PageTitle = ({ titleText }: IProps) => {
  return <h2 className={styles.title}>{titleText}</h2>;
};

export default PageTitle;
