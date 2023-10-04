import {ScrollView, Box, VStack, Button, View , Text} from 'native-base';
import CartBox from '../components/CartBox';
import { Alert } from 'react-native';
import React, {useState, useEffect} from 'react';
import CartProductBoxes from '../components/CartProductBoxes';
import CartBoxSecond from '../components/CartBoxSecond';
import CartBoxThirdFOrShippingAddress from '../components/CartBoxThirdFOrShippingAddress';
import CartToPayList from '../components/CartToPayList';
import { useFocusEffect } from '@react-navigation/native';
import {useNavigation} from '@react-navigation/native';
import {useSelector, useDispatch} from 'react-redux';
import {getAllCartItems} from '../Redux/actions/cartAPIAction';
import ShippingAddressBox from '../components/ShippingAddressBox'
export default function CartScreen() {

    const [deliveryLocation,
        setDeliveryLocation] = useState('Home');
    const [deliveryAddress,
        setDeliveryAddress] = useState('Kathmandu, Baneshwor');

    const dispatch = useDispatch();
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
    
    const navigation = useNavigation();
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
