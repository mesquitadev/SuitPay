import styled from 'styled-components/native';
import {RFValue} from 'react-native-responsive-fontsize';
import {PIcon} from '@components/index';

export const Container = styled.View`
  background-color: ${({theme}) => theme.colors.white[100]};
  height: ${RFValue(85)}px;
  width: ${RFValue(200)}px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.25);
  border-radius: ${RFValue(10)}px;
  padding: ${RFValue(10)}px ${RFValue(10)}px;
  justify-content: center;
  margin-right: ${RFValue(5)}px;
`;

export const Title = styled.Text`
  font-size: 18px;
  color: ${({theme}) => theme.colors.gray[100]};
  font-family: ${({theme}) => theme.fonts.semiBold};
`;

export const TextWrapper = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Icon = styled(PIcon)`
  margin-right: ${RFValue(5)}px;
`;
