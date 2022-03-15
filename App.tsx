import React from 'react';
import {NavigationContainer} from '@react-navigation/native';

import {StatusBar, View} from 'react-native';
import {ThemeProvider} from 'styled-components';
import Routes from './src/routes';
import theme from './src/global/styles/theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <View
        style={{
          flex: 1,
        }}>
        <NavigationContainer>
          <StatusBar
            barStyle="light-content"
            backgroundColor={theme.colors.primary}
          />
          <Routes />
        </NavigationContainer>
      </View>
    </ThemeProvider>
  );
}

export default App;
