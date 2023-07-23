import React from 'react';
import {Alert, ScrollView, TouchableOpacity} from 'react-native';
import {
    Text,
    VStack,
    View,
    Button,
    HStack,
    Box
} from "native-base";
import Icon from 'react-native-vector-icons/Ionicons';

export default function ShippingAddressBox() {
    return <View>

        <Box style={{
            flexDirection: 'row'
        }}>
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
                        <Text fontSize={16} color={'black'}>Sanish Thapa</Text>
                    </HStack>
                    <HStack>
                        <Text fontSize={16} color={'black'}>+977 9844557835</Text>
                    </HStack>
                </VStack>
            </HStack>

            <HStack space={6} style={{
                alignItems: 'center'
            }}>
                <VStack width={'6%'}>
                    {/* /////space */}
                </VStack>
                <VStack>
                    <VStack>
                        {/* <View>
                        <Text fontSize={16} color={'black'}>Land Mark(Optional):-</Text>
                        </View> */}

                        <View>
                            <Text fontSize={16} color={'black'}>Kadhaghari,Gauriswara-9</Text>
                        </View>
                    </VStack>

                </VStack>
            </HStack>
        </Box>

        <Box marginTop={3}></Box>
    </View>
}
