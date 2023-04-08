import React from 'react';
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
import { HomeSearchBox } from '../components/HomeSearchBox';
import SlideShowBox from '../components/SlideShowBox';


export function HomeScreen() {
    return (
        <TouchableOpacity>
      
            <VStack bgColor={'blue.100'} p={3} h={'100%'}>
                <HomeSearchBox />
                <SlideShowBox />
            </VStack>
        </TouchableOpacity>
    );
}
