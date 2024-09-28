import React from 'react';

const FeedbackStatistic = ({ good, bad, neutral, total, positive }) => {
  return (
    <ul>
      <li>
        <p>good: {good} </p>
      </li>
      <li>
        <p>bad: {bad}</p>
      </li>
      <li>
        <p>neutral: {neutral}</p>
      </li>
      <li>
        <p>total: {total()}</p>
      </li>
      <li>
        <p>Positive feedback: {good !== 0 ? positive() : 0}</p>
      </li>
    </ul>
  );
};

export default FeedbackStatistic;
