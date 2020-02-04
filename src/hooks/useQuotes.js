import { useState, useEffect } from 'react';
import getQuotes from '../services/FuturamaApi.js';

export default function useQuotes() {
  const [quotes, setQuotes] = useState([]);
  
  const fetchQuote = () => {
    getQuotes()
      .then(res => setQuotes(res));
  };

  useEffect(() => {
    fetchQuote();
  }, []);


  return { quotes, fetchQuote };
}

