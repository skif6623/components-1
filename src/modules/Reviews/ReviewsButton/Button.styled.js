import styled from 'styled-components';

export const Button = styled.button`
  padding: 10px 15px;

  background-color: ${({ color }) => color};
  border: none;
  border-radius: 5px;
`;
