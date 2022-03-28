import styled from 'styled-components/native';
import logoBlank from '@assets/images/logo-menu.png';
import CheckBox from '@react-native-community/checkbox';

export const ContainerFull = styled.ImageBackground`
  flex: 1;
  align-items: center;
  justify-content: space-between;
  background-color: ${({theme}) => theme.colors.gray[40]};
`;

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const Header = styled.View`
  align-items: center;
  justify-content: center;
`;

export const Logo = styled.Image.attrs({
  source: logoBlank,
  resizeMode: 'contain',
})`
  width: 220px;
`;

export const Form = styled.View`
  padding: 24px;
  align-self: stretch;
`;
export const Fields = styled.View``;

export const ContainerConfirm = styled.View`
  flex-direction: row;
  margin: 10px 40px;
  justify-content: center;
  align-items: center;
  padding-right: 10px;
`;

export const Check = styled(CheckBox).attrs({
  boxType: 'square',
  onAnimationType: 'fill',
  onFillColor: '#0C072D',
})`
  align-self: flex-start;
`;
