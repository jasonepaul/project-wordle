import React from 'react';

function Input() {
  const [word, setWord] = React.useState('');

  function handleSubmit(event) {
    event.preventDefault();
    console.log({ word });
    setWord('');
  }

  return (
    <form onSubmit={handleSubmit} className='guess-input-wrapper'>
      <label htmlFor='guess-input'>Enter guess:</label>
      <input
        id='guess-input'
        type='text'
        pattern='[a-zA-Z]{5}'
        title='5-letter word'
        value={word}
        onChange={(event) => setWord(event.target.value.toUpperCase())}
        required
      />
    </form>
  );
}

export default Input;
