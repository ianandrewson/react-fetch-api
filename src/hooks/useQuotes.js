import { useState, useEffect } from 'react';
import getQuotes from '../services/FuturamaApi.js';

export default function useQuotes() {
  const [quotes, setQuotes] = useState([]);
  
  useEffect(() => {
    getQuotes()
      .then(res => setQuotes(res));
  }, []);

  return { quotes };
};

