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

export default function SignUp() {
  const {ref} = useDropDown();
  const emailInputRef = useRef(null);
  const passwordRef = useRef(null);
  const passwordRefConfirmation = useRef(null);
  const schema = Yup.object().shape({
    username: Yup.string().required('Usuário é obrigatório'),
    email: Yup.string().required('Email é obrigatório'),
    password: Yup.string().required('Senha é obrigatória'),
    passwordConfirmation: Yup.string()
      .required('A confirmação da senha é obrigatoria!')
      .oneOf([Yup.ref('password'), null], 'As senhas digitadas não conferem'),
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
      await api.post('auth/signup', data);
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
        <Title>Cadastro</Title>
        <Paragraph>
          Faça agora seu cadastro na melhor solução de pagamento para sua
          empresa, marketplace ou negócio online.
        </Paragraph>
      </Header>
      <Form>
        <Fields>
          <InputForm
            name="username"
            icon="at-sign"
            control={control}
            placeholder="Nome de usuário"
            autoCapitalize="none"
            autoCorrect={false}
            returnKeyType="next"
            onSubmitEditing={() => {
              emailInputRef.current?.focus();
            }}
            error={errors.username && errors.username.message}
          />

          <InputForm
            ref={emailInputRef}
            name="email"
            icon="mail"
            control={control}
            placeholder="E-mail"
            autoCapitalize="none"
            autoCorrect={false}
            returnKeyType="next"
            onSubmitEditing={() => {
              passwordRef.current?.focus();
            }}
            error={errors.username && errors.username.message}
          />

          <InputForm
            ref={passwordRef}
            name="password"
            icon="key"
            control={control}
            placeholder="Senha"
            autoCapitalize="none"
            autoCorrect={false}
            secureTextEntry
            returnKeyType="next"
            onSubmitEditing={() => {
              passwordRefConfirmation.current?.focus();
            }}
            error={errors.username && errors.username.message}
          />

          <InputForm
            ref={passwordRefConfirmation}
            name="passwordConfirmation"
            icon="key"
            control={control}
            secureTextEntry
            textContentType="password"
            placeholder="Confirme a Senha"
            autoCapitalize="none"
            returnKeyLabel="Cadastrar"
            error={
              errors.passwordConfirmation && errors.passwordConfirmation.message
            }
          />
        </Fields>
        <Button title="Cadastrar" onPress={handleSubmit(handleSave)} />
      </Form>
    </Container>
  );
}
