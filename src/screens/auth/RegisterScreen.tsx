import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { Box, Heading, Input, Center, Button, Image, Text, Link } from "native-base";
import React from "react";
import { Dimensions } from "react-native";

interface Props extends NativeStackScreenProps<any, any>{}




export const RegisterScreen = ({navigation}: Props) => {
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

<Text textAlign={'center'} mb={7} fontSize={'lg'} color={'white'} >
      Formulario de Registro 
       </Text>
            
            <Center mt={-24}>
            <Image
          source={require('../../assets/images/logo1_1.jpg')
        } alt="Alternate Text" w={'64'} h={'41%'}  zIndex={99} 
        borderRadius={20}/>
     
    </Center>

         <Box mt={'-32'}  pt={'10'} bg={'blue.200'} >
         <Input mx="3" variant={"rounded"} bg="white" mb={'4'} placeholder="Nombre" w="75%"  />
         <Input mx="3" variant={"rounded"} bg="white" mb={'4'} placeholder="Correo Electronico" w="75%"  />
         <Input mx="3" variant={"rounded"} bg="white" mb={'4'} placeholder="Telefono" w="75%"  />
         <Input mx="3" variant={"rounded"} bg="white" mb={'4'} placeholder="Contraseña" w="75%"  />
         <Input mx="3" variant={"rounded"} bg="white" mb={'4'} placeholder="Repetir Contraseña" w="75%"  />
       <Box alignItems="center">
      <Button onPress={() => navigation.replace("LoginScreen")} mb={4}>Registrarme</Button>
    </Box>
         </Box> 

         
        </Box>
        



        
    )
}