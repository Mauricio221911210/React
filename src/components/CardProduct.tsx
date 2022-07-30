import {useNavigation} from '@react-navigation/native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {Box, Heading, Input, Center, Button, Image, Text} from 'native-base';
import React from 'react';
import {Dimensions, Touchable, TouchableOpacity} from 'react-native';
import {Product} from '../interfaces/productInterface';

interface Props {
  product: Product;
}

export const CardProduct = ({product}: Props) => {
  const navigation = useNavigation();
  return (
      
        <Box
          w={'40'}
          h={'56'}
          bg={'blue.200'}
          flexDirection={'column'}
          shadow={'9'}
          ml={2}>
          <Box borderWidth={2} h={'70%'} borderColor={'blue.400'}>
            <Image
              source={require('../assets/images/gelatinas.jpg')}
              resizeMode={'stretch'}
              h={'100%'}
            />
          </Box>
          <Box h={'30%'} alignItems={'center'}>
            <Text h={'50%'} color={'black'} fontSize={'md'}>
              {product.name}
            </Text>
            <Text h={'50%'} bold fontSize={'lg'}>
              ${product.precio}
            </Text>
          </Box>
          <Button onPress={()=> navigation.navigate('DetailScreen', product)}>
        ver datelles
      </Button>
        </Box>
  );
};
