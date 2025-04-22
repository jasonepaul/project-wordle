import React from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import Input from '../Input/Input';
import Guesses from '../Guesses/Guesses';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';
import WonBanner from '../WonBanner/WonBanner';
import LostBanner from '../LostBanner/LostBanner';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [wordList, setWordList] = React.useState([]);
  const [status, setStatus] = React.useState('inProgress');

  function handleSubmitWord(tentativeGuess) {
    const nextWordList = [...wordList, tentativeGuess];
    setWordList(nextWordList);

    if (tentativeGuess === answer) {
      setStatus('won');
    } else if (nextWordList.length === NUM_OF_GUESSES_ALLOWED) {
      setStatus('lost');
    }
  }

  return (
    <>
      <Guesses wordList={wordList} answer={answer} />
      <Input handleSubmitWord={handleSubmitWord} gameStatus={status} />
      {status === 'won' && <WonBanner numGuesses={wordList.length} />}
      {status === 'lost' && <LostBanner answer={answer} />}
    </>
  );
}

export default Game;
