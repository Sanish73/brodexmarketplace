import React, {useState, useEffect} from 'react';
import {
    View,
    Text,
} from 'react-native';
import {COLOURS, } from '../database/Database';
import { Box } from 'native-base';
import { ProductCard } from './ProductCard';
import {useSelector, } from 'react-redux';

export function Products() {
  const homePageProducts = useSelector(state => state.homeScreenProductsReducer);
    const [products,
        setProducts] = useState([
            {
                id: 1,
                category: 'product',
                productName: 'MI Super Bass Bluetooth Wireless Headphones',
                productPrice: 1799,
                description:
                  'Up to 20 hours battery life | Super powerful Bass | 40mm dynamic driver | Pressure less ear muffs | Bluetooth 5.0 | Voice control',
                isOff: true,
                offPercentage: 10,
                productImage: require('../../assets/images/29032316800754916423eae35ddce.webp'),
                isAvailable: true,
                productImageList: [
                  require('../../assets/images/01042316803342086427dd809514b.webp'),
                  require('../../assets/images/2503231679712494641e60eed7930.webp'),
                  require('../../assets/images/c08000131_1750x1285.webp'),
                  require('../../assets/images/01042316803342086427dd809514b.webp'),
                ],
              }
        ]);
return (
        <Box>
        
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
                            45
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
                    // backgroundColor:'red'
                    paddingTop:10
                }}>

                     {/* <Text>{JSON.stringify(homePageProducts.homePageProducts.relatedProducts, null , 4)}</Text> */}

                    {(homePageProducts.homePageProducts.relatedProducts || []).map(data => {
                        return <ProductCard data={data} key={data.id}/>;
                    })}
                </View>
            </View>
        </Box>
    )
}