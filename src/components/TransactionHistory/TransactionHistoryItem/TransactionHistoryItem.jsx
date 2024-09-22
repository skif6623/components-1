import React from 'react';
import * as S from './TransactionHistoryItem.styled';

export const TransactionHistoryItem = ({ type, amount, currency }) => {
  return (
    <S.Row>
      <S.TypeTitle>{type}</S.TypeTitle>
      <S.Description>{amount}</S.Description>
      <S.Description>{currency}</S.Description>
    </S.Row>
  );
};
