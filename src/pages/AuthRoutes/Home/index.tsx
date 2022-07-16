import React, {useState} from 'react';
import {View} from 'react-native';
import {useAuth} from '@hooks/auth';
import logo from '@assets/images/logo1.png';
import {useNavigation} from '@react-navigation/native';
import styled from 'styled-components/native';
import {getStatusBarHeight} from 'react-native-iphone-x-helper';
import {useStatusBar} from '@hooks/StatusBar';
import HighlightCard from './components/HighlightCard';

import ItemCard from './components/ItemCard';
import MinorCard from './components/MinorCard';
import FooterCard from './components/FooterCard';
import {
  AtTitle,
  BalanceTitle,
  BalanceWrapper,
  CardsContainer,
  Container,
  FooterCardsContainer,
  HideBalance,
  Icon,
  InfoView,
  InfoWrapper,
  ItensContainer,
  Logo,
  LogoContainer,
  Row,
  Title,
} from './styles';

export const ImageBackground = styled.ImageBackground`
  height: 200px;
  padding-top: ${getStatusBarHeight() + 29}px;
  padding-left: 20px;
  padding-right: 20px;
`;

export function Home() {
  useStatusBar('light-content', '#0C072D');
  const {user} = useAuth();
  const [show, setShow] = useState(false);
  const handleShowBalance = () => setShow(state => !state);
  const navigation = useNavigation();

  return (
    <>
      <ImageBackground
        resizeMode="cover"
        source={require('@assets/images/fundo.png')}>
        <InfoView>
          <InfoWrapper>
            <Title>
              Olá, <AtTitle>@</AtTitle>
              {user && user.username}
            </Title>
            <BalanceWrapper>
              <View>
                <BalanceTitle>Saldo</BalanceTitle>
                {show ? <Title>R$ 5.361,00 </Title> : <HideBalance />}
              </View>
              <Icon
                name={show ? 'eye-off' : 'eye'}
                onPress={handleShowBalance}
              />
            </BalanceWrapper>
          </InfoWrapper>
          <LogoContainer>
            <Logo source={logo} />
          </LogoContainer>
        </InfoView>
      </ImageBackground>
      <Container>
        <CardsContainer>
          <ItensContainer>
            <HighlightCard />
            <Row>
              <ItemCard
                title="Trans. Máquinas"
                value="R$ 2.000,00"
                icon="graph"
              />
              <MinorCard title="Receber via PIX" icon="qr-code" />
            </Row>
            <Row>
              <ItemCard
                title="Trans. Online"
                value="R$ 192,00"
                icon="shopping-cart"
              />
              <MinorCard icon="link" title="Receber via Link" />
            </Row>
          </ItensContainer>
          <FooterCardsContainer>
            <FooterCard iconName="ted" text="PIX" />
            <FooterCard iconName="ted" text="TED" />
            <FooterCard
              iconName="boleto"
              text="Pagar Boleto"
              onPress={() => navigation.navigate('PaymentRoutes')}
            />
          </FooterCardsContainer>
        </CardsContainer>
      </Container>
    </>
  );
}

export default Home;
