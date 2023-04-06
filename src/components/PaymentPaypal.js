import {VStack, HStack, Text, Box} from 'native-base'
import React from 'react'
import Icon from 'react-native-vector-icons/Ionicons';
// import {Text} from 'react-native-svg'

function PaymentPaypal() {
    return (
        <VStack px={4} py={0}>
            <Box>
                <HStack style={{
                    alignItems: 'center'
                }}>

                    <VStack>
                        <Text fontSize={20} fontWeight={'thin'}>
                            Paypal
                        </Text>
                    </VStack>
                    <VStack
                        marginLeft={2}
                        style={{
                        backgroundColor: '#FAEFCD',
                        borderRadius: 50
                    }}>
                        {/* #ffa94d */}
                        <Icon size={20} // md-chevron-forward-outline --chevron-up
                            name={'md-chevron-forward-outline'} ba style={{
                            color: '#ffa94d',
                            padding: 4
                        }}></Icon>
                    </VStack>
                </HStack>

            </Box>
        </VStack>
    )
}

export default PaymentPaypal
