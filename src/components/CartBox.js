import {Box, HStack, VStack, Text, Center} from 'native-base'
import {background} from 'native-base/lib/typescript/theme/styled-system';
import React from 'react'
import {View} from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons';

export default function CartBox() {

    return (
        <HStack bgColor={'#FFECB3'} w={'100%'} borderRadius={5}>
            <HStack
                alignItems={'center'}
                style={{
                height: 55,
                width: '100%'
            }}>
                <Center w={'15%'}>
                    <Icon
                        size={27}
                        name={'location'}
                        ba
                        style={{
                        color: '#F57F17',
                        padding: 2
                    }}></Icon>

                </Center>
                <VStack w={'64%'}>
                    <HStack alignSelf={'flex-start'} alignItems={'center'}>
                        <Text fontSize={16}>
                            Deliver at:
                        </Text>
                        <Text bold fontSize={17} pl={1}>
                            Home
                        </Text>

                    </HStack>

                    <Text alignSelf={'flex-start'}>
                        2023 Kathmandu, Baneshwor
                    </Text>
                </VStack>
                <VStack w={'16%'}>
                    <Text fontSize={16} color={'#F57F17'} bold>
                        Change
                    </Text>
                </VStack>
            </HStack>

        </HStack>

    )
}
