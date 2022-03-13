import React, {useState} from 'react';
import {View} from 'react-native';
import styled from 'styled-components/native';
import {RFValue} from 'react-native-responsive-fontsize';
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
} from './styles';

import logo from '../../assets/images/logo.png';
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
  const [show, setShow] = useState(false);
  const handleShowBalance = () => setShow(state => !state);
  return (
    <Container>
      <SafeContainer>
        <Header>
          <InfoView>
            <InfoWrapper>
              <Title>Olá, @demo</Title>
              <BalanceWrapper>
                <View>
                  <Title>Saldo</Title>
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
                icon="bar-chart"
              />
              <MinorCard />
            </Row>
            <Row>
              <ItemCard
                title="Trans. Máquinas"
                value="R$ 2.000,00"
                icon="bar-chart"
              />
              <MinorCard />
            </Row>
            <ListContainer>
              <FooterCardsContainer>
                <FooterCard />
                <FooterCard />
                <FooterCard />
                <FooterCard />
                <FooterCard />
              </FooterCardsContainer>
            </ListContainer>
          </CardListContainer>
        </CardsContainer>
      </SafeContainer>
    </Container>
  );
}

export default Home;
