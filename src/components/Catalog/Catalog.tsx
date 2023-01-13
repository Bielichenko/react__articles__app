/*eslint-disable*/

import React, { useState, useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../hook';
import { setArticles, setSelectedArticle } from '../../store/articleSlice';
import { IArticleCard } from '../../types/IArticleCard';
import { ArticleCard } from '../ArticleCard/ArticleCard';

import './Catalog.scss'

const URL = 'https://api.spaceflightnewsapi.net/v3/articles/';

export const Catalog = () => {
  const dispatch = useAppDispatch();
  const articles = useAppSelector(state => state.articles.list)
   const selectedArticle = useAppSelector(state => state.articles.selectedArticle);


  useEffect(() => {
    fetch(URL)
	.then(res => res.json())
  .then(data => dispatch(setArticles(data)))
  }, [])

  useEffect(() => {
    console.log(articles, 'articles')
  })

  useEffect(() => {
    console.log(selectedArticle, 'selectedArticle')
  })

  return (
    <ul className="articles">
      {articles.map((article:IArticleCard)=> {
        return(
          <li className="aritcles__articleCard" key={article.id}>
            <ArticleCard article={article} />
          </li>
        )
      })}
    </ul>    
  )
}