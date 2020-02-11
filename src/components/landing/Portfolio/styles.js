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
  width: 100%;
  align-items: center;
  grid-template-columns: repeat(3, 1fr);
  gap: 5px;
`;

export const PortfolioWrapper = styled.div`
  padding: 4rem 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;
