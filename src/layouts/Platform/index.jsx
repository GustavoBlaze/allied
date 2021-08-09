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
  Link,
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
        {plans
          .filter(({ ativo }) => ativo)
          .map(({ sku, franquia, valor, aparelho }, index) => (
            <Card as="li" key={sku}>
              <CardContent>
                <CardTitle>
                  {nome} - {franquia}
                </CardTitle>
                <CardDescription>Franquia de {franquia}</CardDescription>
                <CardDescription>Valor do plano: R$ {valor}</CardDescription>

                {aparelho && (
                  <CardDescription>
                    {aparelho.nome}: {aparelho.valor}
                    {aparelho.valorParcela
                      ? ` ou ${aparelho.numeroParcelas}x de ${aparelho.valorParcela}`
                      : ''}
                  </CardDescription>
                )}
              </CardContent>
              <CardFooterCTA onClick={() => handlePlanClick(index)}>
                Assinar <NextArrow />
              </CardFooterCTA>
            </Card>
          ))}
      </List>

      <Link href="/" style={{ marginTop: '2.4rem', alignSelf: 'center' }}>
        Voltar
      </Link>
    </Container>
  );
}
