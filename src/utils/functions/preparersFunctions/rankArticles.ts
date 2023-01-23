import { IArticleCardPrepared } from '../../../types/IArticleCard';
import { formatWord } from '../helpers/formatWord';

function calculateArticleRankRating(
  article: IArticleCardPrepared,
  inputKeyWords: string[],
) {
  let rankRating = 0;
  const articleTitleWords = article.title.split(' ');
  const articleSummaryWords = article.summaryShort.split(' ');

  inputKeyWords.forEach(keyWord => {
    const normalizedKeyWord = formatWord(keyWord);

    articleTitleWords.forEach(titleWord => {
      const normalizedTitleWord = formatWord(titleWord);

      if (normalizedTitleWord === normalizedKeyWord) {
        rankRating += 100;
      } else if (normalizedTitleWord.includes(normalizedKeyWord)) {
        rankRating += 10;
      }
    });

    articleSummaryWords.forEach(summaryWord => {
      const normalizedSummaryWord = formatWord(summaryWord);

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
