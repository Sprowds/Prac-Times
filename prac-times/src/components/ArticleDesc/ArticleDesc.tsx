import { NavLink } from "react-router";
import SocialList from "../../ui/SocialList/SocialList";
import styles from "./ArticleDesc.module.css";

const ArticleDesc = () => {
  return (
    <section className={styles.desc}>
      <aside className={styles.left}>
        <SocialList mode="vertical" />
        <NavLink to="/" className={styles.article__mistake}>
          Сообщить об ошибке
        </NavLink>
      </aside>
      <div className={styles.content}>{/* Докинуть пропсом */}</div>
    </section>
  );
};

export default ArticleDesc;
