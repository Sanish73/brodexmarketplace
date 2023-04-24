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

export default function CategoryLeftAnimation({_currentTab, _setCurrentTab, _offsetvalue, _showMenu, _setShowMenu}) {
    return (
        <VStack>
        {TabButton(_currentTab, _setCurrentTab, "Home", _offsetvalue, _showMenu, _setShowMenu)}
              
            <VStack h={'100%'} justifyContent={'center'} w={'60%'} bgColor={'red.100'}>
            {TabButton(_currentTab, _setCurrentTab, "Settings", _offsetvalue, _showMenu, _setShowMenu)}
            </VStack>
            <VStack w={'40%'} h={'100%'}></VStack>
        </VStack>
    )
}

const TabButton = (currentTab, setCurrentTab, title, _offsetvalue, _showMenu, _setShowMenu) => {
    return (
        <Button
            onPress={() => {
            setCurrentTab(title);
            Animated
                .timing(_offsetvalue, {
                toValue: _showMenu
                    ? 0
                    : 0,
                duration: 300,
                useNativeDriver: true
            })
                .start();
            _setShowMenu(!_showMenu);
        }}
            m={4}
            width={'50%'}
            size="sm"
            bg={currentTab === title
            ? 'green'
            : 'transparent'}
            _text={{
            color: currentTab == title
                ? 'red.500'
                : 'black'
        }}>
            {title}
        </Button>
    )
}
