import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
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
          backgroundColor: theme.colors.primary,
          flex: 1,
          height: '100%',
        }}>
        <NavigationContainer>
          <StatusBar barStyle="light-content" />
          <Routes />
        </NavigationContainer>
      </View>
    </ThemeProvider>
  );
}

export default App;
