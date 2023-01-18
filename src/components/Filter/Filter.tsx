/*eslint-disable*/

import React, { useState, useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../hook';
import { setInputKeyWords, setPreparedArticles, setUserInput } from '../../store/articleSlice';
import { getWordsFromInput } from '../../utils/helpers/getKeyWordsFromInput';
import { rankArticlesByKeyWords } from '../../utils/helpers/rankArticles';

export const Filter = () => {
  const dispatch = useAppDispatch();
  const inputKeyWords = useAppSelector(state => state.articles.inputKeyWords);
  const userInput = useAppSelector(state => state.articles.userInput)
  const preparedArticles = useAppSelector(state => state.articles.preparedArticles);


  let title: HTMLElement | null = null

  const inputHandler = (userInputParam: string) => {
    dispatch(setUserInput(userInputParam));
    dispatch(setInputKeyWords(getWordsFromInput(userInputParam)));
  }

  // useEffect(() => {
  //   const articlesRanked = rankArticlesByKeyWords(preparedArticles, inputKeyWords)
  //   dispatch(setPreparedArticles(articlesRanked))
  // }, [inputKeyWords])

  useEffect(() => {
    console.log('input', userInput, inputKeyWords)
  })

    return (
      <div className="filter">
        <h2>Filter by keywords</h2>
        <input className="filter__input" type="" value={userInput} onChange={(e) => {inputHandler(e.target.value)}}/>
      </div>
    )
}
