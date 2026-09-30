import PageTitle from "../../ui/PageTitle/PageTitle";
import styles from "./ArticleCommentSection.module.css";

interface IProps {
  articleComments: string[];
}

const ArticleCommentSection = ({ articleComments }: IProps) => {
  return (
    <section className={styles.comments}>
      <div className={styles.comments__inner}>
        <PageTitle titleText="Комментарии" />
      </div>
    </section>
  );
};

export default ArticleCommentSection;
