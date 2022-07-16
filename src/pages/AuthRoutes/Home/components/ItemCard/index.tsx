import React from 'react';

import theme from '@globals/styles/theme';
import {
  BalanceText,
  IconWrapper,
  Container,
  Icon,
  TextWrapper,
  Title,
} from './styles';

interface ItemCardProps {
  title: string;
  icon: string;
  value: string;
}

function ItemCard({title, icon, value}: ItemCardProps) {
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
      <Title>{title}</Title>
      <TextWrapper>
        <IconWrapper>
          <Icon icon={icon} size={30} color="#00D19A" />
        </IconWrapper>
        <BalanceText>{value}</BalanceText>
      </TextWrapper>
    </Container>
  );
}

export default ItemCard;
