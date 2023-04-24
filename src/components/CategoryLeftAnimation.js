import React, {useState, useEffect, useRef} from 'react';
import {
    View,

    StatusBar,
    ScrollView,
    TouchableOpacity,
    Image,
    Alert
} from 'react-native';
import {COLOURS, Items} from '../database/Database';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {
    Box,
    VStack,
    Button,
    HStack,
    Heading,
    Text,
    Center
} from 'native-base';
import {ProductCard} from './ProductCard';
import {Animated} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

export default function CategoryLeftAnimation({_currentTab, _setCurrentTab, _offsetvalue, _showMenu, _setShowMenu}) {
    return (
        <VStack style={{
            backgroundColor: '#E5E5E5'
        }}>
            <ScrollView >
                <VStack w={'83%'} h={'100%'} style={{}}>
                    <VStack style={{
                        height: 69
                    }}>
                        {TabButton(_currentTab, _setCurrentTab, "Close", _offsetvalue, _showMenu, _setShowMenu)}
                    </VStack>

                    <VStack
                        bgColor={'white.900'}
                        mx={2}
                        p={4}
                        borderColor={'gray.100'}
                        justifyContent={'space-between'}
                        style={{
                        height: 190,
                        margin: 5,
                        elevation: 5,
                        borderRadius: 8
                    }}>
                        <HStack borderBottomWidth={1} borderBottomColor={'gray.400'}>
                            <Heading bold fontSize="lg" mb={2}>Filter By Price</Heading>
                        </HStack>

                        <HStack justifyContent={'space-between'}>
                            <Box w={'50%'}>
                                <Text bold fontSize="md">From</Text>
                            </Box>
                            <Box w={'50%'} alignSelf={'flex-start'}>
                                <Text bold fontSize="md">To</Text>
                            </Box>

                        </HStack>

                        <HStack justifyContent={'space-between'}>
                            <Box w={'46%'}>
                                <HStack
                                    p={2}
                                    alignSelf={'flex-start'}
                                    borderRadius={3}
                                    borderWidth={1}
                                    w={'100%'}>
                                    <Text bold fontSize="md">
                                        Rs
                                    </Text>
                                    <Text fontSize="md" ml={1}>
                                        100.00
                                    </Text>
                                </HStack>

                            </Box>
                            <Center w={'8%'}>
                                <Text bold>
                                    -
                                </Text>
                            </Center>
                            <Box w={'46%'} h={10} alignSelf={'flex-start'}>
                                <HStack
                                    p={2}
                                    alignSelf={'flex-start'}
                                    borderRadius={3}
                                    borderWidth={1}
                               
                                    w={'100%'}
                                    h={'100%'}>
                                    <Text bold fontSize="md">
                                        Rs
                                    </Text>
                                    <Text fontSize="md" ml={1}>
                                        100.00
                                    </Text>
                                </HStack>
                            </Box>

                        </HStack>

                        <HStack>
                            <Box>
                                <Button>
                                    Filter
                                </Button>
                            </Box>

                        </HStack>

                    </VStack>

                    <VStack
                        bgColor={'white.900'}
                        mt={4}
                        mx={2}
                        p={4}
                        borderColor={'gray.100'}
                        justifyContent={'space-between'}
                        style={{
                        margin: 5,
                        elevation: 5,
                        borderRadius: 8
                    }}>
                        <HStack borderBottomWidth={1} borderBottomColor={'gray.400'}>
                            <Heading bold fontSize="lg" mb={2}>Categories</Heading>
                        </HStack>

                        <HStack
                            justifyContent={'space-between'}
                            style={{
                            flexWrap: 'wrap',
                            flexDirection: 'row'
                        }}>

                            <HStack
                                mt={3}
                                p={2}
                                borderRadius={3}
                                borderWidth={1}
                                w={'100%'}
                                justifyContent={'space-evenly'}>
                                <Box w={'83%'}>
                                    <Text bold fontSize="md">
                                        Sholder Bag
                                    </Text>
                                </Box>
                                <Center w={'17%'}>
                                    <Icon
                                        size={20}
                                        name={"md-radio-button-off"}
                                        style={{
                                        color: "#ffa94d",
                                        padding: 4
                                    }}/>
                                </Center>
                            </HStack>

                            <HStack
                                mt={3}
                                p={2}
                                borderRadius={3}
                                borderWidth={1}
                                w={'100%'}
                                justifyContent={'space-evenly'}>
                                <Box w={'83%'}>
                                    <Text bold fontSize="md">
                                        Dairy & chese
                                    </Text>
                                </Box>
                                <Center w={'17%'}>
                                    <Icon
                                        size={20}
                                        name={"md-radio-button-off"}
                                        style={{
                                        color: "#ffa94d",
                                        padding: 4
                                    }}/>
                                </Center>
                            </HStack>
                            <HStack
                                mt={3}
                                p={2}
                                borderRadius={3}
                                borderWidth={1}
                                w={'100%'}
                                justifyContent={'space-evenly'}>
                                <Box w={'83%'}>
                                    <Text bold fontSize="md">
                                        OverSize Cotton
                                    </Text>
                                </Box>
                                <Center w={'17%'}>
                                    <Icon
                                        size={20}
                                        name={"md-radio-button-off"}
                                        style={{
                                        color: "#ffa94d",
                                        padding: 4
                                    }}/>
                                </Center>
                            </HStack>
                            <HStack
                                mt={3}
                                p={2}
                                borderRadius={3}
                                borderWidth={1}
                                w={'100%'}
                                justifyContent={'space-evenly'}>
                                <Box w={'83%'}>
                                    <Text bold fontSize="md">
                                        md-radio-button-on-outline
                                    </Text>
                                </Box>
                                <Center w={'17%'}>
                                    <Icon
                                        size={20}
                                        name={"md-radio-button-off"}
                                        style={{
                                        color: "#ffa94d",
                                        padding: 4
                                    }}/>
                                </Center>
                            </HStack>

                        </HStack>

                    </VStack>

                    <VStack
                        bgColor={'white.900'}
                        mt={4}
                        mx={2}
                        p={4}
                        borderColor={'gray.100'}
                        justifyContent={'space-between'}
                        style={{
                        margin: 5,
                        elevation: 5,
                        borderRadius: 8
                    }}>
                        <HStack borderBottomWidth={1} borderBottomColor={'gray.400'}>
                            <Heading bold fontSize="lg" mb={2}>Brand</Heading>
                        </HStack>

                        <HStack
                            justifyContent={'space-between'}
                            style={{
                            flexWrap: 'wrap',
                            flexDirection: 'row'
                        }}>

                            <HStack
                                mt={3}
                                p={2}
                                borderRadius={3}
                                borderWidth={1}
                                w={'100%'}
                                justifyContent={'space-evenly'}>
                                <Text bold fontSize="md">
                                    SHolder Bag
                                </Text>
                                <Text fontSize="md">
                                    10
                                </Text>
                            </HStack>

                            <HStack mt={3} p={2} borderRadius={3} borderWidth={1} w={'100%'}>
                                <Text bold fontSize="md">
                                    Rs
                                </Text>
                                <Text fontSize="md">
                                    100.00
                                </Text>
                            </HStack>

                            <HStack mt={3} p={2} borderRadius={3} borderWidth={1} w={'100%'}>
                                <Text bold fontSize="md">
                                    Rs
                                </Text>
                                <Text fontSize="md">
                                    100.00
                                </Text>
                            </HStack>

                        </HStack>

                    </VStack>

                </VStack>

                <VStack w={'17%'} h={'100%'}></VStack>
            </ScrollView>
        </VStack>
    )
}

const TabButton = (currentTab, setCurrentTab, title, _offsetvalue, _showMenu, _setShowMenu) => {
    return (
        <Button
            variant="outline"
            size="xs"
            startIcon={< Icon style = {{ color: '#F57F17' }}name = "md-options-outline" size = {
            22
        }
        color = "#fff" />}
            onPress={() => {
            setCurrentTab(title);
            Animated
                .timing(_offsetvalue, {
                toValue: _showMenu
                    ? 0
                    : 1,
                duration: 300,
                useNativeDriver: true
            })
                .start();
            _setShowMenu(!_showMenu);
        }}
            m={4}
            width={'100'}
            bg={currentTab === title
            ? 'green'
            : 'transparent'}
            _text={{
            color: currentTab == title
                ? 'red.500'
                : 'black'
        }}>
            {title}
        </Button>
    )
}
