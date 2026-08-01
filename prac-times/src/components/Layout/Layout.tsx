import { Outlet } from "react-router";
import Header from "../Header/Header";
import styles from "./Layout.module.css";
import Footer from "../Footer/Footer";

const Layout = () => {
  return (
    <>
      <Header />
      <main className={styles.main}>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default Layout;
