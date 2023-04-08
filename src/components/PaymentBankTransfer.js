import {
    ScrollView,
    Text,
    Box,
    VStack,
    Button,
    HStack
} from 'native-base';
import ShippingAddressBox from '../components/ShippingAddressBox'
import OrderSummary from '../components/OrderSummary'
import VoucherBox from '../components/VoucherBox'
import {useNavigation} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Icon from 'react-native-vector-icons/Ionicons';
import PaymentBankBoxex from './PaymentBankBoxex';
import React, {useState} from 'react';

export function PaymentBankTransfer() {
    const [selectedIcon,
        setSelectedIcon] = useState('');

    const handleIconPress = (iconName) => {
        setTimeout(() => setSelectedIcon(iconName), 1);
    };
    return <VStack p={4}>
        <Box>
            <HStack style={{
                alignItems: 'center'
            }}>

                <VStack>
                    <Text fontSize={20} fontWeight={'thin'}>
                        Bank Transfer
                    </Text>
                </VStack>
                <VStack
                    marginLeft={2}
                    style={{
                    backgroundColor: '#FAEFCD',
                    borderRadius: 50
                }}>
                    {/* #ffa94d */}
                    <Icon size={20} // chevron-up
                        name={'chevron-up'} ba style={{
                        color: '#ffa94d',
                        padding: 4
                    }}></Icon>
                </VStack>
            </HStack>

            <PaymentBankBoxex
                iconName="heart"
                selected={selectedIcon === "heart"}
                onPress={() => handleIconPress("heart")}/>
            <PaymentBankBoxex
                iconName="star"
                selected={selectedIcon === "star"}
                onPress={() => handleIconPress("star")}/>
            <PaymentBankBoxex
                iconName="diamond"
                selected={selectedIcon === "diamond"}
                onPress={() => handleIconPress("diamond")}/>
            <PaymentBankBoxex
                iconName="circle"
                selected={selectedIcon === "circle"}
                onPress={() => handleIconPress("circle")}/>

            <VStack alignItems="center" paddingTop={5}>
                <Button
                    backgroundColor={'#FAEFCD'}
                    _text={{
                    color: "#ffa94d",
                    fontSize: 15,
                    fontWeight: 'bold'
                }}>Show More</Button>
            </VStack>
        </Box>
    </VStack>
}