import React, {useRef, useState} from 'react';
import {
  Button,
  CheckBox,
  ImageGradient,
  InputForm,
  KeyboardShift,
} from '@components/index';
import {useForm} from 'react-hook-form';
import * as Yup from 'yup';
import {yupResolver} from '@hookform/resolvers/yup';
import api from '@services/api';
import {useDropDown} from '@hooks/dropdown';
import {useStatusBar} from '@hooks/StatusBar';
import theme from '@globals/styles/theme';

import {
  BoldText,
  Check,
  Container,
  ContainerConfirm,
  Fields,
  Form,
  Header,
  Logo,
  Text,
} from './styles';

interface FormData {
  username: string;
  email: string;
  password: string;
}

export default function SignUp() {
  useStatusBar('light-content', theme.colors.primary);
  const {ref} = useDropDown();
  const emailInputRef = useRef(null);
  const passwordRef = useRef(null);
  const passwordRefConfirmation = useRef(null);
  const [toggleCheckBox, setToggleCheckBox] = useState(false);
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

  const handleAcceptTerms = () => setToggleCheckBox(state => !state);

  return (
    <ImageGradient>
      <KeyboardShift>
        <Container>
          <Header>
            <Logo />
          </Header>
          <Form>
            <Fields>
              <InputForm
                name="username"
                control={control}
                placeholder="usuário"
                autoCapitalize="none"
                autoCorrect={false}
                returnKeyType="next"
                onSubmitEditing={() => {
                  emailInputRef.current?.focus();
                }}
                error={errors.username && errors.username.message}
              />

              <InputForm
                icon="eye"
                ref={emailInputRef}
                name="email"
                control={control}
                placeholder="e-mail"
                autoCapitalize="none"
                autoCorrect={false}
                returnKeyType="next"
                onSubmitEditing={() => {
                  passwordRef.current?.focus();
                }}
                error={errors.email && errors.email.message}
              />

              <InputForm
                icon="eye"
                ref={passwordRef}
                name="password"
                control={control}
                placeholder="senha"
                autoCapitalize="none"
                autoCorrect={false}
                secureTextEntry
                returnKeyType="next"
                onSubmitEditing={() => {
                  passwordRefConfirmation.current?.focus();
                }}
                error={errors.password && errors.password.message}
              />

              <InputForm
                icon="eye"
                ref={passwordRefConfirmation}
                name="passwordConfirmation"
                control={control}
                secureTextEntry
                textContentType="password"
                placeholder="confirme a Senha"
                autoCapitalize="none"
                returnKeyLabel="Cadastrar"
                error={
                  errors.passwordConfirmation &&
                  errors.passwordConfirmation.message
                }
              />
            </Fields>
            <ContainerConfirm>
              <CheckBox
                selected={toggleCheckBox}
                onPress={() => handleAcceptTerms()}
                style={undefined}
                textStyle={undefined}
              />
            </ContainerConfirm>

            <Button
              enabled={toggleCheckBox}
              title="Cadastrar"
              onPress={handleSubmit(handleSave)}
            />
          </Form>
        </Container>
      </KeyboardShift>
    </ImageGradient>
  );
}
