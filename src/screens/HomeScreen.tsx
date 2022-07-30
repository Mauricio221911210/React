import {
  Box,
  Heading,
  Input,
  Text,
  Button,
  Center,
  Image,
  Stack,
  AspectRatio,
  ScrollView,
  FlatList,
} from 'native-base';
import React, { useEffect, useState } from 'react';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Dimensions } from 'react-native';
import API from '../api/api';
import { Product, ProductRes } from '../interfaces/productInterface';
import { useProducts } from '../hooks/useProducts';
import { CardProduct } from '../components/CardProduct';


interface Props extends NativeStackScreenProps<any, any> { }

export const HomeScreen = ({ navigation }: Props) => {
  const { product } = useProducts();
  return (
    <>
      <Box
        bg={'blue.100'}
        position={'absolute'}
        left={0}
        top={0}
        w={Dimensions.get('window').width}
        h={Dimensions.get('window').height}>
        <Image source={require('../assets/images/logo1_1.jpg')} h={'30%'} />
        <Heading ml={2} mt={4} color={'black'}>
          Has tus compra ->
        </Heading>
        <FlatList
          horizontal={true} data={product} renderItem={({ item }: any) => <CardProduct product={item} />}
          keyExtractor={(item) => item.id.toString()} />
          
      </Box>
    </>
  );
};
