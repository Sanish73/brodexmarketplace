import React, { useEffect} from 'react';
import {
    Box,
    VStack,
} from 'native-base';
import {
    ScrollView
} from 'react-native';
import {HomeSearchBox} from '../components/HomeSearchBox';
import SlideShowBox from '../components/SlideShowBox';
import HomeFlashDetaisHead from '../components/HomeFlashDetaisHead';
import {HomeFlashDetaisTop} from '../components/HomeFlashDetaisTop';
import {Products} from '../components/Products';
import { getHomePageProducts } from '../Redux';
import { useDispatch} from 'react-redux';

export function HomeScreen() {
    const dispatch = useDispatch();

    useEffect(() => {
        getHomePageProducts('', 25)(dispatch);
    }, []);
    return (
        <VStack>
            <HomeSearchBox/>
            <ScrollView>
                <VStack px={1} h={'100%'}>
                    <SlideShowBox/>
                    {/* <HomeImageGrid/>
                    <HomeImageGrid/> */}
                    <HomeFlashDetaisTop/> 




                    
                    <HomeFlashDetaisHead/>
                    <Products/>
                    <Box h={100}></Box>
                </VStack>
            </ScrollView>
        </VStack>
    )
}
