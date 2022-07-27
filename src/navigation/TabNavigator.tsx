
import React from "react";
import { WelcomeScreen } from "../screens/WelcomeScreen";
import {HomeScreen} from "../screens/HomeScreen"
import { LoginScreen } from "../screens/auth/LoginScreen";
import { RegisterScreen } from "../screens/auth/RegisterScreen";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { CarScreen } from "../screens/CarScreen";


const Tab = createBottomTabNavigator();
export const TabNavigator = ()  =>{
    return (
<Tab.Navigator screenOptions={{
    headerTitleAlign:'center',
    headerTintColor: '#33FFF0',
    headerShown: false,

    
}}>
<Tab.Screen name="HomeScreen" component={HomeScreen} options={{
 title: 'Productos',
 tabBarIcon:()=> { return(<Ionicons name="logo-dropbox" size={30} color={'#E0025'}/>)}
}} />
<Tab.Screen name="WelcomeScreen" component={WelcomeScreen}  options={{
    title: 'Perfil',
    tabBarIcon:()=> { return(<Ionicons name="person-circle-outline" size={30} color={'#E0025'}/>)}
}} />
<Tab.Screen name="CarScreen" component={CarScreen}  options={{
    title: 'Carrito',
    tabBarIcon:()=> { return(<Ionicons name="cart-outline" size={30} color={'#E0025'}/>)}
}} />
</Tab.Navigator>



    );
};


