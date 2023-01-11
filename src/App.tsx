import React from 'react';
import './App.scss';
import { Catalog } from './components/Catalog/Catalog';
import { Filter } from './components/Filter/Filter';
import { SelectedArticle } from './components/SelectedArticle/SelectedArtice';

export const App: React.FC = () => {
  return (
    <div className="app">
      <Filter />
      <Catalog />
      <SelectedArticle />
    </div>
  );
};
