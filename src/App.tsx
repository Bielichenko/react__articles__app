/* eslint-disable import/no-unresolved */
/* eslint-disable no-console */
/* eslint-disable no-alert */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useEffect, useState } from 'react';
import './App.scss';
import cn from 'classnames';
import { Route, RouterProvider, Routes } from 'react-router-dom';
import { Catalog } from './components/Catalog/Catalog';
import { Filter } from './components/Filter/Filter';
import { SelectedArticle } from './components/SelectedArticle/SelectedArticle';
import { useAppDispatch, useAppSelector } from './hook';
import { setPreparedArticles } from './store/articleSlice';
import { router } from './router/router';
import { prepareArticles } from './utils/functions/prepareArticles';

const URL = 'https://api.spaceflightnewsapi.net/v3/articles/';

export const App: React.FC = () => {
  const dispatch = useAppDispatch();
  const preparedArticles = useAppSelector(state => state.articles.preparedArticles);
  const selectedArticle = useAppSelector(state => state.articles.selectedArticle);
  const inputKeyWords = useAppSelector(state => state.articles.inputKeyWords);
  const actualArticles = useAppSelector(state => state.articles.actualArticles);

  async function getArticlesFromServer() {
    try {
      const res = await fetch(URL);
      const articlesFromServer = await res.json();
      const preparedArticlesFromServer = prepareArticles(articlesFromServer);

      dispatch(setPreparedArticles(preparedArticlesFromServer));
    } catch (e) {
      alert(e);
    }
  }

  useEffect(() => {
    getArticlesFromServer();
  }, []);

  return (
    // <RouterProvider router={router} />
    <div className={cn('app', { 'app--dislpayArticle': selectedArticle })}>

      <Routes>
        {/* <Route
          path="/"
          element={<Filter />}
        /> */}
        <Route
          path="/"
          element={<Catalog />}
        />
        <Route
          path="/:productId"
          element={<SelectedArticle />}
        />
        <Route
          path="*"
          element={<p>error</p>}
        />
      </Routes>
    </div>
  );
};
