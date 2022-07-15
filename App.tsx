import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { Navigator } from "./src/navigation/Navigator";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { NativeBaseProvider } from "native-base";



export const App = ()  => {
  return (
<NativeBaseProvider>
    <SafeAreaProvider>
       <NavigationContainer>
             <Navigator/>
       </NavigationContainer>
    </SafeAreaProvider>
</NativeBaseProvider>
  );
};