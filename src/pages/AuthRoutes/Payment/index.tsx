import React, {useEffect, useState} from 'react';
import styled from 'styled-components/native';
import theme from '@globals/styles/theme';
import {RFValue} from 'react-native-responsive-fontsize';
import {useStatusBar} from '@hooks/StatusBar';
import {useNavigation} from '@react-navigation/native';
import {StyleSheet, View} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';

export const Container = styled.View`
  align-items: center;
  padding: 0 24px;
  height: 90px;
  top: -35px;
`;

export const Card = styled.View.attrs({})`
  width: 100%;
  background-color: white;
  border-radius: 10px;
  height: 90px;
  padding: 10px 10px;
`;

export const InputForm = styled.TextInput`
  width: 100%;
  height: 50px;
`;

export const Text = styled.Text`
  color: black;
  font-family: ${({theme}) => theme.fonts.regular};
  font-size: ${RFValue(16)}px;
`;

export const ButtonText = styled.Text`
  color: ${({theme}) => theme.colors.white[100]};
  font-family: ${({theme}) => theme.fonts.semiBold};
  font-size: ${RFValue(16)}px;
`;

export const ButtonCode = styled.TouchableOpacity`
  height: 40px;
  align-items: center;
  justify-content: center;
  background-color: ${({theme}) => theme.colors.gray[100]};
  flex-direction: row;
  border-radius: 10px;
  padding: 0 10px;
`;

export const Button = styled.TouchableOpacity`
  height: 40px;
  width: 100%;
  align-items: center;
  justify-content: center;
  background-color: ${({theme}) => theme.colors.secondary};
  flex-direction: row;
  border-radius: 10px;
  padding: 0 10px;
`;

export const Icon = styled(Feather)`
  margin-right: 10px;
`;

export const ClearIcon = styled(Feather)`
  margin-right: 10px;
`;

function Payment() {
  useStatusBar('light-content', '#0C072D');
  const navigation = useNavigation();

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
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <Text>Código de barras</Text>
          <ClearIcon name="x" size={20} />
        </View>
        <InputForm />
      </Card>
      <View
        style={{
          marginTop: 15,
          width: '100%',
          alignItems: 'flex-end',
        }}>
        <ButtonCode onPress={() => navigation.navigate('Scanner')}>
          <Icon name="camera" size={19} color="white" />
          <ButtonText>Leitor de Código</ButtonText>
        </ButtonCode>
      </View>
      <View
        style={{
          marginTop: 30,
          width: '100%',
          alignItems: 'flex-end',
        }}>
        <Button>
          <ButtonText>Validar</ButtonText>
        </Button>
      </View>
    </Container>
  );
}

export default Payment;
