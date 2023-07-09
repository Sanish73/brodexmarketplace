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
import {Box, VStack, Button, HStack, Center} from 'native-base';
import {CategoryRightAnimationList} from './CategoryRightAnimationList';
import {Animated} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

export default function CategoryRightAnimation({
    _showMenu,
    _setShowMenu,
    _offsetvalue,
    _scalevalue,
    _termData,
    loading
}) {

    // console.log("oooooooooooooooooooooooooooooooooooooo",get_related_products);

    const {get_related_products} = _termData;
    const {_loading} = loading;

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
                <Box bg={'red.100'}>

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
                                : 300,
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
                        startIcon={< Icon style = {{ color: '#F57F17' }}name = "md-options-outline" size = {
                        20
                    }
                    color = "#fff" />}></Button>
                    <Button
                        variant="outline"
                        ml={3}
                        size="xs"
                        startIcon={< Icon style = {{ color: '#F57F17' }}name = "md-options-outline" size = {
                        20
                    }
                    color = "#fff" />}></Button>
                </HStack>

            </HStack>

            <ScrollView >
                <Box >
                    <View
                        style={{
                        padding: 4,
                        alignItems: 'center'
                    }}>
                        <View
                            style={{
                            width: '93%',
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
                                    fontSize: 14,
                                    color: COLOURS.black,
                                    fontWeight: '400',
                                    opacity: 0.5,
                                    marginLeft: 10
                                }}>
                                    Showing {(get_related_products||[]).length === 0
                                        ? 0
                                        : 1}
                                    {(get_related_products||[]).length !== 0
                                        ? ` – ${(get_related_products||[]).length} of ${(get_related_products||[]).length} results`
                                        : ' of 0 results'}
                                </Text>
                            </View>

                            <Box>
                                <Text
                                    style={{
                                    fontSize: 14,
                                    color: COLOURS.black,
                                    fontWeight: '400',
                                    opacity: 0.5,
                                    marginLeft: 10
                                }}>
                                    See All
                                </Text>
                            </Box>
                        </View>

                        {/* <Text>
                            {JSON.stringify(_termData,null,2)}
                        </Text> */}
                        <View
                            style={{
                            paddingHorizontal: 6,
                            flexDirection: 'row',
                            flexWrap: 'wrap',
                            justifyContent: 'space-between',
                            paddingTop: 10
                        }}>
                            <Text>{JSON.stringify(get_related_products, null, 2)}</Text>
                            <View
                                style={{
                                paddingHorizontal: 6,
                                flexDirection: 'row',
                                flexWrap: 'wrap',
                                justifyContent: 'space-between',
                                paddingTop: 10
                            }}>
                                {_loading
                                    ? <Text>Loading...</Text>
                                    : (get_related_products || []).map(data => (<CategoryRightAnimationList data={data} key={data.id}/>))
}
                            </View>

                        </View>
                    </View>
                </Box>
            </ScrollView>

        </Animated.View>

    )
}
