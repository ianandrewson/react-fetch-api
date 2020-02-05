import React from 'react';
import PropTypes from 'prop-types';
import FuturamaQuote from '../quote/FuturamaQuote.js';
import CharacterDropdown from './CharacterDropdown.js';

export default function QuoteList({ quotes, fetchQuote, handleChange, selectCharacter }) {

  const fetchedQuotes = quotes.map(({ quote, character }, i) => {
    return (
      <li key={i}>
        <FuturamaQuote character={character} quote={quote}/>
      </li>
    );
  });

  return (
    <>
      <button onClick={fetchQuote}>New Quote</button>
      <input type='text' defaultValue={1} onChange={handleChange} />
      <CharacterDropdown selectCharacter={selectCharacter}/>
      <ul>
        {fetchedQuotes}
      </ul>
    </>
  );
}

QuoteList.propTypes = {
  fetchQuote: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
  selectCharacter: PropTypes.func.isRequired,
  quotes: PropTypes.arrayOf(PropTypes.shape({
    quote: PropTypes.string.isRequired,
    character: PropTypes.string.isRequired
  })).isRequired
};
