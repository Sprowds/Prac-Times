import { NavLink } from "react-router";
import logo from "../../assets/img/logo.svg";
import styles from "./Header.module.css";
import searchIcon from "../../assets/img/search-icon.svg";
import Navigation from "../Navigation/Navigation";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className="container">
        <div className={styles.header__inner}>
          <NavLink to="/" className={styles.logo}>
            <img src={logo} alt="Logo image" className={styles.logo_img} />
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
