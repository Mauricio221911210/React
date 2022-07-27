import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {Box, Heading, Input, Center, Button, Image, Text} from 'native-base';
import React from 'react';
import {Dimensions} from 'react-native';

interface Props extends NativeStackScreenProps<any, any> {}

export const ProfileScreen = ({navigation}: Props) => {
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
      

      <Center mt={-24}>
        <Image
          source={require('../../assets/images/logo1_1.jpg')}
          alt="Alternate Text"
          w={'64'}
          h={'41%'}
          zIndex={99}
          borderRadius={20}
        />
      </Center>

      <Box mt={'-32'} pt={'10'} bg={'blue.200'}>
        <Text isTruncated maxW="300" w="80%" textAlign={'right'} mb={2} ml={4}>
          Nombre: Irvin Mauricio
        </Text>
        <Text isTruncated maxW="300" w="80%" textAlign={'right'} mb={2} ml={4}>
          Telefono: 7291345747
        </Text>
        <Text isTruncated maxW="300" w="80%" textAlign={'right'} mb={2} ml={4}>
          Email: al221911210@gmail.com
        </Text>
        <Text isTruncated maxW="300" w="80%" textAlign={'right'} mb={2} ml={4}>
          Tipo Usuario: Cliente
        </Text>
      </Box>
      <Box  >
      <Button onPress={() => navigation.replace("LoginScreen")} mb={4}>Cerrar Sesion</Button>
      </Box>
    </Box>
  );
};
