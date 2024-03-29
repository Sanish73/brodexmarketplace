import React from 'react';
import {
    Text,
    VStack,
    Button,
    HStack,
    Box,
    Image
} from "native-base";

export default function OrderSummaryBoxes({data}) {
    return (
        <Box paddingTop={3}>
            <HStack justifyContent={'space-between'}>

                <VStack width={'29%'} bg={'green.100'}>
                    <Box>
                        <Image
                            source={{
                            uri: "https://wallpaperaccess.com/full/317501.jpg"
                        }}
                            alt="Alternate Text"
                            size="lg"
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