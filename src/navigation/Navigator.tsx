import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {WelcomeScreen} from '../screens/WelcomeScreen';
import {HomeScreen} from '../screens/HomeScreen';
import {LoginScreen} from '../screens/auth/LoginScreen';
import {RegisterScreen} from '../screens/auth/RegisterScreen';
import {TabNavigator} from './TabNavigator';
import { CarScreen } from '../screens/CarScreen';

const Stack = createNativeStackNavigator();
export const Navigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTitleAlign: 'center',
        headerTintColor: '#33FFF0',
        headerShown: false,
      }}>
      <Stack.Screen
        name="LoginScreen"
        component={LoginScreen}
        options={{
          title: 'Frefrigel',
        }}
      />
      <Stack.Screen
        name="RegisterScreen"
        component={RegisterScreen}
        options={{
          title: 'Frefrigel',
        }}
      />


      <Stack.Screen name="TabNavigator" component={TabNavigator} />

      <Stack.Screen
        name="WelcomeScreen"
        component={WelcomeScreen}
        options={{
          title: 'Frefrigel',
        }}
      />

      <Stack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          title: 'Frefrigel',
        }}
      />

<Stack.Screen
        name="CarScreen"
        component={CarScreen}
        options={{
          title: 'Frefrigel',
        }}        
      />
    </Stack.Navigator>
  );
};
