import React from 'react';
import {Text, View} from 'react-native';
import styled from 'styled-components/native';
import {CountdownCircleTimer} from 'react-native-countdown-circle-timer';
import {PIcon} from '@components/index';

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

function SuitID() {
  return (
    <Container>
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
    </Container>
  );
}

export default SuitID;
