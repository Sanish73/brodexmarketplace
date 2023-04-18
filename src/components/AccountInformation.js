import {View} from 'react-native'
import React from 'react'
import {Box, VStack, Heading, Text} from 'native-base'

const AccountInformation = (props) => {
    return (
        <Box>
            <VStack space={1}>
                <Box>
                    <Heading size="md">{props.title}</Heading>
                </Box>
                <Box>
                    <Text>
                        {props.description}
                    </Text>
                </Box>
            </VStack>
        </Box>
    )
}

export default AccountInformation