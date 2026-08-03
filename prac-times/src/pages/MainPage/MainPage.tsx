import cl from "./MainPage.module.css";
import getNewsList from "../../utils/getNewsList";

const MainPage = () => {
  interface INewsItem {
    id: string;
    title: string;
    text: string;
    time: Date;
    image: string;
  }
  const newsList: Promise<INewsItem[]> = getNewsList();

  return (
    <main className={cl.main}>
      {newsList.then((data) => {
        data.map((item) => <div></div>);
      })}
    </main>
  );
};

export default MainPage;
