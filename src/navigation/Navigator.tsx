import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {ProfileScreen} from '../screens/profile/ProfileScreen';
import {HomeScreen} from '../screens/HomeScreen';
import {LoginScreen} from '../screens/auth/LoginScreen';
import {RegisterScreen} from '../screens/auth/RegisterScreen';
import {TabNavigator} from './TabNavigator';
import { CarScreen } from '../screens/cart/CarScreen';
import { DetailScreen } from '../screens/product/DetailScreen';

const Stack = createNativeStackNavigator();
export const Navigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTitleAlign: 'center',
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
        name="ProfileScreen"
        component={ProfileScreen}
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
      <Stack.Screen
        name="DetailScreen"
        component={DetailScreen}
        options={{
          title: 'detalle',
          headerShown: true
        }}        
      />
    </Stack.Navigator>
  );
};
