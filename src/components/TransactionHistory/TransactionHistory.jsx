import React from 'react';
import { TransactionHistoryItem } from './TransactionHistoryItem/TransactionHistoryItem';
import * as S from './TransactionHistory.styled';
export const TransactionHistory = ({ items }) => {
  return (
    <S.Table className="transaction-history">
      <thead>
        <tr>
          <S.Header>Type</S.Header>
          <S.Header>Amount</S.Header>
          <S.Header>Currency</S.Header>
        </tr>
      </thead>

      <tbody>
        {items.map(({ id, type, amount, currency }) => (
          <TransactionHistoryItem
            key={id}
            type={type}
            amount={amount}
            currency={currency}
          />
        ))}
      </tbody>
    </S.Table>
  );
};
