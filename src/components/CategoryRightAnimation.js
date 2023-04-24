import React, {useState, useEffect, useRef} from 'react';
import {
    View,
    Text,
    StatusBar,
    ScrollView,
    TouchableOpacity,
    Image
} from 'react-native';
import {COLOURS, Items} from '../database/Database';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {Box, VStack, Button, HStack, Center} from 'native-base';
import {ProductCard} from './ProductCard';
import {Animated} from 'react-native';
import CategoryLeftAnimation from './CategoryLeftAnimation';
import Icon from 'react-native-vector-icons/Ionicons';
// import { Ionicons } from '@expo/vector-icons';

export default function CategoryRightAnimation({_showMenu, _setShowMenu, _offsetvalue, _scalevalue, _closebuttonoffsetvalue}) {

    const [products,
        setProducts] = useState([
        {
            id: 1,
            category: 'product',
            productName: 'MI Super Bass Bluetooth Wireless Headphones',
            productPrice: 1799,
            description: 'Up to 20 hours battery life | Super powerful Bass | 40mm dynamic driver | Pressu' +
                    're less ear muffs | Bluetooth 5.0 | Voice control',
            isOff: true,
            offPercentage: 10,
            productImage: require('../../assets/images/29032316800754916423eae35ddce.webp'),
            isAvailable: true,
            productImageList: [require('../../assets/images/01042316803342086427dd809514b.webp'), require('../../assets/images/2503231679712494641e60eed7930.webp'), require('../../assets/images/c08000131_1750x1285.webp'), require('../../assets/images/01042316803342086427dd809514b.webp')]
        }, {
            id: 2,
            category: 'product',
            productName: 'boAt Rockerz 450 Bluetooth Headphone',
            productPrice: 1499,
            description: 'boAt Rockerz 450 M is an on-ear wireless headset that has been ergonomically des' +
                    'igned to meet the needs of music lovers.',
            isOff: false,
            productImage: require('../../assets/images/01042316803342086427dd809514b.webp'),
            isAvailable: true,
            productImageList: [require('../../assets/images/c08000131_1750x1285.webp'), require('../../assets/images/c08000131_1750x1285.webp'), require('../../assets/images/c08000131_1750x1285.webp')]
        }, {
            id: 3,
            category: 'product',
            productName: 'boAt Rockerz 450 Bluetooth Headphone',
            productPrice: 1499,
            description: 'boAt Rockerz 450 M is an on-ear wireless headset that has been ergonomically des' +
                    'igned to meet the needs of music lovers.',
            isOff: false,
            productImage: require('../../assets/images/2503231679712494641e60eed7930.webp'),
            isAvailable: true,
            productImageList: [require('../../assets/images/c08000131_1750x1285.webp'), require('../../assets/images/c08000131_1750x1285.webp'), require('../../assets/images/c08000131_1750x1285.webp')]
        }, {
            id: 4,
            category: 'product',
            productName: 'boAt Rockerz 450 Bluetooth Headphone',
            productPrice: 1499,
            description: 'boAt Rockerz 450 M is an on-ear wireless headset that has been ergonomically des' +
                    'igned to meet the needs of music lovers.',
            isOff: false,
            productImage: require('../../assets/images/29032316800754916423eae35ddce.webp'),
            isAvailable: true,
            productImageList: [require('../../assets/images/c08000131_1750x1285.webp'), require('../../assets/images/c08000131_1750x1285.webp'), require('../../assets/images/c08000131_1750x1285.webp')]
        }, {
            id: 5,
            category: 'product',
            productName: 'MI Super Bass Bluetooth Wireless Headphones',
            productPrice: 1799,
            description: 'Up to 20 hours battery life | Super powerful Bass | 40mm dynamic driver | Pressu' +
                    're less ear muffs | Bluetooth 5.0 | Voice control',
            isOff: true,
            offPercentage: 10,
            productImage: require('../../assets/images/29032316800754916423eae35ddce.webp'),
            isAvailable: true,
            productImageList: [require('../../assets/images/c08000131_1750x1285.webp'), require('../../assets/images/c08000131_1750x1285.webp'), require('../../assets/images/c08000131_1750x1285.webp')]
        }, {
            id: 6,
            category: 'product',
            productName: 'boAt Rockerz 450 Bluetooth Headphone',
            productPrice: 1499,
            description: 'boAt Rockerz 450 M is an on-ear wireless headset that has been ergonomically des' +
                    'igned to meet the needs of music lovers.',
            isOff: false,
            productImage: require('../../assets/images/01042316803342086427dd809514b.webp'),
            isAvailable: true,
            productImageList: [require('../../assets/images/c08000131_1750x1285.webp'), require('../../assets/images/c08000131_1750x1285.webp'), require('../../assets/images/c08000131_1750x1285.webp')]
        }, {
            id: 7,
            category: 'product',
            productName: 'boAt Rockerz 450 Bluetooth Headphone',
            productPrice: 1499,
            description: 'boAt Rockerz 450 M is an on-ear wireless headset that has been ergonomically des' +
                    'igned to meet the needs of music lovers.',
            isOff: false,
            productImage: require('../../assets/images/2503231679712494641e60eed7930.webp'),
            isAvailable: true,
            productImageList: [require('../../assets/images/c08000131_1750x1285.webp'), require('../../assets/images/c08000131_1750x1285.webp'), require('../../assets/images/c08000131_1750x1285.webp')]
        }, {
            id: 8,
            category: 'product',
            productName: 'boAt Rockerz 450 Bluetooth Headphone',
            productPrice: 1499,
            description: 'boAt Rockerz 450 M is an on-ear wireless headset that has been ergonomically des' +
                    'igned to meet the needs of music lovers.',
            isOff: false,
            productImage: require('../../assets/images/29032316800754916423eae35ddce.webp'),
            isAvailable: true,
            productImageList: [require('../../assets/images/c08000131_1750x1285.webp'), require('../../assets/images/c08000131_1750x1285.webp'), require('../../assets/images/2082f59465c39094ce90bebd0fcf8fa7.jpeg')]
        }
    ]);
    return (

        <Animated.View
            style={{
            flex: 1,
            position: 'absolute',
            backgroundColor: 'white',
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
            borderRadius: _showMenu
                ? 15
                : 0,
            transform: [
                {
                    scale: _scalevalue
                }, {
                    translateX: _offsetvalue
                }
            ]
        }}>

            <HStack w={'100%'} justifyContent={'space-around'} py={2}>
                <Box>

                    <Button
                        _text={{
                        color: "#F57F17",
                        fontSize: 20,
                        fontWeight: 'bold'
                    }}
                        variant="outline"
                        size="xs"
                        startIcon={< Icon style = {{ color: '#F57F17' }}name = "md-options-outline" size = {
                        22
                    }
                    color = "#fff" />}
                        onPress={() => {
                        Animated.timing(_scalevalue, {
                            toValue: _showMenu
                                ? 1
                                : 0.88,
                            duration: 300,
                            useNativeDriver: true
                        });
                        Animated
                            .timing(_offsetvalue, {
                            toValue: _showMenu
                                ? 0
                                : 220,
                            duration: 300,
                            useNativeDriver: true
                        })
                            .start();
                        _setShowMenu(!_showMenu);
                    }}>

                        Filter

                    </Button>

                </Box>
                <HStack>
                    <Button
                        variant="outline"
                        size="xs"
                        startIcon={< Icon  style = {{ color: '#F57F17' }} name = "md-options-outline" size = {
                        20
                    }
                    color = "#fff" />}></Button>
                    <Button
                        variant="outline"
                        ml={3}
                        size="xs"
                        startIcon={< Icon   style = {{ color: '#F57F17' }} name = "md-options-outline" size = {
                        20
                    }
                    color = "#fff" />}></Button>
                </HStack>

            </HStack>

            <ScrollView >
                <Box >
                    <View style={{
                        padding: 4
                    }}>
                        <View
                            style={{
                            flexDirection: 'row',
                            alignItems: 'center',
                            justifyContent: 'space-between'
                        }}>
                            <View
                                style={{
                                flexDirection: 'row',
                                alignItems: 'center'
                            }}>
                                <Text
                                    style={{
                                    fontSize: 18,
                                    color: COLOURS.black,
                                    fontWeight: '500',
                                    letterSpacing: 1
                                }}>
                                    Products
                                </Text>
                                <Text
                                    style={{
                                    fontSize: 14,
                                    color: COLOURS.black,
                                    fontWeight: '400',
                                    opacity: 0.5,
                                    marginLeft: 10
                                }}>
                                    41
                                </Text>
                            </View>
                            <Text
                                style={{
                                fontSize: 14,
                                color: COLOURS.black,
                                fontWeight: '400'
                            }}>
                                See All
                            </Text>
                        </View>
                        <View
                            style={{
                            flexDirection: 'row',
                            flexWrap: 'wrap',
                            justifyContent: 'space-between',
                            paddingTop: 10
                        }}>
                            {products.map(data => {
                                return <ProductCard data={data} key={data.id}/>;
                            })}
                        </View>
                    </View>
                </Box>
            </ScrollView>

        </Animated.View>

    )
}
