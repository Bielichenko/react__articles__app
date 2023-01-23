import React, { useEffect } from 'react';
import Cirlce from 'react-ts-loaders';
import { Link, useParams } from 'react-router-dom';
import { useAppSelector } from '../../hooks/useApp';
import arrow from '../../images/arrow.png';

import './SelectedArticle.scss';

export const SelectedArticle = () => {
  const preparedArticles = useAppSelector(state => state.articles.preparedArticles);
  const { productId } = useParams();
  const articleId = productId?.split(':')[1];

  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  const selectedArticle = preparedArticles.find(article => {
    if (articleId) {
      return article.id === parseInt(articleId, 10);
    }

    return false;
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
          <div className="selectedArticle__linkContainer">
            <img src={arrow} alt="img" className="selectedArticle__linkArrow--reverse" />
            <Link to="/" className="selectedArticle__link">Back to homepage</Link>
          </div>
        </article>
      )
      : <Cirlce color="#363636" />
  );
};
