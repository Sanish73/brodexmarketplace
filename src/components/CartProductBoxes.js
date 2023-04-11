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

export default function CartProductBoxes({data}) {

    return (
        <Box paddingTop={3}>
            <HStack justifyContent={'space-between'} bgColor={'red.100'} h={71}>

                <VStack width={'19%'} bg={'green.100'} h={'100%'}>
                    <Box>
                        <Image
                            source={data.productImage}
                            alt="Alternate Text"
                            size="lg"
                            height="100%"
                            resizeMode="contain"
                            borderRadius={7}/>
                    </Box>
                </VStack>
                <VStack width={'50%'} paddingX={1}>
                    <VStack >
                        <Text bold fontSize={17}>Scarlett Whistening</Text>

                    </VStack>
                    <VStack>
                        <Text fontSize={16} color={'#8C8A89'}>Brightly Serum</Text>
                    </VStack>
                    <VStack>
                        <Text fontSize={16} color={'#8C8A89'}>$10,3</Text>
                    </VStack>
                </VStack>

                <VStack width={'18%'} justifyContent={'center'}>
                    <HStack >
                        <Text paddingLeft={1}>
                            X
                        </Text>

                        <Text >
                            10000
                        </Text>
                    </HStack>

                </VStack>
            </HStack>
        </Box>
    )
}