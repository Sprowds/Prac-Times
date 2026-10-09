export default interface GetCommentsParams {
  username_like?: string;
  articleId_like?: string;
  page?: number;
  limit: number;
}
