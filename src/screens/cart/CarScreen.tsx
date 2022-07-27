import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {Box, Heading, Input, Center, Button, Image, Text} from 'native-base';
import React from 'react';
import {Dimensions} from 'react-native';

interface Props extends NativeStackScreenProps<any, any> {}

export const CarScreen = ({navigation}: Props) => {
  return (
    <Box
      bg={'blue.200'}
      alignItems={'center'}
      justifyContent={'center'}
      flexDir={'column'}
      position={'absolute'}
      left={0}
      top={0}
      w={Dimensions.get('window').width}
      h={Dimensions.get('window').height}>
      
      <Text textAlign={'center'} mb={100} fontSize={'lg'} >
      Carrito
       </Text>
      <Center mt={-24}>
        <Image
          source={require('../../assets/images/car.jpg')}
          alt="Alternate Text"
          w={'64'}
          h={'50%'}
          zIndex={99}
          borderRadius={20}
           size="md"
        />
      </Center>

      <Box mt={'-30'} pt={'10'} bg={'blue.200'}>
        <Text isTruncated maxW="300" w="80%" textAlign={'right'} mb={2} ml={4}>
          Producto: Gelatinas
        </Text>
        <Image
          source={require('../../assets/images/gelatinas.jpg')}
          alt="Alternate Text"
          w={'64'}
          h={'50%'}
          zIndex={99}
          borderRadius={20}
           size="sm"
        />
        <Text isTruncated maxW="300" w="80%" textAlign={'right'} mb={2} ml={4}>
          Costo: 30$
        </Text>
        <Text isTruncated maxW="300" w="80%" textAlign={'right'} mb={2} ml={4}>
         Cantidad: 5pz
        </Text>
        
      </Box>
    </Box>
  );
};
