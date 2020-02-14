import styled from 'styled-components';

export const Logo = styled.img.attrs({
  src: '/img/logo.png',
})`
  width: 100px;
  margin-top: 10px;
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  a {
    color: #212121;
  }
`;
