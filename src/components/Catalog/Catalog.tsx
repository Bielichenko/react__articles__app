/* eslint-disable no-alert */
/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { Pagination } from '@mui/material';
import React, { useState, useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../hook';
import { setActualArticles, setPreparedArticles } from '../../store/articleSlice';
import { getArticlesForCurrentPage } from '../../utils/functions/getArticlesForPage';
import { getPagesAmount } from '../../utils/functions/getPageAmout';
import { prepareArticles } from '../../utils/functions/prepareArticles';
import { rankArticlesByKeyWords } from '../../utils/functions/rankArticles';
import { sortAndFilterArticles } from '../../utils/functions/sortAndFilterArticles';
import { ArticleCard } from '../ArticleCard/ArticleCard1';

import './Catalog.scss';

const URL = 'https://api.spaceflightnewsapi.net/v3/articles/';

export const Catalog = () => {
  const dispatch = useAppDispatch();
  const preparedArticles = useAppSelector(state => state.articles.preparedArticles);
  const actualArticles = useAppSelector(state => state.articles.actualArticles);
  const inputKeyWords = useAppSelector(state => state.articles.inputKeyWords);

  const [isLoading, setIsLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [articlesPerPage] = useState(6);

  async function getArticlesFromServer() {
    setIsLoading(true);

    try {
      const res = await fetch(URL);
      const articlesFromServer = await res.json();
      const preparedArticlesFromServer = prepareArticles(articlesFromServer);

      dispatch(setPreparedArticles(preparedArticlesFromServer));
    } catch (e) {
      alert(e);
    }

    setIsLoading(false);
  }

  useEffect(() => {
    getArticlesFromServer();
  }, []);

  useEffect(() => {
    const articlesRanked = rankArticlesByKeyWords(preparedArticles, inputKeyWords);
    const actualAndSortedArticles = sortAndFilterArticles([...articlesRanked], inputKeyWords);

    dispatch(setActualArticles(actualAndSortedArticles));
  }, [preparedArticles, inputKeyWords]);

  const articlesForCurrentPage = getArticlesForCurrentPage(
    currentPage,
    articlesPerPage,
    actualArticles,
  );

  const pagesAmount = getPagesAmount(actualArticles.length, articlesPerPage);

  const handleChange = (e: any, p: any) => {
    setCurrentPage(p);
  };

  useEffect(() => {
    console.log(preparedArticles);
  });

  return (
    <main className="catalog">
      {
        isLoading
          ? <p>is loading...</p>
          : (
            <>
              <ul className="articles">
                { articlesForCurrentPage.map(article => (
                  <li key={article.id}><ArticleCard article={article} /></li>
                ))}
              </ul>
              <Pagination
                count={pagesAmount}
                color="primary"
                onChange={handleChange}
              />
            </>
          )
      }
    </main>
  );
};
