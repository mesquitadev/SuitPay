import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import styled from 'styled-components/native';

type Props = {
  children: React.ReactNode;
};

export const Gradient = styled(LinearGradient).attrs({
  colors: ['#0C072D', '#00D19A', '#00D19A'],
  locations: [0.1, 0.9, 0.9],
  useAngle: true,
  angle: 120,
})`
  flex: 1;
`;

export const ImageBackground = styled.ImageBackground`
  flex: 1;
`;

export function ImageGradient({children}: Props) {
  return (
    <Gradient>
      <ImageBackground source={require('@assets/images/ssss.png')}>
        {children}
      </ImageBackground>
    </Gradient>
  );
}
