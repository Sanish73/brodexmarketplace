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
import FontAwesome from 'react-native-vector-icons/FontAwesome';

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
import Icon from 'react-native-vector-icons/Ionicons';
import AsyncStorage from '@react-native-async-storage/async-storage';

export function ProductInfoScreen({route}) {

    const navigation = useNavigation();

    const {
        url,
        id,
        productImage,
        productName,
        productPrice,
        description,
        isOff,
        meta,
        regular_price,
        isAvailable,
        offPercentage,
        special_price,
        stock,
        featured,
        category,
        productImageList
       
    } = route.params;
   
    const [selectedColor,
        setselectedColor] = useState('Black');
        const [selectedHeight,
            setselectedHeight] = useState(8);
            const [selectedWidth,
                setselectedHWidtht] = useState(8);


               
                const [cartItems, setCartItems] = useState([]);

                const handleButtonClickStore = async () => {
                    console.log('cartScreen.js------------------')
                  try {
                    const item = {
                      id: route.params.id,
                      productImage: route.params.productImage,
                      productName: route.params.productName,
                      productPrice: route.params.productPrice,
                    };
              
                    // Retrieve existing cart items from AsyncStorage
                    const storedCartItems = await AsyncStorage.getItem('cartItems');
                    const parsedCartItems = storedCartItems ? JSON.parse(storedCartItems) : [];
              
                    // Add the current item to the cart
                    parsedCartItems.push(item);
              
                    // Store the updated cart items in AsyncStorage
                    await AsyncStorage.setItem('cartItems', JSON.stringify(parsedCartItems));
              
                    // Update the cart items state
                    setCartItems(parsedCartItems);
              
                   

                                
                if (navigation) {
                    navigation.navigate('cartScreen');
                    // console.log('Item added to cart:', item);
                } else {
                    console.warn('Navigation prop is not defined');
                }
                  } catch (error) {
                    console.log(error);
                  }
                };
              
                useEffect(() => {
                  const fetchCartItems = async () => {
                    try {
                      // Retrieve cart items from AsyncStorage on component mount
                      const storedCartItems = await AsyncStorage.getItem('cartItems');
                      const parsedCartItems = storedCartItems ? JSON.parse(storedCartItems) : [];
                      setCartItems(parsedCartItems);
                    } catch (error) {
                      console.log(error);
                    }
                  };
              
                  fetchCartItems();
                }, []);
  

 

   

    
   
    // console.log(productImage);
    const special_pricePercent = ((special_price / regular_price) * 100).toFixed(0);
    const randomRating = Math.floor(Math.random() * 7) / 2 + 2;


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
             {/* <Text>{JSON.stringify(productName, null, 2)}</Text> */}
             {/* <Text>Topppppppppppppppppppppppp</Text> */}
                <Image
                 alt="image"
                    source={{uri : productImage}}
                    resizeMode="cover"
                    style={{
                    flex: 1,
                    width: '100%',
                    height: '100%',
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
                   
                 
                        data={productImage || []}
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
                    {stock==1 ? <View
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
                        {special_pricePercent}% OFF
                    </Text>
                </View>:<></>}

                </View>

                <HStack  paddingTop={2}>
                    <HStack  w={'80%'} alignItems={'center'} paddingX={0}>
                        <Text  bold fontSize={19}>
                        {productName}
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
              

                <View
                 
                    style={{
                        paddingHorizontal:1,
                        paddingVertical:4,
                    flexDirection: 'row',
                    alignItems: 'center'
                }}>
                    <FontAwesome name="rupee" size={14} color={COLOURS.blue}/>
                    <Text
                   
                        style={{
                        fontSize: 16,
                        color: COLOURS.blue,
                        fontWeight: 'bold',
                        marginLeft: 5,
                        // marginTop:-1
                    }}>
                      {productPrice}
                    </Text>
                </View>

                

                <HStack paddingTop={1} >
                    <HStack  rounded={15} alignItems={'center'} paddingX={0}>
                                                   
                    <Icon name="star" size={20} color="#FFA500" />
                        <Text bold paddingLeft={1}> 
                          0
                        </Text>
                    </HStack>
                        <HStack rounded={15} marginLeft={2} alignItems={'center'} paddingX={2}> 
                            <Text   style={{
                                fontSize: 16,
                                color: COLOURS.brown,
                                fontWeight: 'bold',
                                marginLeft: 4
                            }}>
                                 0
                            </Text>
                        <Text style={{
                                fontSize: 16,
                                color: COLOURS.brown,
                                fontWeight: 'bold',
                                marginLeft: 4
                            }} paddingLeft={1}>
                                reviews
                        </Text>
                        <Text   style={{
                                fontSize: 16,
                                color: COLOURS.brown,
                                fontWeight: 'bold',
                                marginLeft: 4
                            }}>
                                 |
                            </Text>
                            <Text   style={{
                                fontSize: 16,
                                color: COLOURS.brown,
                                fontWeight: 'bold',
                                marginLeft: 4
                            }}>
                                 0
                            </Text>
                        <Text style={{
                                fontSize: 16,
                                color: COLOURS.brown,
                                fontWeight: 'bold',
                                marginLeft: 4
                            }} paddingLeft={1}>
                                orderes
                        </Text>
                        <Text   style={{
                                fontSize: 16,
                                color: COLOURS.brown,
                                fontWeight: 'bold',
                                marginLeft: 4
                            }}>
                                 |
                            </Text>
                            <Text   style={{
                                fontSize: 16,
                                color: COLOURS.brown,
                                fontWeight: 'bold',
                                marginLeft: 4
                            }}>
                                 0
                            </Text>
                        <Text style={{
                                fontSize: 16,
                                color: COLOURS.brown,
                                fontWeight: 'bold',
                                marginLeft: 4
                            }} paddingLeft={1}>
                                wish
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
                            {/* {meta} */}
                                    </Text>
                                </Box>
                            </VStack>

                {/* <VStack paddingTop={2}>
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
                </VStack> */}

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
                 <Button   onPress={handleButtonClickStore} w={'48%'} rounded={6} leftIcon={<Ionicons name="cart-outline" size={18} color="white" />}>
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
