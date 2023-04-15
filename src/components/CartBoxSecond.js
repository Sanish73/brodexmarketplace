import {Box, HStack, VStack, Text, Center} from 'native-base'
import {background} from 'native-base/lib/typescript/theme/styled-system';
import React from 'react'
import {View} from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons';

export default function CartBoxSecond() {

    return (
        <HStack bgColor={'#FFECB3'} w={'100%'} borderRadius={5} my={3}>
            <HStack
                alignItems={'center'}
                style={{
                height: 55,
                width: '100%'
            }}>
                <Center w={'15%'}>
                    <Icon
                        size={27}
                        name={'ios-wallet'}
                        ba
                        style={{
                        color: '#F57F17',
                        padding: 2
                    }}></Icon>

                </Center>
                <VStack w={'64%'}>
                    <HStack alignSelf={'flex-start'} alignItems={'center'}>

                        <Text fontSize={17} pl={1}>
                            Apply a promo code
                        </Text>

                    </HStack>

                </VStack>
                <VStack w={'16%'}>
                    <Text fontSize={16} color={'#F57F17'} bold>
                        Apply
                    </Text>
                </VStack>
            </HStack>

        </HStack>

    )
}
