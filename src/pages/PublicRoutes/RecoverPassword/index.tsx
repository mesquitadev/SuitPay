import React, {useRef, useState} from 'react';
import {Alert, StatusBar} from 'react-native';

import {Button, InputForm} from '@components/index';
import {useForm} from 'react-hook-form';
import * as Yup from 'yup';
import {yupResolver} from '@hookform/resolvers/yup';
import theme from '@globals/styles/theme';
import {useAuth} from '@hooks/auth';
import api from '@services/api';
import {useDropDown} from '@hooks/dropdown';
import {Container, Fields, Form, Header, Paragraph, Title} from './styles';

interface FormData {
  username: string;
  email: string;
  password: string;
}

export default function RecoverPassword() {
  const {ref} = useDropDown();
  const schema = Yup.object().shape({
    key: Yup.string().required('Usuário é obrigatório'),
  });
  const {
    control,
    handleSubmit,
    reset,
    formState: {errors},
  } = useForm({
    resolver: yupResolver(schema),
  });

  async function handleSave(data: FormData) {
    try {
      await api.post('auth/forgot-password', data);
      ref.current.alertWithType(
        'success',
        'Sucesso!',
        'Por favor, Verifique o token enviado para sua caixa de email.',
      );
      reset();
    } catch (err) {
      ref.current.alertWithType(
        'error',
        'Erro!',
        'Por favor, Verifique as credenciais informadas e tente novamente.',
      );
    }
  }

  return (
    <Container>
      <StatusBar
        barStyle="light-content"
        backgroundColor={theme.colors.primary}
      />
      <Header>
        <Title>Esqueci minha senha</Title>
        <Paragraph>
          Coloque o nome de seu usuário para iniciarmos o processo de recuperar
          a senha
        </Paragraph>
      </Header>
      <Form>
        <Fields>
          <InputForm
            name="key"
            icon="at-sign"
            control={control}
            placeholder="Usuário ou E-mail"
            autoCapitalize="none"
            autoCorrect={false}
            returnKeyType="send"
            error={errors.key && errors.key.message}
          />
          <InputForm
            name="key"
            icon="at-sign"
            control={control}
            placeholder="Usuário ou E-mail"
            autoCapitalize="none"
            autoCorrect={false}
            returnKeyType="send"
            error={errors.key && errors.key.message}
          />
          <InputForm
            name="key"
            icon="at-sign"
            control={control}
            placeholder="Usuário ou E-mail"
            autoCapitalize="none"
            autoCorrect={false}
            returnKeyType="send"
            error={errors.key && errors.key.message}
          />
        </Fields>
        <Button title="Recuperar Senha" onPress={handleSubmit(handleSave)} />
      </Form>
    </Container>
  );
}
