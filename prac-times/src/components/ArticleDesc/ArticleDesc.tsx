import { NavLink } from "react-router";
import SocialList from "../SocialList/SocialList";
import styles from "./ArticleDesc.module.css";
import attentionIcon from "../../assets/img/attention-icon.svg";
import type ISocial from "../../types/social";
import telegramIcon from "../../assets/img/social-icons/telegram-icon.svg";
import vkontakteIcon from "../../assets/img/social-icons/vkontakte-icon.svg";

interface IProps {
  articleDesc: string;
  articleId: string;
  articleTitle: string;
}

const ArticleDesc = ({ articleDesc, articleId, articleTitle }: IProps) => {
  const socialList: ISocial[] = [
    {
      name: "Telegram",
      icon: telegramIcon,
      link: `https://t.me/share/url?url=http://localhost:5173/article/${articleId}&text=${articleTitle}`,
    },
    {
      name: "Vkontakte",
      icon: vkontakteIcon,
      link: `https://vk.ru/share.php?url=http://localhost:5173/article/${articleId}&title=${articleTitle}`,
    },
  ];

  return (
    <section className={styles.desc}>
      <aside className={styles.left}>
        <SocialList mode="vertical" list={socialList} />
        <NavLink
          to={`/report/${articleId}`}
          className={styles.article__mistake}
        >
          <img
            src={attentionIcon}
            alt="Icon for attention"
            className={styles.attention}
          />
        </NavLink>
      </aside>
      <div
        className={styles.content}
        dangerouslySetInnerHTML={{ __html: articleDesc }}
      ></div>
    </section>
  );
};

export default ArticleDesc;
