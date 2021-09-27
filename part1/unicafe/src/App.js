import React, { useState } from 'react';

const StatisticLine = ({ text, value }) => {
  return (
    <p>
      {text} {value}
    </p>
  );
};

const Button = ({ text, handler }) => {
  console.log(handler);
  return <button onClick={handler}>{text}</button>;
};

const Statistics = ({ good, neutral, bad }) => {
  const all = good + neutral + bad;
  const average = (good - bad) / all;
  const positive = (good / all) * 100;
  return (
    <div key="statistics">
      <table>
        <tr>
          <StatisticLine text="good" value={good} />
        </tr>
        <tr>
          <StatisticLine text="neutral" value={neutral} />
        </tr>
        <tr>
          {' '}
          <StatisticLine text="bad" value={bad} />
        </tr>
        <tr>
          {' '}
          <StatisticLine text="all" value={all} />
        </tr>
        <tr>
          {' '}
          <StatisticLine text="average" value={average} />
        </tr>
        <tr>
          {' '}
          <StatisticLine text="positive" value={positive} />
        </tr>
      </table>
    </div>
  );
};

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [feedbackGiven, setFeedback] = useState(false);

  const buttonHandlers = {
    handleGood: () => {
      setGood(good + 1);
      !feedbackGiven && setFeedback(true);
    },
    handleNeutral: () => {
      setNeutral(neutral + 1);
      !feedbackGiven && setFeedback(true);
    },
    handleBad: () => {
      setBad(bad + 1);
      !feedbackGiven && setFeedback(true);
    },
  };

  return (
    <div>
      <h1>give feedback</h1>
      <Button text="good" handler={buttonHandlers.handleGood} />
      <Button text="neutral" handler={buttonHandlers.handleNeutral} />
      <Button text="bad" handler={buttonHandlers.handleBad} />
      <h1>statistics</h1>
      {feedbackGiven ? (
        <Statistics good={good} bad={bad} neutral={neutral} />
      ) : (
        <p>No feedback given</p>
      )}
    </div>
  );
};

export default App;
