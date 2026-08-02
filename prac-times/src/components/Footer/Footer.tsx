import styles from "./Footer.module.css";
import logo from "../../assets/img/logo.svg";
import Navigation from "../Navigation/Navigation";
import { NavLink } from "react-router";
import telegramIcon from "../../assets/img/social-icons/telegram-icon.svg";
import vkontakteIcon from "../../assets/img/social-icons/vkontakte-icon.svg";
import instagramIcon from "../../assets/img/social-icons/instagram-icon.svg";

const Footer = () => {
  interface ISocial {
    name: string;
    icon: string;
    link: string;
  }

  const socialList: ISocial[] = [
    {
      name: "Telegram",
      icon: telegramIcon,
      link: "https://t.me/+4X5KG8TfJlkyMWMy",
    },
    {
      name: "Vkontakte",
      icon: vkontakteIcon,
      link: "https://vk.ru/saint_sprow",
    },
    {
      name: "Instagram",
      icon: instagramIcon,
      link: "https://www.instagram.com/reactjsofficial/",
    },
  ];
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.footer__inner}>
          <Navigation listClass={styles.nav__list} />
          <NavLink to="/" className={styles.logo}>
            <img src={logo} alt="Logo image" className={styles.logo_img} />
          </NavLink>
          <div className={styles.social__wrapper}>
            <h3 className={styles.social__title}>Мы в социальных сетях</h3>
            <ul className={styles.social__list}>
              {socialList.map((social) => (
                <li className={styles.list__item}>
                  <a
                    href={social.link}
                    className={styles.social__link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src={social.icon}
                      alt={`${social.name} icon`}
                      className={styles.social__img}
                    />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
