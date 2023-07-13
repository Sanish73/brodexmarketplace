import {
    ScrollView,
    Box,
    VStack,
    Button,
    View
} from 'native-base';
import CartBox from '../components/CartBox';
import React, {useState, useEffect} from 'react';
import CartProductBoxes from '../components/CartProductBoxes';
import CartBoxSecond from '../components/CartBoxSecond';
import CartToPayList from '../components/CartToPayList';
import CartBoxThird from '../components/CartBoxThird';
import {useNavigation} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';



export default function CartScreen({ route }) {

    const [cartItems, setCartItems] = useState([]);

    useEffect(() => {
      const fetchCartItems = async () => {
        try {
          // Retrieve cart items from AsyncStorage on component mount
          const storedCartItems = await AsyncStorage.getItem('cartItems');
         
          const parsedCartItems = storedCartItems ? JSON.parse(storedCartItems) : [];
          setCartItems(parsedCartItems);
        } catch (error) {
          console.log(error);
        }
      };
  
      fetchCartItems();
    }, []);

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
        }, {
            id: 2,
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
        }, {
            id: 3,
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
        try {
            await AsyncStorage.clear();
            console.log("cartScreen",cartItems)
        } catch (error) {
            
        }
        // navigation.navigate('Order');
        
    }

    // const cartItems  = route.params;

   
    // console.log('cartScreen',route.params.id);
    console.log("cartScreen",cartItems)
    // console.warn(JSON.stringify((route.params, null, 2)));
    // console.log(productPrice)

    return (
        <View>

            <ScrollView >

                <VStack p={4}>

                    <CartBox/>

                    <View>
                    {/* {cartItems.map(data=>{
                        <Text>data.id</Text>
                    })}
                    */}
                        {cartProducts.map(data => {
                            return <CartProductBoxes data={data} key={data.id}/>;
                        })}
                    </View>
                    <CartBoxSecond/>
                    <CartToPayList/>
                    <CartBoxThird/>
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
