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
        shadowColor: theme.colors.gray[90],
        shadowOffset: {
          width: 3,
          height: 3,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,
        elevation: 2,
        backgroundColor: '#ffffff',
        opacity: 1,
      }}>
      <ButtonIcon icon={icon} size={30} color="#00D19A" />
      <TextWrapper>
        <Title>{title}</Title>
      </TextWrapper>
    </Container>
  );
}

export default MinorCard;
