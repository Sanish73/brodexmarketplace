import {HStack, VStack, Avatar, Text,Box, Button} from 'native-base'
import React, {Component} from 'react'
import {View} from 'react-native'

export default function FlashDetaisHead() {
    return (
        <VStack py={1}>
            <HStack  justifyContent={'space-between'} alignItems={'center'} >
                <Box w={'62%'}>
                    <Text bold  fontSize="xl">
                        Flash Details
                    </Text>
                </Box>
                <Box flexDirection={'row'}  w={'38%'} justifyContent={'space-between'} alignItems={'center'} >
                    <Text >
                       Ends In
                    </Text>

                    <Button
                        width={79}
                        
                        backgroundColor={'#ffa94d'}
                        _text={{
                        color: "white",
                        fontSize: 16,
                        fontWeight: 'bold'
                    }}>21:52:45</Button>
                </Box>
            </HStack>
        </VStack>
    )
}