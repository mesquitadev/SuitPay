import React from 'react';
import {SolidContainer, TouchableContainer} from './styles';

interface CardProps {
  children: React.ReactNode;
  isTouchable: boolean;
}
function Card({children, isTouchable, ...props}: CardProps) {
  return isTouchable ? (
    <TouchableContainer {...props}>{children}</TouchableContainer>
  ) : (
    <SolidContainer {...props}>{children}</SolidContainer>
  );
}

export default Card;
