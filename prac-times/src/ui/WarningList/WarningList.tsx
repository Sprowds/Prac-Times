import styles from "./WarningList.module.css";

interface IProps {
  warningArray: string[];
}

const WarningList = ({ warningArray }: IProps) => {
  return (
    <ul className={styles.warning__list}>
      {warningArray.map((warningItem) => (
        <li className={styles.warning__item} key={warningItem}>
          <p className={styles.text}>{warningItem}</p>
        </li>
      ))}
    </ul>
  );
};

export default WarningList;
