import styled from 'styled-components/native';
import {RFValue} from 'react-native-responsive-fontsize';
import Feather from 'react-native-vector-icons/AntDesign';
import {PIcon} from '@components/index';

export const Container = styled.View`
  background-color: ${({theme}) => theme.colors.white[100]};
  box-shadow: 0 0 18px rgba(0, 0, 0, 1);
  border-radius: 10px;
  padding: ${RFValue(10)}px;
  padding-bottom: 20px;
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
  font-family: ${({theme}) => theme.fonts.semiBold};
`;

export const ButtonTitle = styled.Text`
  color: ${({theme}) => theme.colors.white[100]}
  font-size: ${RFValue(13)}px;
  font-family: ${({theme}) => theme.fonts.semiBold};
`;

export const SubTitle = styled.Text`
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
  padding: 0 ${RFValue(5)}px;
  justify-content: center;
  align-items: center;
  border-radius: ${RFValue(10)}px;
  height: ${RFValue(25)}px;
  background-color: ${({theme}) => theme.colors.secondary};
`;
