import React from 'react';
import {ScrollView} from 'react-native';
import {
    Box,
} from "native-base";
import OrderItems from '../components/OrderItems';
import MyTab from '../components/MyTab'

function OOOrder({route}) {
    const  ordersList = route.params;
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
        }
    ];
    return <Box>
        {/* <MyTab/> */}
        <ScrollView style={{
            paddingHorizontal: 10
        }}>
        {ordersList.map((item) => {
            {console.log(item.id,'ljldksfjklsdjlfjklsdjkfljkl')}
                return <OrderItems
                    key={item.id}
                    productId={item
                    ?.id || ''}
                    orderId={item
                    ?.order_no || ''}
                    noItems={item
                    ?.items || ''}
                    price
                    ={item
                    ?.amount || ''}
                    time={item
                    ?.created_at || ''}
                    pricePaidStatus={item
                    ?.paidStatus || ''}
                    activityStatus={item
                    ?.status || ''}/>
            })}
            <Box h={100}></Box>
        </ScrollView>
    </Box>

}

export default OOOrder;