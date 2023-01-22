/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useEffect } from 'react';
// import { createRoot } from "react-dom/client";
import Highlighter from 'react-highlight-words';
import { styled } from '@mui/material/styles';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import IconButtonProps from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';

import './ArticleCard.scss';
import { Link, unstable_HistoryRouter } from 'react-router-dom';
import { Box } from '@mui/system';
import { IArticleCard, IArticleCardPrepared } from '../../types/IArticleCard';
import { setSelectedArticle } from '../../store/articleSlice';
import { useAppDispatch, useAppSelector } from '../../hook';
import calendarImage from '../../images/calendar.svg';

interface props {
  article: IArticleCardPrepared,
}

export const ArticleCard: React.FC<props> = ({ article }) => {
  const dispatch = useAppDispatch();
  const inputKeyWords = useAppSelector(state => state.articles.inputKeyWords);

  return (
    <Link
      className="linkWrapper"
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
              className="articleCard__calendarImage"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g opacity="0.6" clipPath="url(#clip0_466_331)">
                <path
                  d="M12 2.66675H3.99999C2.52724 2.66675 1.33333 3.86066 1.33333 5.33341V12.0001C1.33333 13.4728 2.52724 14.6667 3.99999 14.6667H12C13.4728 14.6667 14.6667 13.4728 14.6667 12.0001V5.33341C14.6667 3.86066 13.4728 2.66675 12 2.66675Z"
                  stroke="#363636"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M5.33333 1.33337V4.00004"
                  stroke="#363636"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M10.6667 1.33337V4.00004"
                  stroke="#363636"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M1.33333 6.66675H14.6667"
                  stroke="#363636"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </g>
              <defs>
                <clipPath id="clip0_466_331">
                  <rect width="16" height="16" fill="white" />
                </clipPath>
              </defs>
            </svg>
            <p className="articleCard__date">{article.publishedAtFormatted}</p>
          </div>
          <h4 className="articleCard__title" id="title">
            <Highlighter
              highlightClassName="YourHighlightClass"
              searchWords={inputKeyWords}
              autoEscape
              textToHighlight={article.title}
            />
          </h4>
          <p className="articleCard__description">
            <Highlighter
              // highlightClassName="YourHighlightClass"
              searchWords={inputKeyWords}
              autoEscape
              textToHighlight={article.summaryShort}
            />
          </p>
          <div className="articleCard__linkWrapper">
            <p className="articleCard__link">Read more</p>
            <svg
              className="articleCard__linkImage"
              width="12"
              height="10"
              viewBox="0 0 12 10"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                fill="#363636"
                d="M6.66829 0.162658C6.45593 0.379657 6.45593 0.730251 6.66975 0.945773L9.09665 3.39845L9.15268 3.448C9.36701 3.61309 9.6729 3.59589 9.86756 3.39698C9.97375 3.28848 10.0268 3.1475 10.0268 3.00653C10.0268 2.86407 9.97375 2.72236 9.86611 2.61386L7.43993 0.161182L7.38388 0.111806C7.16946 -0.0527212 6.86296 -0.0355811 6.66829 0.162658ZM0.477064 4.45064C0.208215 4.48481 0 4.71782 0 4.99989C0 5.30546 0.244364 5.55346 0.545455 5.55346H10.1338L6.66982 9.05423L6.62082 9.11077C6.45747 9.32725 6.4737 9.63843 6.66836 9.83734C6.88073 10.0536 7.22618 10.0543 7.43927 9.83882L11.8393 5.39182L11.8878 5.33613C11.9616 5.23874 12 5.11983 12 4.99989C12 4.92829 11.9862 4.8567 11.9585 4.78879C11.8742 4.58139 11.6756 4.44632 11.4545 4.44632H0.545455L0.477064 4.45064Z"
              />
            </svg>
          </div>

        </div>
      </article>
    </Link>

  //   <Card sx={{ maxWidth: 345 }}>
  //   <CardHeader
  //     avatar={
  //       <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
  //         R
  //       </Avatar>
  //     }
  //     action={
  //       <IconButton aria-label="settings">
  //         <MoreVertIcon />
  //       </IconButton>
  //     }
  //     title="Shrimp and Chorizo Paella"
  //     subheader="September 14, 2016"
  //   />
  //   <CardMedia
  //     component="img"
  //     height="194"
  //     image={article.imageUrl}
  //     alt="Paella dish"
  //   />
  //   <CardContent>
  //     <Typography variant="body2" color="text.secondary">
  //       This impressive paella is a perfect party dish and a fun meal to cook
  //       together with your guests. Add 1 cup of frozen peas along with the mussels,
  //       if you like.
  //     </Typography>
  //   </CardContent>
  //   <CardActions disableSpacing>
  //     <IconButton aria-label="add to favorites">
  //       <FavoriteIcon />
  //     </IconButton>
  //     <IconButton aria-label="share">
  //       <ShareIcon />
  //     </IconButton>
  //   </CardActions>
  //   <Collapse timeout="auto" unmountOnExit>
  //     <CardContent>
  //       <Typography paragraph>Method:</Typography>
  //       <Typography paragraph>
  //         Heat 1/2 cup of the broth in a pot until simmering, add saffron and set
  //         aside for 10 minutes.
  //       </Typography>
  //       <Typography paragraph>
  //         Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over
  //         medium-high heat. Add chicken, shrimp and chorizo, and cook, stirring
  //         occasionally until lightly browned, 6 to 8 minutes. Transfer shrimp to a
  //         large plate and set aside, leaving chicken and chorizo in the pan. Add
  //         pimentón, bay leaves, garlic, tomatoes, onion, salt and pepper, and cook,
  //         stirring often until thickened and fragrant, about 10 minutes. Add
  //         saffron broth and remaining 4 1/2 cups chicken broth; bring to a boil.
  //       </Typography>
  //       <Typography paragraph>
  //         Add rice and stir very gently to distribute. Top with artichokes and
  //         peppers, and cook without stirring, until most of the liquid is absorbed,
  //         15 to 18 minutes. Reduce heat to medium-low, add reserved shrimp and
  //         mussels, tucking them down into the rice, and cook again without
  //         stirring, until mussels have opened and rice is just tender, 5 to 7
  //         minutes more. (Discard any mussels that don&apos;t open.)
  //       </Typography>
  //       <Typography>
  //         Set aside off of the heat to let rest for 10 minutes, and then serve.
  //       </Typography>
  //     </CardContent>
  //   </Collapse>
  // </Card>
  );
};
