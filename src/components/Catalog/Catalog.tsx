/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-console */
import { Pagination } from '@mui/material';
import React, { useState, useEffect } from 'react';
import Cirlce from 'react-ts-loaders';
import { useAppDispatch, useAppSelector } from '../../hooks/hook';
import { setActualArticles, setPreparedArticles } from '../../store/articleSlice';
import { getArticlesForCurrentPage } from '../../utils/functions/preparersFunctions/getArticlesForPage';
import { getPagesAmount } from '../../utils/functions/helpers/getPageAmout';
import { prepareArticles } from '../../utils/functions/preparersFunctions/prepareArticles';
import { rankArticlesByKeyWords } from '../../utils/functions/preparersFunctions/rankArticles';
import { filterAndSortArticles } from '../../utils/functions/preparersFunctions/filterAndSortArticles';
import { ArticleCard } from '../ArticleCard/ArticleCard1';
import { Filter } from '../Filter/Filter';

import './Catalog.scss';

export const Catalog = () => {
  const dispatch = useAppDispatch();
  const preparedArticles = useAppSelector(state => state.articles.preparedArticles);
  const actualArticles = useAppSelector(state => state.articles.actualArticles);
  const inputKeyWords = useAppSelector(state => state.articles.inputKeyWords);
  const isLoading = useAppSelector(state => state.articles.isFetching);

  // const [isLoading, setIsLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [articlesPerPage] = useState(6);

  useEffect(() => {
    const articlesRanked = rankArticlesByKeyWords(preparedArticles, inputKeyWords);
    const actualAndSortedArticles = filterAndSortArticles([...articlesRanked], inputKeyWords);

    dispatch(setActualArticles(actualAndSortedArticles));
    setCurrentPage(1);
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
    console.log(actualArticles, 'actualArticles');
  });

  return (
    <main className="catalog">
      <Filter />
      <>
        <ul className="catalog__articles">
          { articlesForCurrentPage.map(article => (
            <li key={article.id}><ArticleCard article={article} /></li>
          ))}
        </ul>
        <div className="catalog__paginationWrapper">
          <Pagination
            count={pagesAmount}
            color="primary"
            onChange={handleChange}
          />
        </div>
      </>
    </main>
  );
};
