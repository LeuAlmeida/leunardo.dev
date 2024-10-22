import styled from 'styled-components';

export const Wrapper = styled.div`
  padding: 28rem 0 4rem 0;

  @media (max-width: 1960px) {
    padding: 5rem 0 4rem;
  }

  @media (max-width: 768px) {
    margin-bottom: 65px;
  }
`;

export const Flex = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;

  @media (max-width: 680px) {
    flex-direction: column;
    text-align: center;
    align-items: center;
  }
`;

export const Links = styled.div`
  display: flex;
  align-items: center;

  a {
    margin: 0 0.5rem;

    img {
      margin: 0;
    }

    &:first-child,
    &:last-child {
      margin: 0;
    }
  }
`;
