import styled, { css } from 'styled-components';

import { Text } from '~/components';

export const Container = styled.div`
  align-self: stretch;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: stretch;
`;

export const Label = styled(Text).attrs({
  as: 'label',
})`
  font-size: 1.6rem;
  line-height: 1;
  margin-bottom: 0.8rem;
  color: var(--text-color-secondary);
`;

export const Input = styled.input`
  border-radius: var(--default-border-radius);
  border: var(--default-border);
  padding: 1rem 1.2rem;
  font-size: 1.5rem;
  line-height: 2rem;
  color: var(--text-color);
  font-family: 'Roboto', arial, sans-serif;
  width: 100%;

  background: transparent;

  &::placeholder {
    color: var(--text-color-secondary);
  }

  ${({ $hasError }) =>
    $hasError &&
    css`
      border: 1px solid red;

      &::placeholder {
        color: red;
      }
    `}
`;

export const Error = styled.span`
  font-size: 12px;
  line-height: 16px;
  margin-top: 0.8rem;
  color: red;
`;
