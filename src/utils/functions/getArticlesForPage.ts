import { IArticleCardPrepared } from '../../types/IArticleCard';

export function getArticlesForCurrentPage(
  currentPage: number,
  articlesPerPage: number,
  actualArticles: IArticleCardPrepared[],
) {
  const lastArticleIndex = currentPage * articlesPerPage;
  const firstArticleIndex = lastArticleIndex - articlesPerPage;
  const articlesForCurrentPage = actualArticles.slice(firstArticleIndex, lastArticleIndex);

  return articlesForCurrentPage;
}
