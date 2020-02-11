import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  max-width: 1500px;
`;

export const Grid = styled.div`
  display: grid;
  background: red;
  width: 80%;
  align-items: center;
  grid-template-columns: repeat(3, 1fr);
  gap: 40px;
  list-style: none;
`;
