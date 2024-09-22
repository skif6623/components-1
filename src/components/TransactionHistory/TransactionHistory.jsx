import React from 'react';
import { TransactionHistoryItem } from './TransactionHistoryItem/TransactionHistoryItem';
import * as S from './TransactionHistory.styled';
export const TransactionHistory = ({ items }) => {
  return (
    <S.Table className="transaction-history">
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
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
