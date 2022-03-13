import React from 'react';

import {ButtonIcon, Container, TextWrapper, Title} from './styles';

function MinorCard() {
  return (
    <Container>
      <ButtonIcon name="qrcode" />
      <TextWrapper>
        <Title>Receber PIX</Title>
      </TextWrapper>
    </Container>
  );
}

export default MinorCard;
