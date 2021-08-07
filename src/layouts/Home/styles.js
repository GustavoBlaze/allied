import styled from 'styled-components';

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  margin-top: 3.2rem;

  > li + li {
    margin-top: 1.6rem;
  }
`;
