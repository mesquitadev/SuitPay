import React from 'react';
import Feather from 'react-native-vector-icons/Feather';
import {RFValue} from 'react-native-responsive-fontsize';

import theme from '@globals/styles/theme';
import {
  ButtonTitle,
  ChipButton,
  Col,
  Container,
  Header,
  Icon,
  Row,
  SubTitle,
  Title,
} from './styles';

function HighlightCard() {
  return (
    <Container
      style={{
        shadowColor: theme.colors.black[100],
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.2,
        shadowRadius: 4.65,

        elevation: 8,
      }}>
      <Header>
        <Title>Movimentações</Title>
        <ChipButton>
          <ButtonTitle>Mês Atual</ButtonTitle>
          <Feather name="chevron-down" color="#ffffff" size={RFValue(12)} />
        </ChipButton>
      </Header>
      <Row>
        <Col>
          <Icon icon="arrow-up" size={29} color="#f55c6c" />
          <SubTitle>Total Entradas</SubTitle>
        </Col>
        <SubTitle>R$ 3.000,00</SubTitle>
      </Row>
      <Row>
        <Col>
          <Icon icon="arrow-down" size={29} color="#08cb33" />
          <SubTitle>Total Saidas</SubTitle>
        </Col>
        <SubTitle>R$ 3.000,00</SubTitle>
      </Row>
    </Container>
  );
}

export default HighlightCard;
