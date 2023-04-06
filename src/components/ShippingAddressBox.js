import React from 'react';
import {Alert, ScrollView, TouchableOpacity} from 'react-native';
import {Text, VStack, Button, HStack, Box} from "native-base";
import Icon from 'react-native-vector-icons/Ionicons';

export default function ShippingAddressBox() {
    return <VStack p={4}>
        <Box>
            <HStack
                style={{
                justifyContent: 'space-between',
                alignItems: 'center'
            }}>

                <VStack>
                    <Text fontSize={20} fontWeight={'thin'}>
                        Shipping Address
                    </Text>
                </VStack>
                <VStack>
                    {/* #ffa94d */}
                    <Button
                        width={75}
                        backgroundColor={'#FAEFCD'}
                        _text={{
                        color: "#ffa94d",
                        fontSize: 13,
                        fontWeight: 'bold'
                    }}>Edit</Button>
                </VStack>
            </HStack>

        </Box>

        <Box>
            <HStack space={3} style={{
                alignItems: 'center'
            }}>
                <VStack
                    style={{
                    backgroundColor: '#FAEFCD',
                    borderRadius: 50
                }}>
                    <Icon
                        size={27}
                        name={'location-outline'}
                        ba
                        style={{
                        color: '#ffa94d',
                        padding: 2
                    }}></Icon>
                </VStack>
                <VStack>
                    <HStack>
                        <Text fontSize={16} color={'#8C8A89'}>Sanish Thapa</Text>
                    </HStack>
                    <HStack>
                        <Text fontSize={16} color={'#8C8A89'}>+977 9844557835</Text>
                    </HStack>
                </VStack>
            </HStack>
        </Box>

        <Box marginTop={3}>
            <HStack space={6} style={{
                alignItems: 'center'
            }}>
                <VStack width={'6%'}>
                    {/* /////space */}
                </VStack>
                <VStack>
                    <HStack>
                        <Text fontSize={16} color={'#8C8A89'}>Kadhaghari,Gauriswara-9</Text>
                    </HStack>

                </VStack>
            </HStack>
        </Box>
    </VStack>
}
