import React, {useState, useEffect} from 'react';
import {
    Text,
    Box,
    VStack,
    Center,
    HStack,
    Button,
    Heading,
    useColorMode,
    Input
} from 'native-base';
import {
    View,
    StyleSheet,
    Alert,
    ScrollView,
    FlatList,
    Image,
    TouchableOpacity
} from 'react-native';
import {COLORS} from '../constants';
import Icon from 'react-native-vector-icons/Ionicons';
import {NavigationContainer} from '@react-navigation/native';
import {HomeSearchBox} from '../components/HomeSearchBox';
import SlideShowBox from '../components/SlideShowBox';
import HomeImageGrid from '../components/HomeImageGrid';
import HomeFlashDetaisHead from '../components/HomeFlashDetaisHead';
import {PLACES, TOP_PLACES} from '../data';
import {HomeFlashDetaisTop} from '../components/HomeFlashDetaisTop';
import {Products} from '../components/Products';
import { getHomePageProducts } from '../Redux';
import {useSelector, useDispatch} from 'react-redux';

export function HomeScreen() {
    const dispatch = useDispatch();

    useEffect(() => {

        getHomePageProducts('', 10)(dispatch);

    }, []);

    

    
    // console.log(homePageProducts,"0000000000000000000000000000000000000000000000000000000000000");
    return (
        <VStack>
            <HomeSearchBox/>
            <ScrollView>
                <VStack px={1} h={'100%'}>
                    <SlideShowBox/>
                    <HomeImageGrid/>
                    <HomeImageGrid/>
                    <HomeFlashDetaisTop/>
                    <HomeFlashDetaisHead/>

                    <Products/>

                    <Box h={100}></Box>
                </VStack>
            </ScrollView>
        </VStack>
    )
}
