import { NavLink } from "react-router";
import logo from "../../assets/img/logo.svg";
import styles from "./Header.module.css";
import { isAction } from "@reduxjs/toolkit";

const Header = () => {
  interface INavigation {
    name: string;
    path: string;
  }
  const navigationList: INavigation[] = [
    { name: "Главная", path: "/" },
    { name: "Мир", path: "/world" },
    { name: "Бизнес", path: "/business" },
    { name: "Политика", path: "/politics" },
    { name: "Истории", path: "/history" },
    { name: "Подкасты", path: "/podcast" },
    { name: "Интервью", path: "/interview" },
  ];
  return (
    <header className={styles.header}>
      <div className="container">
        <div className={styles.header__inner}>
          <NavLink to="/">
            <img src={logo} alt="Logo image" className={styles.logo_img} />
          </NavLink>
          <nav className={styles.header__nav}>
            <ul className={styles.list}>
              {navigationList.map((item: INavigation) => (
                <li className={styles.list__item} key={item.name}>
                  <NavLink
                    to={item.path}
                    className={({ isActive }) =>
                      `${styles.item__link} ${isActive ? styles.active : ""}`
                    }
                  >
                    {item.name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
