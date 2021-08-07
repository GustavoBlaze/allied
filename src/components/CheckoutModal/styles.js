import styled, { css } from 'styled-components';

export const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 1.6rem;
  transition: all 0.35s ease;
  opacity: 0;
  pointer-events: none;
  align-items: stretch;

  z-index: 10;

  ${({ isOpen }) =>
    isOpen &&
    css`
      opacity: 1;
      pointer-events: initial;
    `}

  > div {
    box-shadow: 0px 16px 48px rgba(0, 0, 0, 0.48);
  }
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 0.8rem;
  right: 0.8rem;
  background: 0;
  border: 0;
  cursor: pointer;

  padding: 0.6rem;
`;
