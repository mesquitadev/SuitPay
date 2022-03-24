import {RFValue} from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';
import logoBlank from '@assets/images/logo-menu.png';
import {RectButton} from 'react-native-gesture-handler';
import {Platform} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import theme from '@globals/styles/theme';

export const Container = styled.KeyboardAvoidingView.attrs({
  enabled: Platform.OS === 'ios',
  behavior: 'position',
  keyboardVerticalOffset: -120,
})``;

export const Gradient = styled(LinearGradient).attrs({
  locations: [0, 0.5, 0.6],
  colors: ['#4c669f', '#3b5998', '#192f6a'],
})`
  flex: 1;
`;

export const Header = styled.View`
  width: 100%;
  height: ${RFValue(80)}px;
  flex-direction: row;
  background-color: ${({theme}) => theme.colors.primary};
  align-items: center;
  justify-content: center;
`;

export const HeaderButtonContainer = styled(RectButton)`
  justify-content: center;
  align-items: center;
  align-self: flex-start;
  margin-top: ${RFValue(20)}px;
  margin-left: 10px;
`;

export const LogoContainer = styled.View`
  justify-content: center;
  align-items: center;
  height: 100%;
`;

export const BlankContainer = styled.View`
  justify-content: center;
  align-items: center;
  margin-right: 10px;
`;

export const Logo = styled.Image.attrs({
  source: logoBlank,
})``;

export const Title = styled.Text`
  font-family: ${({theme}) => theme.fonts.medium};
  color: ${({theme}) => theme.colors.secondary};
  font-size: ${RFValue(24)}px;
  margin-bottom: 11px;
`;

export const Form = styled.View`
  padding: 24px;
  align-self: stretch;
`;

export const LinksContainer = styled.View`
  margin: 10px 0;
`;

export const Fields = styled.View``;
