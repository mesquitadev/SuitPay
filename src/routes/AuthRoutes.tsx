import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Home, Statement} from '@pages/index';
import {PIcon} from '@components/index';
import theme from '@globals/styles/theme';

const Tab = createBottomTabNavigator();

function AuthRoutes() {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarActiveTintColor: theme.colors.secondary,
        inactiveTintColor: '#777',
        tabBarIcon: ({color, size}) => {
          let iconName;
          switch (route.name) {
            case 'Inicio':
              iconName = 'home';
              break;
            case 'Extrato':
              iconName = 'statement';
              break;
            case 'Máquina':
              iconName = 'tef';
              break;
            case 'SuitID':
              iconName = 'lock-1';
              break;
            case 'Mais':
              iconName = 'apps';
              break;
            default:
              iconName = 'search';
              break;
          }
          return <PIcon name={iconName} size={20} color={color} />;
        },
      })}>
      <Tab.Screen
        name="Inicio"
        component={Home}
        options={{headerShown: false}}
      />
      <Tab.Screen
        name="Extrato"
        component={Statement}
        options={{headerShown: false}}
      />
      <Tab.Screen
        name="Máquina"
        component={Statement}
        options={{headerShown: false}}
      />
      <Tab.Screen
        name="SuitID"
        component={Statement}
        options={{headerShown: false}}
      />
      <Tab.Screen
        name="Mais"
        component={Statement}
        options={{headerShown: false}}
      />
    </Tab.Navigator>
  );
}

export default AuthRoutes;
