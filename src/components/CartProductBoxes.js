import React, {useState} from 'react';
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
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { useDispatch , useSelector } from 'react-redux';
import { getAllCartTotal } from '../Redux/actions/cartAPIAction';


export default function CartProductBoxes({data}) {
 
    const [countedNumber, setCountNumber] = useState(1);
    const dispatch = useDispatch();
  

    const handlePlusClick = () => {
      if (data.qty) {
        // if (countedNumber < 1) {
          setCountNumber(countedNumber + 1);
          getAllCartTotal('', data.id, countedNumber + 1)(dispatch);
          
        // } else {
        //   Alert.alert('Product Unavailable', 'This product is currently not available.');
        // }
      } else {
        Alert.alert('Product Unavailable', 'Data This product is currently not available.');
      }
    };
  
    const handleMinusClick = () => {
      if (countedNumber > 1) {
        setCountNumber(countedNumber - 1);
        getAllCartTotal('', data.id, countedNumber - 1)(dispatch);
       
      }
    };
  
    const totalProductPrice = countedNumber === 1 ? data.productPrice : data.productPrice * countedNumber;

   
  
    

        // Calculate the total product price by multiplying the product price with the product count
      
    

    return (
        <Box paddingTop={3} style={{
            overflow: 'hidden'
        }}>
            <HStack h={68} style={{}}>

                <VStack width={'18%'} h={'100%'}>
                    <Box>
                        <Image
                            source={{ uri: data.productImage }}
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
                        <Text bold fontSize={16}>{data.productName}</Text>
                        <Text fontSize={14} color={'#8C8A89'}>Quantity: {data.qty}</Text>
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
                            <Text bold fontSize={15} color={'black'}>{data.productPrice}</Text>
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
                        <TouchableOpacity onPress={handleMinusClick}>
                            <Box borderRadius={5} backgroundColor={'#DEDCDB'}>
                                <Icon
                                    size={24}
                                    name={'remove-sharp'}
                                    style={{
                                    color: '#F57F17',
                                    padding: 2
                                }}></Icon>

                            </Box>
                        </TouchableOpacity>
                        <Text bold fontSize={19}>
                            {countedNumber}
                        </Text>
                        <TouchableOpacity onPress={handlePlusClick}>
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
                        </TouchableOpacity>
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
                        {totalProductPrice}
                        </Text>

                    </HStack>

                </VStack>
            </HStack>
        </Box>
    )
}