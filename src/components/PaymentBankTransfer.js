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

export function PaymentBankTransfer({iconNames, onPressIcon}) {
    const [selectedIcon,
        setSelectedIcon] = useState('');

    const handleIconPress = (iconName ) => {
        setTimeout(() => setSelectedIcon(iconName), 1);
        onPressIcon(iconName);
        
    };

    // Define an array of icon names for PaymentBankBoxex components const iconNames
    // = ["heart", "star", "diamond", "circle"];
   

    return (
        <VStack p={4}>
            <Box>
                <HStack style={{
                    alignItems: 'center'
                }}>
                    <VStack>
                        <Text bold fontSize={20} fontWeight={'thin'}>
                            Select Payment Method
                        </Text>
                    </VStack>
                    <VStack
                        marginLeft={2}
                        style={{
                        backgroundColor: '#FAEFCD',
                        borderRadius: 50
                    }}>
                        <Icon
                            size={20}
                            name={'chevron-up'}
                            ba
                            style={{
                            color: '#ffa94d',
                            padding: 4
                        }}></Icon>
                    </VStack>
                </HStack>

                {iconNames.map((iconName) => (
                        <PaymentBankBoxex
                            key={iconName.id}
                            iconName={iconName}
                            selected={selectedIcon === iconName.selectedIcon}
                            onPress={() => handleIconPress(iconName.selectedIcon)}
                        />
                        ))}

                    {/* //hert is cash on delivery
                    //star is esewa */}

                <VStack alignItems="center" paddingTop={5}>
                    {/* <Button
                        backgroundColor={'#FAEFCD'}
                        _text={{
                        color: "#ffa94d",
                        fontSize: 15,
                        fontWeight: 'bold'
                    }}>Show More</Button> */}
                </VStack>
            </Box>
        </VStack>
    );
}
