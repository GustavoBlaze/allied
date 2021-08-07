import styled, { css } from 'styled-components';

export const Container = styled.a`
  &,
  &:visited {
    color: var(--primary-color);
    font-size: 1.6rem;
    line-height: 1.6rem;
    text-decoration: none;

    &:hover {
      filter: brightness(0.7);
    }

    ${({ withArrow }) =>
      withArrow &&
      css`
        display: flex;
        align-self: stretch;
        width: 100%;
        justify-content: space-between;
        align-items: center;
      `}
  }
`;
