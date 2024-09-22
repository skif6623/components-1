import React from 'react';
import * as S from './Statistics.styled';

const Statistics = ({ title, stats }) => {
  const getRandomHexColor = () => {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  };

  return (
    <S.Card className="statistics">
      {title && <S.Title className="title">{title}</S.Title>}

      <S.List className="stat-list">
        {stats.map(({ id, label, percentage }) => (
          <S.Item key={id} className="item" color={getRandomHexColor()}>
            <span className="label">{label}</span>
            <span className="percentage">{percentage}%</span>
          </S.Item>
        ))}
      </S.List>
    </S.Card>
  );
};

export default Statistics;
