import styles from "./Footer.module.css";
import Navigation from "../Navigation/Navigation";
import { NavLink } from "react-router";
import SocialList from "../../ui/SocialList/SocialList";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.footer__inner}>
          <Navigation listClass={styles.nav__list} />
          <NavLink to="/" className={styles.logo}>
            <span className={styles.logo__rectangle}></span>
            <h2 className={styles.logo__title}>
              Prac
              <br />
              Times
            </h2>
          </NavLink>
          <div className={styles.social__wrapper}>
            <h3 className={styles.social__title}>Мы в социальных сетях</h3>
            <SocialList mode="horizontal" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
