import React from 'react';
import {ScrollView, Text, Box, VStack, Button} from 'native-base';
// import ShippingAddressBox from '../components/ShippingAddressBox' import
// OrderSummary from '../components/OrderSummary' import VoucherBox from
// '../components/VoucherBox' import {useNavigation} from
// '@react-navigation/native'; import {createNativeStackNavigator} from
// '@react-navigation/native-stack';
import {PaymentBankTransfer} from './PaymentBankTransfer';
import PaymentCreditDebit from './PaymentCreditDebit';
import PaymentPaypal from './PaymentPaypal';
import {useNavigation} from '@react-navigation/native';
import {useSelector, useDispatch} from 'react-redux';
import { addOrderAction } from '../Redux/actions/orderAction';

export default function PaymentScreen({route}) {
         

    const dispatch = useDispatch();
    const navigation = useNavigation();
    
    const { deliveryLocation, deliveryAddress, finalTotal } = route.params;

    const confirmPayemt = () => {
     
         addOrderAction('' ,deliveryLocation,deliveryAddress,'sanish Thapa',9844554622,"kadhaghri",finalTotal)(dispatch);
         navigation.navigate('Success');
    };


    return (
        <Box h={'100%'}>
            <ScrollView>

                <PaymentBankTransfer/>
                {/* <PaymentCreditDebit/> */}
                {/* <PaymentPaypal/> */}
                <Box h={127}></Box>
            </ScrollView>

            <Box
                p={2}
                width="100%"
                style={{
                position: 'absolute',
                bottom: 0,
                width: '99%'
            }}>
                <VStack>

                 {/* <Text>{JSON.stringify(finalTotal, null , 4)}</Text> */}
            
                    <Button
                        onPress={confirmPayemt}
                        backgroundColor={'#ffa94d'}
                        _text={{
                        color: "white",
                        fontSize: 17,
                        fontWeight: 'bold'
                    }}>
                        Confirm Payment
                    </Button>
                </VStack>
            </Box>

        </Box>

    )
}