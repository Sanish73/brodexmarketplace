import {
    Text,
    Box,
    VStack,
    HStack,
    Image
} from 'native-base';
import Icon from 'react-native-vector-icons/Ionicons';
import React from 'react';
import { TouchableOpacity} from 'react-native';

export default function PaymentBankBoxex({onPress, iconName, selected }) {
    return (
      <Box paddingTop={3}>
      {/* <Text>
        {JSON.stringify(iconName , null , 1)};
      </Text> */}
        <HStack bgColor={'#fcf5eb'} h={59} borderRadius={5}>
          <VStack w={'17%'} alignItems={'center'} justifyContent={'center'}>
            <Image
              alt="A descriptive text about the image"
              size={'5'}
              resizeMode="cover"
              borderRadius={3}
              source={{
                uri: 'https://wallpaperaccess.com/full/317501.jpg',
              }}
            />
          </VStack>
          <VStack w={'68%'} paddingX={0} justifyContent={'center'} space={1}>
            <VStack>
              <Text bold fontSize={17}>
                {iconName.name}
              </Text>
            </VStack>
            <VStack>
              <Text fontSize={14} color={'#8C8A89'}>
              {iconName.number}
              </Text>
            </VStack>
          </VStack>
          <VStack w={'15%'} alignItems={'center'} justifyContent={'center'}>
            <TouchableOpacity onPress={onPress}>
            <Icon
              size={20}
              name={selected ? "md-radio-button-on-outline" : "md-radio-button-off"}
              style={{
                color: "#ffa94d",
                padding: 4,
              }}
            />
            </TouchableOpacity>
          </VStack>
        </HStack>
      </Box>
    );
  }
  