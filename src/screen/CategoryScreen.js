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
import {CategoryLeftList} from '../components/CategoryLeftList';
import {CategoryRightList} from '../components/CategoryRightList';

function CategoryScreen() {

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
        }
    ];

    return <VStack>

        <CategorySearch/>

        <ScrollView>
            <HStack h={'100%'}>
                <CategoryLeftList/>
                <CategoryRightList/>
            </HStack>
            <Box h={100}></Box>
        </ScrollView>

    </VStack>

}

export default CategoryScreen;

// <