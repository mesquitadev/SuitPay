import styled from 'styled-components/native';
import {RFValue} from 'react-native-responsive-fontsize';
import Icon from 'react-native-vector-icons/FontAwesome';
import {PIcon} from '@components/index';

export const Container = styled.View`
  background-color: ${({theme}) => theme.colors.background_2};
  height: ${RFValue(85)}px;
  width: ${RFValue(100)}px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.25);
  border-radius: ${RFValue(10)}px;
  padding: ${RFValue(5)}px ${RFValue(10)}px;
  justify-content: center;
  align-items: flex-start;
`;

export const Title = styled.Text`
  font-size: ${RFValue(15)}px;
  color: ${({theme}) => theme.colors.text[100]};
  font-family: ${({theme}) => theme.fonts.semiBold};
  line-height: 18px;
`;

export const TextWrapper = styled.View`
  margin-top: 10px;
  flex-direction: row;
  align-items: center;
`;

export const ButtonIcon = styled(PIcon)``;
