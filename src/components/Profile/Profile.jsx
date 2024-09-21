import React from 'react';
import * as S from './Profile.styled';

const Profile = ({
  username,
  tag,
  location,
  avatar,
  stats: { followers, views, likes },
}) => {
  return (
    <S.Card>
      <S.Overlay>
        <S.Avatar src={avatar} alt={username} />
        <S.Name>{username}</S.Name>
        <S.Tag>@{tag}</S.Tag>
        <S.Location>{location}</S.Location>
      </S.Overlay>

      <S.List>
        <S.Item>
          <S.Title>Followers</S.Title>
          <S.Value>{followers}</S.Value>
        </S.Item>
        <S.Item>
          <S.Title>Views</S.Title>
          <S.Value>{views}</S.Value>
        </S.Item>
        <S.Item>
          <S.Title>Likes</S.Title>
          <S.Value>{likes}</S.Value>
        </S.Item>
      </S.List>
    </S.Card>
  );
};

export default Profile;
