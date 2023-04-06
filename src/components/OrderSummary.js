import React from 'react';
import {Alert, ScrollView, TouchableOpacity} from 'react-native';
import {
    Text,
    VStack,
    Button,
    HStack,
    Box,
    Image
} from "native-base";
import Icon from 'react-native-vector-icons/Ionicons';
import OrderSummaryBoxes from './OrderSummaryBoxes';

export default function OrderSummary() {
    return (
        <VStack paddingX={4} paddingY={2}>
            <Box>
                <HStack
                    style={{
                    justifyContent: 'space-between',
                    alignItems: 'center'
                }}>
                    <VStack>
                        <Text fontSize={20} fontWeight={'thin'}>
                            Order Summery
                        </Text>
                    </VStack>
                    <VStack>
                        <Button
                            width={75}
                            backgroundColor={'#FAEFCD'}
                            _text={{
                            color: "#ffa94d",
                            fontSize: 13,
                            fontWeight: 'bold'
                        }}>Edit</Button>
                    </VStack>
                </HStack>
                {/* ///////////////  */}
                <OrderSummaryBoxes/>
                <OrderSummaryBoxes/>
                <OrderSummaryBoxes/> 
                 {/* ///////////////// */}
            </Box>
        </VStack>
    )
}
