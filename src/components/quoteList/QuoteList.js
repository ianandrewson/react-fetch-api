import React from 'react';
import PropTypes from 'prop-types';
import FuturamaQuote from '../quote/FuturamaQuote.js';

export default function QuoteList({ quotes }) {

  const fetchedQuotes = quotes.map(({ quote, character }, i) => {
    return (
      <li key={i}>
        <FuturamaQuote character={character} quote={quote}/>
      </li>
    );
  });

  return (
    <ul>
      {fetchedQuotes}
    </ul>
  );
}

QuoteList.propTypes = {
  quotes: PropTypes.arrayOf(PropTypes.shape({
    quote: PropTypes.string.isRequired,
    character: PropTypes.string.isRequired
  })).isRequired
};
