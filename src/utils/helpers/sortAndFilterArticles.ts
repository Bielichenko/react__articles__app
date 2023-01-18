/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-unneeded-ternary */
/* eslint-disable no-console */
/* eslint-disable prefer-const */
import { IArticleCardPrepared } from '../../types/IArticleCard';

export function sortAndFilterArticles(
  preparedArticles: IArticleCardPrepared[],
  inputKeyWords: string[],
): IArticleCardPrepared[] {
  let actualSortedArticles = preparedArticles;
  const isUserInput = inputKeyWords.join('').length > 0 ? true : false;

  if (isUserInput) {
    actualSortedArticles = actualSortedArticles
      .filter(article => article.rankRating > 0)
      .sort((articleA, articleB) => articleB.rankRating - articleA.rankRating);
  }

  if (!isUserInput) {
    actualSortedArticles = actualSortedArticles
      .sort((articleA, articleB) => articleB.id - articleA.id);
  }

  return actualSortedArticles;
}
