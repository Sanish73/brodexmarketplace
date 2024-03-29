import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {COLOURS} from '../database/Database';
import {Image} from 'native-base';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';

export const ProductCard = ({data}) => {
    const navigation = useNavigation();
    const special_pricePercent = ((data.special_price / data.regular_price) * 100).toFixed(0);
    const randomRating = Math.floor(Math.random() * 7) / 2 + 2; // Generate random rating between 2 and 5, with a step of 0.5
    const discountAmount = (special_pricePercent/100)*(data.regular_price)
    const handlePress = (item) => {
    //    console.log(item)
        navigation.navigate('ProductInfo'  , data);
    }
    return (
        <TouchableOpacity
        onPress={()=>handlePress(data)}
            style={{
            backgroundColor: COLOURS.white,
            width: '48%',
            borderRadius: 5,
            marginBottom: 16
        }}>
        {/* <Text>
              {JSON.stringify(data?.preview?.media?.l, null ,1)};
             <Text>{JSON.stringify(data.preview, null , 4)}</Text>
        </Text> */}
            <View
                style={{
                height: 150,
                overflow: 'hidden',
                borderTopLeftRadius: 18,
            }}>
                <Image
                 alt="image"
                    source={{uri : data.productImage}}
                    style={{
                    width: '100%',
                    height: '100%'
                }}/>
                {data.special_price  ? <View
                    style={{
                    position: 'absolute',
                    top: 0,
                    backgroundColor: COLOURS.red,
                    padding: 4,
                    borderBottomRightRadius: 8,
                    borderTopRightRadius: 8
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
            <View
                style={{
                padding: 8,
               
                borderBottomRightRadius: 18

            }}>
                <View
                    style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between'
                }}>
                    <Text
                        style={{
                        fontSize: 14,
                        color: COLOURS.black,
                        textTransform: 'uppercase',
                        fontWeight: '500'
                    }}>
                        {data.productName}
                    </Text>
                </View>
                <View
                    style={{
                    flexDirection: 'row',
                    alignItems: 'center'
                }}>
                    <FontAwesome name="rupee" size={14} color={COLOURS.re}/>
                    <Text
                        style={{
                        fontSize: 16,
                        color: COLOURS.black,
                        fontWeight: 'bold',
                        marginLeft: 4
                    }}>
                        {data.productPrice}
                    </Text>
                    {(data.special_price == null ||data.special_price == 0 || data.regular_price == data.special_price)?<></>:<Text
                        style={{
                        fontSize: 14,
                        color: COLOURS.grey,
                        fontWeight: '400',
                        marginLeft: 4,
                        textDecorationLine: 'line-through'
                    }}>
                         {data.regular_price}
                    </Text>}
                </View>
                <View
                    style={{
                    flexDirection: 'row',
                    alignItems: 'center'
                }}>
                    <MaterialCommunityIcons name="star" size={14} color={COLOURS.yellow}/>
                    <Text
                        style={{
                        fontSize: 14,
                        color: COLOURS.black,
                        fontWeight: '500',
                        marginLeft: 4
                    }}>
                        {randomRating}
                    </Text>
                </View>
            </View>
        </TouchableOpacity>
    );
};
