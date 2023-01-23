/* eslint-disable no-param-reassign */

import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IArticleCardPrepared } from '../types/IArticleCard';

type ArticlesState = {
  preparedArticles: IArticleCardPrepared[];
  isFetching: boolean;
  actualArticles: IArticleCardPrepared[];
  inputKeyWords: string[];
};

const initialState: ArticlesState = {
  preparedArticles: [],
  isFetching: false,
  actualArticles: [],
  inputKeyWords: [],
};

const articlesSlice = createSlice({
  name: 'articles',
  initialState,
  reducers: {
    setPreparedArticles(state, action: PayloadAction<IArticleCardPrepared[]>) {
      state.preparedArticles = action.payload;
    },
    setIsFetching(state, action: PayloadAction<boolean>) {
      state.isFetching = action.payload;
    },
    setActualArticles(state, action: PayloadAction<IArticleCardPrepared[]>) {
      state.actualArticles = action.payload;
    },
    setInputKeyWords(state, action:PayloadAction<string[]>) {
      state.inputKeyWords = action.payload;
    },
  },
});

export const {
  setPreparedArticles,
  setIsFetching,
  setActualArticles,
  setInputKeyWords,
} = articlesSlice.actions;

export default articlesSlice.reducer;
