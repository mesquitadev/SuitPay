import styled from 'styled-components/native';
import {RFValue} from 'react-native-responsive-fontsize';
import Icon from 'react-native-vector-icons/FontAwesome';
import {PIcon} from '@components/index';

export const Container = styled.View`
  background-color: ${({theme}) => theme.colors.background_2};
  height: ${RFValue(115)}px;
  width: ${RFValue(115)}px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.25);
  border-radius: ${RFValue(10)}px;
  padding: 12px 12px 25px;
  margin-right: 10px;
  justify-content: space-between;
`;

export const Title = styled.Text`
  font-size: ${RFValue(15)}px;
  font-family: ${({theme}) => theme.fonts.bold};
  line-height: 18px;
`;

export const TextWrapper = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const ButtonIcon = styled(PIcon)``;
