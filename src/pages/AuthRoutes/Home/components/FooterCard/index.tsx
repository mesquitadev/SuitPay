import React from 'react';

import theme from '@globals/styles/theme';
import SvgUri from 'react-native-svg-uri';
import {Container, TextWrapper, Title} from './styles';

interface FooterProps {
  text: string;
  iconName: string;
}

function FooterCard({text, iconName}: FooterProps) {
  // eslint-disable-next-line consistent-return
  function svgIcon() {
    // eslint-disable-next-line default-case
    switch (iconName) {
      case 'pix':
        return (
          <SvgUri
            width={40}
            height={40}
            source={require('../../../../../assets/images/pix.svg')}
          />
        );
      case 'ted':
        return (
          <SvgUri
            width={40}
            height={40}
            source={require('../../../../../assets/images/ted.svg')}
          />
        );
      case 'boleto':
        return (
          <SvgUri
            width={40}
            height={40}
            source={require('../../../../../assets/images/boleto.svg')}
          />
        );
    }
  }

  return (
    <Container
      style={{
        shadowColor: theme.colors.gray[90],
        shadowOffset: {
          width: 3,
          height: 3,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,
        elevation: 2,
        backgroundColor: '#ffffff',
        opacity: 1,
      }}>
      {svgIcon()}
      <TextWrapper>
        <Title>{text}</Title>
      </TextWrapper>
    </Container>
  );
}

export default FooterCard;
