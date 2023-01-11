import React from 'react';
import { IArticleCard } from '../../types/IArticleCard';

interface props {
  article: IArticleCard,
}

export const ArticleCard: React.FC<props> = ({ article }) => {
  return (
    <article className="articleCard">
      <img
        // src={article.imageUrl}
        alt="img"
        className="articleCard__image"
      />
      <p className="articleCard__date">{article.publishedAt}</p>
      <h4 className="articleCard__title">
        {article.title}
      </h4>
      <p className="articleCard__description">{article.summary}</p>
      <p className="articleCard__link">link</p>
    </article>
  );
};
