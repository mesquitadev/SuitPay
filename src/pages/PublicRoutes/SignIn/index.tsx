import React, {useRef} from 'react';

import {
  Button,
  ImageGradient,
  InputForm,
  KeyboardShift,
} from '@components/index';
import {FieldValues, useForm} from 'react-hook-form';
import * as Yup from 'yup';
import {yupResolver} from '@hookform/resolvers/yup';
import {useNavigation} from '@react-navigation/native';
import {useDropDown} from '@hooks/dropdown';
import {useAuth} from '@hooks/auth';
import {StackParamList} from '@routes/PublicRoutes';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import theme from '@globals/styles/theme';
import {StatusBar} from 'react-native';
import {useStatusBar} from '@hooks/StatusBar';
import {
  Container,
  CreateAccountButton,
  CreateAccountButtonBoldText,
  CreateAccountButtonText,
  Fields,
  Form,
  Gradient,
  Header,
  Logo,
} from './styles';

type signInScreenProp = NativeStackNavigationProp<StackParamList, 'SignIn'>;

type FormData = {
  username: string;
  password: string;
};

const schema = Yup.object().shape({
  username: Yup.string().required('O usuário é obrigatório'),
  password: Yup.string().required('A senha é obrigatória'),
});

export default function SignIn() {
  useStatusBar('light-content', theme.colors.primary);
  const {loading} = useAuth();
  const {ref} = useDropDown();
  const passwordRef = useRef(null);
  const navigation = useNavigation<signInScreenProp>();
  const {signIn} = useAuth();
  const {
    control,
    handleSubmit,
    reset,
    formState: {errors},
  } = useForm<FormData>({
    resolver: yupResolver(schema),
    reValidateMode: 'onSubmit',
  });

  async function handleLogin(data: FormData) {
    try {
      await signIn({
        username: data.username,
        password: data.password,
      });
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
    <>
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
                  placeholder="usuario"
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
                  control={control}
                  secureTextEntry
                  textContentType="password"
                  placeholder="senha"
                  autoCapitalize="none"
                  returnKeyLabel="Entrar"
                  returnKeyType="send"
                  onSubmitEditing={handleSubmit(handleLogin)}
                  error={errors.password && errors.password.message}
                />

                <Button
                  loading={loading}
                  title="Entrar"
                  onPress={handleSubmit(handleLogin)}
                />
              </Fields>
            </Form>
          </Container>
        </KeyboardShift>
      </ImageGradient>
      <CreateAccountButton onPress={() => navigation.navigate('SignUp')}>
        <CreateAccountButtonText>
          Não tem uma conta?{' '}
          <CreateAccountButtonBoldText>Cadastre-se</CreateAccountButtonBoldText>
        </CreateAccountButtonText>
      </CreateAccountButton>
    </>
  );
}
