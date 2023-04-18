import React from 'react';
import {Alert, Button, ScrollView, TouchableOpacity} from 'react-native';
import {
    Text,
    VStack,
    HStack,
    Box,
    Image,
    Badge
} from "native-base";
import Icon from 'react-native-vector-icons/Ionicons';
import OrderItems from '../components/OrderItems';
import MyTab from '../components/MyTab'

function OOOrder() {

    const dataset = [
        {
            id: 1,
            orderId: '#981274',
            items: 3,
            amount: null,
            timeString: 'Yesterday, 2:30 PM',
            paidStatus: 2, // 0 = not paid, 1 = pending, 2 = paid
            status: 2, // 0 = cancelled, 1 = pending, 2 = completed
            image: 'https://picsum.photos/id/10/200/300'
        }, {
            id: 2,
            orderId: '#653983',
            items: 1,
            amount: 'Rs 250',
            timeString: 'Today, 9:15 AM',
            paidStatus: 1, // 0 = not paid, 1 = pending, 2 = paid
            status: 1, // 0 = cancelled, 1 = pending, 2 = completed
            image: 'https://picsum.photos/id/20/200/300'
        }, {
            id: 3,
            orderId: '#872198',
            items: 5,
            amount: 'Rs 1800',
            timeString: 'Yesterday, 7:55 PM',
            paidStatus: 0, // 0 = not paid, 1 = pending, 2 = paid
            status: 1, // 0 = cancelled, 1 = pending, 2 = completed
            image: 'https://picsum.photos/id/30/200/300'
        }, {
            id: 4,
            orderId: '#147983',
            items: 2,
            amount: 'Rs 400',
            timeString: 'Today, 11:20 AM',
            paidStatus: 2, // 0 = not paid, 1 = pending, 2 = paid
            status: 2, // 0 = cancelled, 1 = pending, 2 = completed
            image: 'https://picsum.photos/id/40/200/300'
        }, {
            id: 5,
            orderId: '#879213',
            items: 4,
            amount: 'Rs 1500',
            timeString: 'Yesterday, 4:45 PM',
            paidStatus: 1, // 0 = not paid, 1 = pending, 2 = paid
            status: 0, // 0 = cancelled, 1 = pending, 2 = completed
            image: 'https://picsum.photos/id/50/200/300'
        }, {
            id: 6,
            orderId: '#732149',
            items: 1,
            amount: 'Rs 100',
            timeString: 'Today, 8:00 AM',
            paidStatus: 2, // 0 = not paid, 1 = pending, 2 = paid
            status: 2, // 0 = cancelled, 1 = pending, 2 = completed
            image: 'https://picsum.photos/id/60/200/300'
        }, {
            id: 102,
            orderId: '#481293',
            items: 3,
            amount: 'Rs 1000',
            timeString: "Today , 11:11 PM",
            paidStatus: 1, // 0 = not paid , 1 = pending , paid = 2
            status: 1, // 0 = canncelled , 1 = Pending , 2 = Completed
            image: 'https://wallpaperaccess.com/full/317501.jpg'
        }
    ];

    return <Box>
        <MyTab/>
        <ScrollView style={{
            paddingHorizontal: 10
        }}>
            {dataset.map((item) => {
                return <OrderItems
                    key={item.id}
                    productId={item
                    ?.id || ''}
                    orderId={item
                    ?.orderId || ''}
                    noItems={item
                    ?.items || ''}
                    price
                    ={item
                    ?.amount || ''}
                    time={item
                    ?.timeString || ''}
                    pricePaidStatus={item
                    ?.paidStatus || ''}
                    activityStatus={item
                    ?.status || ''}
                    photo
                    ={item
                    ?.image || ''}/>

            })
}
            <Box h={100}></Box>

        </ScrollView>
    </Box>

}

export default OOOrder;