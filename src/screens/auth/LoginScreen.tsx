import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { Box, Heading, Input, Center, Button, Image, Text } from "native-base";
import React from "react";
import { Dimensions } from "react-native";

interface Props extends NativeStackScreenProps<any, any>{}




export const LoginScreen = ({navigation}: Props) => {
    return (
        <Box  bg={'blue.400'} 
        alignItems={'center'}  
        justifyContent={'center'} 
        flexDir={'column'}
        position={"absolute"}
        left={0}
        top={0}
        w={Dimensions.get('window').width}
        h={Dimensions.get('window').height}>
            
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
      <Button onPress={() => navigation.replace("TabNavigator")}>Inicio de Sesion</Button>
    </Box>;
         </Box> 

         <Button onPress={() => navigation.replace('RegisterScreen')}>
         <Text isTruncated maxW="300" w="80%" bold italic underline>
     ¿No tienes Cuenta? Registrate 
       </Text>
       </Button>
        </Box>
        



        
    )
}