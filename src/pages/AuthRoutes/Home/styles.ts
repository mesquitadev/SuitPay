import styled from 'styled-components/native';
import {RFValue} from 'react-native-responsive-fontsize';
import Feather from 'react-native-vector-icons/Feather';

export const Container = styled.View`
  flex: 1;
  background-color: ${({theme}) => theme.colors.primary};
`;

export const Header = styled.View`
  padding-left: 20px;
  padding-right: 20px;
  padding-top: 30px;
  height: ${RFValue(370)}px;
  background-color: ${({theme}) => theme.colors.primary};
`;

export const InfoView = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const InfoWrapper = styled.View`
  flex-direction: column;
  justify-content: space-between;
`;

export const BalanceWrapper = styled.View`
  justify-content: flex-end;
  align-items: flex-end;
  flex-direction: row;
`;

export const HideBalance = styled.View`
  width: ${RFValue(90)}px;
  height: ${RFValue(20)}px;
  background-color: ${({theme}) => theme.colors.text};
`;
export const Title = styled.Text`
  color: white;
  font-family: ${({theme}) => theme.fonts.bold};
  font-size: ${RFValue(18)}px;
`;

export const LogoContainer = styled.View`
  justify-content: center;
  align-items: center;
  width: ${RFValue(113)}px;
  height: ${RFValue(97)}px;
`;
export const Logo = styled.Image``;

export const Icon = styled(Feather)`
  color: ${({theme}) => theme.colors.secondary};
  font-size: ${RFValue(20)}px;
`;

export const CardsContainer = styled.View`
  position: relative;
`;
