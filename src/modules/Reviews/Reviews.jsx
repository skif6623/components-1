import React, { Component } from 'react';
import Button from './Button/Button';
import Stat from './Stat/Stat';
import buttonsData from '../../data/reviewsButtons.json';

import * as S from './Reviews.styled';

export class Reviews extends Component {
  state = {
    good: 0,
    bad: 0,
    neutral: 0,
  };

  leaveFeedback = button => {
    this.setState(prevState => {
      return {
        [button]: prevState[button] + 1,
      };
    });
  };

  countTotalFeedback = () => {
    const { good, bad, neutral } = this.state;
    return good + bad + neutral;
  };

  countPositiveFeedbackPercentage = () => {
    const { good } = this.state;
    const result = ((good / this.countTotalFeedback()) * 100).toFixed();
    return `${result}%`;
  };

  render() {
    const { good, bad, neutral } = this.state;

    return (
      <>
        <h1>Please leave feedback</h1>

        <S.List>
          {buttonsData.map(({ id, button }) => (
            <li key={id}>
              <Button leaveFeedback={this.leaveFeedback}>{button}</Button>
            </li>
          ))}
        </S.List>

        <h2>Statistics</h2>

        <ul>
          <li>
            <Stat>good: {good} </Stat>
          </li>
          <li>
            <Stat>bad: {bad}</Stat>
          </li>
          <li>
            <Stat>neutral: {neutral}</Stat>
          </li>
          <li>
            <Stat>total: {this.countTotalFeedback()}</Stat>
          </li>
          <li>
            <Stat>
              Positive feedback:{' '}
              {good !== 0 ? this.countPositiveFeedbackPercentage() : 0}
            </Stat>
          </li>
        </ul>
      </>
    );
  }
}

export default Reviews;
