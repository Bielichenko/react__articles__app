/*eslint-disable*/

import React, {useEffect} from "react";
// import { createRoot } from "react-dom/client";
import Highlighter from "react-highlight-words";
import { useAppDispatch, useAppSelector } from '../../hook';
import { setArticles, setSelectedArticle } from '../../store/articleSlice';
import { IArticleCard } from '../../types/IArticleCard';

import './ArticleCard.scss';

interface props {
  article: IArticleCard,
}


export const ArticleCard: React.FC<props> = ({ article}) => {
  const dispatch = useAppDispatch();
  const userInput = useAppSelector(state => state.articles.userInput)
  // const selectedArticle = useAppSelector(state => state.articles.selectedArticle);

  
  const articleSelectionHandler = () => {
    dispatch(setSelectedArticle(article));
    // console.log(selectedArticle, 'selectedArticle');
  };

  return (
    <article className="articleCard">
      <img
        src={article.imageUrl}
        alt="img"
        className="articleCard__image"
      />
      <p className="articleCard__date">{article.publishedAt}</p>
      {/* <h4 className="articleCard__title" id="title">
        {article.title}
      </h4> */}
      <h4 className="articleCard__title" id="title">
      <Highlighter
          highlightClassName="YourHighlightClass"
          searchWords={[userInput]}
          autoEscape={true}
          textToHighlight={article.title}
        />
      </h4>
      
      {/* <p className="articleCard__description">{article.summary}</p> */}
      
      <p className="articleCard__description">
      <Highlighter
          highlightClassName="YourHighlightClass"
          searchWords={[userInput]}
          autoEscape={true}
          textToHighlight={article.summary}
        />
      </p>
      <button type="button" className="articleCard__link" onClick={() => articleSelectionHandler()}>read more</button>
    </article>
  );
};
