import { IArticleCardPrepared } from '../../../types/IArticleCard';

export function filterAndSortArticles(
  preparedArticles: IArticleCardPrepared[],
  inputKeyWords: string[],
): IArticleCardPrepared[] {
  let actualSortedArticles = preparedArticles;
  const isUserInput = inputKeyWords.join('').length > 0;

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
