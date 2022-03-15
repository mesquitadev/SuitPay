import React, {useState} from 'react';
import {StatusBar} from 'react-native';
import logoMenu from '@assets/images/logo-variant-1.png';
import {
  ContainerFull,
  Gradient,
  LogoContainer,
  Logo,
  ButtonsContainer,
  SignUpButton,
  SignInButton,
  TextButton,
} from './styles';

function Home() {
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
      <Gradient colors={['rgba(255, 255, 255, 0.10)', 'rgba(0,0,0, 0.30)']}>
        <StatusBar barStyle="dark-content" />
        <LogoContainer>
          <Logo source={logoMenu} />
        </LogoContainer>
        <ButtonsContainer>
          <SignUpButton>
            <TextButton>Entrar</TextButton>
          </SignUpButton>
          <SignInButton>
            <TextButton>Cadastrar</TextButton>
          </SignInButton>
        </ButtonsContainer>
      </Gradient>
    </ContainerFull>
  );
}

export default Home;
