import {Box, Heading, Input, Center, Button, Image, Text} from 'native-base';
import React from 'react';
import {Dimensions} from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Product } from '../../interfaces/productInterface';

interface Props extends NativeStackScreenProps<any, any> {}

export const DetailScreen = ({route}: Props) => {
    const product = route.params as Product;
  return (
      <Box  bg={'blue.100'}
      position={'absolute'}
      left={0}
      top={0}
      w={Dimensions.get('window').width}
      h={Dimensions.get('window').height}>
         <Image source={require('../../assets/images/logo1_1.jpg')} h={'36%'} />
         <Box bg={'blue.300'} >
         <Center>
         <Text >
           Codigo {product.code}
          </Text>
          <Text >
           Nombre del Proveedor: {product.name}
          </Text>
          <Text >
           Infromacion del Producto {product.description}
          </Text>
          <Text >
           Existencias {product.stock}
          </Text>
          <Text >
           Precio: $ {product.precio}
          </Text>0
          
          <Image source={require('../../assets/images/gelatinas.jpg')} 
           alt="Alternate Text"
          w={'64'}
          h={'50%'}
          zIndex={99}
          borderRadius={20}
           size="md"
             />
             </Center>

          </Box>
          </Box>
          
  );
};
