/* eslint-disable no-console */
/* eslint-disable no-alert */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useEffect, useState } from 'react';
import './App.scss';
import cn from 'classnames';
import { Catalog } from './components/Catalog/Catalog';
import { Filter } from './components/Filter/Filter';
import { SelectedArticle } from './components/SelectedArticle/SelectedArticle';
import { useAppDispatch, useAppSelector } from './hook';
import { setPreparedArticles } from './store/articleSlice';
import { prepareArticles } from './utils/functions/prepareArticles';
import { IArticleCardPrepared } from './types/IArticleCard';
import { rankArticlesByKeyWords } from './utils/functions/rankArticles';
import { sortAndFilterArticles } from './utils/functions/sortAndFilterArticles';

export const App: React.FC = () => {
  const dispatch = useAppDispatch();
  const preparedArticles = useAppSelector(state => state.articles.preparedArticles);
  const selectedArticle = useAppSelector(state => state.articles.selectedArticle);
  const inputKeyWords = useAppSelector(state => state.articles.inputKeyWords);
  const actualArticles = useAppSelector(state => state.articles.actualArticles);

  return (
    <div className={cn('app', { 'app--dislpayArticle': selectedArticle })}>
      <Filter />
      <Catalog />
      <SelectedArticle />
    </div>
  );
};
