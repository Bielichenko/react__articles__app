import React, { useState, useEffect } from 'react';
import { Pagination } from '@mui/material';
import Cirlce from 'react-ts-loaders';
import { useAppDispatch, useAppSelector } from '../../hooks/useApp';
import { setActualArticles } from '../../store/articleSlice';
import { getArticlesForCurrentPage } from '../../utils/functions/preparersFunctions/getArticlesForPage';
import { getPagesAmount } from '../../utils/functions/helpers/getPageAmout';
import { rankArticlesByKeyWords } from '../../utils/functions/preparersFunctions/rankArticles';
import { filterAndSortArticles } from '../../utils/functions/preparersFunctions/filterAndSortArticles';
import { ArticleCard } from '../ArticleCard/ArticleCard';
import { Filter } from '../Filter/Filter';

import './Catalog.scss';

export const Catalog = () => {
  const dispatch = useAppDispatch();
  const preparedArticles = useAppSelector(
    (state) => state.articles.preparedArticles,
  );
  const actualArticles = useAppSelector(
    (state) => state.articles.actualArticles,
  );
  const inputKeyWords = useAppSelector((state) => state.articles.inputKeyWords);
  const isLoading = useAppSelector((state) => state.articles.isFetching);
  const [currentPage, setCurrentPage] = useState(1);
  const [articlesPerPage] = useState(6);

  useEffect(() => {
    const articlesRanked = rankArticlesByKeyWords(
      preparedArticles,
      inputKeyWords,
    );
    const actualAndSortedArticles = filterAndSortArticles(
      [...articlesRanked],
      inputKeyWords,
    );

    dispatch(setActualArticles(actualAndSortedArticles));

    setCurrentPage(1);
  }, [preparedArticles, inputKeyWords]);

  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  const pagesAmount = getPagesAmount(actualArticles.length, articlesPerPage);
  const handleChange = (e: React.ChangeEvent<unknown>, p: number) => {
    setCurrentPage(p);
  };

  const articlesForCurrentPage = getArticlesForCurrentPage(
    currentPage,
    articlesPerPage,
    actualArticles,
  );

  return (
    <main className="catalog">
      <Filter />
      {isLoading ? (
        <Cirlce color="#363636" />
      ) : (
        <>
          <ul className="catalog__articles">
            {articlesForCurrentPage.map((article) => (
              <li key={article.id}>
                <ArticleCard article={article} />
              </li>
            ))}
          </ul>
          <div className="catalog__paginationWrapper">
            <Pagination
              count={pagesAmount}
              color="primary"
              onChange={handleChange}
              page={currentPage}
            />
          </div>
        </>
      )}
    </main>
  );
};
