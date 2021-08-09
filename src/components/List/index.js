import styled from 'styled-components';

export const List = styled.ul`
  margin-top: 3.2rem;

  display: grid;
  grid-template-rows: 1fr;
  grid-template-columns: 1fr;
  grid-gap: 1.6rem;

  @media (min-width: 992px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
`;
