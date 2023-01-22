/* eslint-disable import/named */
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
import { useAppDispatch, useAppSelector } from '../../hooks/hook';
import calendarImage from '../../images/calendar.svg';

import calendar from '../../images/icon.svg';
import arrow from '../../images/arrow.png';

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
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M11.685187903543675,1.5679695094629231 L10.102216475669152,1.5679695094629231 L10.102216475669152,1.1339846641207245 C10.102216475669152,0.8736236834649098 9.94392842989582,0.6999998187785312 9.706450876165203,0.6999998187785312 S9.310685276661257,0.8735738058824101 9.310685276661257,1.1339846641207245 L9.310685276661257,1.5679695094629231 L5.353256706974932,1.5679695094629231 L5.353256706974932,1.1339846641207245 C5.353256706974932,0.8736236834649098 5.194968661201603,0.6999998187785312 4.957491107470986,0.6999998187785312 C4.720059038810998,0.6999998187785312 4.561725507967047,0.8735738058824101 4.561725507967047,1.1339846641207245 L4.561725507967047,1.5679695094629231 L2.9787540800925125,1.5679695094629231 C1.8706467895379681,1.5679695094629231 1.000017052714039,2.522676316116753 1.000017052714039,3.737793981008897 L1.000017052714039,11.549172054090924 C1.000017052714039,12.764289718983068 1.8706467895379681,13.718996525636904 2.9787540800925125,13.718996525636904 L11.685187903543675,13.718996525636904 C12.793295194098224,13.718996525636904 13.66392493092215,12.764289718983068 13.66392493092215,11.549172054090924 L13.66392493092215,3.737793981008897 C13.66392493092215,2.522676316116753 12.793295194098224,1.5679695094629231 11.685187903543675,1.5679695094629231 zM1.7915027666513037,3.737793981008897 C1.7915027666513037,3.043448155010889 2.345556411928577,2.4358893225648153 2.9787540800925125,2.4358893225648153 L4.561725507967047,2.4358893225648153 L4.561725507967047,2.8698741679070103 C4.561725507967047,3.130235148562827 4.7200135537403725,3.303859013249207 4.957491107470986,3.303859013249207 C5.194923176130985,3.303859013249207 5.353256706974932,3.13028502614533 5.353256706974932,2.8698741679070103 L5.353256706974932,2.4358893225648153 L9.310730761731882,2.4358893225648153 L9.310730761731882,2.8698741679070103 C9.310730761731882,3.130235148562827 9.469018807505211,3.303859013249207 9.706496361235825,3.303859013249207 S10.10226196073977,3.13028502614533 10.10226196073977,2.8698741679070103 L10.10226196073977,2.4358893225648153 L11.6852333886143,2.4358893225648153 C12.318431056778234,2.4358893225648153 12.872484702055512,3.043448155010889 12.872484702055512,3.737793981008897 L12.872484702055512,5.039698639452986 L1.7915027666513037,5.039698639452986 L1.7915027666513037,3.737793981008897 zM12.87243921698489,11.549172054090924 C12.87243921698489,12.24351788008893 12.318385571707609,12.851076712535004 11.685187903543675,12.851076712535004 L2.9787540800925125,12.851076712535004 C2.345556411928577,12.851076712535004 1.7915027666513037,12.24351788008893 1.7915027666513037,11.549172054090924 L1.7915027666513037,5.907618452554882 L12.87243921698489,5.907618452554882 L12.87243921698489,11.549172054090924 z" id="svg_3" fill="black" fillOpacity="1" strokeOpacity="1" opacity="0.4" stroke="none"></path>
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
            <img src={arrow} alt="" className="articleCard__linkArrow" />

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
