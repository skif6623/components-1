import React from 'react';
import FriendListItem from './FriendListItem/FriendListItem';
import * as S from './FriendList.styled';

const FriendList = ({ friends }) => {
  return (
    <S.List className="friend-list">
      {friends.map(({ avatar, name, isOnline, id }) => (
        <FriendListItem
          key={id}
          avatar={avatar}
          name={name}
          isOnline={isOnline}
        />
      ))}
    </S.List>
  );
};

export default FriendList;
