import styled from 'styled-components';

export const Stack = styled.div`
  display: flex;
  flex-direction: ${({ direction }) => direction || 'column'};
`;
