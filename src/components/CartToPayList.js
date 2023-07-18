import {Box, HStack, Text, View} from 'native-base'
import React from 'react'
import {useSelector, useDispatch} from 'react-redux';
import {getCartTotalReducer} from '../Redux/reducers/cartReducers/getCartTotalReducer';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

export default function CartToPayList() {

    const {cartTotalPrice} = useSelector(state => state.getCartTotalReducer);

    return (
        <Box>
            <HStack justifyContent={'space-between'}>
                <Text>Item total</Text>
                <HStack>
                    <View justifyContent={'center'}>
                        <FontAwesome name="rupee" size={12} color={'black'}/>
                    </View>
                    <View pl={1}>
                        <Text bold fontSize={13}>{cartTotalPrice.total}</Text>
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
                        <Text bold fontSize={12}>26.06</Text>
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
                        <Text bold fontSize={16}>26.06</Text>
                    </View>
                </HStack>
            </HStack>
        </Box>
    )
}
