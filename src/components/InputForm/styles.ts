import {RFValue} from 'react-native-responsive-fontsize';
import styled, {css} from 'styled-components/native';
import {TextInput} from 'react-native';
import theme from '@globals/styles/theme';

import FeatherIcon from 'react-native-vector-icons/Feather';
import Tooltip from 'rn-tooltip';

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
  padding: 0 30px;
  flex-direction: row;
  align-items: center;
  border-radius: 100px;
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
})``;

export const TextError = styled.Text`
  font-family: ${({theme}) => theme.fonts.medium};
  color: ${({theme}) => theme.colors.white[100]};
`;

export const IconError = styled(FeatherIcon).attrs({
  size: 25,
  color: '#F55C6C',
  name: 'alert-circle',
})`
  margin-right: 10px;
`;

export const TooltipButton = styled(Tooltip).attrs({
  withOverlay: false,
  actionType: 'press',
  width: 300,
  backgroundColor: '#F55C6C',
  borderWidth: 0.2,
})``;
