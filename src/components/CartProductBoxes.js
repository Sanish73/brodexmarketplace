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
        <Box paddingTop={3} style={{
            overflow: 'hidden'
        }}>
            <HStack h={68} style={{}}>

                <VStack width={'18%'} h={'100%'}>
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
                <VStack width={'56%'} paddingX={3} justifyContent={'space-between'}>
                    <VStack style={{
                        height: '60%'
                    }}>
                        <Text bold fontSize={16}>Scarlett Whistening</Text>
                        <Text fontSize={14} color={'#8C8A89'}>Brightly Serum</Text>
                    </VStack>

                    <HStack
                        alignItems={'center'}
                        style={{
                        height: '40%'
                    }}>

                        <Box p={1}>

                            <FontAwesome name="rupee" size={10} color={'black'}/>
                        </Box>
                        <Box>
                            <Text bold fontSize={15} color={'black'}>10,3</Text>
                        </Box>

                    </HStack>
                </VStack>

                <VStack
                    width={'27%'}
                    justifyContent={'space-between'}
                    style={{
                    height: '100%'
                }}>
                    <HStack
                        alignItems={'center'}
                        justifyContent={'space-between'}
                        style={{
                        height: '60%',
                        marginRight: 3
                    }}>
                        <Box borderRadius={5} backgroundColor={'#DEDCDB'}>
                            <Icon
                                size={24}
                                name={'remove-sharp'}
                                style={{
                                color: '#F57F17',
                                padding: 2
                            }}></Icon>

                        </Box>
                        <Text bold fontSize={19}>
                            2
                        </Text>
                        <Box
                            borderRadius={5}
                            backgroundColor={'#DEDCDB'}
                            style={{
                            overflow: 'hidden',
                            width: 30
                        }}>
                            <Icon
                                size={24}
                                name={'add'}
                                style={{
                                color: '#F57F17',
                                padding: 2
                            }}></Icon>

                        </Box>
                    </HStack>
                    <HStack
                        style={{
                        height: '40%',
                        alignItems: 'center',
                        alignSelf: 'flex-end',
                        marginRight: 3
                    }}>

                        <Box p={1}>
                            <FontAwesome name="rupee" size={12} color={'black'}/>

                        </Box>
                        <Text bold fontSize={15} color={'black'}>
                            19.00
                        </Text>

                    </HStack>

                </VStack>
            </HStack>
        </Box>
    )
}