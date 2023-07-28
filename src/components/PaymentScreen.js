import React ,{useState} from 'react';
import {ScrollView, Text, Box, VStack, Button} from 'native-base';
// import ShippingAddressBox from '../components/ShippingAddressBox' import
// OrderSummary from '../components/OrderSummary' import VoucherBox from
// '../components/VoucherBox' import {useNavigation} from
// '@react-navigation/native'; import {createNativeStackNavigator} from
// '@react-navigation/native-stack';
import {PaymentBankTransfer} from './PaymentBankTransfer';
import { Alert } from 'react-native';

import PaymentCreditDebit from './PaymentCreditDebit';
import PaymentPaypal from './PaymentPaypal';
import {useNavigation} from '@react-navigation/native';
import {useSelector, useDispatch} from 'react-redux';
import { addOrderAction } from '../Redux/actions/orderAction';

export default function PaymentScreen({route}) {
         

    const dispatch = useDispatch();
    const navigation = useNavigation();

    const [selectedIconName, setSelectedIconName] = useState('');
    const handleIconPress = (iconName) => {
        setSelectedIconName(iconName);
        // Do something with the selected iconName if needed
      };



  
    const deliveryLocations = route.params?.deliveryLocation || '';
    const deliveryAddresss = route.params?.deliveryAddress || '';
    const changedFinalTotal = route.params?.changedFinalTotal || '';

    
    
    const confirmPayemt = () => {
     
        // if(selectedIconName =='star'){
        
        //     Alert.alert('Esewa ', 'eSewa is not integrated yet.');
        // }else if(selectedIconName =='star'){
             
        //  navigation.navigate('Success');
        // }


        if(selectedIconName =='heart'){
            console.log('hi');
            addOrderAction('' ,deliveryLocations,deliveryAddresss,'sanish Thapa',9844554622,"kadhaghri",changedFinalTotal)(dispatch);
            navigation.navigate('Success');
        }else{
            Alert.alert('Esewa ', 'eSewa is not integrated yet.');
        }

        //  addOrderAction('' ,deliveryLocations,deliveryAddresss,'sanish Thapa',9844554622,"kadhaghri",changedFinalTotal)(dispatch);
        
    };


    const iconNames = [
        {   
            'id':1,
            'name': 'Cash On Delivery',
            'number': "heart",
            'selectedIcon' : 'heart'
        },
        {
            'id' : 2, 
            'name': 'eSewa Mobile Wallet',
            'number':  "star",
            'selectedIcon' : 'star'
            
        }
    ];
    

    
    // console.log(selectedIconName,"lsfnl");

    return (
        <Box h={'100%'}>
            <ScrollView>

                <PaymentBankTransfer iconNames = {iconNames} onPressIcon={handleIconPress} />
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