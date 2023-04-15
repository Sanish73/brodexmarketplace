import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import {COLOURS} from '../database/Database';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';


export const ProductCard = ({data}) => {
    const navigation = useNavigation();

    const handlePress = () => {
        // navigate to another screen
        navigation.navigate('ProductInfo'  ,data);
    }

    return (
        <TouchableOpacity
        // onPress={()=> navigation.navigate('ProductInfo' ,{productId:data.id})}
        onPress={handlePress}
            style={{
            backgroundColor: COLOURS.white,
            width: '48%',
            borderRadius: 5,
            marginBottom: 16
        }}>
            <View
                style={{
                height: 150,
                overflow: 'hidden',
                borderTopLeftRadius: 18,
                // borderTopRightRadius: 8,
                // borderBottomLeftRadius: 1,
                // borderTopRightRadius: 8
            }}>
                <Image
                    source={data.productImage}
                    style={{
                    width: '100%',
                    height: '100%'
                }}/>
                {data.isOff && <View
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
                        {data.offPercentage}% OFF
                    </Text>
                </View>}
            </View>
            <View
                style={{
                padding: 8,
                // backgroundColor:'#E9E7E5',
                //  borderBottomLeftRadius: ,
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
                        fontWeight: '500'
                    }}>
                        {data.productName}
                    </Text>
                    {/* {data.isAvailable ? <Entypo name="check" size={16} color={COLOURS.green}/> : <Entypo name="cross" size={16} color={COLOURS.red}/>} */}
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
                    {data.isOff && <Text
                        style={{
                        fontSize: 14,
                        color: COLOURS.grey,
                        fontWeight: '400',
                        marginLeft: 4,
                        textDecorationLine: 'line-through'
                    }}>
                        {data.productPrice + (data.productPrice * data.offPercentage / 100)}
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
                        4.5
                    </Text>
                    <Text
                        style={{
                        fontSize: 14,
                        color: COLOURS.grey,
                        fontWeight: '400',
                        marginLeft: 4
                    }}>
                        (2563)
                    </Text>
                </View>
            </View>
        </TouchableOpacity>
    );
};
