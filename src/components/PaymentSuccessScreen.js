import React from 'react';
import {
    ScrollView,
    Text,
    Box,
    VStack,
    Button,
    HStack,
    Image
} from 'native-base';
// import ShippingAddressBox from '../components/ShippingAddressBox' import
// OrderSummary from '../components/OrderSummary' import VoucherBox from
// '../components/VoucherBox' import {useNavigation} from
// '@react-navigation/native'; import {createNativeStackNavigator} from
// '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';


export default function PaymentSuccessScreen({navigation}) {

    


    const navigation = useNavigation();

    const showAlert =()=>{
     
        navigation.navigate('Payments');
    }

    return (
        <VStack h={'100%'}>
            <Box height={'55%'} alignItems={'center'} justifyContent={'center'}>
                <VStack >
                    <Image
                        source={{
                        uri: "https://wallpaperaccess.com/full/317501.jpg"
                    }}
                        alt="Alternate Text"
                        size='2xl'
                        borderRadius={1550}/>
                </VStack>
            </Box>
            <VStack height={'15%'} alignItems={'center'}>
                <Text paddingBottom={3} bold fontSize={23}>Payment Success</Text>
                <VStack alignItems={'center'}>
                    <Text fontSize={15} color={'#8C8A89'}>Your payment is successful</Text>
                    <Text fontSize={15} color={'#8C8A89'}>Just wait Product will arrive at your Location</Text>
                </VStack>
            </VStack>

            <VStack height={'25%'} alignItems={'center'}>

                <VStack paddingTop={4} space={3} alignItems={'center'} width={'100%'} px={6}>
                    <Button
                        height={'40%'}
                        width={'100%'}
                        backgroundColor={'#ffa94d'}
                        _text={{
                        color: "white",
                        fontSize: 17,
                        fontWeight: 'bold'
                    }}>Track Order Success</Button>
                    <Button
                                             onPress={showAlert}
                        height={'40%'}
                        width={'100%'}
                        backgroundColor={'#FAEFCD'}
                        _text={{
                        color: "#ffa94d",
                        fontSize: 17,
                        fontWeight: 'bold'
                    }}>Back to Home</Button>
                </VStack>

            </VStack>

        </VStack>

    )
}