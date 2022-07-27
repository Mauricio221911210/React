import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { Box, Heading, Input, Center, Button, Image, Text, Link } from "native-base";
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
            
            <Center mt={-24}>
            <Image
          source={require('../../assets/images/logo1_1.jpg')
        } alt="Alternate Text" w={'64'} h={'41%'}  zIndex={99} 
        borderRadius={20}/>
     
    </Center>

         <Box mt={'-32'}  pt={'10'} bg={'blue.200'} >
         <Input  mx="3" variant={"rounded"} bg="white" mb={'4'} placeholder="Correo Electronico" w="75%"  />
         <Input mx="3" variant={"rounded"} bg="white" mb={'4'} placeholder="Contraseña" w="75%"  />
         <Text isTruncated maxW="300" w="80%" textAlign={'right'} mb={2} ml={4}>
         ¿Olvidaste la Contraseña?
       </Text>
       <Box alignItems="center">
      <Button onPress={() => navigation.replace("TabNavigator")} mb={4}>Inicio de Sesion</Button>
    </Box>
         </Box> 

         <Link onPress={() => navigation.replace('RegisterScreen')} mt={4}  >
         <Text textAlign={'center'} underline  >
      Registrate 
       </Text>
       </Link>
        </Box>
        



        
    )
}