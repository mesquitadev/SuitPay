import styled from 'styled-components/native';
import {RFPercentage, RFValue} from 'react-native-responsive-fontsize';
import Feather from 'react-native-vector-icons/Feather';

export const Container = styled.View`
  background-color: ${({theme}) => theme.colors.background_2};
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
  font-family: ${({theme}) => theme.fonts.bold};
`;

export const TextWrapper = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Icon = styled(Feather)`
  font-size: ${RFValue(35)}px;
  margin-right: ${RFValue(5)}px;
`;
