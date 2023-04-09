import {
    Text,
    HStack,
    VStack,
    Avatar,
    Box,
    Button
} from 'native-base'
import React, {Component} from 'react'
import {View} from 'react-native'
import {TouchableOpacity} from 'react-native-gesture-handler'

export function HomeFlashDetaisTop() {

    return (
        <HStack
            alignItems={'center'}
            px={5}
            // bgColor={'blue.100'}
            justifyContent={'space-between'}
            w={'100%'}>
            <Box w={'50%'}>
                <Text bold fontSize={17}>Flash Details</Text>
            </Box>

            <HStack
                w={'50%'}
                alignItems={'center'}
                // bgColor={'red.100'}
                justifyContent={'flex-end'}
                space={4}>
                <Text bold>Ends In</Text>
                <Button w={100} bgColor={'#ffa94d'} rounded={8}>21:52:53</Button>
            </HStack>

        </HStack>
    )
}