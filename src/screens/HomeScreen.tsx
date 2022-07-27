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
} from 'native-base';
import React from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import { Dimensions } from 'react-native';


interface Props extends NativeStackScreenProps<any, any> {}

export const HomeScreen = ({navigation}: Props) => {
  return (
    <>
     <Box
      bg={'blue.100'}
      position={'absolute'}
      left={0}
      top={0}
      w={Dimensions.get('window').width}
      h={Dimensions.get('window').height}>     
      <Image source={require('../assets/images/logo1_1.jpg')} h={'30%'}/>
      <Heading ml={2} mt={4} color={'black'}>
          Has tus compras ->  
      </Heading>
        <ScrollView horizontal={true} mt={'6'} ml={'4'} mr={'4'}>
           <Box w={'40'} h={'56'} bg={'blue.200'} flexDirection={'column'} shadow={'9'} mx={2}>
            <Box borderWidth={2} h={'70%'} borderColor={'blue.400'}>
        <Image 
        source={require('../assets/images/gelatinas.jpg')}
        resizeMode={'stretch'}
        h={'100%'}
        />        
        </Box>
        <Box h={'30%'} alignItems={'center'}>
          <Text h={'50%'} color={'black'} fontSize={'md'}>
              Nombre del producto
          </Text>
          <Text h={'50%'} bold fontSize={'lg'}>
              $50
          </Text>
        </Box>
       </Box>
        </ScrollView>
      <Heading ml={2} color={'black'} textAlign={'center'}>
           Nuevos productos  
      </Heading>
        <ScrollView horizontal={true} mt={'1'} ml={'4'} mr={'4'}>
           <Box w={'40'} h={'40'} bg={'blue.200'} flexDirection={'column'} shadow={'9'} mx={2}>
            <Box borderWidth={2} h={'100%'} borderColor={'blue.700'}>
        <Image 
        source={require('../assets/images/gelatinas.jpg')}
        resizeMode={'stretch'}
        h={'100%'}
        alt='gelatinas'
        />        
        </Box>
      </Box>
    </ScrollView>
    </Box>
   </>
  );
};
