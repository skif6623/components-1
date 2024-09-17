import styled from 'styled-components';

const ProfileCard = styled.div`
  position: relative;
  margin: 0 auto;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  width: 400px;
  height: 600px;

  background-color: #ffffff;
  border: 1px solid grey;
  border-radius: 5px;

  box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.2);
`;

const ProfileOverlay = styled.div`
  padding: 30px;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ProfileImage = styled.img`
  display: block;
  width: 150px;
  height: 150px;

  border: 1px solid grey;
  border-radius: 50%;
`;

const Title = styled.span`
  color: orange;
`;

const profileStyleComponents = {
  ProfileCard,
  ProfileOverlay,
  ProfileImage,
  Title,
};

export default profileStyleComponents;
