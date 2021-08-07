import React from 'react';

import {
  Container,
  Text,
  Card,
  CardContent,
  CardTitle,
  CardDescription,
  CardFooter,
  Link,
} from '~/components';
import { Title, List } from './styles';

import { usePlatforms } from '~/hooks/usePlatforms';

export default function Home() {
  const platforms = usePlatforms();

  return (
    <Container>
      <Title>Plataformas</Title>
      <Text>Selecione uma plataforma</Text>

      <List>
        {platforms.map(({ sku, nome, descricao }) => (
          <Card as="li" key={sku}>
            <CardContent>
              <CardTitle>{nome}</CardTitle>
              <CardDescription>{descricao}</CardDescription>
            </CardContent>
            <CardFooter>
              <Link href="#" withArrow>
                Ver detalhes
              </Link>
            </CardFooter>
          </Card>
        ))}
      </List>
    </Container>
  );
}
