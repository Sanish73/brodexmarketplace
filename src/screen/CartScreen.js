import {
    ScrollView,
    Text,
    Box,
    VStack,
    Button,
    View
} from 'native-base';
import ShippingAddressBox from '../components/ShippingAddressBox'
import OrderSummary from '../components/OrderSummary'
import VoucherBox from '../components/VoucherBox'
import CartBox from '../components/CartBox';
import OrderSummaryBoxes from '../components/OrderSummaryBoxes';
import React, {useState, useEffect} from 'react';
// import OrderSummaryBoxes from '../components/OrderSummaryBoxes';
import CartProductBoxes from '../components/CartProductBoxes';
import CartBoxSecond from '../components/CartBoxSecond';
import CartToPayList from '../components/CartToPayList';


export default function CartScreen() {
    const [cartProducts,
        setProducts] = useState([
        {
            id: 1,
            category: 'product',
            productName: 'MI Super Bass Bluetooth Wireless Headphones',
            SinglePrice: 9,
            TotalPrice: 18,
            NumberOfProducts: 10,
            description: 'Up to 20 hours battery life | Super powerful Bass | 40mm dynamic driver | Pressu' +
                    're less ear muffs | Bluetooth 5.0 | Voice control',
            isOff: true,
            offPercentage: 10,
            productImage: require('../../assets/images/29032316800754916423eae35ddce.webp'),
            isAvailable: true,
            productImageList: [require('../../assets/images/c08000131_1750x1285.webp'), require('../../assets/images/c08000131_1750x1285.webp'), require('../../assets/images/c08000131_1750x1285.webp')]
        }, {
            id: 2,
            category: 'product',
            productName: 'MI Super Bass Bluetooth Wireless Headphones',
            SinglePrice: 9,
            TotalPrice: 18,
            NumberOfProducts: 10,
            description: 'Up to 20 hours battery life | Super powerful Bass | 40mm dynamic driver | Pressu' +
                    're less ear muffs | Bluetooth 5.0 | Voice control',
            isOff: true,
            offPercentage: 10,
            productImage: require('../../assets/images/29032316800754916423eae35ddce.webp'),
            isAvailable: true,
            productImageList: [require('../../assets/images/c08000131_1750x1285.webp'), require('../../assets/images/c08000131_1750x1285.webp'), require('../../assets/images/c08000131_1750x1285.webp')]
        }, {
            id: 3,
            category: 'product',
            productName: 'MI Super Bass Bluetooth Wireless Headphones',
            SinglePrice: 9,
            TotalPrice: 18,
            NumberOfProducts: 10,
            description: 'Up to 20 hours battery life | Super powerful Bass | 40mm dynamic driver | Pressu' +
                    're less ear muffs | Bluetooth 5.0 | Voice control',
            isOff: true,
            offPercentage: 10,
            productImage: require('../../assets/images/29032316800754916423eae35ddce.webp'),
            isAvailable: true,
            productImageList: [require('../../assets/images/c08000131_1750x1285.webp'), require('../../assets/images/c08000131_1750x1285.webp'), require('../../assets/images/c08000131_1750x1285.webp')]
        }
    ]);

    return (
        <VStack p={4}>
            <ScrollView >
                <CartBox/>

                <View>
                    {cartProducts.map(data => {
                        return <CartProductBoxes data={data} key={data.id}/>;
                    })}
                </View>
                <CartBoxSecond/>
                <CartToPayList/>
                
            </ScrollView>
        </VStack>
    )
}
