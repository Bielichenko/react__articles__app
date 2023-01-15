/*eslint-disable*/

import React, { useState } from 'react'
import cn from 'classnames';
import { useAppDispatch, useAppSelector } from '../../hook';
import { setSelectedArticle } from '../../store/articleSlice';

import './SelectedArticle.scss';

export const SelectedArticle = () => {
  const [isClosing, setIsClosing] = useState(false);

  const dispatch = useAppDispatch();
  const selectedArticle = useAppSelector(state => state.articles.selectedArticle)

  const closeArticleHandler = () => {
    setIsClosing(true);
    setTimeout(setIsClosing, 700, false)
    setTimeout(dispatch, 700, setSelectedArticle(null))
  }

  return (
       selectedArticle 
    ? (
    <article className={cn("selectedArticle", {"selectedArticle--isClosing": isClosing})}>
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
    <button type="button" className="selectedArticle__link" onClick={() => closeArticleHandler()}>Back to homepage</button>
  </article> 
    )
    : null
    )
}