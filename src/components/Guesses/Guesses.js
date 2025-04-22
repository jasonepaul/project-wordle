import React from 'react';

function Guesses({ wordList }) {
  return (
    <div className='guess-results'>
      {wordList.map(({ word, id }) => (
        <p key={id} className='guess'>
          {word}
        </p>
      ))}
    </div>
  );
}

export default Guesses;
