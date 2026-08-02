import { NavLink } from "react-router";
import styles from "./NotFoundPage.module.css";

const NotFoundPage = () => {
  return (
    <div className={styles.not_found}>
      <div className="container">
        <div className={styles.not_found__inner}>
          <h1 className={styles.title}>404</h1>
          <p className={styles.text}>
            Самая большая ошибка в жизни — это брать одну бутылку вина и
            считать, что хватит.
          </p>
          <NavLink to="/" className={styles.link}>
            На главную
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;
