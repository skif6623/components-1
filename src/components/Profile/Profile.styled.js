import styled from 'styled-components';

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 350px;
  height: 450px;
  margin: 0 auto;

  font-family: 'Roboto', system-ui;

  background-color: #ffffff;
  border: 1px solid grey;
  border-radius: 5px;

  box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.2);
`;

export const Overlay = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 30px;
`;

export const Avatar = styled.img`
  display: block;
  width: 145px;
  height: 145px;
  margin-bottom: 20px;

  border: 1px solid grey;
  border-radius: 50%;
`;

export const Name = styled.span`
  margin-bottom: 10px;

  font-size: 25px;
  font-weight: 700;
  font-style: normal;
`;

export const Tag = styled.span`
  margin-bottom: 10px;

  color: #8d9aa7;
  font-size: 14px;
  font-weight: 400;
  font-style: normal;
`;

export const Location = styled(Tag)`
  margin-bottom: 0;

  font-size: 16px;
`;

export const List = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Item = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 33.33333%;
  height: 100px;

  background-color: #f3f6f9;
  border: 1px solid #ebeff4;
`;
export const Title = styled.span`
  margin-bottom: 5px;
  color: #7c8b9a;
`;
export const Value = styled(Name)`
  margin-bottom: 0px;
  font-size: 18px;
`;
