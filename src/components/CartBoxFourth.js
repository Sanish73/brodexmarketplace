import {
    Box,
    HStack,
    VStack,
    Text,
    Center,
    Alert,
    Button
} from 'native-base'
import {background} from 'native-base/lib/typescript/theme/styled-system';
import React from 'react'
import {View} from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons';

export default function CartBoxFourth({ onPress }) {

  

    return (
        <Center
            bgColor={'#FFECB3'}
            w={'100%'}
            borderRadius={5}
            style={{
            height: 55
        }}>
            {/* <HStack
                alignItems={'center'}
                >
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
                <VStack w={'66%'}>
                    <HStack alignSelf={'flex-start'} alignItems={'center'}>
                        <Text fontSize={16}>
                            Pay Using
                        </Text>


                    </HStack>

                    <Text alignSelf={'flex-start'}  bold fontSize={17}>
                       Paypal
                    </Text>
                </VStack>
                <VStack w={'14%'}>
                    <Text fontSize={16} color={'#F57F17'} bold>
                        Change
                    </Text>
                </VStack>
            </HStack> */}
            <Button fontSize={20} color={'#F57F17'} bold onPress={onPress} >
                Check Out

            </Button>

        </Center>

    )
}
