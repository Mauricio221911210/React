import {Box, Heading, Input, Center, Button, Image, Text} from 'native-base';
import React from 'react';
import {Dimensions} from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Product } from '../../interfaces/productInterface';

interface Props extends NativeStackScreenProps<any, any> {}

export const DetailScreen = ({route}: Props) => {
    const product = route.params as Product;
  return (
      <Box >
        <Text color={'black'}>
            datelles del producto
        </Text>
          <Text>
            {product.name}
          </Text>
          <Text>
            {product.description}
          </Text>
          <Text>
            {product.stock}
          </Text>
          <Text>
            {product.precio}
          </Text>
          </Box>
          
  );
};
