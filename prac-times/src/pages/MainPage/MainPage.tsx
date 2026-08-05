import styles from "./MainPage.module.css";

const MainPage = () => {
  return (
    <main className={styles.main}>
      <div className="container">
        <div className={styles.main__inner}>
          <div className={styles.content}></div>
        </div>
      </div>
    </main>
  );
};

export default MainPage;
