import React from 'react';
import {Alert, Button, ScrollView, TouchableOpacity} from 'react-native';
import {
    Text,
    VStack,

    HStack,
    Box,
    Image,
    Input,
    Badge,
    Center
} from "native-base";
import Icon from 'react-native-vector-icons/Ionicons';
import OrderItems from '../components/OrderItems';
import MyTab from '../components/MyTab'
import AccountInformation from '../components/AccountInformation';
import CategorySearch from '../components/CategorySearch';

export function CategoryLeftList() {
    const data = [
        {
            id: 1,
            categoryName: 'Flash Details'
        }, {
            id: 2,
            categoryName: 'Flash Details'
        }, {
            id: 3,
            categoryName: 'Flash Details'
        }, {
            id: 4,
            categoryName: 'Flash Details'
        }, {
            id: 5,
            categoryName: 'Flash Details'
        }, {
            id: 6,
            categoryName: 'Flash Details'
        }, {
            id: 7,
            categoryName: 'Flash Details'
        }, {
            id: 8,
            categoryName: 'Flash Details'
        }, {
            id: 9,
            categoryName: 'Flash Details'
        },, {
            id: 10,
            categoryName: 'Flash Details'
        }
    ];
    return (
        <VStack w={'20%'} h={'100%'} space={2}>

            {data.map((item, index) => (
                <TouchableOpacity>
                    <Box key={item.id}  alignItems={'center'}>
                        <Text fontSize={'md'} p={1} bold>{item.categoryName}
                        </Text>
                    </Box>
                </TouchableOpacity>
            ))}

        </VStack>
    )
}