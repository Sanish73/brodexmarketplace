import {Box, HStack, Text, View} from 'native-base'
import React, {useState, useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

export default function CartToPayList() {

    const cartTotalPrice = useSelector(state => state.getCartTotalReducer);
    const cartItems = useSelector(state => state.getAllCartReducer);




    const [changedTotal, setChnageTotal] = useState(cartItems.cartItems.total);
    const [changedFinalTotal, setChnageFinalTotal] = useState(cartItems.cartItems.finalTotal);

    
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

    
    

    console.log(cartTotalPrice,"---------------");
    return (
        <Box>
            <HStack justifyContent={'space-between'}>
                <Text>Item total</Text>
                <HStack>
                    <View justifyContent={'center'}>
                        <FontAwesome name="rupee" size={12} color={'black'}/>
                    </View>
                    <View pl={1}>
                        <Text bold fontSize={13}>{changedTotal}</Text>
                    </View>
                </HStack>
            </HStack>

            <HStack justifyContent={'space-between'} mt={1}>
                <Text>Delivery charges</Text>
                <HStack>
                    <View justifyContent={'center'}>
                        <FontAwesome name="rupee" size={12} color={'black'}/>
                    </View>
                    <View pl={1}>
                        <Text bold fontSize={12}>{cartItems.cartItems.shipping}</Text>
                    </View>
                </HStack>
            </HStack>

            {/* <HStack justifyContent={'space-between'} mt={1}>
        <Text>Tax</Text>
        <Text>Remove</Text>
        <HStack>
          <Text>$</Text>
          <Text>1.00</Text>
        </HStack>
      </HStack> */}

            <HStack justifyContent={'space-between'} my={1}>
                <Text bold fontSize={16}>To Pay</Text>
                <HStack>
                    <View justifyContent={'center'}>
                        <FontAwesome name="rupee" size={15} color={'black'}/>
                    </View>
                    <View pl={1}>
                        <Text bold fontSize={16}>{changedFinalTotal}</Text>
                    </View>
                </HStack>
            </HStack>
        </Box>
    )
}
