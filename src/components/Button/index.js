import styled from 'styled-components';

export const Button = styled.button`
  padding: 1rem 2rem;
  border-radius: var(--default-border-radius);
  background: var(--primary-color);
  font-family: 'Roboto', Arial, sans-serif;
  border: 0;

  color: #fff;
  font-size: 1.6rem;
  line-height: 2.8rem;

  cursor: pointer;

  transition: all 0.35s ease;

  font-weight: 500;

  &:hover {
    filter: brightness(1.15);
  }
`;
