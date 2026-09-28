import { NavLink } from "react-router";
import SocialList from "../SocialList/SocialList";
import styles from "./ArticleDesc.module.css";
import attentionIcon from "../../assets/img/attention-icon.svg";

interface IProps {
  articleDesc: string;
  articleId: string;
}

const ArticleDesc = ({ articleDesc, articleId }: IProps) => {
  return (
    <section className={styles.desc}>
      <aside className={styles.left}>
        <SocialList mode="vertical" />
        <NavLink
          to={`/report/${articleId}`}
          className={styles.article__mistake}
        >
          <img
            src={attentionIcon}
            alt="Icon for attention"
            className={styles.attention}
          />
        </NavLink>
      </aside>
      <div
        className={styles.content}
        dangerouslySetInnerHTML={{ __html: articleDesc }}
      ></div>
    </section>
  );
};

export default ArticleDesc;
