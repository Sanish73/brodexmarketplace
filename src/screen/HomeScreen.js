import React from 'react';
import {Text,Box, VStack, Center ,HStack ,Button ,Heading ,useColorMode} from 'native-base';
import { View, StyleSheet ,Alert} from 'react-native';
import {COLORS} from '../constants';
import Icon   from 'react-native-vector-icons/Ionicons';


export function HomeScreen(){
    return(
    <Box maxW="100%"  style={{height:60}} p={1}>
     <VStack h={10}>
     <HStack  w="100%"  px={0} h={10}  >
      <Box  style={{height:50}} w="15%" >
        <Center paddingY={1}>
          <Button key={1} size={10}  variant="link" title="Press me"
        onPress={() => Alert.alert('Simple Button pressed')}>
          <Icon name={'ios-apps-outline'} size={27} color={'#8e8a8d'} />
          </Button>
         </Center>
      </Box>
      <Box style={{height:50}} w="70%" shadow={3} color={'#ffa94d'}>
        <Center paddingY={2}>
          <Heading size="2xl" color={'#FF5C4D' } style={{letterSpacing:0}}  >W
          <Icon name={'menu'} h={20} size={39}  />
          LCOME</Heading>
        </Center>
      </Box>
      <Box style={{height:50}} w="15%" shadow={3}>
        <Center paddingY={1}>
          <Button key={1} size={10}  variant="link">
          <Icon name={'heart'} h={20} size={27} color={'#8e8a8d'} />
          </Button>
          </Center>
      </Box>
    </HStack>
    </VStack>

    </Box>
    )
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'row',
      // alignItems: 'center',
      justifyContent: 'space-between',
      paddingHorizontal: 20,
      backgroundColor:'red'
    },
    menu: {
      width: 40,
      height: 40,
      backgroundColor: 'grey',
      borderRadius: 20,
    },
    profile: {
      width: 40,
      height: 40,
      alignItems:'center',
      backgroundColor: 'grey',
      borderRadius: 20,
    },
    text: {
      fontSize: 24,
      fontWeight: 'bold',
      textAlign: 'center',
    },
  });