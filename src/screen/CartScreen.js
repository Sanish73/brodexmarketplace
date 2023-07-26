import {ScrollView, Box, VStack, Button, View , Text} from 'native-base';
import CartBox from '../components/CartBox';
import React, {useState, useEffect} from 'react';
import CartProductBoxes from '../components/CartProductBoxes';
import CartBoxSecond from '../components/CartBoxSecond';
import CartBoxThirdFOrShippingAddress from '../components/CartBoxThirdFOrShippingAddress';
import CartToPayList from '../components/CartToPayList';
import CartBoxThird from '../components/CartBoxThird';
import {useNavigation} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import cartReducer from '../Redux/reducers/cartReducers/cartReducer';
import {useSelector, useDispatch} from 'react-redux';
import {getAllCartItems} from '../Redux/actions/cartAPIAction';
import ShippingAddressBox from '../components/ShippingAddressBox'
import { getAllCartTotal } from '../Redux/actions/cartAPIAction';
import { addOrderAction } from '../Redux/actions/orderAction';

export default function CartScreen({route}) {
    const dispatch = useDispatch();
    console.log('cartScreen.js------------------')

    useEffect(() => {

        getAllCartItems('', 1)(dispatch);

    }, []);

    const cartItems = useSelector(state => state.getAllCartReducer);

    const handleTotalPriceChange = (newTotalPrice) => {
      setTotalPrice(newTotalPrice);
      console.log(newTotalPrice);
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

    const handlePressGoToPayment = async() => {
        navigation.navigate('Payments');
       
        
    }

    // console.warn(JSON.stringify((route.params, null, 2)));

    return (
        <View>

            <ScrollView >
            {/* <Text>{JSON.stringify(cartItems.cartItems, null , 4)}</Text> */}

                <VStack p={4}>

                    <CartBox/>
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
                    <Box h={100}></Box>

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
