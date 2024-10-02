import React from 'react';

const ReviewsStatistic = props => {
  const elements = Object.entries(props).map(([key, value]) => {
    const isFunction = typeof value === 'function';
    return (
      <li key={key}>
        <p>
          {key} : {isFunction ? value() : value}
        </p>
      </li>
    );
  });

  return <ul>{elements}</ul>;
};

export default ReviewsStatistic;
