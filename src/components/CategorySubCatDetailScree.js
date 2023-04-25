import React, {useState, useEffect, useRef} from 'react';
import {Box, VStack, Button, Text, ScrollView} from 'native-base';
import {Animated} from 'react-native';
import CategoryLeftAnimation from './CategoryLeftAnimation';
import CategoryRightAnimation from './CategoryRightAnimation';
import {useRoute} from '@react-navigation/native';

export function CategorySubCatDetailScree() {
    const [currentTab,
        setCurrentTab] = useState("Home");
    const [showMenu,
        setShowMenu] = useState(false)

    // Animated properties
    const offsetvalue = useRef(new Animated.Value(0)).current;
    //scale initally must be zero
    const scalevalue = useRef(new Animated.Value(1)).current;
    const closebuttonoffsetvalue = useRef(new Animated.Value(0)).current;

    const route = useRoute();
    const collectionOfSubcategoryList = route.params;

    return (
        <VStack >
            <VStack>
                <CategoryLeftAnimation
                    _offsetvalue={offsetvalue}
                    _showMenu={showMenu}
                    _setShowMenu={setShowMenu}
                    _currentTab={currentTab}
                    _scalevalue={scalevalue}
                    _setCurrentTab={setCurrentTab}/>
            </VStack>
            <VStack></VStack>
            <CategoryRightAnimation
                collectionOfSubcategoryList={collectionOfSubcategoryList}
                _showMenu={showMenu}
                _setShowMenu={setShowMenu}
                _offsetvalue={offsetvalue}
                _scalevalue={scalevalue}
                _closebuttonoffsetvalue={closebuttonoffsetvalue}/>

        </VStack>

    )
}
