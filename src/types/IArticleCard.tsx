export interface IArticleCard {
  id: string;
  imageUrl: string;
  publishedAt: string;
  summary: string;
  title: string;
}
export interface IArticleCardPrepared {
  id: number;
  imageUrl: string;
  publishedAt: string;
  publishedAtFormatted: string;
  summary: string;
  summaryShort: string;
  title: string;
  rankRating: number;
  articleUrl: string;
}
