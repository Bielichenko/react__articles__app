/* eslint-disable no-console */
/* eslint-disable prefer-const */
/* eslint-disable no-restricted-syntax */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { IArticleCard, IArticleCardPrepared } from '../../types/IArticleCard';
import { normalizeWordsFormat } from './normalizeWordsFormat';

function calculateArticleRankRating(
  article: IArticleCardPrepared,
  inputKeyWords: string[],
) {
  console.log(inputKeyWords, 'inputKeyWords');
  let rankRating = 0;
  const articleTitleWords = article.title.split(' ');
  const articleSummaryWords = article.summary.split(' ');

  inputKeyWords.forEach(keyWord => {
    const normalizedKeyWord = normalizeWordsFormat(keyWord);

    articleTitleWords.forEach(titleWord => {
      const normalizedTitleWord = normalizeWordsFormat(titleWord);

      if (normalizedTitleWord === normalizedKeyWord) {
        rankRating += 100;
      } else if (normalizedTitleWord.includes(normalizedKeyWord)) {
        rankRating += 10;
      }
    });

    articleSummaryWords.forEach(summaryWord => {
      const normalizedSummaryWord = normalizeWordsFormat(summaryWord);

      if (normalizedSummaryWord === normalizedKeyWord) {
        rankRating += 1;
      } else if (normalizedSummaryWord.includes(normalizedKeyWord)) {
        rankRating += 0.5;
      }
    });
  });

  return rankRating;
}

export function rankArticlesByKeyWords(
  articles: IArticleCardPrepared[],
  inputKeyWords: string[],
) {
  const rankedArticles: IArticleCardPrepared[] = articles.map(article => {
    return (
      { ...article, rankRating: calculateArticleRankRating(article, inputKeyWords) }
    );
  });

  return rankedArticles;
}
