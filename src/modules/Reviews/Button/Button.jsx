import React, { Component } from 'react';
import * as S from './Button.styled';

export class Button extends Component {
  render() {
    const { children, leaveFeedback } = this.props;
    return (
      <S.Button
        onClick={() => leaveFeedback(children)}
        type="button"
        color={children}
      >
        {children}
      </S.Button>
    );
  }
}

export default Button;
