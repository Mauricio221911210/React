import { Box, Heading, Input } from "native-base";
import React from "react";
import { Text } from "react-native";
import { Button } from "native-base";
import { Image } from "react-native-svg";
import { Center } from "native-base";


export const WelcomeScreen = () => {
    return (
        <Box  bg={'blue.400'} 
        alignItems={'center'}  
        justifyContent={'center'} 
        flexDir={'column'}>
            
            <Center>
      <Image source={{
      uri: "https://wallpaperaccess.com/full/317501.jpg"
    }} alt="Alternate Text" size="xl" />
    </Center>

         <Box h={'50%'} bg={'blue.200'} alignItems="center">
         <Input mx="3" placeholder="Correo Electronico" w="75%"  />
         <Input mx="3" placeholder="Contraseña" w="75%"  />
         <Text isTruncated maxW="300" w="80%">
         ¿Olvidaste la Contraseña?
       </Text>
       <Box alignItems="center">
      <Button onPress={() => console.log("hello world")}>Inicio de Sesion</Button>
    </Box>;
         </Box> 
         <Text isTruncated maxW="300" w="80%" bold italic underline>
     ¿No tienes Cuenta? Registrate 
       </Text>
        </Box>
        



        
    )
}