import React from 'react';

import theme from '@globals/styles/theme';
import {Container, TextWrapper, Title, Icon, containerStyles} from './styles';

interface FooterProps {
  text: string;
  iconName: string;
}

function FooterCard({text, iconName}: FooterProps) {
  return (
    <Container style={containerStyles.containerShadow}>
      <Icon icon={iconName} size={40} />
      <TextWrapper>
        <Title>{text}</Title>
      </TextWrapper>
    </Container>
  );
}

export default FooterCard;
