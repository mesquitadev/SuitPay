import styled from 'styled-components/native';
import {RFValue} from 'react-native-responsive-fontsize';
import {PIcon} from '@components/index';
import {StyleSheet} from 'react-native';
import theme from '@globals/styles/theme';

export const Container = styled.View`
  background-color: ${({theme}) => theme.colors.white[100]};
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

export const Icon = styled(PIcon)``;

export const containerStyles = StyleSheet.create({
  containerShadow: {
    shadowColor: theme.colors.gray[90],
    shadowOffset: {
      width: 3,
      height: 3,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 2,
    backgroundColor: '#ffffff',
    opacity: 1,
  },
});
