import React, { useState } from 'react';

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients',
  ];

  const [selected, setSelected] = useState(0);

  const [points, setPoints] = useState({ 0: 1, 1: 3, 2: 4, 3: 2 });

  const copy = { ...points };
  const biggestIndex = Object.values(copy).indexOf(Math.max(...Object.values(copy)));

  return (
    <div>
      <h1>Anecdote of the day</h1>
      {anecdotes[selected]}
      <p>has {copy[selected]} points </p>
      <div>
        <button
          onClick={() => {
            copy[selected] += 1;
            setPoints(copy);
          }}
        >
          vote
        </button>
        <button
          onClick={() => {
            setSelected(selected + 1);
          }}
        >
          next anecdote
        </button>
      </div>
      <h1>Anecdote with most votes</h1>
      <p>{anecdotes[biggestIndex]}</p>
      <p>has {copy[biggestIndex]} votes</p>
    </div>
  );
};

export default App;
