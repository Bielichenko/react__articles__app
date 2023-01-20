/*eslint-disable*/

import React, { useState, useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../hook';
import { setActualArticles, setPreparedArticles, setSelectedArticle } from '../../store/articleSlice';
import { IArticleCard, IArticleCardPrepared } from '../../types/IArticleCard';
import { prepareArticles } from '../../utils/helpers/prepareArticles';
import { rankArticlesByKeyWords } from '../../utils/helpers/rankArticles';
import { sortAndFilterArticles } from '../../utils/helpers/sortAndFilterArticles';
import { ArticleCard } from '../ArticleCard/ArticleCard1';

import './Catalog.scss'

const URL = 'https://api.spaceflightnewsapi.net/v3/articles/';

export const Catalog = () => {
  const dispatch = useAppDispatch();
  const preparedArticles = useAppSelector(state => state.articles.preparedArticles)
   const selectedArticle = useAppSelector(state => state.articles.selectedArticle);
   const inputKeyWords = useAppSelector(state => state.articles.inputKeyWords)
   const actualArticles = useAppSelector(state => state.articles.actualArticles)

  useEffect(() => {
    fetch(URL)
	.then(res => res.json())
  .then(data => {
    dispatch(setPreparedArticles(prepareArticles(data)))
  })
  .catch(err => alert(err))
  }, [])

  useEffect(() => {
    const articlesRanked = rankArticlesByKeyWords(preparedArticles, inputKeyWords)
    const actualArticles = sortAndFilterArticles([...articlesRanked], inputKeyWords)
    dispatch(setActualArticles(actualArticles));
  }, [preparedArticles, inputKeyWords])

  return (
    <ul className="articles">
      {actualArticles.map(article => 
      <li key={article.id}><ArticleCard article = {article}/></li> )}
    </ul>    
  )
}