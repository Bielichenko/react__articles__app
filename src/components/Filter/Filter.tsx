import React, { useState, useEffect } from 'react';
import { TextField } from '@mui/material';
import InputAdornment from '@mui/material/InputAdornment';
import { useAppDispatch, useAppSelector } from '../../hooks/useApp';
import { setInputKeyWords } from '../../store/articleSlice';
import { getWordsFromInput } from '../../utils/functions/helpers/getKeyWordsFromInput';
import searchImage from '../../images/search.jpg';
import { imageStyle, inputTextStyle, textFieldStyle } from '../../utils/styles/textFieldStyles';

import './Filter.scss';

export const Filter = () => {
  const dispatch = useAppDispatch();
  const inputKeyWords = useAppSelector(state => state.articles.inputKeyWords);
  const actualArticles = useAppSelector(state => state.articles.actualArticles);
  const [userInput, setUserInput] = useState('');

  const inputHandler = (userInputParam: string) => {
    setUserInput(userInputParam);
    dispatch(setInputKeyWords(getWordsFromInput(userInputParam)));
  };

  useEffect(() => {
    setUserInput(inputKeyWords.join(' '));
  }, []);

  return (
    <div className="filter">
      <h2 className="filter__title">Filter by keywords</h2>
      <div className="filter__textFieldWrapper">
        <TextField
          id="input-with-icon-textfield"
          placeholder="Search here..."
          variant="outlined"
          fullWidth
          sx={textFieldStyle}
          onChange={(e) => {
            inputHandler(e.target.value);
          }}
          value={userInput}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start" sx={imageStyle}>
                <img src={searchImage} alt="search img" />
              </InputAdornment>
            ),
          }}
          // eslint-disable-next-line react/jsx-no-duplicate-props
          inputProps={{
            style: inputTextStyle,
          }}
        />
      </div>
      <p className="filter__resultsNumber">
        {`Results: ${actualArticles.length}`}
      </p>
    </div>
  );
};
