import React, { useEffect, useCallback } from 'react';
import { useForm } from 'react-hook-form';
import {
  Card,
  CardContent,
  CardTitle,
  Text,
  Input,
  Button,
} from '~/components';

import {
  Overlay,
  CloseButton,
  Form,
  DescriptionTitle,
  DescriptionContent,
} from './styles';

import { useCheckout } from '~/hooks/useCheckout';
import validateCPF from '~/utils/validateCPF';

import CloseSVG from '~/assets/svg/close.svg';
import { useSelectedPlatform } from '~/hooks/useSelectedPlatform';

export function CheckoutModal() {
  const { isCheckoutOpen, closeCheckout, selectedItem } = useCheckout();
  const selectedPlatform = useSelectedPlatform();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleValidateCPF = useCallback((value) => {
    const cpfNumbers = (value || '').replace(/[^\d]/g, '');

    if (!cpfNumbers) {
      return 'Campo obrigatório';
    }

    const isValid = validateCPF(cpfNumbers);

    return isValid || 'CPF Incorreto';
  }, []);

  function handleFormSubmit(userData) {
    const data = {
      userData,
      plan: selectedItem,
      platform: { ...selectedPlatform },
    };

    delete data.platform.plans;
    // eslint-disable-next-line no-console
    console.log(data);
  }

  useEffect(() => {
    const body = document.querySelector('body');

    body.style.overflow = isCheckoutOpen ? 'hidden' : 'initial';
  }, [isCheckoutOpen]);

  return (
    <Overlay isOpen={isCheckoutOpen}>
      <Card>
        <CloseButton onClick={closeCheckout}>
          <CloseSVG />
        </CloseButton>
        <CardContent>
          <CardTitle>Assinar Plano</CardTitle>

          <DescriptionTitle>Informações do plano</DescriptionTitle>

          <DescriptionContent>
            <Text>
              <strong>Plataforma:</strong> {selectedPlatform?.nome}
            </Text>
            <Text>
              <strong>Franquia:</strong> {selectedItem?.franquia}
            </Text>
            <Text>
              <strong>Valor:</strong> {selectedItem?.valor}
            </Text>

            {selectedItem?.aparelho && (
              <>
                <Text>
                  <strong>Aparelho:</strong> {selectedItem?.aparelho?.nome}
                </Text>
                <Text>
                  <strong>Valor do aparelho:</strong>{' '}
                  {selectedItem?.aparelho?.valor}
                  {selectedItem?.aparelho.valorParcela
                    ? ` ou ${selectedItem?.aparelho.numeroParcelas}x de ${selectedItem?.aparelho.valorParcela}`
                    : ''}
                </Text>
              </>
            )}
          </DescriptionContent>
          <Text>Preencha suas informações para assinar o plano.</Text>

          <Form onSubmit={handleSubmit(handleFormSubmit)}>
            <Input
              label="Nome"
              name="name"
              placeholder="Digite seu nome"
              {...register('name', {
                required: 'Campo obrigatório',
              })}
              error={errors?.name?.message}
            />
            <Input
              label="E-mail"
              type="email"
              placeholder="Digite seu e-email"
              {...register('email', {
                required: 'Campo obrigatório',
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{1,64}$/i,
                  message: 'E-mail inválido',
                },
              })}
              error={errors?.email?.message}
            />
            <Input
              label="Data de nascimento"
              name="birthday"
              type="date"
              placeholder="Digite sua data de nascimento"
              {...register('birthday', {
                required: 'Campo obrigatório',
                valueAsDate: true,
              })}
              error={errors?.birthday?.message}
            />
            <Input
              label="CPF"
              name="cpf"
              type="mask"
              mask="999.999.999-99"
              placeholder="Digite seu CPF"
              {...register('cpf', {
                required: 'Campo obrigatório',
                validate: handleValidateCPF,
              })}
              error={errors?.cpf?.message}
            />

            <Input
              label="Telefone"
              name="phone"
              type="mask"
              mask="+55 (99) 99999-9999"
              placeholder="Digite seu número de telefone"
              {...register('phone', {
                required: 'Campo obrigatório',
              })}
              error={errors?.phone?.message}
            />

            <Button type="submit">
              Assinar por R$ {selectedItem?.valor || '--'}
            </Button>
          </Form>
        </CardContent>
      </Card>
    </Overlay>
  );
}
