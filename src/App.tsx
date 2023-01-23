import React, { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Catalog } from './components/Catalog/Catalog';
import { SelectedArticle } from './components/SelectedArticle/SelectedArticle';
import { useAppDispatch } from './hooks/useApp';
import { setIsFetching, setPreparedArticles } from './store/articleSlice';
import { prepareArticles } from './utils/functions/preparersFunctions/prepareArticles';
import { useFetch } from './hooks/useFetch';

import './App.scss';

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
      // eslint-disable-next-line no-alert
      alert(error);
    }
  }, [articlesFromServer, isLoading, error]);

  return (
    <div className="app test">
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
          element={<p>Oops, can&apos;t find this page</p>}
        />
      </Routes>
    </div>
  );
};
