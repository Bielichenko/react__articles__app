/*eslint-disable*/

import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../hook';
import { setArticles, setSelectedArticle } from '../../store/articleSlice';
import { IArticleCard } from '../../types/IArticleCard';

import './ArticleCard.scss';

interface props {
  article: IArticleCard,
}

export const ArticleCard: React.FC<props> = ({ article}) => {
  const dispatch = useAppDispatch();
  const selectedArticle = useAppSelector(state => state.articles.selectedArticle);

  
  const articleSelectionHandler = () => {
    dispatch(setSelectedArticle(article));
    // console.log(selectedArticle, 'selectedArticle');
  };

  useEffect(() => {
    console.log('selectedArticle');
    // console.log(article, 'article');
  })

  return (
    <article className="articleCard">
      <img
        src={article.imageUrl}
        alt="img"
        className="articleCard__image"
      />
      <p className="articleCard__date">{article.publishedAt}</p>
      <h4 className="articleCard__title">
        {article.title}
      </h4>
      <p className="articleCard__description">{article.summary}</p>
      <button type="button" className="articleCard__link" onClick={() => articleSelectionHandler()}>read more</button>
    </article>
  );
};
