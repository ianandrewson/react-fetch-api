import { useState, useEffect } from 'react';
import getQuotes from '../services/FuturamaApi.js';

export default function useQuotes() {
  const [quotes, setQuotes] = useState([]);
  const [num, setNum] = useState(1);
  const [userCharacter, setUserCharacter] = useState('none');
  
  const fetchQuote = () => {
    getQuotes(num, userCharacter)
      .then(res => setQuotes(res));
  };

  useEffect(() => {
    fetchQuote();
  }, []);

  const handleChange = (({ target }) => {
    setNum(target.value);
  });

  const selectCharacter = (({ target }) => {
    setUserCharacter(target.value);
  });


  return { quotes, fetchQuote, handleChange, selectCharacter };
}

