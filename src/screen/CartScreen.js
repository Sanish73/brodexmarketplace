import {ScrollView, Box, VStack, Button, View , Text} from 'native-base';
import CartBox from '../components/CartBox';
import { Alert } from 'react-native';

import React, {useState, useEffect} from 'react';
import CartProductBoxes from '../components/CartProductBoxes';
import CartBoxSecond from '../components/CartBoxSecond';
import CartBoxThirdFOrShippingAddress from '../components/CartBoxThirdFOrShippingAddress';
import CartToPayList from '../components/CartToPayList';
import CartBoxThird from  '../components/CartBoxThird';
import { useFocusEffect } from '@react-navigation/native';
import {useNavigation} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import cartReducer from '../Redux/reducers/cartReducers/cartReducer';
import {useSelector, useDispatch} from 'react-redux';
import {getAllCartItems} from '../Redux/actions/cartAPIAction';
import ShippingAddressBox from '../components/ShippingAddressBox'
import { getAllCartTotal } from '../Redux/actions/cartAPIAction';
import { addOrderAction } from '../Redux/actions/orderAction';

export default function CartScreen({route}) {

    const [deliveryLocation,
        setDeliveryLocation] = useState('Home');
    const [deliveryAddress,
        setDeliveryAddress] = useState('Kathmandu, Baneshwor');


        


        

    const dispatch = useDispatch();
    // console.log('cartScreen.js------------------',deliveryLocation)

    // useEffect(() => {
    //     getAllCartItems('', 1)(dispatch);
    // }, []);

    useFocusEffect(
        React.useCallback(() => {
            getAllCartItems('', 1)(dispatch);
        }, [])
    );

    const cartItems = useSelector(state => state.getAllCartReducer);
    //change vako total talako 
    const cartTotalPrice = useSelector(state => state.getCartTotalReducer);


    ////////////////changed total
    const [changedFinalTotal, setChnageFinalTotal] = useState(cartItems.cartItems.finalTotal);
    const [changedTotal, setChnageTotal] = useState(cartItems.cartItems.total);

    useEffect(() => {
        setChnageTotal(cartItems.cartItems.total);
    },[cartItems.cartItems.total]);

      
    useEffect(() => {
        setChnageFinalTotal(cartItems.cartItems.finalTotal);
    },[cartItems.cartItems.finalTotal]);
    

    useEffect(() => {
        setChnageTotal(cartTotalPrice.cartTotalPrice.item_total);
        setChnageFinalTotal(cartTotalPrice.cartTotalPrice.total);
    }, [cartTotalPrice]);
    


    const handleTotalPriceChange = (newTotalPrice) => {
    //   setTotalPrice(newTotalPrice);
    //   console.log(deliveryLocation);
    };

    const navigation = useNavigation();
    const [cartProducts,
        setProducts] = useState([
        {
            id: 1,
            category: 'product',
            productName: 'MI Super Bass Bluetooth Wireless Headphones',
            SinglePrice: 9,
            TotalPrice: 18,
            NumberOfProducts: 10,
            description: 'Up to 20 hours battery life | Super powerful Bass | 40mm dynamic driver | Pressu' +
                    're less ear muffs | Bluetooth 5.0 | Voice control',
            isOff: true,
            offPercentage: 10,
            productImage: require('../../assets/images/29032316800754916423eae35ddce.webp'),
            isAvailable: true,
            productImageList: [require('../../assets/images/c08000131_1750x1285.webp'), require('../../assets/images/c08000131_1750x1285.webp'), require('../../assets/images/c08000131_1750x1285.webp')]
        }
    ]);
    // const finalTotal = cartItems.cartItems.finalTotal;

    const handlePressGoToPayment = () => {
        // navigation.navigate('Payments');
        if (cartItems.cartItems.total === 0 ) {
           
            Alert.alert('Cart is not empty', 'Please empty the cart before proceeding to payments.');
          } else {
            // Show an alert if the cartItems.total is not empty
            navigation.navigate('Payments', { deliveryLocation : deliveryLocation || '', deliveryAddress : deliveryAddress || '', changedFinalTotal });
            console.log('To pament  Screen');
          }
      
    }

    return (
        <View>

            <ScrollView >
            {/* <Text>{JSON.stringify(cartItems.cartItems.items, null , 4)}</Text> */}
            
            {/* <Text>{JSON.stringify(changedFinalTotal, null , 4)}</Text> */}
            
                <VStack p={4}>

                <CartBox
                deliveryLocation={deliveryLocation}
                setDeliveryLocation={setDeliveryLocation}
                deliveryAddress={deliveryAddress}
                setDeliveryAddress={setDeliveryAddress}
            />
                    <View>
                        {(cartItems.cartItems.items || []).map(data => {
                            return <CartProductBoxes
                                data={data}
                                key={data.id}/>;
                        })}

                    </View>

                    <CartBoxSecond/>

                    <CartToPayList />
                    {/* <CartBoxThird/> */}
                    <CartBoxThirdFOrShippingAddress/>
                    <ShippingAddressBox head='Shipping Address'/>
                    <Box h={500}></Box>

                </VStack>

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
                        onPress={handlePressGoToPayment}
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

        </View>
    )
}
