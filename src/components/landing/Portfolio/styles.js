import styled, { css } from 'styled-components';

export const FilterWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const FilterItem = styled.li`
  background: transparent;
  list-style: none;
  border: 0;
  cursor: pointer;
  font-size: 16px;
  font-weight: bold;
  margin: 0 10px;

  color: ${props => (props.active ? '#7178fc' : '#666')};
  &:before {
    content: '';
    margin-bottom: 4px;
    display: block;
    width: 100%;
    height: 5px;
    border-radius: 10px;
    background: transparent;
  }

  ${props =>
    props.active &&
    css`
      &:before {
        background: #7178fc;
      }
    `}
`;

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
