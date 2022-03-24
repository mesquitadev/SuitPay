import React from 'react';
import {NavigationContainer} from '@react-navigation/native';

import {StatusBar, View} from 'react-native';
import {ThemeProvider} from 'styled-components';
import theme from '@globals/styles/theme';
import Routes from '@routes/index';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {DropDownComponentProvider} from '@hooks/dropdown';
import AppProvider from '@hooks/index';

function App() {
  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <DropDownComponentProvider>
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
              <AppProvider>
                <Routes />
              </AppProvider>
            </NavigationContainer>
          </View>
        </ThemeProvider>
      </DropDownComponentProvider>
    </GestureHandlerRootView>
  );
}

export default App;
