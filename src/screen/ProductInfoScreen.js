import React, {useState, useEffect} from 'react';
import {
    View,

    StatusBar,
    ScrollView,
    TouchableOpacity,
    FlatList,
    
    Dimensions,
    Animated,
    ToastAndroid,Alert,
} from 'react-native';
4
import {
    Box,
    Text,
    Center,
    HStack,
    VStack,
    Radio,
    Stack,
    Button,
    Heading,
    Image,
} from 'native-base';
import {COLOURS, Items} from '../database/Database';
import Entypo from 'react-native-vector-icons/Entypo';
import Ionicons from 'react-native-vector-icons/Ionicons';
// import AsyncStorage from '@react-native-async-storage/async-storage';
import {useNavigation} from '@react-navigation/native';
import { Rating } from 'react-native-elements';

import Icon from 'react-native-vector-icons/Ionicons';
import { color } from 'native-base/lib/typescript/theme/styled-system';

export function ProductInfoScreen({route}) {

    const [selectedColor,
        setselectedColor] = useState('Black');
        const [selectedHeight,
            setselectedHeight] = useState(8);
            const [selectedWidth,
                setselectedHWidtht] = useState(8);


                const ColorPress =(item)=>{
                    // Alert.alert(item);
                    setselectedColor(item);
                    setselectedHeight(9);
                    setselectedHWidtht(9);
            
                }

    const options = [
        {
            value: 'Black',
            index: 'Black',
            color: 'black'
        }, {
            value: 'Red',
            index: 'Red',
            color: 'red'
        }, {
            value: 'Green',
            index: 'Green',
            color: 'green'
        }, {
            value: 'Blue',
            index: 'Blue',
            color: 'blue'
        }, {
            value: 'Pink',
            index: 'Pink',
            color: 'pink'
        }, {
            value: 'Orange',
            index: 'Orange',
            color: 'orange'
        }, {
            value: 'Yellow',
            index: 'Yellow',
            color: 'yellow'
        }
    ];

 

   

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
            paddingHorizontal: 15
        }}>
            <StatusBar backgroundColor={COLOURS.backgroundLight} barStyle="dark-content"/>
            <ScrollView >
                <View
                
                    style={{
                    width: '100%',
                    height: 250,
                    
                    
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
                        alignItems: 'center',
                       
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
                                    width: 50,
                                    height: 3,
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

                <HStack  paddingTop={2}>
                    <HStack  w={'80%'} alignItems={'center'} paddingX={2}>
                        <Text  bold fontSize={15}>
                          Lorreal the Face Cleaner
                        </Text>
                        {/* <Text>
                           AED 266.6
                        </Text> */}
                    </HStack>
                    <HStack w={'20%'} justifyContent={'space-between'} alignItems={'center'}>
                        <Box>
                           
                             <Ionicons
                                name="share-outline"
                                size={22}
                                color="#F57F17"
                                style={{ marginRight: 10 }}
                                />
                        </Box>
                        <Box>
                         
                            <Ionicons
                                name="heart-outline"
                                size={22}
                                color="#F57F17"
                                style={{ marginRight: 10 }}
                           />
                        </Box>

                    </HStack>
                </HStack>
                <Box paddingX={2} >
                    <VStack>
                        <Text>
                            {description}
                        </Text>
                    </VStack>
                </Box>

                <HStack paddingTop={2} >
                    <HStack  rounded={15} alignItems={'center'} paddingX={2}>
                                                   
                    <Icon name="star" size={20} color="#FFA500" />
                        <Text bold paddingLeft={1}> 
                            4.5
                        </Text>
                    </HStack>
                    <HStack rounded={15} marginLeft={2} alignItems={'center'} paddingX={2}> 
                    <Text bold>
                    4
                    </Text>
                    <Text bold paddingLeft={1}>
                Reviews
                    </Text>
                       
                    </HStack>

                </HStack>

                            <VStack paddingY={3} space={2}>
                                <Box>
                                <Image size={"xs"} w={20} borderRadius={1} source={{
                                uri: "https://wallpaperaccess.com/full/317501.jpg"
                                }} alt="Alternate Text" />
                                </Box>
                                <Box>
                                    <Text underline>
                            hsdk3jflksdfjlsjdjflj
                                    </Text>
                                </Box>
                            </VStack>

                <VStack paddingTop={2}>
                    <HStack>
                        <Heading size="sm">
                            Choosed Color:
                        </Heading>
                        <Text >
                            {selectedColor}
                        </Text>
                    </HStack>
                    <HStack  flexDirection={'row'}  alignSelf={'flex-start'} alignItems={'center'}  w={'100%'} h={10}>
                       {options.map((item,index)=>( <TouchableOpacity onPress={()=>ColorPress(item.value)}>
                               
                                    <Box   shadow={5} h={item.index === selectedColor ? selectedHeight : 8} w={item.index === selectedColor ? selectedWidth : 8} rounded={100} marginLeft={2} key={index} style={{
                                         backgroundColor: item.color,
                                         borderWidth:1
                                        
                                    }}>

                                    </Box>
                              
                        </TouchableOpacity>))}
                            
                        
                    </HStack>
                </VStack>

                <VStack paddingTop={2}>
                    <Box>
                        <Heading size="sm">
                            Capacity
                        </Heading>
                    </Box>
                    <HStack paddingTop={2}>
                        <Button rounded={10} size="md" variant="outline" colorScheme="secondary">
                            Inner Pot 7L
                        </Button>
                        <Button marginLeft={4} rounded={10} size="md" variant="outline">
                            Inner Pot 7L
                        </Button>
                    </HStack>
                </VStack>
                

            </ScrollView>
            <HStack bottom={2} >
                 <Button w={'48%'} rounded={6} leftIcon={<Ionicons name="cart-outline" size={18} color="white" />}>
                    Add to Cart
                </Button>
                <Box w={'5%'}>

                </Box>
                <Button w={'47%'} rounded={6}   leftIcon={<Ionicons name="cart-outline" size={18} color="white" /> }>
                    Buy Now
                </Button>
            </HStack>


        </View>
    );
}
