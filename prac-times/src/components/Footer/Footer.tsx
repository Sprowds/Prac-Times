import styles from "./Footer.module.css";
import Navigation from "../Navigation/Navigation";
import { NavLink } from "react-router";
import SocialList from "../SocialList/SocialList";
import telegramIcon from "../../assets/img/social-icons/telegram-icon.svg";
import vkontakteIcon from "../../assets/img/social-icons/vkontakte-icon.svg";
import instagramIcon from "../../assets/img/social-icons/instagram-icon.svg";
import type ISocial from "../../types/social";

const Footer = () => {
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
            <span className={styles.logo__rectangle}></span>
            <h2 className={styles.logo__title}>
              Prac
              <br />
              Times
            </h2>
          </NavLink>
          <div className={styles.social__wrapper}>
            <h3 className={styles.social__title}>Мы в социальных сетях</h3>
            <SocialList mode="horizontal" list={socialList} />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
