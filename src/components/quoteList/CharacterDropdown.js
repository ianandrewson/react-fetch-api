import React from 'react';
import characters from './characters.js';
import PropTypes from 'prop-types';

export default function CharacterDropdown({ selectCharacter }) {
  const characterOptions = characters.map((character, i) => {
    return (
      <option key={i} value={character}>{character}</option>
    );
  });

  return (
    <select onChange={selectCharacter}>
      {characterOptions}
    </select>
  );
}
CharacterDropdown.propTypes = {
  selectCharacter: PropTypes.func.isRequired
};
