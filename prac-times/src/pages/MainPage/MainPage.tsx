import Exclusives from "../../components/Exclusives/Exclusives";
import News from "../../components/News/News";
import styles from "./MainPage.module.css";

const MainPage = () => {
  return (
    <div className="container">
      <div className={styles.main__inner}>
        <div className={styles.top__content}>
          <News />
          <Exclusives />
        </div>
      </div>
    </div>
  );
};

export default MainPage;
