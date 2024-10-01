import { Component } from 'react';

import ReviewsSection from './ReviewsSection/ReviewsSection';
import ReviewsButtonsList from './ReviewsButtonsList/ReviewsButtonsList';
import ReviewsNotification from './ReviewsNotification/ReviewsNotification';
import ReviewsStatistic from './ReviewsStatistic/ReviewsStatistic';

// import * as S from './Reviews.styled';

import buttonsData from '../../data/reviewsButtons.json';

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
    const total = good + bad + neutral;

    return total;
  };

  countPositiveFeedbackPercentage = () => {
    const { good } = this.state;
    const total = this.countTotalFeedback();
    const result = Math.round((good / total) * 100);

    return `${result}%`;
  };

  render() {
    const { good, bad, neutral } = this.state;

    const total = this.countTotalFeedback();
    const isFeedback = total === 0;
    return (
      <>
        <ReviewsSection title={'Please leave feedback'}>
          <ReviewsButtonsList
            data={buttonsData}
            leaveFeedback={this.leaveFeedback}
          />
        </ReviewsSection>

        {isFeedback ? (
          <ReviewsNotification message={'There is no feedback'} />
        ) : (
          <ReviewsSection title={'Statistics'}>
            <ReviewsStatistic
              good={good}
              bad={bad}
              neutral={neutral}
              total={this.countTotalFeedback}
              positive={this.countPositiveFeedbackPercentage}
            />
          </ReviewsSection>
        )}
      </>
    );
  }
}

export default Reviews;
