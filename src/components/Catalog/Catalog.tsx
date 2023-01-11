/*eslint-disable*/

import React, { useState, useEffect } from 'react';
import { IArticleCard } from '../../types/IArticleCard';
import { ArticleCard } from '../ArticleCard/ArticleCard';

const URL = 'https://api.spaceflightnewsapi.net/v3/articles/';

export const Catalog = () => {
  const [articles, setArticles] = useState<any>([]);

  useEffect(() => {
    fetch(URL)
	.then(res => res.json())
  .then(data => setArticles(data))
  }, [])

  useEffect(() => {
    console.log(articles, 'articles')
  })

  return (
    <ul className="articles">
      {articles.map((article:IArticleCard)=> {
        return(
          <li className="aritcles__articleCard" key={article.id}>
            <ArticleCard article={article}/>
          </li>
        )
      })}
    </ul>    
  )
}