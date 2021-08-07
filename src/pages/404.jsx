import React from 'react';
import { Container, Title, Link } from '~/components';

export default function Page() {
  return (
    <Container>
      <Title style={{ marginBottom: '1.6rem' }}>Página não encontrada</Title>
      <Link href="/" preFetch={false}>
        Voltar para página inicial
      </Link>
    </Container>
  );
}
