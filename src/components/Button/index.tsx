import React from 'react';
import {RectButtonProps} from 'react-native-gesture-handler';

import {ActivityIndicator} from 'react-native';
import {Container, Title} from './styles';

interface Props extends RectButtonProps {
  title: string;
  onPress: () => void;
  loading?: boolean;
}

export default function Button({title, onPress, loading, ...rest}: Props) {
  return (
    <Container onPress={onPress} {...rest}>
      {loading ? <ActivityIndicator color="#0C072D" /> : <Title>{title}</Title>}
    </Container>
  );
}
