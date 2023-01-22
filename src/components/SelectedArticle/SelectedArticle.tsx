/* eslint-disable import/order */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-console */
import React, { useState, useEffect } from 'react';
import cn from 'classnames';
import { useAppDispatch, useAppSelector } from '../../hook';
import { setSelectedArticle } from '../../store/articleSlice';
import Cirlce from 'react-ts-loaders';

import './SelectedArticle.scss';
import { IArticleCardPrepared } from '../../types/IArticleCard';
import {
  Link, useLocation, useNavigate, useParams,
} from 'react-router-dom';

// interface props {
//   article: IArticleCardPrepared;
// }

export const SelectedArticle = () => {
  const preparedArticles = useAppSelector(state => state.articles.preparedArticles);
  const { productId } = useParams();
  const articleId = productId?.split(':')[1];

  const selectedArticle = preparedArticles.find(article => {
    if (articleId) {
      return article.id === parseInt(articleId, 10);
    }

    return false;
  });

  useEffect(() => {
    console.log(productId, 'productId');
    console.log(preparedArticles, 'preparedArticles');
  });

  useEffect(() => {
    console.log('test');
  });

  return (
    selectedArticle
      ? (
        <article>
          {selectedArticle.title}
          <Link to="/">Back to homepage</Link>
        </article>
      )
      : <Cirlce color="#1976d2" />
  );
};
