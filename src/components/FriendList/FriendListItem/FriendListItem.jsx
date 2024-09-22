import React from 'react';

import * as S from './FriendListItem.styled';

const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <S.Item className="item">
      <S.Status className="status" isOnline={isOnline}></S.Status>
      <img className="avatar" src={avatar} alt={name} width="48" />
      <p className="name">{name}</p>
    </S.Item>
  );
};

export default FriendListItem;
