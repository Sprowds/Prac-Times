import News from "../../components/News/News";
import styles from "./MainPage.module.css";

const MainPage = () => {
  return (
    <main className={styles.main}>
      <div className="container">
        <div className={styles.main__inner}>
          <div className={styles.top__content}>
            <News />
          </div>
        </div>
      </div>
    </main>
  );
};

export default MainPage;
