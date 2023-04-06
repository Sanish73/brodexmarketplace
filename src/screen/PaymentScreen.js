import React from 'react';
import {ScrollView, Text, Box, VStack, Button} from 'native-base';
import ShippingAddressBox from '../components/ShippingAddressBox'
import OrderSummary from '../components/OrderSummary'
import VoucherBox from '../components/VoucherBox'
import {useNavigation} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {PaymentBankTransfer} from '../components/PaymentBankTransfer';
import PaymentCreditDebit from '../components/PaymentCreditDebit';


export default function PaymentScreen() {

    return (
        <Box>
            <ScrollView>

                <PaymentBankTransfer/>
                <PaymentCreditDebit />
            </ScrollView>

            {/* <Box
                p={2}
                width="100%"
                justifyContent={'center'}
                style={{
                position: 'absolute',
                bottom: 0,
                width: '99%'
            }}>
                <VStack   backgroundColor={'red.100'}>
                    <Button
                        
                        backgroundColor={'#ffa94d'}
                        _text={{
                        color: "white",
                        fontSize: 17,
                        fontWeight: 'bold'
                    }}>
                        Go to Payment
                    </Button>
                </VStack>
            </Box> */}

        </Box>
    )
}