import styled from 'styled-components/native';
import {RFValue} from 'react-native-responsive-fontsize';
import Feather from 'react-native-vector-icons/Feather';

export const Container = styled.View`
  background-color: ${({theme}) => theme.colors.background};
  height: 150px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  padding: ${RFValue(14)}px;
  margin-bottom: 20px;
`;

export const Header = styled.View`
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
`;

export const Title = styled.Text`
  color: ${({theme}) => theme.colors.black}
  font-size: ${RFValue(15)}px;
  font-family: ${({theme}) => theme.fonts.bold};
`;

export const Row = styled.View`
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

export const Icon = styled(Feather)`
  font-size: ${RFValue(29)}px;
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
