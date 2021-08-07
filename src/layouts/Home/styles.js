import styled from 'styled-components';

export const Title = styled.h1`
  font-size: 2.4rem;
  line-height: 3.2rem;
  font-weight: 600;
  color: var(--text-color);
`;

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  margin-top: 3.2rem;

  > li + li {
    margin-top: 1.6rem;
  }
`;
