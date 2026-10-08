import { useNavigate, useParams } from "react-router";
import ArticleDisplay from "../../components/ArticleDisplay/ArticleDisplay";
import styles from "./ArticlePage.module.css";
import ArticleDesc from "../../components/ArticleDesc/ArticleDesc";
import ArticleAuthor from "../../components/ArticleAuthor/ArticleAuthor";
import ArticleCommentSection from "../../components/ArticleCommentSection/ArticleCommentSection";
import NewsletterForm from "../../components/NewsletterForm/NewsletterForm";
import LoadingBlock from "../../ui/LoadingBlock/LoadingBlock";
import { useGetArticleByIdQuery } from "../../services/newsApi";

const ArticlePage = () => {
  const params = useParams();
  const navigate = useNavigate();

  // const [article, setArticle]: [
  //   INewsItem | undefined,
  //   React.Dispatch<React.SetStateAction<INewsItem | undefined>>,
  // ] = useState();

  // useEffect(() => {
  //   if (typeof params.articleId !== "undefined")
  //     fetchArticleData(params.articleId).then((data) => {
  //       if (typeof data === "undefined") navigate("/");
  //       else setArticle(data);
  //     });
  // }, [navigate, params.articleId]);

  const fetchedArticle = useGetArticleByIdQuery(
    typeof params.articleId !== "undefined" ? params.articleId : "",
  );

  if (fetchedArticle.isLoading) return <LoadingBlock />;

  if (fetchedArticle.isError) navigate("/");

  const article = fetchedArticle.data;

  return (
    <div className="container">
      {typeof article === "undefined" ? (
        <LoadingBlock />
      ) : (
        <div className={styles.article__info}>
          <ArticleDisplay
            articleImg={article.image}
            articleTags={article.category}
            articleTitle={article.title}
            articleTime={article.time}
          />
          <ArticleDesc
            articleDesc={article.text}
            articleId={article.id}
            articleTitle={article.title}
          />
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
