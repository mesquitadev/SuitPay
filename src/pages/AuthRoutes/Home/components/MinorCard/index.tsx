import React from 'react';

import theme from '@globals/styles/theme';
import {ButtonIcon, Container, TextWrapper, Title} from './styles';

interface MinorCardProps {
  icon: string;
  title: string;
}

function MinorCard({icon, title}: MinorCardProps) {
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
      <TextWrapper>
        <Title>{title}</Title>
      </TextWrapper>
      <ButtonIcon icon={icon} size={30} color="#00D19A" />
    </Container>
  );
}

export default MinorCard;
