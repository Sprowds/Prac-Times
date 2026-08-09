import { NavLink } from "react-router";
import styles from "./Header.module.css";
import searchIcon from "../../assets/img/search-icon.svg";
import Navigation from "../Navigation/Navigation";
import { useState } from "react";

const Header = () => {
  const [isMenuActive, setIsMenuActive] = useState(false);
  function toggleMenuActive() {
    isMenuActive ? setIsMenuActive(false) : setIsMenuActive(true);
  }

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
          <div
            className={
              isMenuActive
                ? `${styles.header__nav} ${styles.active}`
                : styles.header__nav
            }
            onClick={() => toggleMenuActive()}
          >
            <Navigation listClass={styles.nav__list} />
            <NavLink to="/search" className={styles.search__link}>
              <img
                src={searchIcon}
                alt="Icon of magnifying glass"
                className={styles.search__img}
              />
            </NavLink>
          </div>
          <button
            className={
              isMenuActive
                ? `${styles.active__burger__btn} ${styles.burger__btn}`
                : styles.burger__btn
            }
            onClick={() => {
              toggleMenuActive();
            }}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>

          <NavLink to="/login" className={styles.login}>
            Войти
          </NavLink>
        </div>
      </div>
    </header>
  );
};

export default Header;
