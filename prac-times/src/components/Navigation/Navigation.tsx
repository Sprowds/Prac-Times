import styles from "./Navigation.module.css";
import { NavLink } from "react-router";

interface NavigationProps {
  listClass: string;
}

const Navigation = ({ listClass }: NavigationProps) => {
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
    <nav className={styles.nav}>
      <ul className={listClass}>
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
  );
};

export default Navigation;
