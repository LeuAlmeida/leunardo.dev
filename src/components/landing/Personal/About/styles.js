import styled from 'styled-components';

export const TastesQuirksRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  margin-bottom: 40px;

  @media (max-width: 410px) {
    display: grid;
    width: 100%;
    align-items: center;
    grid-template-columns: repeat(2, 1fr);
    gap: 15px;
  }
`;

export const TasteOrQuirk = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  span {
    font-weight: bold;
    text-transform: uppercase;
    color: #7178fc;
    font-size: 22px;
    margin-top: 8px;
  }
`;
