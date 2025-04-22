import React from 'react';
import { NUM_OF_LETTERS_PER_WORD } from '../../constants';
import { range } from '../../utils';
import { checkGuess } from '../../game-helpers.js';

function Guess({ value, answer }) {
  const statuses = checkGuess(value, answer);

  return (
    <p className='guess'>
      {range(NUM_OF_LETTERS_PER_WORD).map((index) => (
        <span
          key={index}
          className={`cell ${
            statuses ? `cell ${statuses[index].status}` : 'cell'
          }`}
        >
          {value ? value[index] : undefined}
        </span>
      ))}
    </p>
  );
}

export default Guess;
