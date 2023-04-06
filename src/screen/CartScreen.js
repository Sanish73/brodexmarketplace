import React from 'react';
import {
    ScrollView,
    Text,
    Box,
    VStack,
    Button
   
} from 'native-base';
import { Alert } from 'react-native';
import ShippingAddressBox from '../components/ShippingAddressBox'
import OrderSummary from '../components/OrderSummary'
import VoucherBox from '../components/VoucherBox'
import {useNavigation} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

export function CartScreen({navigation}) {
    const showAlert = () => {
      navigation.navigate('Payments');
    };
    return (
        <Box>
            <ScrollView>
                <ShippingAddressBox/>
                <OrderSummary/>
                <VoucherBox/>
                <Box h={100}></Box>

            </ScrollView>

            <Box
                p={2}
                width="100%"
                justifyContent={'center'}
                style={{
                position: 'absolute',
                bottom: 0,
                width: '99%'
            }}>
                <VStack>
                    <Button
                        onPress={showAlert}
                        backgroundColor={'#ffa94d'}
                        _text={{
                        color: "white",
                        fontSize: 17,
                        fontWeight: 'bold'
                    }}>
                        Go to Payment
                    </Button>
                </VStack>
            </Box>
        </Box>

    )
}