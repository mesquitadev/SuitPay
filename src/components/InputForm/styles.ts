import {RFValue} from 'react-native-responsive-fontsize';
import styled, {css} from 'styled-components/native';
import {TextInput} from 'react-native';
import theme from '@globals/styles/theme';

import FeatherIcon from 'react-native-vector-icons/Feather';

interface Props {
  active?: boolean;
  icon?: string;
  isErrored: boolean;
  isFocused: boolean;
}

export const Input = styled(TextInput).attrs({
  placeholderTextColor: theme.colors.white[100],
})<Props>`
  width: 100%;
  font-family: ${({theme}) => theme.fonts.medium};
  font-size: ${RFValue(14)}px;
  color: ${({theme}) => theme.colors.white[100]};
  text-align: center;
  ${props =>
    props.icon &&
    css`
      text-align: left;
    `}
`;

export const Container = styled.View<Props>`
  width: 100%;
  height: 45px;
  padding: 0 14px;
  flex-direction: row;
  align-items: center;
  border-radius: 100px;
  //background-color: ${({theme}) => theme.colors.white[100]};
  border-width: 1px;
  border-color: ${({theme}) => theme.colors.white[100]};
  margin-bottom: 8px;
  ${(props: Props) =>
    props.isErrored &&
    css`
      border-width: 2px;
      border-color: ${({theme}) => theme.colors.error}; ;
    `}
  ${(props: Props) =>
    props.isFocused &&
    css`
      border-width: 1px;
      border-color: ${({theme}) => theme.colors.secondary};
    `}
`;

export const Icon = styled(FeatherIcon).attrs({
  size: 25,
  color: '#00D19A',
})`
  margin-right: 10px;
`;

export const Error = styled.Text`
  align-self: flex-end;
  font-size: ${RFValue(14)}px;
  font-family: ${({theme}) => theme.fonts.bold};
  color: ${({theme}) => theme.colors.red[50]};
  margin: 1px 0;
`;
