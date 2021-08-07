import React from 'react';

import {
  Container,
  Title,
  Text,
  List,
  Card,
  CardContent,
  CardTitle,
  CardDescription,
  CardFooterCTA,
} from '~/components';

import NextArrow from '~/assets/svg/arrow-next.svg';

import { useSelectedPlatform } from '~/hooks/useSelectedPlatform';
import { useCheckout } from '~/hooks/useCheckout';

export default function Platform() {
  const { nome, descricao, plans } = useSelectedPlatform();
  const { selectItem, openCheckout } = useCheckout();

  function handlePlanClick(index) {
    selectItem(plans[index]);
    openCheckout();
  }

  return (
    <Container>
      <Title>Planos {nome}</Title>
      <Text>{descricao}</Text>

      <List>
        {plans.map(({ sku, franquia, valor }, index) => (
          <Card as="li" key={sku}>
            <CardContent>
              <CardTitle>
                {nome} - {franquia}
              </CardTitle>
              <CardDescription>Franquia de {franquia}</CardDescription>
              <CardDescription>R$ {valor}</CardDescription>
            </CardContent>
            <CardFooterCTA onClick={() => handlePlanClick(index)}>
              Assinar <NextArrow />
            </CardFooterCTA>
          </Card>
        ))}
      </List>
    </Container>
  );
}
