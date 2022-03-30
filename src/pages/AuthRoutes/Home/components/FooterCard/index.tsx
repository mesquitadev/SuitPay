import React from 'react';
import {Container, containerStyles, Icon, TextWrapper, Title} from './styles';

interface FooterProps {
  text: string;
  iconName: string;
}

function FooterCard({text, iconName}: FooterProps) {
  return (
    <Container style={containerStyles.containerShadow}>
      <Icon icon={iconName} size={45} />
      <TextWrapper>
        <Title>{text}</Title>
      </TextWrapper>
    </Container>
  );
}

export default FooterCard;
