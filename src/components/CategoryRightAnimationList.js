import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import {COLOURS} from '../database/Database';

import Entypo from 'react-native-vector-icons/Entypo';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';

export const CategoryRightAnimationList = ({data}) => {


    const navigation = useNavigation();

    const handlePress = (item) => {
    //    console.log(item)
        // navigation.navigate('ProductInfo'  , data);
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

          <Text>{JSON.stringify(data.prouctImage, null, 2)}</Text>
            <View
                style={{
                height: 150,
                overflow: 'hidden',
                borderTopLeftRadius: 18,
              
            }}>
                <Image
                    source={data.prouctImage}
                    style={{
                    width: '100%',
                    height: '100%'
                }}/>
                {data.isOff ? <View
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
                        fontSize: 16,
                        color: COLOURS.black,
                        fontWeight: '500',
                        fontWeight: 'bold',
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
                    {/* <Text
                        style={{
                        fontSize: 14,
                        color: COLOURS.grey,
                        fontWeight: '400',
                        marginLeft: 4
                    }}>
                        2563
                    </Text> */}
                </View>
            </View>
        </TouchableOpacity>
    );
};
