/* eslint-disable no-alert */

import React, { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Catalog } from './components/Catalog/Catalog';
import { SelectedArticle } from './components/SelectedArticle/SelectedArticle';
import { useAppDispatch } from './hook';
import { setPreparedArticles } from './store/articleSlice';
import { prepareArticles } from './utils/functions/prepareArticles';

import './App.scss';

const URL = 'https://api.spaceflightnewsapi.net/v3/articles/';

export const App: React.FC = () => {
  const dispatch = useAppDispatch();

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
    <div className="app">
      <Routes>
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
