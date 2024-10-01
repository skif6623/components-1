import React from 'react';

import ReviewsButton from '../ReviewsButton/ReviewsButton';

import * as S from './ReviewsButtonsList.styled';

const ReviewsButtonsList = ({ data, leaveFeedback }) => {
  const elements = data.map(({ id, button, color }) => (
    <li key={id}>
      <ReviewsButton leaveFeedback={leaveFeedback} color={color}>
        {button}
      </ReviewsButton>
    </li>
  ));

  return <S.List>{elements}</S.List>;
};

export default ReviewsButtonsList;
