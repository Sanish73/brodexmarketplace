import {Box, HStack, VStack} from 'native-base'
import { background } from 'native-base/lib/typescript/theme/styled-system';
import React from 'react'
import {Text, View} from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons';

export default function CartBox() {

    return (
        <View>
            <HStack  w={'100%'} style={{
                background:'red',
                height:55,
                
             } }>
                <Box bg={'pink.100'} >
                    <Icon
                        size={27}
                        name={'add'}
                        style={{
                        color: '#ffa94d',
                        padding: 2
                    }}></Icon>

                </Box>
                <VStack bg={'red.100'}>
                    <HStack>
                        <Text>
                            Deliver at:
                        </Text>
                        <Text bold>
                            Home
                        </Text>

                    </HStack>

                    <Text>
                        sdjfjsdklfjsdlkfjdsjfljsdkfj
                    </Text>
                </VStack>
                <Box bg={'green.100'}>
                    <Text>
                        lskdjflkj
                    </Text>
                </Box>
            </HStack>

        </View>

    )
}
