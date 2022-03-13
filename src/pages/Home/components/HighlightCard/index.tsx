import React from 'react';
import Feather from 'react-native-vector-icons/Feather';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {RFValue} from 'react-native-responsive-fontsize';

import {ChipButton, Col, Container, Header, Row, Title} from './styles';

function HighlightCard() {
  return (
    <Container>
      <Header>
        <Title>Movimentações</Title>
        <ChipButton>
          <Title>Mês Atual</Title>
          <Feather name="chevron-down" size={RFValue(12)} />
        </ChipButton>
      </Header>
      <Row>
        <Col>
          <AntDesign name="down-square-o" size={RFValue(29)} />
          <Title>Total Entradas</Title>
        </Col>
        <Title>R$ 3.000,00</Title>
      </Row>
      <Row>
        <Col>
          <AntDesign name="up-square-o" size={RFValue(29)} />
          <Title>Total Saidas</Title>
        </Col>
        <Title>R$ 3.000,00</Title>
      </Row>
    </Container>
  );
}

export default HighlightCard;
