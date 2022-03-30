import React, {useState} from 'react';
import {View} from 'react-native';
import styled from 'styled-components/native';
import {RFValue} from 'react-native-responsive-fontsize';
import {useAuth} from '@hooks/auth';
import logo from '@assets/images/logo.png';
import HighlightCard from './components/HighlightCard';

import {
  BalanceWrapper,
  Container,
  Header,
  HideBalance,
  Icon,
  InfoView,
  InfoWrapper,
  Logo,
  LogoContainer,
  Title,
  CardsContainer,
  BalanceTitle,
  AtTitle,
} from './styles';

import ItemCard from './components/ItemCard';
import MinorCard from './components/MinorCard';
import FooterCard from './components/FooterCard';

export const FooterCardsContainer = styled.ScrollView.attrs({
  horizontal: true,
  showsHorizontalScrollIndicator: false,
  scrollEventThrottle: 200,
  decelerationRate: 'fast',
})``;

export const ListContainer = styled.View`
  width: 100%;
  justify-content: center;
  align-items: flex-end;
`;

export const SafeContainer = styled.SafeAreaView``;

export const CardListContainer = styled.View`
  top: -${RFValue(220)}px;
  width: 100%;
  justify-content: center;
  padding: ${RFValue(20)}px;
`;

export const Row = styled.View`
  margin-bottom: 10px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export function Home() {
  const {user} = useAuth();
  const [show, setShow] = useState(false);
  const handleShowBalance = () => setShow(state => !state);

  return (
    <Container>
      <SafeContainer>
        <Header>
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
        </Header>
        <CardsContainer>
          <CardListContainer>
            <HighlightCard />
            <Row>
              <ItemCard
                title="Trans. Máquinas"
                value="R$ 2.000,00"
                icon="graph"
              />
              <MinorCard title="Receber PIX" icon="qr-code" />
            </Row>
            <Row>
              <ItemCard
                title="Trans. Online"
                value="R$ 192,00"
                icon="shopping-cart"
              />
              <MinorCard icon="link" title="Receber Link" />
            </Row>
            <FooterCardsContainer>
              <FooterCard iconName="pix" text="PIX" />
              <FooterCard iconName="ted" text="TED" />
              <FooterCard iconName="boleto" text="Pagamento Boleto" />
            </FooterCardsContainer>
          </CardListContainer>
        </CardsContainer>
      </SafeContainer>
    </Container>
  );
}

export default Home;
