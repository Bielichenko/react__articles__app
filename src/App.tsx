/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import './App.scss';
import cn from 'classnames';
import { Catalog } from './components/Catalog/Catalog';
import { Filter } from './components/Filter/Filter';
import { SelectedArticle } from './components/SelectedArticle/SelectedArticle';
import { useAppSelector } from './hook';

export const App: React.FC = () => {
  const selectedArticle = useAppSelector(state => state.articles.selectedArticle);

  return (
    <div className={cn('app', { 'app--dislpayArticle': selectedArticle })}>
      <Filter />
      <Catalog />
      <SelectedArticle />
    </div>
  );
};
