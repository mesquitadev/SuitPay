import styled from 'styled-components/native';
import {RFValue} from 'react-native-responsive-fontsize';
import {PIcon} from '@components/index';

export const Container = styled.View`
  background-color: ${({theme}) => theme.colors.white[100]};
  height: ${RFValue(85)}px;
  width: ${RFValue(200)}px;
  box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.2);
  border-radius: ${RFValue(10)}px;
  padding: ${RFValue(10)}px ${RFValue(10)}px;
`;

export const Title = styled.Text`
  margin-left: 5px;
  font-size: 18px;
  color: ${({theme}) => theme.colors.gray[100]};
  font-family: ${({theme}) => theme.fonts.regular};
`;

export const BalanceText = styled.Text`
  font-size: 25px;
  color: ${({theme}) => theme.colors.black[80]};
  font-family: ${({theme}) => theme.fonts.regular};
`;

export const TextWrapper = styled.View`
  flex-direction: row;
  align-items: flex-end;
`;

export const IconWrapper = styled.View`
  margin: 10px;
`;

export const Icon = styled(PIcon)``;
