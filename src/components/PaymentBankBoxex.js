import {
    ScrollView,
    Text,
    Box,
    VStack,
    Button,
    HStack,
    Image
} from 'native-base';
import ShippingAddressBox from '../components/ShippingAddressBox'
import OrderSummary from '../components/OrderSummary'
import VoucherBox from '../components/VoucherBox'
import {useNavigation} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Icon from 'react-native-vector-icons/Ionicons';
import {RadioButton} from 'react-native-paper';
import React , { useState }from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';

export default function PaymentBankBoxex({onPress, iconName, selected }) {
   
    return (
      <Box paddingTop={3}>
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
                Bank Central Asia
              </Text>
            </VStack>
            <VStack>
              <Text fontSize={14} color={'#8C8A89'}>
                Checked Automatically
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
  