import React, {useEffect, useState} from 'react';
import styled from 'styled-components/native';
import theme from '@globals/styles/theme';
import {RFValue} from 'react-native-responsive-fontsize';
import {useStatusBar} from '@hooks/StatusBar';
import {useNavigation} from '@react-navigation/native';

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  padding: 0 24px;
  height: 90px;
`;

export const Card = styled.View.attrs({})`
  width: 100%;
  background-color: white;
  position: absolute;
  top: -35px;
  border-radius: 10px;
  justify-content: space-around;
  align-items: center;
  height: 90px;
`;

export const Text = styled.Text`
  color: black;
  font-family: ${({theme}) => theme.fonts.regular};
  font-size: ${RFValue(16)}px;
  text-align: center;
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
    });
  }, [navigation]);

  return (
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
  );
}

export default Payment;
