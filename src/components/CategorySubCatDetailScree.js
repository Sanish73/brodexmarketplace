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
import CategoryLeftAnimation from './CategoryLeftAnimation';
import CategoryRightAnimation from './CategoryRightAnimation';

export function CategorySubCatDetailScree({route}) {

    const [currentTab,
        setCurrentTab] = useState("Home");
    const [showMenu,
        setShowMenu] = useState(false)

    // Animated properties
    const offsetvalue = useRef(new Animated.Value(0)).current;
    //scale initally must be zero
    const scalevalue = useRef(new Animated.Value(1)).current;
    const closebuttonoffsetvalue = useRef(new Animated.Value(0)).current;

    const subCatParams = {
        category_name,
        id,
        parent_id,
        image_link
    } = route.params

   

    return (
        <VStack>
            <CategoryLeftAnimation _currentTab={currentTab} _setCurrentTab={setCurrentTab}/>
            <CategoryRightAnimation _showMenu={showMenu} _setShowMenu={setShowMenu} _offsetvalue={offsetvalue}  _scalevalue={scalevalue} _closebuttonoffsetvalue={closebuttonoffsetvalue}/>

           
        </VStack>

    )
}
