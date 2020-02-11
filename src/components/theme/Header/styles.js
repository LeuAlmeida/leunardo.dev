import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  background: rgba(250, 250, 250, 0.5);
  height: 65px;
  position: fixed;
  z-index: 5555;
`;

export const Overlay = styled.div`
  position: fixed;
  background: rgba(0, 0, 0, 0.8);
  width: 100%;
  height: 100%;
  display: none;
  transition: 0.4s;

  ${({ sidebar }) =>
    sidebar &&
    `
			display: block;
			z-index: 4;	
	`}
`;
