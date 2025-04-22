import React from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import Input from '../Input/Input';
import Guesses from '../Guesses/Guesses';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [wordList, setWordList] = React.useState([]);

  function handleSubmitWord(tentativeGuess) {
    const nextWordList = [...wordList, tentativeGuess];
    setWordList(nextWordList);
  }

  return (
    <>
      <Guesses wordList={wordList} answer={answer} />
      <Input handleSubmitWord={handleSubmitWord} />
    </>
  );
}

export default Game;
