/*eslint-disable*/

import React from 'react';
import { useAppDispatch, useAppSelector } from '../../hook';
import { setSelectedArticle } from '../../store/articleSlice';

export const SelectedArticle = () => {
  const dispatch = useAppDispatch();
  const selectedArticle = useAppSelector(state => state.articles.selectedArticle)

  const backToCatalogHandler = () => {
    dispatch(setSelectedArticle(null))
  }

  return (
    selectedArticle 
    ? (
    <article className="articleCard">
    <img
      src={selectedArticle.imageUrl}
      alt="img"
      className="articleCard__image"
    />
    <p className="articleCard__date">{selectedArticle.publishedAt}</p>
    <h4 className="articleCard__title">
      {selectedArticle.title}
    </h4>
    <p className="articleCard__description">{selectedArticle.summary}</p>
    <button type="button" className="articleCard__link" onClick={() => backToCatalogHandler()}>Back to homepage</button>
  </article> 
    )
    : <p>choose an article</p>
    )
}