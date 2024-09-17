import React from 'react';
import profileStyleComponents from './Profile.styled';
const { ProfileCard, ProfileImage, ProfileOverlay, Title } =
  profileStyleComponents;
const Profile = ({
  username,
  tag,
  location,
  avatar,
  stats: { followers, views, likes },
}) => {
  return (
    <ProfileCard>
      <ProfileOverlay>
        <ProfileImage src={avatar} alt={username} />
        <p>{username}</p>
        <p>{tag}</p>
        <p>{location}</p>
      </ProfileOverlay>

      <ul>
        <li>
          <Title>Followers</Title>
          <span>{followers}</span>
        </li>
        <li>
          <span>Views</span>
          <span>{views}</span>
        </li>
        <li>
          <span>Likes</span>
          <span>{likes}</span>
        </li>
      </ul>
    </ProfileCard>
  );
};

export default Profile;
