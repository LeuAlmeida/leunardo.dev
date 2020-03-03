import styled from 'styled-components';

export const Wrapper = styled.div`
  a {
    font-weight: bold;
    text-decoration: none;
    margin: 0px 8px;
    font-size: 16px;
    color: #333;
  }

  button {
    border: 0;
    background: 0;
    cursor: pointer;

    display: unset;

    @media only screen and (max-width: 960px) {
      display: none;
    }
  }

  ${({ desktop }) =>
    desktop
      ? `
			@media (max-width: 960px) {
					display: none;
			}

			a {
					margin-right: 1rem;

					&:last-child {
							margin-right: unset;
					}
			}
		`
      : `
			padding: 3rem;
			display: flex;
			flex-direction: column;

			a {
					margin-bottom: 1rem;

					&:last-child {
							margin-bottom: unset;
					}
			}
	`}
`;
