import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Home, Statement, SuitID, Payment, Scanner} from '@pages/index';
import {Header as CHeader, PIcon} from '@components/index';
import theme from '@globals/styles/theme';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

export type StackParamList = {
  Home: undefined;
  Scanner: undefined;
};

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator<StackParamList>();

function Header({...props}) {
  return <CHeader {...props} />;
}

function PaymentRoutes() {
  return (
    <Stack.Navigator
      screenOptions={{
        header: props => Header(props),
      }}>
      <Stack.Screen name="Home" component={Payment} />
      <Stack.Screen name="Scanner" component={Scanner} />
    </Stack.Navigator>
  );
}

function AuthRoutes() {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
          fontFamily: theme.fonts.bold,
          fontSize: 24,
        },
        tabBarActiveTintColor: theme.colors.secondary,
        inactiveTintColor: '#777',
        tabBarIcon: ({color}) => {
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
          return <PIcon icon={iconName} size={20} color={color} />;
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
        component={SuitID}
        options={{
          headerTransparent: true,
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      />
      <Tab.Screen
        name="Mais"
        component={Statement}
        options={{headerShown: false}}
      />

      <Tab.Screen
        name="PaymentRoutes"
        component={PaymentRoutes}
        options={{
          headerShown: false,
          tabBarButton: () => null,
        }}
      />
    </Tab.Navigator>
  );
}

export default AuthRoutes;
