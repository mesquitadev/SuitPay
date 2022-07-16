import React from 'react';
import {StatusBar} from 'react-native';
import {useForm} from 'react-hook-form';
import * as Yup from 'yup';
import {yupResolver} from '@hookform/resolvers/yup';
import {useDropDown} from '@hooks/dropdown';
import api from '@services/api';
import {Button, InputForm, InputPin} from '@components/index';
import theme from '@globals/styles/theme';
import {Container, Fields, Form, Header, Paragraph, Title} from './styles';

interface FormData {
  username: string;
  email: string;
  password: string;
}

export default function ForgotPassword() {
  const {ref} = useDropDown();
  const schema = Yup.object().shape({
    key: Yup.string().required('Usuário é obrigatório'),
  });
  const {
    control,
    handleSubmit,
    reset,
    formState: {errors},
  } = useForm<FormData>({
    resolver: yupResolver(schema),
  });

  async function handleSave(data: FormData) {
    console.log('data', data);
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
          {/* <InputPin */}
          {/*  control={control} */}
          {/*  name="pin" */}
          {/*  icon="key" */}
          {/*  error={errors.key && errors.key.message} */}
          {/* /> */}
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
