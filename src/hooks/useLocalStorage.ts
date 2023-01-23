import { useState, useEffect } from 'react';

export const useLocalStorage = (initialValue: string, key: string) => {
  const getValue = () => {
    const dataFromLStorage = localStorage.getItem(key);

    if (dataFromLStorage) {
      return JSON.parse(dataFromLStorage);
    }

    return initialValue;
  };

  const [value, setValue] = useState(getValue);

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [value]);

  return [value, setValue];
};
