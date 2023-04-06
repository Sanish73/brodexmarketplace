import React from 'react';
import {Alert, ScrollView, TouchableOpacity} from 'react-native';
import {
    Text,
    VStack,
    Button,
    HStack,
    Box,
    Input
} from "native-base";
import Icon from 'react-native-vector-icons/Ionicons';

export default function VoucherBox() {
    return <VStack paddingX={4} paddingY={1}>
        <Box>
            <HStack
                style={{
                justifyContent: 'space-between',
                alignItems: 'center'
            }}>
                <Text fontSize={20} fontWeight={'thin'}>
                    Voucher
                </Text>
            </HStack>
        </Box>
        <Box>
            <HStack>
                <Box paddingTop={2} width="75%" justifyContent={'flex-start'}>
                    <VStack>
                        <Input
                            h={12}
                            backgroundColor={'#dfdedc'}
                            w="100%"
                            borderRadius={7}
                            variant="filled"
                            placeholder="Filled"/>
                    </VStack>
                    {/* <VStack>
                        <Text>sjld</Text>
                    </VStack> */}
                </Box>
                <Box width="28%" paddingTop={2} justifyContent={'flex-start'} paddingLeft={2}>
                    <VStack >

                        <Button
                            h={12}
                            width={'89%'}
                            backgroundColor={'#FAEFCD'}
                            _text={{
                            color: "#ffa94d",
                            fontSize: 13,
                            fontWeight: 'bold'
                        }}>Edit</Button>
                    </VStack>
                </Box>

            </HStack>

        </Box>

        
    </VStack>
}