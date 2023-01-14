/*eslint-disable*/

import React from 'react';
import { useAppDispatch, useAppSelector } from '../../hook';
import { setSelectedArticle } from '../../store/articleSlice';

import './SelectedArticle.scss';

export const SelectedArticle = () => {
  const dispatch = useAppDispatch();
  const selectedArticle = useAppSelector(state => state.articles.selectedArticle)

  const backToCatalogHandler = () => {
    dispatch(setSelectedArticle(null))
  }

  return (
    selectedArticle 
    ? (
    <article className="selectedArticle">
    <img
      src={selectedArticle.imageUrl}
      alt="img"
      className="selectedArticle__image"
    />
    <p className="selectedArticle__date">{selectedArticle.publishedAt}</p>
    <h4 className="selectedArticle__title">
      {selectedArticle.title}
    </h4>
    <p className="selectedArticle__description">{selectedArticle.summary}</p>
    <button type="button" className="selectedArticle__link" onClick={() => backToCatalogHandler()}>Back to homepage</button>
  </article> 
    )
    : null
    )
}