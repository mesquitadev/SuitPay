import React from 'react';
import Feather from 'react-native-vector-icons/Feather';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {RFValue} from 'react-native-responsive-fontsize';

import theme from '@globals/styles/theme';
import {
  ChipButton,
  Col,
  Icon,
  Container,
  Header,
  Row,
  Title,
  SubTitle,
  ButtonTitle,
} from './styles';

function HighlightCard() {
  return (
    <Container
      style={{
        shadowColor: theme.colors.gray[90],
        shadowOffset: {
          width: 3,
          height: 3,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,
        elevation: 1,
        opacity: 1,
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
          <Icon name="arrow-up" size={29} color="#f55c6c" />
          <SubTitle>Total Entradas</SubTitle>
        </Col>
        <SubTitle>R$ 3.000,00</SubTitle>
      </Row>
      <Row>
        <Col>
          <Icon name="arrow-down" size={29} color="#08cb33" />
          <SubTitle>Total Saidas</SubTitle>
        </Col>
        <SubTitle>R$ 3.000,00</SubTitle>
      </Row>
    </Container>
  );
}

export default HighlightCard;
