import React from 'react';
import {Alert, ScrollView, TouchableOpacity} from 'react-native';
import {
    Text,
    VStack,
    Button,
    HStack,
    Box,
    Image,
    Center
} from "native-base";
import Icon from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

export default function CartProductBoxes({data}) {

    return (
        <Box paddingTop={3}>
            <HStack h={68} style={{
                // backgroundColor: 'pink'
            }}>

                <VStack width={'18%'} bg={'green.100'} h={'100%'}>
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
                <VStack width={'58%'} paddingX={3} justifyContent={'space-between'}>
                    <VStack
                        style={{
                        // backgroundColor: 'blue',
                        height: '60%'
                    }}>
                        <Text bold fontSize={16}>Scarlett Whistening</Text>
                        <Text fontSize={14} color={'#8C8A89'}>Brightly Serum</Text>
                    </VStack>

                    <HStack
                        alignItems={'center'}
                        style={{
                        // backgroundColor: 'green',
                        height: '40%'
                    }}>
                        <Box p={1} >

                            <FontAwesome name="rupee" size={10} color={'red.100'}/>
                        </Box>
                        <Box>
                            <Text fontSize={14} color={'#8C8A89'}>10,3</Text>
                        </Box>

                    </HStack>
                </VStack>

                <VStack
                    width={'25%'}
                    justifyContent={'space-between'}
                    // bgColor={'green.100'}
                    style={{
                    height: '100%'
                }}>
                    <HStack
                        alignItems={'center'}
                        justifyContent={'space-between'}
                        style={{
                        // backgroundColor: 'blue',
                        height: '60%'
                    }}>
                        <Box borderRadius={5} backgroundColor={'blue.100'} >
                            <Icon
                                size={24}
                                name={'remove-sharp'}
                                style={{
                                color: '#ffa94d',
                                padding: 2
                            }}></Icon>

                        </Box>
                        <Text bold fontSize={19}>
                            2
                        </Text>
                        <Box    borderRadius={5} backgroundColor={'blue.100'}>
                            <Icon
                                size={24}
                                name={'add'}
                                style={{
                                color: '#ffa94d',
                                padding: 2
                            }}></Icon>

                        </Box>
                    </HStack>
                    <HStack
                        style={{
                        // backgroundColor: 'green',
                        height: '40%',
                        alignItems: 'center',
                        alignSelf:'flex-end'
                    }}>

                        <Box p={1}>
                            <FontAwesome name="rupee" size={10} color={'red.100'}/>

                        </Box>
                        <Text>
                            19.00
                        </Text>

                    </HStack>

                </VStack>
            </HStack>
        </Box>
    )
}