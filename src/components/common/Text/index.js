import styled from 'styled-components';

export const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  /* padding-left: 10%; */
  width: 200px;
  align-self: flex-start;
`;

export const H2 = styled.h2`
  font-size: 32px;
  color: #7178fc;
  margin-bottom: 0 !important;

  &:before {
    content: '';
    margin-bottom: 4px;
    display: block;
    width: 50px;
    height: 5px;
    border-radius: 10px;
    background: #7178fc;
  }
`;

export const SubTitle = styled.span`
  font-size: 14px;
  font-weight: bold;
  color: #666;
`;
