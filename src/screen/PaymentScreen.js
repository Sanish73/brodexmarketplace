import React from 'react';
import {ScrollView, Text, Box, VStack, Button} from 'native-base';
import ShippingAddressBox from '../components/ShippingAddressBox'
import OrderSummary from '../components/OrderSummary'
import VoucherBox from '../components/VoucherBox'
import {useNavigation} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { PaymentBankTransfer } from '../components/PaymentBankTransfer';

export default function PaymentScreen() {

    return <Box>
        <ScrollView>
        
            <PaymentBankTransfer/>
        </ScrollView>
    </Box>
}