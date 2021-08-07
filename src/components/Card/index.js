import styled from 'styled-components';

import { Text } from '~/components/Text';

export const Card = styled.div`
  background: #fff;
  border: var(--default-border);
  border-radius: var(--border-radius);
  display: flex;
  flex-direction: column;
  overflow: hidden;
  position: relative;
`;

export const CardContent = styled.div`
  padding: 2.4rem 3.2rem;
`;

export const CardTitle = styled.h3`
  font-size: 2.1rem;
  line-height: 2.4rem;
  margin-bottom: 0.8rem;
  font-weight: 500;
`;

export const CardDescription = styled(Text)`
  color: var(--text-color-secondary);
`;

export const CardFooter = styled.div`
  font-family: 'Roboto', Arial, sans-serif;
  align-self: stretch;
  display: flex;
  padding: 1.6rem 2.3rem;
  border-top: 1px solid var(--border-color);
`;

export const CardFooterCTA = styled(CardFooter).attrs(() => ({
  as: 'button',
}))`
  background: var(--success-color);
  color: #fff;
  font-weight: 600;
  font-size: 1.8rem;
  line-height: 2.4rem;
  text-align: center;
  border: 0;
  cursor: pointer;
  justify-content: space-between;
  align-items: center;

  transition: all 0.35s ease;

  &:hover {
    filter: brightness(1.05);
  }

  svg path {
    fill: #fff;
  }
`;
