import styles from "./SocialList.module.css";
import telegramIcon from "../../assets/img/social-icons/telegram-icon.svg";
import vkontakteIcon from "../../assets/img/social-icons/vkontakte-icon.svg";
import instagramIcon from "../../assets/img/social-icons/instagram-icon.svg";

interface ISocial {
  name: string;
  icon: string;
  link: string;
}

interface IProps {
  mode: string;
}

const SocialList = ({ mode }: IProps) => {
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
    <ul
      className={
        mode === "horizontal"
          ? styles.social__list_horizontal
          : mode === "vertical"
            ? styles.social__list_vertical
            : ""
      }
    >
      {socialList.map((social) => (
        <li className={styles.list__item} key={social.name}>
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
  );
};

export default SocialList;
