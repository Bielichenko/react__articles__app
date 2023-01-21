/*eslint-disable*/

import Avatar from "@mui/material/Avatar/Avatar";
import Card from "@mui/material/Card/Card";
import CardHeader from "@mui/material/CardHeader/CardHeader";
import CardMedia from "@mui/material/CardMedia/CardMedia";
import IconButton from "@mui/material/IconButton/IconButton";
import React, {useEffect} from "react";
// import { createRoot } from "react-dom/client";
import Highlighter from "react-highlight-words";
import { useAppDispatch, useAppSelector } from '../../hook';
import {setSelectedArticle } from '../../store/articleSlice';
import { IArticleCard, IArticleCardPrepared } from '../../types/IArticleCard';
import { styled } from '@mui/material/styles';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import IconButtonProps  from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';

import calendarImage from '../../images/calendar.svg';

import './ArticleCard.scss';

interface props {
  article: IArticleCardPrepared,
}

export const ArticleCard: React.FC<props> = ({ article}) => {
  const dispatch = useAppDispatch();
  const inputKeyWords = useAppSelector(state => state.articles.inputKeyWords)
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
      <div className="articleCard__textContent">
        <div className="articleCard__dateWrapper">
        <svg className="articleCard__calendarImage"
								width='14'
								height='14'
								fill='none'
								xmlns='http://www.w3.org/2000/svg'
                xmlnsXlink="http://www.w3.org/1999/xlink"
							>
								<g opacity='0.5' clipPath='url(#clip0_466_331)'>
									<path
										d='M12 2.66675H3.99999C2.52724 2.66675 1.33333 3.86066 1.33333 5.33341V12.0001C1.33333 13.4728 2.52724 14.6667 3.99999 14.6667H12C13.4728 14.6667 14.6667 13.4728 14.6667 12.0001V5.33341C14.6667 3.86066 13.4728 2.66675 12 2.66675Z'
										stroke='#363636'
										strokeLinecap='round'
										strokeLinejoin='round'
									/>
									<path
										d='M5.33333 1.33337V4.00004'
										stroke='#363636'
										strokeLinecap='round'
										strokeLinejoin='round'
									/>
									<path
										d='M10.6667 1.33337V4.00004'
										stroke='#363636'
										strokeLinecap='round'
										strokeLinejoin='round'
									/>
									<path
										d='M1.33333 6.66675H14.6667'
										stroke='#363636'
										strokeLinecap='round'
										strokeLinejoin='round'
									/>
								</g>
							</svg>
        <p className="articleCard__date">{article.publishedAtFormatted}</p>
        </div>
          <h4 className="articleCard__title" id="title">
            <Highlighter
                highlightClassName="YourHighlightClass"
                searchWords={inputKeyWords}
                autoEscape={true}
                textToHighlight={article.title}
              />
          </h4>      
        <p className="articleCard__description">
          <Highlighter
              // highlightClassName="YourHighlightClass"
              searchWords={inputKeyWords}
              autoEscape={true}
              textToHighlight={article.summary}
          />
        </p>
        <button 
          type="button" 
          className="articleCard__link" 
          onClick={() => articleSelectionHandler()}
        >
          read more
        </button>
      </div>
    </article>
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