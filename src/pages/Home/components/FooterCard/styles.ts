import styled from 'styled-components/native';
import {RFValue} from 'react-native-responsive-fontsize';
import Icon from 'react-native-vector-icons/FontAwesome';

export const Container = styled.View`
  background-color: ${({theme}) => theme.colors.background_2};
  height: ${RFValue(115)}px;
  width: ${RFValue(115)}px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.25);
  border-radius: ${RFValue(10)}px;
  padding: ${RFValue(5)}px ${RFValue(10)}px;
  margin-right: 10px;
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

export const ButtonIcon = styled(Icon)`
  font-size: ${RFValue(43)}px;
`;
