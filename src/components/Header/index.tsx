import React, {useState} from 'react';
import {Platform, View} from 'react-native';
import styled from 'styled-components/native';
import {NativeStackHeaderProps} from '@react-navigation/native-stack';
import {BalanceTitle} from '@pages/AuthRoutes/Home/styles';
import {getStatusBarHeight} from 'react-native-iphone-x-helper';
import {RFValue} from 'react-native-responsive-fontsize';
import Feather from 'react-native-vector-icons/Feather';

export const ImageBackground = styled.ImageBackground`
  height: 200px;
  padding-top: ${Platform.OS === 'ios' ? getStatusBarHeight() + 20 : 15}px;
  padding-left: 20px;
  padding-right: 20px;
`;

export const ContainerTitle = styled.View`
  width: 100%;
`;

export const HeaderTitle = styled.Text`
  text-align: center;
  font-family: ${({theme}) => theme.fonts.bold};
  color: ${({theme}) => theme.colors.white[100]}
  font-size: 24px;
`;

export const Title = styled.Text`
  color: white;
  font-family: ${({theme}) => theme.fonts.bold};
  font-size: ${RFValue(18)}px;
`;

export const HideBalance = styled.View`
  width: ${RFValue(90)}px;
  height: ${RFValue(20)}px;
  margin-right: 5px;
  background-color: ${({theme}) => theme.colors.white[100]};
`;

export const Icon = styled(Feather)`
  color: ${({theme}) => theme.colors.secondary};
  font-size: ${RFValue(20)}px;
`;

export const InfoView = styled.View`
  padding-top: 20px;
  flex-direction: row;
`;

export const BalanceWrapper = styled.View`
  justify-content: flex-end;
  align-items: flex-end;
  flex-direction: row;
`;

const Header: (props: NativeStackHeaderProps) => JSX.Element = ({
  options,
}: NativeStackHeaderProps) => {
  const [show, setShow] = useState(false);
  const handleShowBalance = () => setShow(state => !state);
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
            {show ? <Title>R$ 5.361,00 </Title> : <HideBalance />}
          </View>
          <Icon name={show ? 'eye-off' : 'eye'} onPress={handleShowBalance} />
        </BalanceWrapper>
      </InfoView>
    </ImageBackground>
  );
};

export default Header;
