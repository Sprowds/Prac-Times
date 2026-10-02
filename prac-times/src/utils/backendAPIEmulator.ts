import type { IAllNews } from "../types/newsItem";
import type INewsItem from "../types/newsItem";
import newsList from "../data/newsDB";
import userInfoList from "../data/userData/userPublicDB";
import comments from "../data/commentDB";
import type IComment from "../types/comment";

export function fetchNews(params: string): Promise<IAllNews> {
  const paramsObj = Object.fromEntries(
    params.split("&").map((item) => {
      return item.split("=");
    }),
  );

  const copyOfNewsList: INewsItem[] =
    "string" in paramsObj
      ? newsList.filter((item) =>
          item.title
            .toUpperCase()
            .includes(decodeURI(paramsObj[`string`]).toUpperCase()),
        )
      : [...newsList];

  const page = "page" in paramsObj ? Number(paramsObj.page) : 1;

  const result: INewsItem[] = [];

  const countOfPage: number = Math.ceil(copyOfNewsList.length / 10);

  if (page === countOfPage) {
    for (let i = -10 + page * 10; i < copyOfNewsList.length; i++) {
      result.push(copyOfNewsList[i]);
    }
  } else if (
    page > countOfPage ||
    page < 1 ||
    page % 1 !== 0 ||
    typeof page !== "number"
  ) {
    // Идиотская затычка, не забыть убрать
    const blankVar: number = 0;
    blankVar.toString();
  } else {
    for (let i = -10 + page * 10; i < -9 + page * 10 + 10; i++) {
      result.push(copyOfNewsList[i]);
    }
  }

  return new Promise((resolve) => {
    setTimeout(() => {
      return {
        news: resolve,
        pageCount: 4,
      };
    });
  });
}

export function getNewsList(param: string): Promise<INewsItem[]> {
  const result: INewsItem[] = [];
  let timeOut: number = 0;

  switch (param) {
    case "main": {
      timeOut = 500;
      const mainResult: INewsItem | undefined = newsList.find(
        (item: INewsItem) => item.type.main === true,
      );
      result.push(typeof mainResult === "undefined" ? newsList[0] : mainResult);
      break;
    }

    case "another":
      timeOut = 1000;
      newsList.forEach((item) => {
        if (result.length < 4) {
          if (item.type.main === false) {
            result.push(item);
          }
        } else return;
      });
      break;

    case "exclusive":
      timeOut = 1500;
      newsList.forEach((item) => {
        if (result.length < 6) {
          if (item.type.exclusive === true) {
            result.push(item);
          }
        } else return;
      });
      break;

    default:
      timeOut = 2000;
      newsList.forEach((item) => result.push(item));
  }

  return new Promise((resolve) => {
    setTimeout(() => {
      return resolve(result);
    }, timeOut);
  });
}

export function getAllNewsList(params: string): Promise<IAllNews> {
  const paramsObj = Object.fromEntries(
    params.split("&").map((item) => {
      return item.split("=");
    }),
  );

  const copyOfNewsList: INewsItem[] =
    "string" in paramsObj
      ? newsList.filter((item) =>
          item.title
            .toUpperCase()
            .includes(decodeURI(paramsObj[`string`]).toUpperCase()),
        )
      : [...newsList];

  const page = "page" in paramsObj ? Number(paramsObj.page) : 1;

  const result: INewsItem[] = [];

  const countOfPage: number = Math.ceil(copyOfNewsList.length / 10);

  if (page === countOfPage) {
    for (let i = -10 + page * 10; i < copyOfNewsList.length; i++) {
      result.push(copyOfNewsList[i]);
    }
  } else if (
    page > countOfPage ||
    page < 1 ||
    page % 1 !== 0 ||
    typeof page !== "number"
  ) {
    const blankVar: number = 0;
    blankVar.toString();
  } else {
    for (let i = -10 + page * 10; i < -10 + page * 10 + 10; i++) {
      result.push(copyOfNewsList[i]);
    }
  }

  return new Promise((resolve) => {
    setTimeout(() => {
      return resolve({
        news: result,
        pageCount: countOfPage,
      });
    }, 2000);
  });
}

export function fetchArticleById(id: string): Promise<INewsItem | undefined> {
  const article: INewsItem | undefined = newsList.find(
    (item) => item.id === id,
  );

  return new Promise((resolve) => {
    setTimeout(() => {
      if (typeof article === "undefined") return resolve(undefined);
      else return resolve(article);
    }, 2000);
  });
}

//-----------------------------------------------------------------------------------------

export function fetchUserInfoByUsername(username: string) {
  return userInfoList.find((user) => user.username === username);
}

export function fetchCommentsByArticleId(
  id: string,
  count: number,
  page: number,
) {
  const result: IComment[] = comments
    .filter((comment) => comment.articleId === id)
    .slice(page * count - count, count * page);

  return result;
}
