import {RFValue} from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';
import {getStatusBarHeight} from 'react-native-iphone-x-helper';
import {Platform} from 'react-native';

export const Container = styled.View`
  flex: 1;
  background-color: ${({theme}) => theme.colors.gray[40]};
`;

export const Header = styled.View`
  padding-top: ${Platform.OS === 'ios' ? getStatusBarHeight() + 50 : 50}px;
  width: 100%;
  height: ${RFValue(250)}px;
  flex-direction: column;
  background-color: ${({theme}) => theme.colors.primary};
  align-items: flex-start;
  padding-left: 24px;
  padding-right: 24px;
  justify-content: flex-start;
`;

export const Paragraph = styled.Text`
  font-family: ${({theme}) => theme.fonts.regular};
  color: ${({theme}) => theme.colors.white[100]};
  font-size: ${RFValue(18)}px;
`;

export const Title = styled.Text`
  font-family: ${({theme}) => theme.fonts.bold};
  color: ${({theme}) => theme.colors.secondary};
  font-size: ${RFValue(35)}px;
`;

export const Form = styled.View`
  flex: 1;
  width: 100%;
  padding: 24px;
`;

export const Fields = styled.View``;
