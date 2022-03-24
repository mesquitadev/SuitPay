import React from 'react';

import theme from '@globals/styles/theme';
import {Container, Icon, TextWrapper, Title} from './styles';

interface ItemCardProps {
  title: string;
  icon: string;
  value: string;
}

function ItemCard({title, icon, value}: ItemCardProps) {
  return (
    <Container
      style={{
        shadowColor: theme.colors.text[200],
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
      <Title>{title}</Title>
      <TextWrapper>
        <Icon name={icon} size={34} color="#00D19A" />
        <Title>{value}</Title>
      </TextWrapper>
    </Container>
  );
}

export default ItemCard;
