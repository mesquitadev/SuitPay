import React from 'react';

import {ButtonIcon, Container, TextWrapper, Title} from './styles';

function FooterCard() {
  return (
    <Container>
      <ButtonIcon name="qrcode" />
      <TextWrapper>
        <Title>Receber PIX</Title>
      </TextWrapper>
    </Container>
  );
}

export default FooterCard;
