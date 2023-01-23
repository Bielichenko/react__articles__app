/*eslint-disable*/

import { createTheme, Divider, TextField, ThemeProvider } from '@mui/material';
import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import Input from '@mui/material/Input';
import InputAdornment from '@mui/material/InputAdornment';
import InputLabel from '@mui/material/InputLabel';
import React, { useState, useEffect, Fragment } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/hook';
import { setInputKeyWords, setPreparedArticles } from '../../store/articleSlice';
import { getWordsFromInput } from '../../utils/functions/helpers/getKeyWordsFromInput';
import { rankArticlesByKeyWords } from '../../utils/functions/preparersFunctions/rankArticles';
// import DraftsOutlinedIcon from '@material-ui/icons/DraftsOutlined';
import { InputBase, Paper, SxProps, Typography } from '@mui/material';
import AccountCircle from '@mui/icons-material/AccountCircle';
import SearchIcon from '@mui/icons-material/Search';
import searchImage from '../../images/search.jpg';
import {inputStyles} from './inputStyles';

import './Filter.scss';

export const Filter = () => {
  const dispatch = useAppDispatch();
  const inputKeyWords = useAppSelector(state => state.articles.inputKeyWords);
  const preparedArticles = useAppSelector(state => state.articles.preparedArticles);
  const actualArticles = useAppSelector(state => state.articles.actualArticles)
  const [userInput, setUserInput] = useState('');


  let title: HTMLElement | null = null

  const inputHandler = (userInputParam: string) => {
    setUserInput(userInputParam);
    dispatch(setInputKeyWords(getWordsFromInput(userInputParam)));
  }

  // useEffect(() => {
  //   const articlesRanked = rankArticlesByKeyWords(preparedArticles, inputKeyWords)
  //   dispatch(setPreparedArticles(articlesRanked))
  // }, [inputKeyWords])

  useEffect(() => {
    setUserInput(inputKeyWords.join(' '));
    console.log('input', userInput, inputKeyWords)
  })

const imageStyle = {
  mr:'20px',
}

const inputStyle = {
  'background': '#FFFFFF',
'border': '1px solid #EAEAEA',
'boxShadow': '0px 8px 24px rgba(0, 0, 0, 0.05)',
'borderRadius': '5px',
}

const inputTextStyle = {
  fontFamily: 'Montserrat',
  fontStyle: 'normal',
  fontWeight: 400,
  fontSize: '16px',
  lineHeight: '150%',
  color: '#575757',
}

    return (
      <div className="filter">
        <h2 className="filter__title">Filter by keywords</h2>
          <div className="filter__inputWrapper">
            <TextField
              id="input-with-icon-textfield"
              placeholder="Search here..." 
              variant="outlined" 
              fullWidth
              sx={inputStyle}
              onChange={(e) => {inputHandler(e.target.value)}}
              value={userInput}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start" sx={imageStyle}>
                        <img src={searchImage} alt="search image" />
                  </InputAdornment>
                ),
              }}
              inputProps={{
                style: inputTextStyle,
              }}
          />
        </div>
        <p className="filter__resultNumber">Results: {actualArticles.length}</p>
      </div>
    )
}
