import React from 'react';

function Input({ handleSubmitWord, gameStatus }) {
  console.log('status: ' + gameStatus);
  const [tentativeGuess, setTentativeGuess] = React.useState('');

  function handleSubmit(event) {
    event.preventDefault();
    handleSubmitWord(tentativeGuess);
    setTentativeGuess('');
  }

  return (
    <form onSubmit={handleSubmit} className='guess-input-wrapper'>
      <label htmlFor='guess-input'>Enter guess:</label>
      <input
        id='guess-input'
        type='text'
        pattern='[a-zA-Z]{5}'
        title='5-letter word'
        value={tentativeGuess}
        onChange={(event) =>
          setTentativeGuess(event.target.value.toUpperCase())
        }
        required
        disabled={gameStatus !== 'inProgress'}
      />
    </form>
  );
}

export default Input;
