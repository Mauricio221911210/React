import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { WelcomeScreen } from "../screens/WelcomeScreen";

const Stack = createNativeStackNavigator();
export const Navigator = ()  =>{
    return (
<Stack.Navigator screenOptions={{
    headerTitleAlign:'center',
    headerTintColor: '#33FFF0',
}}>
<Stack.Screen name="Welcome Screen" component={WelcomeScreen} options={{
    title: 'Frefrigel'
}} />
</Stack.Navigator>
    );
};