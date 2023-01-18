/* eslint-disable no-param-reassign */

import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IArticleCard, IArticleCardPrepared } from '../types/IArticleCard';

type ArticlesState = {
  articlesFromServer: IArticleCard[];
  preparedArticles: IArticleCardPrepared[];
  selectedArticle: IArticleCardPrepared | null;
  userInput: string;
  inputKeyWords: string[];
};

const initialState: ArticlesState = {
  articlesFromServer: [],
  preparedArticles: [],
  selectedArticle: null,
  userInput: '',
  inputKeyWords: [],
};

const articleSlice = createSlice({
  name: 'articles',
  initialState,
  reducers: {
    setArticlesFromServer(state, action: PayloadAction<IArticleCard[]>) {
      state.articlesFromServer = action.payload;
    },
    setPreparedArticles(state, action: PayloadAction<IArticleCardPrepared[]>) {
      state.preparedArticles = action.payload;
    },
    setSelectedArticle(state, action:PayloadAction<IArticleCardPrepared | null>) {
      state.selectedArticle = action.payload;
    },
    setUserInput(state, action:PayloadAction<string>) {
      state.userInput = action.payload;
    },
    setInputKeyWords(state, action:PayloadAction<string[]>) {
      state.inputKeyWords = action.payload;
    },
  },
});

export const {
  setArticlesFromServer,
  setPreparedArticles,
  setSelectedArticle,
  setUserInput,
  setInputKeyWords,
} = articleSlice.actions;

export default articleSlice.reducer;
