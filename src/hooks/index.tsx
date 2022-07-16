import React from 'react';
import {SafeAreaView, View} from 'react-native';
import {AuthProvider} from './auth';

const AppProvider: React.FC = ({children}) => (
  <AuthProvider>
    <View style={{flex: 1}}>{children}</View>
  </AuthProvider>
);

export default AppProvider;
