import styles from "./SocialList.module.css";
import type ISocial from "../../types/social";

interface IProps {
  mode: string;
  list: ISocial[];
}

const SocialList = ({ mode, list }: IProps) => {
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
      {list.map((social) => (
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
