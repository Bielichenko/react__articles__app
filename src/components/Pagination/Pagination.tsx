/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import { IArticleCardPrepared } from '../../types/IArticleCard';

interface props {
  isLoading: boolean;
  totalArticles: number;
  articlesPerPage: number;
  paginate: (pageNumber: number) => void;
}

export const PaginationCatalog: React.FC<props> = ({
  isLoading,
  totalArticles,
  articlesPerPage,
  paginate,
}) => {
  const pageNumbers = [];

  // for (let i = 1; i <= Math.ceil(totalArticles / articlesPerPage); i = +1) {
  //   pageNumbers.push(i);
  // }

  return (
    // <ul className="pagination">
    //   {
    //     pageNumbers.map(number => (
    //       <li className="pagination__item" key={number}>{number}</li>
    //     ))
    //   }
    // </ul>
    <p>{isLoading}</p>
  );
};
