import React, {useState, useEffect, useRef} from 'react';
import {
    View,
    Text,
    StatusBar,
    ScrollView,
    TouchableOpacity,
    Image
} from 'react-native';
import {COLOURS, Items} from '../database/Database';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {Box, VStack, Button} from 'native-base';
import {ProductCard} from './ProductCard';
import {Animated} from 'react-native';

export default function CategoryLeftAnimation({_currentTab, _setCurrentTab}) {
    return (
        <VStack h={'100%'} bgColor={'red.100'} justifyContent={'center'}>

            {TabButton(_currentTab, _setCurrentTab, "Home")}
            {TabButton(_currentTab, _setCurrentTab, "Settings")}

        </VStack>

    )
}

const TabButton = (currentTab, setCurrentTab, title) => {
    return (

        <Button
            onPress={() => setCurrentTab(title)}
            m={4}
            width={'50%'}
            size="sm"
            bg=
            {currentTab==title?'white': 'transparent'}
            _text={{
            color: currentTab == title
                ? 'red.500'
                : 'black'
        }}>
            {title}
        </Button>

    )
}
