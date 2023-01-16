/* eslint-disable no-param-reassign */

import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IArticleCard } from '../types/IArticleCard';

type ArticlesState = {
  list: IArticleCard[];
  selectedArticle: IArticleCard | null;
  userInput: string;
};

const initialState: ArticlesState = {
  list: [],
  selectedArticle: null,
  userInput: '',
};

const articleSlice = createSlice({
  name: 'articles',
  initialState,
  reducers: {
    setArticles(state, action: PayloadAction<IArticleCard[]>) {
      state.list = action.payload;
    },
    setSelectedArticle(state, action:PayloadAction<IArticleCard | null>) {
      state.selectedArticle = action.payload;
    },
    setUserInput(state, action:PayloadAction<string>) {
      state.userInput = action.payload;
    },
  },
});

export const { setArticles, setSelectedArticle, setUserInput } = articleSlice.actions;

export default articleSlice.reducer;
