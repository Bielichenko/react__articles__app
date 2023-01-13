/* eslint-disable no-param-reassign */

import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IArticleCard } from '../types/IArticleCard';

type ArticlesState = {
  list: IArticleCard[];
  selectedArticle: IArticleCard | null;
};

const initialState: ArticlesState = {
  list: [],
  selectedArticle: null,
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
  },
});

export const { setArticles, setSelectedArticle } = articleSlice.actions;

export default articleSlice.reducer;
