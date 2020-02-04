import React, { useState, useEffect } from 'react';
import Header from '../components/header/Header.js';
import QuoteList from '../components/quoteList/QuoteList.js';
import getQuotes from '../services/FuturamaApi.js';

export default function FetchFutureFn() {
  const [quotes, setQuotes] = useState([]);

  useEffect(() => {
    getQuotes()
      .then(res => setQuotes(res));
  }, []);

  return (
    <>
      <Header />
      <QuoteList quotes={quotes} />
    </>
  );
}
