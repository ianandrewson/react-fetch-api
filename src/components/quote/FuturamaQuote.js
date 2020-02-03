import React from 'react';
import PropTypes from 'prop-types';

export default function FuturamaQuote({ character, quote }) {
  return (
    <>
      <p>Character: {character}</p>
      <p>Quote: {quote}</p>
    </>
  );
}

FuturamaQuote.propTypes = {
  character: PropTypes.string.isRequired,
  quote: PropTypes.string.isRequired
};

