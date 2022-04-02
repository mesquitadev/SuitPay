import styled from 'styled-components/native';
import {RFValue} from 'react-native-responsive-fontsize';
import {PIcon} from '@components/index';

export const Container = styled.TouchableOpacity`
  background-color: ${({theme}) => theme.colors.white[100]};
  height: ${RFValue(85)}px;
  width: ${RFValue(100)}px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.25);
  border-radius: ${RFValue(10)}px;
  padding: ${RFValue(5)}px ${RFValue(10)}px;
  justify-content: center;
  align-items: flex-start;
`;

export const Title = styled.Text`
  font-size: ${RFValue(14)}px;
  color: ${({theme}) => theme.colors.black[80]};
  font-family: ${({theme}) => theme.fonts.regular};
  line-height: 20px;
`;

export const TextWrapper = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const ButtonIcon = styled(PIcon)``;
