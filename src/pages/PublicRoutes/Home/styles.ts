import styled from 'styled-components/native';
import LinearGradient from 'react-native-linear-gradient';
import {getBottomSpace, getStatusBarHeight} from 'react-native-iphone-x-helper';
import {RFValue} from 'react-native-responsive-fontsize';
import {TouchableOpacityProps, Platform} from 'react-native';

export const ContainerFull = styled.ImageBackground`
  flex: 1;
  align-items: center;
  justify-content: space-between;
  background-color: ${({theme}) => theme.colors.background};
`;

export const Gradient = styled(LinearGradient).attrs({
  colors: ['rgba(255, 255, 255, 0.10)', 'rgba(0,0,0, 0.30)'],
})`
  flex: 1;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

export const LogoContainer = styled.View``;

export const ButtonsContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

interface ButtonProps extends TouchableOpacityProps {
  bgColor?: string;
}

export const SignInButton = styled.TouchableOpacity<ButtonProps>`
  width: ${RFValue(150)}px;
  height: ${RFValue(50)}px;
  justify-content: center;
  align-items: center;
  background-color: ${props =>
    props.bgColor ? props.bgColor : ({theme}) => theme.colors.primary};
  border-radius: ${RFValue(6)}px;
  margin: 0 6px;
`;

export const SignUpButton = styled.TouchableOpacity<ButtonProps>`
  width: ${RFValue(150)}px;
  height: ${RFValue(50)}px;
  justify-content: center;
  align-items: center;
  background-color: ${props =>
    props.bgColor ? props.bgColor : ({theme}) => theme.colors.secondary};
  border-radius: ${RFValue(6)}px;
  margin: 0 6px;
`;

export const TextButton = styled.Text<ButtonProps>`
  color: ${({theme}) => theme.colors.background};
  font-family: ${({theme}) => theme.fonts.bold};
`;

export const Logo = styled.Image``;
