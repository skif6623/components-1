import styled from 'styled-components';

export const Item = styled.li`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 5px 10px;

  box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.2);
`;

export const Status = styled.span`
  display: block;
  width: 10px;
  height: 10px;

  background-color: ${p => (p.isOnline ? '#47B14A' : '#FA5454')};
  border-radius: 50%;
`;
