import React from 'react';
import {ScrollView, Text, Box, VStack, Button} from 'native-base';
import ShippingAddressBox from '../components/ShippingAddressBox'
import OrderSummary from '../components/OrderSummary'
import VoucherBox from '../components/VoucherBox'
import {useNavigation} from '@react-navigation/native';

export function OrderScreen() {
    const navigation = useNavigation();
    const showAlert = () => {
        navigation.navigate('Payments');
    };
    return (
        <Box>
            <ScrollView>
                <ShippingAddressBox head='Shipping Address'/>
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
                        Go to Payment OrderScreen
                    </Button>
                </VStack>
            </Box>
        </Box>

    )
}