import styled from 'styled-components/native';
import {RFValue} from 'react-native-responsive-fontsize';
import {PIcon} from '@components/index';

export const Container = styled.View`
  background-color: ${({theme}) => theme.colors.white[100]};
  border-radius: 10px;
  padding: ${RFValue(10)}px;
  margin-bottom: 20px;
`;

export const Header = styled.View`
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
`;

export const Title = styled.Text`
  color: ${({theme}) => theme.colors.gray[90]}
  font-size: ${RFValue(12)}px;
  font-family: ${({theme}) => theme.fonts.regular};
`;

export const ButtonTitle = styled.Text`
  color: ${({theme}) => theme.colors.white[100]}
  font-size: ${RFValue(13)}px;
  font-family: ${({theme}) => theme.fonts.semiBold};
`;

export const SubTitle = styled.Text`
  margin-left: 10px;
  color: ${({theme}) => theme.colors.gray[100]}
  font-size: ${RFValue(14)}px;
  font-family: ${({theme}) => theme.fonts.semiBold};
`;

export const Row = styled.View`
  margin-top: ${RFValue(5)}px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: ${RFValue(10)}px;
`;

export const Col = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const Icon = styled(PIcon)`
  margin-right: ${RFValue(5)}px;
`;

export const ChipButton = styled.TouchableOpacity`
  flex-direction: row;
  width: 99px;
  justify-content: center;
  align-items: center;
  border-radius: ${RFValue(10)}px;
  height: ${RFValue(24)}px;
  background-color: ${({theme}) => theme.colors.secondary};
`;
