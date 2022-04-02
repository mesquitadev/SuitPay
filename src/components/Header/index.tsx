import React from 'react';
import {Platform, View} from 'react-native';
import styled from 'styled-components/native';
import {NativeStackHeaderProps} from '@react-navigation/native-stack';
import {BalanceTitle} from '@pages/AuthRoutes/Home/styles';
import {BalanceWrapper, InfoView} from '@pages/AuthRoutes/Payment';
import {getStatusBarHeight} from 'react-native-iphone-x-helper';

export const ImageBackground = styled.ImageBackground`
  height: 200px;
  padding: ${Platform.OS === 'ios' ? getStatusBarHeight() + 29 : 15}px 20px;
`;

export const ContainerTitle = styled.View`
  width: 100%;
`;

export const HeaderTitle = styled.Text`
  text-align: center;
  font-weight: ${({theme}) => theme.fonts.bold};
  color: ${({theme}) => theme.colors.white[100]}
  font-size: 24px;
`;

const Header: (props: NativeStackHeaderProps) => JSX.Element = ({
  options,
}: NativeStackHeaderProps) => {
  return (
    <ImageBackground
      resizeMode="cover"
      source={require('@assets/images/fundo.png')}>
      <ContainerTitle>
        <HeaderTitle>{options.title}</HeaderTitle>
      </ContainerTitle>
      <InfoView>
        <BalanceWrapper>
          <View>
            <BalanceTitle>Saldo</BalanceTitle>
            {/* {show ? <Title>R$ 5.361,00 </Title> : <HideBalance />} */}
          </View>
          {/* <Icon name={show ? 'eye-off' : 'eye'} onPress={handleShowBalance} /> */}
        </BalanceWrapper>
      </InfoView>
    </ImageBackground>
  );
};

export default Header;
