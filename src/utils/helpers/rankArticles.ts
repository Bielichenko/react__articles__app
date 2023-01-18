/* eslint-disable no-console */
/* eslint-disable prefer-const */
/* eslint-disable no-restricted-syntax */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { IArticleCard, IArticleCardPrepared } from '../../types/IArticleCard';
import { normalizeWordsFormat } from './normalizeWordsFormat';

function calculateArticleRankRating(article: IArticleCardPrepared, inputKeyWords: string[]) {
  console.log(inputKeyWords, 'inputKeyWords');
  let rating = 0;
  const articleTitleWords = article.title.split(' ');
  const articleSummaryWords = article.summary.split(' ');

  inputKeyWords.forEach(keyWord => {
    const normalizedKeyWord = normalizeWordsFormat(keyWord);

    articleTitleWords.forEach(titleWord => {
      const normalizedTitleWord = normalizeWordsFormat(titleWord);

      if (normalizedTitleWord === normalizedKeyWord) {
        rating += 100;
      } else if (normalizedTitleWord.includes(normalizedKeyWord)) {
        rating += 10;
      }
    });

    articleSummaryWords.forEach(summaryWord => {
      const normalizedSummaryWord = normalizeWordsFormat(summaryWord);

      if (normalizedSummaryWord === normalizedKeyWord) {
        rating += 1;
      } else if (normalizedSummaryWord.includes(keyWord.toLowerCase())) {
        rating += 0.5;
      }
    });
  });

  return rating;
}

export const rankArticlesByKeyWords
: (articles : IArticleCardPrepared[], inputKeyWords: string[]) => IArticleCardPrepared[]
= (articles, inputKeyWords) => {
  const rankedArticles: IArticleCardPrepared[] = articles.map(article => {
    return (
      { ...article, rankRating: calculateArticleRankRating(article, inputKeyWords) }
    );
  });

  return rankedArticles;
};
