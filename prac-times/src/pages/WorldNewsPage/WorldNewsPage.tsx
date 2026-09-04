import { useParams } from "react-router";
import styles from "./WorldNewsPage.module.css";

const WorldNewsPage = () => {
  const params = useParams();
  console.log(params);
  return (
    <div className="container">
      <div className={styles.world__inner}>World Page!</div>
    </div>
  );
};

export default WorldNewsPage;
