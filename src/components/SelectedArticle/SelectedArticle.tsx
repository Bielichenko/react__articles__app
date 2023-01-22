/* eslint-disable import/order */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-console */
import React, { useState, useEffect } from 'react';
import cn from 'classnames';
import { useAppDispatch, useAppSelector } from '../../hook';
import { setSelectedArticle } from '../../store/articleSlice';
import Cirlce from 'react-ts-loaders';

import './SelectedArticle.scss';
import { IArticleCardPrepared } from '../../types/IArticleCard';
import {
  Link, useLocation, useNavigate, useParams,
} from 'react-router-dom';
import { Box } from '@mui/system';

// interface props {
//   article: IArticleCardPrepared;
// }

export const SelectedArticle = () => {
  const preparedArticles = useAppSelector(state => state.articles.preparedArticles);
  const { productId } = useParams();
  const articleId = productId?.split(':')[1];

  const selectedArticle = preparedArticles.find(article => {
    if (articleId) {
      return article.id === parseInt(articleId, 10);
    }

    return false;
  });

  useEffect(() => {
    console.log(productId, 'productId');
    console.log(preparedArticles, 'preparedArticles');
  });

  useEffect(() => {
    console.log('test');
  });

  return (
    selectedArticle
      ? (
        <article className="selectedArticle">
          <div className="selectedArticle__backImage" style={{ backgroundImage: `url(${selectedArticle.imageUrl})` }}>
          </div>
          <main className="selectedArticle__textContent">
            <h1 className="selectedArticle__title">
              {selectedArticle.title}
            </h1>
            <p className="selectedArticle__textParagraph">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Interdum ornare convallis
              non etiam tincidunt tincidunt. Non dolor vel purus id. Blandit habitasse volutpat
              id dolor pretium, sem iaculis. Faucibus commodo mauris enim, turpis blandit.
              Porttitor facilisi viverra mi lacus lacinia accumsan. Pellentesque gravida ligula
              bibendum aliquet nulla massa elit. Ac faucibus donec sit morbi pharetra urna. Vel
              facilisis amet placerat ultrices lobortis proin nulla. Molestie tellus sed
              pellentesque tortor vitae eu cras nisl. Sem facilisi amet vitae ultrices nullam
              tellus. Pellentesque eget iaculis morbi at quis eget lacus, aliquam etiam. Neque
              ipsum, placerat vel convallis nulla orci, nunc etiam. Elementum risus facilisi
              mauris diam amet et sed.
            </p>
            <p className="selectedArticle__textParagraph">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Interdum ornare convallis
              non etiam tincidunt tincidunt. Non dolor vel purus id. Blandit habitasse volutpat
              id dolor pretium, sem iaculis. Faucibus commodo mauris enim, turpis blandit.
              Porttitor facilisi viverra mi lacus lacinia accumsan. Pellentesque gravida ligula
              bibendum aliquet nulla massa elit. Ac faucibus donec sit morbi pharetra urna. Vel
              facilisis amet placerat ultrices lobortis proin nulla. Molestie tellus sed
              pellentesque tortor vitae eu cras nisl. Sem facilisi amet vitae ultrices nullam
              tellus. Pellentesque eget iaculis morbi at quis eget lacus, aliquam etiam. Neque
              ipsum, placerat vel convallis nulla orci, nunc etiam. Elementum risus facilisi
              mauris diam amet et sed.
            </p>
            <p className="selectedArticle__textParagraph">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Interdum ornare convallis
              non etiam tincidunt tincidunt. Non dolor vel purus id. Blandit habitasse volutpat
              id dolor pretium, sem iaculis. Faucibus commodo mauris enim, turpis blandit.
              Porttitor facilisi viverra mi lacus lacinia accumsan. Pellentesque gravida ligula
              bibendum aliquet nulla massa elit. Ac faucibus donec sit morbi pharetra urna. Vel
              facilisis amet placerat ultrices lobortis proin nulla. Molestie tellus sed
              pellentesque tortor vitae eu cras nisl. Sem facilisi amet vitae ultrices nullam
              tellus. Pellentesque eget iaculis morbi at quis eget lacus, aliquam etiam. Neque
              ipsum, placerat vel convallis nulla orci, nunc etiam. Elementum risus facilisi
              mauris diam amet et sed.
            </p>
            <p className="selectedArticle__textParagraph">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Interdum ornare convallis
              non etiam tincidunt tincidunt. Non dolor vel purus id. Blandit habitasse volutpat
              id dolor pretium, sem iaculis. Faucibus commodo mauris enim, turpis blandit.
              Porttitor facilisi viverra mi lacus lacinia accumsan. Pellentesque gravida ligula
              bibendum aliquet nulla massa elit. Ac faucibus donec sit morbi pharetra urna. Vel
              facilisis amet placerat ultrices lobortis proin nulla. Molestie tellus sed
              pellentesque tortor vitae eu cras nisl. Sem facilisi amet vitae ultrices nullam
              tellus. Pellentesque eget iaculis morbi at quis eget lacus, aliquam etiam. Neque
              ipsum, placerat vel convallis nulla orci, nunc etiam. Elementum risus facilisi
              mauris diam amet et sed.
            </p>
          </main>
          <Link to="/" className="selectedArticle__link">Back to homepage</Link>
        </article>
      )
      : <Cirlce color="#363636" />
  );
};
