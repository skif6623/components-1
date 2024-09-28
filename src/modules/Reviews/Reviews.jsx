import React, { Component } from 'react';
import Button from './Button/Button';
import FeedbackStatistic from './FeedbackStatistic/FeedbackStatistic';
import Section from './Section/Section';
import Notification from './Notification/Notification';
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
    return this.state.good + this.state.bad + this.state.neutral;
  };

  countPositiveFeedbackPercentage = () => {
    const result = (
      (this.state.good / this.countTotalFeedback()) *
      100
    ).toFixed();
    return `${result}%`;
  };

  render() {
    const { good, bad, neutral } = this.state;
    return (
      <>
        <Section title={'Please leave feedback'}>
          <S.List>
            {buttonsData.map(({ id, button }) => (
              <li key={id}>
                <Button leaveFeedback={this.leaveFeedback}>{button}</Button>
              </li>
            ))}
          </S.List>
        </Section>

        {this.countTotalFeedback() === 0 ? (
          <Notification message={'There is no feedback'} />
        ) : (
          <Section title={'Statistics'}>
            <FeedbackStatistic
              good={good}
              bad={bad}
              neutral={neutral}
              total={this.countTotalFeedback}
              positive={this.countPositiveFeedbackPercentage}
            />
          </Section>
        )}
      </>
    );
  }
}

export default Reviews;
