import React from 'react';
import { NUM_OF_LETTERS_PER_WORD } from '../../constants';
import { range } from '../../utils';

function Guess({ value }) {
  return (
    <p className='guess'>
      {range(NUM_OF_LETTERS_PER_WORD).map((index) => (
        <span key={index} className='cell'>
          {value ? value[index] : undefined}
        </span>
      ))}
    </p>
  );
}

export default Guess;
