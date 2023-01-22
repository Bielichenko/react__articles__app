import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import { Catalog } from '../components/Catalog/Catalog';
import { Filter } from '../components/Filter/Filter';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Catalog />,
  },
  {
    path: '/filter',
    element: <Filter />,
  },
]);
