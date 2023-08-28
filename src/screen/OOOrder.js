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

function OOOrder({route}) {

    const { ordersList } = route.params;
    console.log(ordersList,'---0000000--');

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
        <MyTab/>
        <ScrollView style={{
            paddingHorizontal: 10
        }}>

          <Text>
                {JSON.stringify(ordersList,null,2)}
            </Text>
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