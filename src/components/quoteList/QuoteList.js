import React from 'react';
import PropTypes from 'prop-types';
import FuturamaQuote from '../quote/FuturamaQuote.js';

export default function QuoteList({ quotes, fetchQuote, handleChange }) {

  const fetchedQuotes = quotes.map(({ quote, character }, i) => {
    return (
      <li key={i}>
        <FuturamaQuote character={character} quote={quote}/>
      </li>
    );
  });

  return (
    <>
      <ul>
        {fetchedQuotes}
      </ul>
      <button onClick={fetchQuote}>New Quote</button>
      <input type='text' defaultValue={1} onChange={handleChange} />
    </>
  );
}

QuoteList.propTypes = {
  fetchQuote: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
  quotes: PropTypes.arrayOf(PropTypes.shape({
    quote: PropTypes.string.isRequired,
    character: PropTypes.string.isRequired
  })).isRequired
};
