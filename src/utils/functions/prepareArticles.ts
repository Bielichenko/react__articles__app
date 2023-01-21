import { IArticleCard, IArticleCardPrepared } from '../../types/IArticleCard';
import { formatDate } from './formatDate';

export function prepareArticles(
  articlesFromServer: IArticleCard[],
): IArticleCardPrepared[] {
  const preparedArticles = articlesFromServer
    .map((article: IArticleCard) => {
      let preparedSummary = article.summary;

      const publishedAtFormatted = formatDate(article.publishedAt);

      if (article.summary.length > 100) {
        preparedSummary = `${article.summary.slice(0, 100)}...`;
      }

      return {
        ...article,
        id: parseInt(article.id, 10),
        publishedAtFormatted,
        summary: preparedSummary,
        rankRating: 0,
      };
    });

  return preparedArticles;
}
