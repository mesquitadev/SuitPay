import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {HomePage} from '@pages/index';

const Stack = createNativeStackNavigator();

function AuthRoutes() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={HomePage}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}

export default AuthRoutes;
