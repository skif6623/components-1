import * as S from './Button.styled';

export const ReviewsButton = ({ children, leaveFeedback, color }) => {
  return (
    <S.Button
      onClick={() => leaveFeedback(children)}
      type="button"
      color={color}
    >
      {children}
    </S.Button>
  );
};
export default ReviewsButton;
