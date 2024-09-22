import styled from 'styled-components';

export const Card = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 400px;
  height: 200px;
  margin: 0 auto;

  font-family: 'Roboto', system-ui;

  border-radius: 5px;
  box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.2);

  overflow: hidden;
`;

export const Title = styled.h2`
  padding: 40px;
  text-align: center;
  font-size: 36px;
`;

export const List = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Item = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: calc(100% / 5);
  height: 60px;

  background-color: ${p => p.color};
`;
