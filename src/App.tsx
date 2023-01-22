/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-alert */

import React, { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Catalog } from './components/Catalog/Catalog';
import { SelectedArticle } from './components/SelectedArticle/SelectedArticle';
import { useAppDispatch } from './hooks/hook';
import { setIsFetching, setPreparedArticles } from './store/articleSlice';
import { prepareArticles } from './utils/functions/prepareArticles';

import './App.scss';
import { useFetch } from './hooks/getArticlesFromServer';

const URL = 'https://api.spaceflightnewsapi.net/v3/articles/';

export const App: React.FC = () => {
  const dispatch = useAppDispatch();

  const { articlesFromServer, isLoading, error } = useFetch(URL);

  useEffect(() => {
    dispatch(setIsFetching(isLoading));

    if (articlesFromServer) {
      const preparedArticlesFromServer = prepareArticles(articlesFromServer);

      dispatch(setPreparedArticles(preparedArticlesFromServer));
    }

    if (error) {
      alert(error);
    }
  }, [articlesFromServer, isLoading, error]);

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
