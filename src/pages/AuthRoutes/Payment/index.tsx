import React, {useEffect, useState} from 'react';
import {View} from 'react-native';
import styled from 'styled-components/native';
import theme from '@globals/styles/theme';
import {RFValue} from 'react-native-responsive-fontsize';
import {useStatusBar} from '@hooks/StatusBar';
import {useNavigation} from '@react-navigation/native';
import {
  BalanceTitle,
  HideBalance,
  Icon,
  Title,
} from '@pages/AuthRoutes/Home/styles';
import {getStatusBarHeight} from 'react-native-iphone-x-helper';

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  padding: 0 24px;
`;

export const Card = styled.View.attrs({})`
  width: 100%;
  background-color: white;
  position: absolute;
  top: -35px;
  border-radius: 10px;
  justify-content: space-around;
  align-items: center;
`;

export const Text = styled.Text`
  color: black;
  font-family: ${({theme}) => theme.fonts.regular};
  font-size: ${RFValue(16)}px;
  text-align: center;
`;

export const ImageBackground = styled.ImageBackground`
  height: 200px;
  padding-top: ${getStatusBarHeight() + 29}px;
  padding-left: 20px;
  padding-right: 20px;
`;

export const InfoView = styled.View`
  flex-direction: row;
  height: 100%;
  padding-bottom: 48px;
`;

export const BalanceWrapper = styled.View`
  justify-content: flex-end;
  align-items: flex-end;
  flex-direction: row;
`;

function Payment() {
  useStatusBar('light-content', '#0C072D');
  const navigation = useNavigation();
  const [show, setShow] = useState(false);
  const handleShowBalance = () => setShow(state => !state);
  useEffect(() => {
    navigation.setOptions({
      title: 'Pagamento',
      headerTransparent: true,
    });
  }, [navigation]);

  return (
    <>
      <ImageBackground
        resizeMode="cover"
        source={require('@assets/images/fundo.png')}>
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
      <Container>
        <Card
          style={{
            shadowColor: theme.colors.black[100],
            shadowOffset: {
              width: 0,
              height: 2,
            },
            shadowOpacity: 0.2,
            shadowRadius: 4.65,

            elevation: 8,
          }}>
          <Text>
            Utilize o token abaixo para aprovar ou reprovar as solicitações do
            Internet Banking na aplicação web SuitPay
          </Text>
        </Card>
      </Container>
    </>
  );
}

export default Payment;
