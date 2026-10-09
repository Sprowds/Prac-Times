import styles from "./ErrorBlock.module.css";

const ErrorBlock = () => {
  return (
    <div className={styles.error}>
      <p className={styles.error__text}>
        Не удалось загрузить данные. Попробуйте позднее.
      </p>
    </div>
  );
};

export default ErrorBlock;
