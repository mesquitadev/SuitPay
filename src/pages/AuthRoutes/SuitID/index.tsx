import React, {useEffect} from 'react';
import {View} from 'react-native';
import styled from 'styled-components/native';
import {CountdownCircleTimer} from 'react-native-countdown-circle-timer';
import {PIcon} from '@components/index';
import theme from '@globals/styles/theme';
import LinearGradient from 'react-native-linear-gradient';
import {RFValue} from 'react-native-responsive-fontsize';
import {useStatusBar} from '@hooks/StatusBar';
import {useNavigation} from '@react-navigation/native';

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  padding: 0 24px;
`;

export const Card = styled.View.attrs({})`
  height: 100%;
  width: 100%;
  background-color: white;
  position: absolute;
  top: -77px;
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

export const Gradient = styled(LinearGradient)`
  height: 200px;
`;

export const ImageBackground = styled.ImageBackground`
  height: 200px;
`;

function SuitID() {
  useStatusBar('light-content', '#0C072D');
  const navigation = useNavigation();
  useEffect(() => {
    navigation.setOptions({
      title: 'SuitID',
    });
  }, [navigation]);

  return (
    <>
      <Gradient colors={['#0C072D', '#00D19A']}>
        <ImageBackground
          resizeMode="cover"
          source={require('@assets/images/ssss.png')}
        />
      </Gradient>
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
          <CountdownCircleTimer
            size={252}
            isPlaying
            duration={10}
            colors="#00D19A"
            onComplete={() => {
              return {shouldRepeat: true};
            }}>
            {() => (
              <View
                style={{
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <PIcon icon="lock-1" size={57} color="#00D19A" />
                <Text>404912</Text>
              </View>
            )}
          </CountdownCircleTimer>
        </Card>
      </Container>
    </>
  );
}

export default SuitID;
