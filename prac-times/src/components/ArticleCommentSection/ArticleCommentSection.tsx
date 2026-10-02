import { useState } from "react";
import PageTitle from "../../ui/PageTitle/PageTitle";
import { fetchCommentsByArticleId } from "../../utils/backendAPIEmulator";
import styles from "./ArticleCommentSection.module.css";
import Comment from "../Comment/Comment";

interface IProps {
  articleId: string;
  articleComments: number;
}

const ArticleCommentSection = ({ articleId, articleComments }: IProps) => {
  const [page, setPage] = useState(1);
  const [pageInput, setPageInput] = useState(page);

  const commentsOnPageCount = 10;

  const pageCount = Math.ceil(articleComments / commentsOnPageCount);

  return (
    <section className={styles.comments}>
      <div className={styles.comments__inner}>
        <PageTitle titleText="Комментарии" />
        <p className={styles.count}>{`Всего: ${articleComments}`}</p>
        <ul className={styles.comment__list}>
          {fetchCommentsByArticleId(articleId, commentsOnPageCount, page).map(
            (comment) => (
              <li className={styles.comment__item} key={comment.id}>
                <Comment
                  author={comment.username}
                  text={comment.text}
                  createdAt={comment.time}
                />
              </li>
            ),
          )}
        </ul>
        {articleComments / commentsOnPageCount > 1 ? (
          <div className={styles.comment__pagination}>
            <button
              className={styles.pagination__btn}
              disabled={page === 1 ? true : false}
              onClick={() => {
                setPage((prev) => prev - 1);
              }}
            >{`<`}</button>

            <form
              className={styles.jump}
              onSubmit={(event) => {
                event.preventDefault();
                setPage(pageInput);
              }}
            >
              <input
                className={styles.jump__input}
                type="number"
                min="1"
                max={pageCount}
                onChange={(event) => {
                  const numberValue = Number(event.target.value);
                  if (
                    numberValue <= pageCount &&
                    numberValue > 0 &&
                    numberValue % 1 === 0
                  )
                    setPageInput(numberValue);
                }}
              />
              <button className={styles.pagination__btn} type="submit">
                Перейти
              </button>
            </form>

            <button
              className={styles.pagination__btn}
              disabled={page === pageCount ? true : false}
              onClick={() => {
                setPage((prev) => prev + 1);
              }}
            >{`>`}</button>
          </div>
        ) : (
          ""
        )}
      </div>
    </section>
  );
};

export default ArticleCommentSection;
