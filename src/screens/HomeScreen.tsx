import { Box, Heading, Input, Text, Button,Center,Image,Stack, AspectRatio } from "native-base";
import React from "react";
import { NativeStackScreenProps } from "@react-navigation/native-stack";


interface Props extends NativeStackScreenProps<any, any>{}


export const HomeScreen = ({navigation}: Props) => {
    return (
        
        <Box  bg={'blue.400'} 
        alignItems={'center'}  
        justifyContent={'center'} 
        flexDir={'column'}>

            <Center>
      <Image source={
      require("../assets/images/logo.jpg")
    } alt="Alternate Text" size="xl" />
    </Center>

           
            
         <Text isTruncated maxW="300" w="80%" bold italic underline>
       Bienvenido Mauricio 
       </Text>

       <Box alignItems="center">
      <Button onPress={() => navigation.replace('LoginScreen')}>Cerrar Sesion</Button>
    </Box>
      

    <Box>
    <Text isTruncated maxW="300" w="80%" bold italic underline>
       Has  tus compras 
       </Text>
    </Box>
  
    <Box bg={'blue.400'} 
        alignItems={'center'}  
        justifyContent={'center'} 
        flexDir={'row'}>


     <Box >
      <Box maxW="50%" rounded="lg" 
      overflow="hidden" 
      borderColor="coolGray.200" 
      borderWidth="1" _dark={{
    }} _light={{
      backgroundColor: "gray.50"
    }}>
        <Box>
          <AspectRatio w="100%" ratio={16 / 9}>
            <Image source={{
            //image
          }} alt="image" />
          </AspectRatio>
          <Center bg="blue.500" _dark={{
          bg: "violet.400"
        }} _text={{
          color: "warmGray.50",
          fontWeight: "700",
          fontSize: "xs"
        }} position="absolute" bottom="0" px="3" py="1.5">
            Gelatinas
          </Center>
        </Box>
        <Stack p="4" space={3} bg={'blue.400'}>
          <Text fontWeight="400">
           Gelatinas de sabor artificial $20
          </Text>
        </Stack>
      </Box>
    </Box>;



    <Box >
      <Box maxW="50%" rounded="lg" 
      overflow="hidden" 
      borderColor="coolGray.200" 
      borderWidth="1" _dark={{
    }} _light={{
      backgroundColor: "gray.50"
    }}>
        <Box>
          <AspectRatio w="100%" ratio={16 / 9}>
            <Image source={{
            //image
          }} alt="image" />
          </AspectRatio>
          <Center bg="blue.500" _text={{
          color: "warmGray.50",
          fontWeight: "700",
          fontSize: "xs"
        }} position="absolute" bottom="0" px="3" py="1.5">
            Tamarindos
          </Center>
        </Box>
        <Stack p="4" space={3} bg={'blue.400'}>
          <Text fontWeight="400">
           Tamarindos  de sabor artificial $20
          </Text>
        </Stack>
      </Box>
    </Box>;   
    </Box>









    <Box >
      <Box maxW="50%" rounded="lg" 
      overflow="hidden" 
      borderColor="coolGray.200" 
      borderWidth="1" _dark={{
    }} _light={{
      backgroundColor: "gray.50"
    }}>
        <Box>
          <AspectRatio w="100%" ratio={16 / 9}>
            <Image source={{
            //image
          }} alt="image" />
          </AspectRatio>
          <Center bg="blue.500" _text={{
          color: "warmGray.50",
          fontWeight: "700",
          fontSize: "xs"
        }} position="absolute" bottom="0" px="3" py="1.5">
            Tamarindos
          </Center>
        </Box>
        <Stack p="4" space={3} bg={'blue.400'}>
          <Text fontWeight="400">
           Tamarindos  de sabor artificial $20
          </Text>
        </Stack>
      </Box>
    </Box>




    
     
    </Box>
        
        


        
        



        
    )
}