import React, {useRef} from 'react';
import {StatusBar} from 'react-native';

import {Button, ButtonLink, InputForm} from '@components/index';
import {FieldValues, useForm} from 'react-hook-form';
import * as Yup from 'yup';
import {yupResolver} from '@hookform/resolvers/yup';
import {useNavigation} from '@react-navigation/native';
import theme from '@globals/styles/theme';
import {useDropDown} from '@hooks/dropdown';
import {useAuth} from '@hooks/auth';
import {StackParamList} from '@routes/PublicRoutes';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {
  Container,
  Fields,
  Form,
  Gradient,
  Header,
  LinksContainer,
  Logo,
  Title,
} from './styles';

type signInScreenProp = NativeStackNavigationProp<StackParamList, 'SignIn'>;

interface FormData extends FieldValues {
  username: string;
  password: string;
}

const schema = Yup.object().shape({
  username: Yup.string().required('Usuário é obrigatório'),
  password: Yup.string().required('Senha é obrigatória'),
});

export default function SignIn() {
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
      <StatusBar
        barStyle="light-content"
        backgroundColor={theme.colors.primary}
      />
      <Gradient>
        <Container>
          <Form>
            <Fields>
              <InputForm
                name="username"
                icon="at-sign"
                control={control}
                placeholder="Usuário"
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
                secureTextEntry
                textContentType="password"
                placeholder="Senha"
                autoCapitalize="none"
                returnKeyLabel="Entrar"
                returnKeyType="send"
                onSubmitEditing={handleSubmit(handleLogin)}
                error={errors.password && errors.password.message}
              />
              <LinksContainer>
                <ButtonLink
                  title="Esqueci minha senha"
                  onPress={() => {
                    navigation.navigate('ForgotPassword');
                  }}
                />
                <ButtonLink
                  title="Cadastrar"
                  onPress={() => {
                    navigation.navigate('SignUp');
                  }}
                />
              </LinksContainer>
              <Button title="Entrar" onPress={handleSubmit(handleLogin)} />
            </Fields>
          </Form>
        </Container>
      </Gradient>
    </>
  );
}
