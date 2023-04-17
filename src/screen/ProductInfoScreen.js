import React, {useState, useEffect} from 'react';
import {
    View,

    StatusBar,
    ScrollView,
    TouchableOpacity,
    FlatList,
    Image,
    Dimensions,
    Animated,
    ToastAndroid
} from 'react-native';
4
import {
    Box,
    Text,
    Center,
    HStack,
    VStack,
    Radio,
    Stack
} from 'native-base';
import {COLOURS, Items} from '../database/Database';
import Entypo from 'react-native-vector-icons/Entypo';
import Ionicons from 'react-native-vector-icons/Ionicons';
// import AsyncStorage from '@react-native-async-storage/async-storage';
import {useNavigation} from '@react-navigation/native';

import Icon from 'react-native-vector-icons/Ionicons';

export function ProductInfoScreen({route}) {

    const options = [
        {
            value: 'Black',
            label: 'Black',
            color: 'black'
        }, {
            value: 'Red',
            label: 'Red',
            color: 'red'
        }, {
            value: 'Green',
            label: 'Green',
            color: 'green'
        }, {
            value: 'Blue',
            label: 'Blue',
            color: 'blue'
        }
    ];

    const [selectedColor,
        setselectedColor] = useState('Black');

    const navigation = useNavigation();
    const {
        category,
        id,
        productName,
        productPrice,
        description,
        isOff,
        productImage,
        isAvailable,
        offPercentage,
        productImageList
    } = route.params;

    const {width} = Dimensions.get('window');
    const [scrollX,
        setScrollX] = useState(new Animated.Value(0));
    const renderProduct = ({item, index}) => {
        return (
            <View
                style={{
                width,
                height: 250
            }}>
                <Image
                    source={item}
                    resizeMode="cover"
                    style={{
                    flex: 1,
                    width: undefined,
                    height: undefined
                }}/>
            </View>
        );
    };

    return (
        <View
            style={{
            width: '100%',
            height: '100%',
            backgroundColor: COLOURS.white,
            position: 'relative',
            padding: 4
        }}>
            <StatusBar backgroundColor={COLOURS.backgroundLight} barStyle="dark-content"/>
            <ScrollView>
                <View
                    style={{
                    width: '100%',
                    height: 250
                }}>
                    <FlatList
                        data={productImageList || []}
                        horizontal
                        renderItem={renderProduct}
                        showsHorizontalScrollIndicator={false}
                        decelerationRate={0.8}
                        snapToInterval={width}
                        bounces={false}
                        onScroll={Animated.event([
                        {
                            nativeEvent: {
                                contentOffset: {
                                    x: scrollX
                                }
                            }
                        }
                    ], {useNativeDriver: false})}/>
                    <View
                        style={{
                        position: 'absolute',
                        bottom: 22,
                        left: 0,
                        right: 0,
                        flexDirection: 'row',
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}>
                        {productImageList
                            ? productImageList.map((data, index) => {
                                let opacity = scrollX.interpolate({
                                    inputRange: [

                                        (index - 1) * width,
                                        index * width,
                                        (index + 1) * width
                                    ],
                                    outputRange: [
                                        0.2, 1, 0.2
                                    ],
                                    extrapolate: 'clamp'
                                });
                                return (<Animated.View
                                    key={index}
                                    style={{
                                    width: 70,
                                    height: 5,
                                    backgroundColor: '#ffa94d',
                                    opacity,
                                    marginHorizontal: 2,
                                    borderRadius: 100
                                }}/>);
                            })
                            : null}

                    </View>
                    {isOff ? <View
                    style={{
                    position: 'absolute',
                    margin:10,
                    top: 0,
                    backgroundColor: COLOURS.red,
                    padding: 4,
                    // borderBottomRightRadius: 8,
                    borderRadius: 5
                }}>
                    <Text
                        style={{
                        color: COLOURS.white,
                        fontWeight: 'bold'
                    }}>
                        {offPercentage}% OFF
                    </Text>
                </View>:<></>}

                </View>

                <HStack>
                    <HStack>
                        <Text>
                            {productName}
                        </Text>
                        <Text>
                            {category}
                        </Text>
                    </HStack>
                    <HStack>
                        <Box>
                            <Icon
                                size={27}
                                name={'location'}
                                style={{
                                color: '#F57F17',
                                padding: 2
                            }}></Icon>
                        </Box>
                        <Box>
                            <Icon
                                size={27}
                                name={'location'}
                                style={{
                                color: '#F57F17',
                                padding: 2
                            }}></Icon>
                        </Box>

                    </HStack>
                </HStack>
                <Box>
                    <VStack>
                        <Text>
                            {description}
                        </Text>
                    </VStack>
                </Box>
                <HStack>
                    <HStack>
                        <Icon
                            size={27}
                            name={'location'}
                            style={{
                            color: '#F57F17',
                            padding: 2
                        }}></Icon>
                        <Text>
                            4.5
                        </Text>
                    </HStack>
                    <Box>
                        4 Reviews
                    </Box>

                </HStack>
                <VStack>
                    <HStack>
                        <Text>
                            Color:
                        </Text>
                        <Text bold>
                            {selectedColor}
                        </Text>
                    </HStack>
                    <HStack>

                        <Radio.Group
                            name="myRadioGroup"
                            accessibilityLabel="favorite number"
                            onChange={nextValue => {
                            console.log(nextValue);
                            setselectedColor(nextValue);
                        }}>
                            <Stack
                                direction={{
                                base: "row",
                                md: "row"
                            }}
                                alignItems={{
                                base: "flex-start",
                                md: "center"
                            }}
                                space={7}
                                w="75%"
                                maxW="300px">

                                {options.map((option) => (<Radio
                                    value={option.value}
                        
                                    colorScheme={option.color}
                                    isChecked={selectedColor === option.value}
                                    _checked={{
                                    bg: option.color,
                                    borderColor: option.color,
                                   
                                    color: "white"
                                }}
                                    _hover={{
                                    borderColor: option.color,
                                    borderWidth: "1px"
                                }}
                                    _focus={{
                                    borderColor: option.color,
                                    boxShadow: "outline"
                                }}
                                    borderRadius="full"
                                    borderWidth="1px"
                                    borderColor={selectedColor === option.value
                                    ? option.color
                                    : "gray.200"}
                                    size="sm"
                                    marginRight={1}>Rjsldkfjl
                                    </Radio>))}

                            </Stack>
                        </Radio.Group>

                    </HStack>
                </VStack>

            </ScrollView>

        </View>
    );
}
