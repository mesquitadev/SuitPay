import React from 'react';

import {Container, Icon, TextWrapper, Title} from './styles';

interface ItemCardProps {
  title: string;
  icon: string;
  value: string;
}

function ItemCard({title, icon, value}: ItemCardProps) {
  return (
    <Container>
      <Title>{title}</Title>
      <TextWrapper>
        <Icon name={icon} />
        <Title>{value}</Title>
      </TextWrapper>
    </Container>
  );
}

export default ItemCard;
