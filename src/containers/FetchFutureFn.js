import React from 'react';
import Header from '../components/header/Header.js';
import QuoteList from '../components/quoteList/QuoteList.js';
import useQuotes from '../hooks/useQuotes.js';


export default function FetchFutureFn() {
  const { quotes, fetchQuote, handleChange } = useQuotes();

  return (
    <>
      <Header />
      <QuoteList quotes={quotes} fetchQuote={fetchQuote} handleChange={handleChange} />
    </>
  );
}
