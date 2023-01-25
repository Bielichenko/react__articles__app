import { IArticleCard, IArticleCardPrepared } from '../../../types/IArticleCard';
import { formatDate } from '../helpers/formatDate';

export function prepareArticles(
  articlesFromServer: IArticleCard[],
): IArticleCardPrepared[] {
  const preparedArticles = articlesFromServer
    .map((article: IArticleCard) => {
      let summaryShort = article.summary;

      const publishedAtFormatted = formatDate(article.publishedAt);
      const articleUrl = `/articleId:${article.id}`;

      if (article.summary.length > 100) {
        summaryShort = `${article.summary.slice(0, 100)}...`;
      }

      if (article.title.length > 70) {
        summaryShort = `${article.summary.slice(0, 70)}...`;
      }

      if (article.title.length > 85) {
        summaryShort = `${article.summary.slice(0, 30)}...`;
      }

      return {
        ...article,
        id: parseInt(article.id, 10),
        publishedAtFormatted,
        summaryShort,
        rankRating: 0,
        articleUrl,
      };
    });

  return preparedArticles;
}
