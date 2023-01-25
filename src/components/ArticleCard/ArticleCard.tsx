import React from 'react';
import Highlighter from 'react-highlight-words';
import { Link } from 'react-router-dom';
import { IArticleCardPrepared } from '../../types/IArticleCard';
import { useAppSelector } from '../../hooks/useApp';
import arrow from '../../images/arrow.png';

import './ArticleCard.scss';

interface props {
  article: IArticleCardPrepared,
}

export const ArticleCard: React.FC<props> = ({ article }) => {
  const inputKeyWords = useAppSelector(state => state.articles.inputKeyWords);

  return (
    <Link
      className="cardWrapper"
      to={`/productId:${article.id}`}
    >
      <article className="articleCard">
        <img
          src={article.imageUrl}
          alt="img"
          className="articleCard__articleImage"
        />
        <div className="articleCard__textContent">
          <div className="articleCard__dateWrapper">
            <svg
              className="articleCard__dateImage"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M11.685187903543675,1.5679695094629231 L10.102216475669152,1.5679695094629231 L10.102216475669152,1.1339846641207245 C10.102216475669152,0.8736236834649098 9.94392842989582,0.6999998187785312 9.706450876165203,0.6999998187785312 S9.310685276661257,0.8735738058824101 9.310685276661257,1.1339846641207245 L9.310685276661257,1.5679695094629231 L5.353256706974932,1.5679695094629231 L5.353256706974932,1.1339846641207245 C5.353256706974932,0.8736236834649098 5.194968661201603,0.6999998187785312 4.957491107470986,0.6999998187785312 C4.720059038810998,0.6999998187785312 4.561725507967047,0.8735738058824101 4.561725507967047,1.1339846641207245 L4.561725507967047,1.5679695094629231 L2.9787540800925125,1.5679695094629231 C1.8706467895379681,1.5679695094629231 1.000017052714039,2.522676316116753 1.000017052714039,3.737793981008897 L1.000017052714039,11.549172054090924 C1.000017052714039,12.764289718983068 1.8706467895379681,13.718996525636904 2.9787540800925125,13.718996525636904 L11.685187903543675,13.718996525636904 C12.793295194098224,13.718996525636904 13.66392493092215,12.764289718983068 13.66392493092215,11.549172054090924 L13.66392493092215,3.737793981008897 C13.66392493092215,2.522676316116753 12.793295194098224,1.5679695094629231 11.685187903543675,1.5679695094629231 zM1.7915027666513037,3.737793981008897 C1.7915027666513037,3.043448155010889 2.345556411928577,2.4358893225648153 2.9787540800925125,2.4358893225648153 L4.561725507967047,2.4358893225648153 L4.561725507967047,2.8698741679070103 C4.561725507967047,3.130235148562827 4.7200135537403725,3.303859013249207 4.957491107470986,3.303859013249207 C5.194923176130985,3.303859013249207 5.353256706974932,3.13028502614533 5.353256706974932,2.8698741679070103 L5.353256706974932,2.4358893225648153 L9.310730761731882,2.4358893225648153 L9.310730761731882,2.8698741679070103 C9.310730761731882,3.130235148562827 9.469018807505211,3.303859013249207 9.706496361235825,3.303859013249207 S10.10226196073977,3.13028502614533 10.10226196073977,2.8698741679070103 L10.10226196073977,2.4358893225648153 L11.6852333886143,2.4358893225648153 C12.318431056778234,2.4358893225648153 12.872484702055512,3.043448155010889 12.872484702055512,3.737793981008897 L12.872484702055512,5.039698639452986 L1.7915027666513037,5.039698639452986 L1.7915027666513037,3.737793981008897 zM12.87243921698489,11.549172054090924 C12.87243921698489,12.24351788008893 12.318385571707609,12.851076712535004 11.685187903543675,12.851076712535004 L2.9787540800925125,12.851076712535004 C2.345556411928577,12.851076712535004 1.7915027666513037,12.24351788008893 1.7915027666513037,11.549172054090924 L1.7915027666513037,5.907618452554882 L12.87243921698489,5.907618452554882 L12.87243921698489,11.549172054090924 z" id="svg_3" fill="black" fillOpacity="1" strokeOpacity="1" opacity="0.4" stroke="none"></path>
            </svg>
            <p className="articleCard__date">{article.publishedAtFormatted}</p>
          </div>
          <h4 className="articleCard__title" id="title">
            <Highlighter
              searchWords={inputKeyWords}
              autoEscape
              textToHighlight={article.title}
            />
          </h4>
          <p className="articleCard__description">
            <Highlighter
              searchWords={inputKeyWords}
              autoEscape
              textToHighlight={article.summaryShort}
            />
          </p>
          <div className="articleCard__linkWrapper">
            <p className="articleCard__link">
              Read more
            </p>
            <img src={arrow} alt="linkImg" className="articleCard__linkArrow" />
          </div>
        </div>
      </article>
    </Link>
  );
};