import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {
  ForgotPassword,
  HomePage,
  RecoverPassword,
  SignIn,
  SignUp,
} from '@pages/index';
import theme from '@globals/styles/theme';

export type StackParamList = {
  Home: undefined;
  SignIn: undefined;
  SignUp: undefined;
  ForgotPassword: undefined;
  RecoverPassword: undefined;
};

const Stack = createNativeStackNavigator<StackParamList>();

function PublicRoutes() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTitle: '',
        headerBackTitleVisible: false,
        headerShadowVisible: true,
        headerStyle: {
          backgroundColor: theme.colors.primary,
        },
      }}>
      <Stack.Screen name="Home" component={HomePage} />
      <Stack.Screen name="SignIn" component={SignIn} />
      <Stack.Screen name="SignUp" component={SignUp} />
      <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
      <Stack.Screen name="RecoverPassword" component={RecoverPassword} />
    </Stack.Navigator>
  );
}

export default PublicRoutes;