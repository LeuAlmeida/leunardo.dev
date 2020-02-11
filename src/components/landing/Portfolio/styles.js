import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: flex-end;
  max-width: 1500px;
  width: 90%;
  flex: 1;
`;

export const Grid = styled.div`
  display: grid;
  background: red;
  /* grid-auto-rows: 300px; */
  align-items: center;
  grid-template-columns: repeat(3, 1fr);
  gap: 40px;
  list-style: none;
`;
