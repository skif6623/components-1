import styled from 'styled-components';

export const TypeTitle = styled.td`
  padding-left: 9%;

  width: 150px;
  height: 40px;

  color: #939699;
  text-align: left;
  vertical-align: middle;
  text-transform: capitalize;

  border: 1px solid #e5e5e3;
`;
export const Description = styled(TypeTitle)`
  padding: 0;

  text-align: center;
  text-transform: none;
`;

export const Row = styled.tr`
  &:nth-child(even) {
    background-color: #ecf1f4;
  }
`;
