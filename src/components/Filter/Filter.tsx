/*eslint-disable*/

import React, { useState, useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../hook';
import { setUserInput } from '../../store/articleSlice';

export const Filter = () => {
  const dispatch = useAppDispatch();
  const userInput = useAppSelector(state => state.articles.userInput);


  let title: HTMLElement | null = null

  const inputHandler = (userInputParam: string) => {
    dispatch(setUserInput(userInputParam));
  }

    return (
      <div className="filter">
        <input className="filter__input" type="" value={userInput} onChange={(e) => {inputHandler(e.target.value)}}/>
      </div>
    )
}
