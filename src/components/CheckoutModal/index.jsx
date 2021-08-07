import React from 'react';

import { Card, CardContent, CardTitle, Text } from '~/components';

import { useCheckout } from '~/hooks/useCheckout';
import { Container, CloseButton } from './styles';

import CloseSVG from '~/assets/svg/close.svg';

export function CheckoutModal() {
  const { isCheckoutOpen, closeCheckout } = useCheckout();

  return (
    <Container isOpen={isCheckoutOpen}>
      <Card>
        <CloseButton onClick={closeCheckout}>
          <CloseSVG />
        </CloseButton>
        <CardContent>
          <CardTitle>Checkout</CardTitle>
          <Text>Preencha suas informações para assinar o plano.</Text>
        </CardContent>
      </Card>
    </Container>
  );
}
