import styled from 'styled-components';

export const Button = styled.button`
  padding: 10px 15px;

  background-color: ${p => {
    switch (p.children) {
      case 'good':
        return 'green';
      case 'bad':
        return 'red';
      case 'neutral':
        return 'orange';

      default:
        return;
    }
  }};
  border: none;
  border-radius: 5px;
`;
