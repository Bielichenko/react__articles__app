/* eslint-disable no-param-reassign */

import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IArticleCardPrepared } from '../types/IArticleCard';

type ArticlesState = {
  preparedArticles: IArticleCardPrepared[];
  actualArticles: IArticleCardPrepared[];
  selectedArticle: IArticleCardPrepared | null;
  inputKeyWords: string[];
};

const initialState: ArticlesState = {
  preparedArticles: [],
  actualArticles: [],
  selectedArticle: null,
  inputKeyWords: [],
};

const articleSlice = createSlice({
  name: 'articles',
  initialState,
  reducers: {
    setPreparedArticles(state, action: PayloadAction<IArticleCardPrepared[]>) {
      state.preparedArticles = action.payload;
    },
    setActualArticles(state, action: PayloadAction<IArticleCardPrepared[]>) {
      state.actualArticles = action.payload;
    },
    setSelectedArticle(state, action:PayloadAction<IArticleCardPrepared | null>) {
      state.selectedArticle = action.payload;
    },
    setInputKeyWords(state, action:PayloadAction<string[]>) {
      state.inputKeyWords = action.payload;
    },
  },
});

export const {
  setPreparedArticles,
  setActualArticles,
  setSelectedArticle,
  setInputKeyWords,
} = articleSlice.actions;

export default articleSlice.reducer;
