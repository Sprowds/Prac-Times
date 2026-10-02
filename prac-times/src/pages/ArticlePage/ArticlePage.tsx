import { useNavigate, useParams } from "react-router";
import ArticleDisplay from "../../components/ArticleDisplay/ArticleDisplay";
import styles from "./ArticlePage.module.css";
import { useEffect, useState } from "react";
import fetchArticleData from "../../utils/fetchArticle";
import type INewsItem from "../../types/newsItem";
import ArticleDesc from "../../components/ArticleDesc/ArticleDesc";
import ArticleAuthor from "../../components/ArticleAuthor/ArticleAuthor";
import ArticleCommentSection from "../../components/ArticleCommentSection/ArticleCommentSection";
import NewsletterForm from "../../components/NewsletterForm/NewsletterForm";

const ArticlePage = () => {
  const params = useParams();
  const navigate = useNavigate();

  const [article, setArticle]: [
    INewsItem | undefined,
    React.Dispatch<React.SetStateAction<INewsItem | undefined>>,
  ] = useState();

  useEffect(() => {
    if (typeof params.articleId !== "undefined")
      fetchArticleData(params.articleId).then((data) => {
        if (typeof data === "undefined") navigate("/");
        else setArticle(data);
      });
  }, [navigate, params.articleId]);

  return (
    <div className="container">
      {typeof article === "undefined" ? (
        <div className="loading__animation"></div>
      ) : (
        <div className={styles.article__info}>
          <ArticleDisplay
            articleImg={article.image}
            articleTags={article.category}
            articleTitle={article.title}
            articleTime={article.time}
          />
          <ArticleDesc articleDesc={article.text} articleId={article.id} />
          <ArticleAuthor
            articleTags={article.category}
            articleAuthor={article.author}
          />
          <ArticleCommentSection
            articleId={article.id}
            articleComments={article.commentsCount}
          />
        </div>
      )}
      <NewsletterForm />
    </div>
  );
};

export default ArticlePage;
