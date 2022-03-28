import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

import {StyleSheet, TouchableOpacity, View} from 'react-native';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex-direction: row;
  align-items: flex-start;
`;

export const Text = styled.Text`
  text-align: center;
  color: ${({theme}) => theme.colors.white[100]}
  font-family: ${({theme}) => theme.fonts.medium};
  font-size: 13px;
  margin-left: 5px;
`;
export const BoldText = styled.Text`
  text-align: center;
  color: ${({theme}) => theme.colors.white[100]}
  font-family: ${({theme}) => theme.fonts.bold};
  font-size: 13px;
  margin-left: 10px;
`;
type CheckBoxProps = {
  selected: boolean;
  onPress: () => void;
  color: string;
  size: number;
};

export function CheckBox({
  selected,
  onPress,
  size = 20,
  color = '#ffffff',
  ...props
}: CheckBoxProps) {
  return (
    <Container {...props}>
      <Icon
        onPress={onPress}
        size={size}
        color={color}
        name={selected ? 'check-box' : 'check-box-outline-blank'}
      />

      <Text>
        Eu aceito os <BoldText>termos e condições,</BoldText> e a
        <BoldText> política de privacidade e proteção de dados.</BoldText>
      </Text>
    </Container>
  );
}
