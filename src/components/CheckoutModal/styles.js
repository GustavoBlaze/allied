import styled, { css } from 'styled-components';

import { Card, Text } from '~/components';

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
  justify-content: center;
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

  > ${Card} {
    border-radius: 0;
    height: 100%;
    max-width: 720px;
    margin: 0 auto;
    width: 100%;
    box-shadow: 0px 16px 48px rgba(0, 0, 0, 0.48);
    transition: all 0.35s ease;

    overflow: auto;

    ${({ isOpen }) =>
      isOpen
        ? css`
            transform: translateY(0);
          `
        : css`
            transform: translateY(20%);
          `}
  }

  @media (min-width: 540px) {
    padding: 1.6rem;

    ${Card} {
      border-radius: var(--card-border-radius);
      height: auto;
    }
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

export const DescriptionTitle = styled.h3`
  font-weight: 500;
  margin-bottom: 0.8rem;
`;

export const DescriptionContent = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 2.4rem;
  padding: 1.6rem;
  border: var(--default-border);
  border-radius: var(--default-border-radius);
  background: rgba(0, 0, 0, 0.03);

  ${Text} {
    font-size: 1.4rem;
  }
`;

export const Form = styled.form`
  display: grid;
  grid-template-rows: 1fr;
  grid-template-columns: 1fr;
  gap: 1.6rem;
  align-items: stretch;
  margin-top: 2.4rem;
`;
