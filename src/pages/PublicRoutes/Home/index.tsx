import React, {useState} from 'react';
import {StatusBar} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import logoMenu from '@assets/images/logo-variant-1.png';
import theme from '@globals/styles/theme';
import {
  ButtonsContainer,
  ContainerFull,
  Gradient,
  Logo,
  LogoContainer,
  SignInButton,
  SignUpButton,
  TextButton,
} from './styles';

function Home() {
  const navigation = useNavigation<any>();
  const images = [
    require('@assets/images/bg-home.png'),
    require('@assets/images/bg-home-2.png'),
    require('@assets/images/bg-home-3.png'),
  ];

  const [currentImage] = useState(
    images[Math.floor(Math.random() * images.length)],
  );
  return (
    <ContainerFull source={currentImage}>
      <StatusBar
        barStyle="dark-content"
        backgroundColor={theme.colors.background}
      />
      <Gradient>
        <LogoContainer>
          <Logo source={logoMenu} />
        </LogoContainer>
        <ButtonsContainer>
          <SignUpButton
            onPress={() => {
              navigation.navigate('SignIn');
            }}>
            <TextButton>Entrar</TextButton>
          </SignUpButton>
          <SignInButton
            onPress={() => {
              navigation.navigate('SignUp');
            }}>
            <TextButton>Cadastrar</TextButton>
          </SignInButton>
        </ButtonsContainer>
      </Gradient>
    </ContainerFull>
  );
}

export default Home;
