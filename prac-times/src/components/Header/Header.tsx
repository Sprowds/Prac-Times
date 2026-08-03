import { NavLink } from "react-router";
import styles from "./Header.module.css";
import searchIcon from "../../assets/img/search-icon.svg";
import Navigation from "../Navigation/Navigation";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className="container">
        <div className={styles.header__inner}>
          <NavLink to="/" className={styles.logo}>
            <span className={styles.logo__rectangle}></span>
            <h2 className={styles.logo__title}>
              Prac
              <br />
              Times
            </h2>
          </NavLink>
          <div className={styles.header__nav}>
            <Navigation listClass={styles.nav__list} />
            <NavLink to="/search" className={styles.search__link}>
              <img
                src={searchIcon}
                alt="Icon of magnifying glass"
                className={styles.search__img}
              />
            </NavLink>
          </div>

          <NavLink to="/login" className={styles.login}>
            Войти
          </NavLink>
        </div>
      </div>
    </header>
  );
};

export default Header;
