import {RFValue} from 'react-native-responsive-fontsize';
import styled, {css} from 'styled-components/native';

import FeatherIcon from 'react-native-vector-icons/Feather';
import SmoothPinCodeInput from 'react-native-smooth-pincode-input';

interface Props {
  active?: boolean;
  icon?: string;
  isErrored: boolean;
  isFocused: boolean;
}

export const Input = styled(SmoothPinCodeInput).attrs({
  containerStyle: {
    marginVertical: 10,
    width: '100%',
    justifyContent: 'center',
  },
  animated: false,
  placeholder: '-',
  cellStyle: {
    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#585757',
    backgroundColor: '#ffffff',
  },
  cellStyleFocused: {
    borderColor: '#00D19A',
    backgroundColor: '#ffffff',
  },
  textStyle: {
    fontSize: 24,
    color: '#585757',
  },
  textStyleFocused: {
    color: '#585757',
  },
})``;

export const Container = styled.View<Props>`
  width: 100%;
  height: 45px;
  padding: 0 14px;
  flex-direction: row;
  align-items: center;
  background-color: ${({theme}) => theme.colors.background_2};
  border-radius: 5px;
  margin-bottom: 8px;
  border-color: ${({theme}) => theme.colors.text[100]};
  border-width: 1px;
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
  font-family: ${({theme}) => theme.fonts.regular};
  color: ${({theme}) => theme.colors.text[100]};
  margin: 1px 0;
`;
